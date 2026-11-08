// Quality gate. Run after `npm run build` (the deploy workflow does this):
//   1. every internal link, image, script and #anchor in the built site resolves
//   2. every Word file is clean: neutral author, no comments, no tracked changes
//   3. no e-mail address outside the reserved .example domain (except the author's own, in site.config.mjs)
//   4. no leftover template markers in pages
//   5. optional: no term from a local, git-ignored deny-list (.privacy-denylist.txt)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const DIST = 'dist';
const BASE = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
const errors = [];
const warn = [];
const err = (m) => errors.push(m);

const walk = (dir, out = []) => {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    e.isDirectory() ? walk(p, out) : out.push(p);
  }
  return out;
};

// ---------- 1. links ----------
if (!fs.existsSync(DIST)) { console.error('dist/ not found. Run `npm run build` first.'); process.exit(1); }
const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
const idCache = new Map();
const idsOf = (file) => {
  if (!idCache.has(file)) idCache.set(file, new Set([...fs.readFileSync(file, 'utf8').matchAll(/\bid="([^"]+)"/g)].map((m) => m[1])));
  return idCache.get(file);
};
const toFile = (urlPath) => {
  const rel = decodeURIComponent(urlPath).replace(/^\//, '');
  const full = path.join(DIST, rel);
  if (urlPath.endsWith('/')) return path.join(full, 'index.html');
  if (fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  if (fs.existsSync(path.join(full, 'index.html'))) return path.join(full, 'index.html');
  return full;
};
let linkCount = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = '/' + path.relative(DIST, file).split(path.sep).join('/');
  const pageUrl = BASE.replace(/\/$/, '') + rel.replace(/index\.html$/, '');
  if (rel === '/404.html') continue;
  for (const m of html.matchAll(/\b(?:href|src)="([^"]*)"/g)) {
    const u = m[1];
    if (!u || /^(https?:|mailto:|tel:|data:|javascript:|\/\/)/.test(u)) continue;
    linkCount++;
    const [pathPart, hash] = u.split('#');
    let target;
    if (pathPart === '') target = file;
    else {
      const abs = pathPart.startsWith('/') ? pathPart : new URL(pathPart, 'http://x' + pageUrl).pathname;
      if (!abs.startsWith(BASE)) { err(`${rel}: link outside the site base: ${u}`); continue; }
      target = toFile('/' + abs.slice(BASE.length));
    }
    if (!fs.existsSync(target)) { err(`${rel}: broken link ${u}`); continue; }
    if (hash && target.endsWith('.html') && !idsOf(target).has(decodeURIComponent(hash))) err(`${rel}: missing anchor #${hash} in ${path.relative(DIST, target)}`);
  }
}

// ---------- 2. Word files ----------
const unzip = (f, part) => { try { return execFileSync('unzip', ['-p', f, part], { encoding: 'utf8', maxBuffer: 64e6, stdio: ['ignore', 'pipe', 'ignore'] }); } catch { return ''; } };
const listZip = (f) => execFileSync('unzip', ['-Z1', f], { encoding: 'utf8' }).split('\n').filter(Boolean);
const docs = walk('public/downloads').filter((f) => f.endsWith('.docx'));
const docText = new Map();
for (const f of docs) {
  const parts = listZip(f);
  if (parts.some((p) => /word\/comments/.test(p))) err(`${f}: contains comments`);
  const core = unzip(f, 'docProps/core.xml');
  const creator = (core.match(/<dc:creator>([^<]*)/) || [])[1] || '';
  const last = (core.match(/<cp:lastModifiedBy>([^<]*)/) || [])[1] || '';
  if (creator !== 'Privacy program case study') err(`${f}: unexpected author field "${creator}"`);
  if (last && last !== 'Privacy program case study') err(`${f}: unexpected lastModifiedBy "${last}"`);
  let all = '';
  for (const p of parts.filter((p) => p.endsWith('.xml'))) {
    const x = unzip(f, p);
    if (p === 'word/document.xml' && /<w:(ins|del) /.test(x)) err(`${f}: tracked changes present`);
    all += x.replace(/<[^>]+>/g, ' ');
  }
  docText.set(f, all);
}

// ---------- 3-5. text scans ----------
const textFiles = [...walk('src/content'), ...walk('public/data'), ...walk('public/downloads').filter((f) => f.endsWith('.csv')), ...walk('public/scripts'), 'README.md'].filter((f) => fs.existsSync(f));
const ownEmail = (fs.readFileSync('src/site.config.mjs', 'utf8').match(/email:\s*'([^']*)'/) || [])[1] || '';
// .example is the reserved fictional domain. dataprotection.ro is the supervisory authority's own public address, cited as the complaint contact.
const ALLOWED_EMAIL_SUFFIXES = ['.example', '@dataprotection.ro'];
const scan = (name, text) => {
  for (const m of text.matchAll(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g)) {
    const e = m[0].toLowerCase();
    if (!ALLOWED_EMAIL_SUFFIXES.some((x) => e.endsWith(x)) && !(ownEmail && e === ownEmail.toLowerCase())) err(`${name}: e-mail outside the allowed domains: ${m[0]}`);
  }
};
for (const f of textFiles) {
  const t = fs.readFileSync(f, 'utf8');
  scan(f, t);
  if (f.startsWith('src/content') && /\{\{|\[\[|<!--/.test(t.replace(/<!--[\s\S]*?-->/g, (c) => (f.endsWith('.mdx') ? '' : c)))) err(`${f}: leftover template marker or comment`);
}
for (const [f, t] of docText) scan(f, t);

const deny = '.privacy-denylist.txt';
if (fs.existsSync(deny)) {
  const terms = fs.readFileSync(deny, 'utf8').split('\n').map((s) => s.trim()).filter((s) => s && !s.startsWith('#'));
  const hay = [...textFiles.map((f) => [f, fs.readFileSync(f, 'utf8')]), ...docText, ...htmlFiles.map((f) => [f, fs.readFileSync(f, 'utf8')])];
  for (const [name, t] of hay) for (const term of terms) if (t.toLowerCase().includes(term.toLowerCase())) err(`${name}: contains a deny-listed term (line ${terms.indexOf(term) + 1} of ${deny})`);
  console.log(`deny-list: ${terms.length} terms checked`);
} else warn.push('No .privacy-denylist.txt found, so the personal deny-list scan was skipped. Create one (it is git-ignored) before making the repository public.');

console.log(`pages: ${htmlFiles.length}, internal references checked: ${linkCount}, Word files: ${docs.length}, text files: ${textFiles.length}`);
warn.forEach((w) => console.log('WARNING: ' + w));
if (errors.length) { console.error(`\n${errors.length} problem(s):`); errors.slice(0, 60).forEach((e) => console.error(' - ' + e)); process.exit(1); }
console.log('All checks passed.');
