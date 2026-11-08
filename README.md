# Clinic X: a worked privacy programme for a small clinic

An end-to-end data-privacy case study. It follows one **fictional** clinic from a
single patient notice to a programme a three-person practice can actually run:
twelve modules with the documents, the registers that show they are used, and
blank templates to adapt.

> **Fictional example.** Clinic X and everyone in it are invented. This is an
> educational example, not legal advice. See [DISCLAIMER.md](DISCLAIMER.md).

**Live site:** `https://<your-username>.github.io/<repository-name>/` (after you deploy it, see below)

## What is in it

| # | Module | Question it answers |
|---|---|---|
| 1 | Clinic Profile | What are we, and what are our fixed facts? |
| 2 | Patient notice | What do we tell patients? |
| 3 | Record of processing (ROPA) | What do we process, why, and with whom? |
| 4 | Retention schedule | How long do we keep it? |
| 5 | Data subject rights | What do we do when someone asks? |
| 6 | Security incidents | What do we do when it goes wrong? |
| 7 | Security policy | How do we protect it? |
| 8 | Staff training | How do staff know what to do? |
| 9 | Providers and Art. 28 | Who else touches the data? |
| 10 | CCTV and legitimate interest | Are the cameras justified? |
| 11 | Employee notice | What do we tell staff? |
| 12 | DPIA process | When do we stop and assess? |
| 13 | Methodology | How it was built, what is verified, and the register of open items |
| 14 | Self-assessment | 36 questions to score your own practice, with the Clinic X baseline |

Every module has a worked Clinic X version and a blank template (Word, and
spreadsheets for registers). Each page says what was checked, with a date, and
what is still to be confirmed. All "to be confirmed" points are collected in one
register on the methodology page.

## Repository layout

```
src/content/docs/NN-name/index.md   the module pages (Markdown)
src/content/docs/*.mdx              home, About and Downloads pages
src/site.config.mjs                 author name and links (the one file to personalise)
public/downloads/NN-name/           Word documents and CSV registers
public/data/*.json                  the same registers as data (reusable)
public/scripts/                     table filters and the interactive self-assessment
scripts/check.mjs                   quality gate (links, Word files, e-mails, deny-list)
.github/workflows/deploy.yml        build, check and deploy to GitHub Pages
```

The site is built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build). Search is built in and works offline
once the page has loaded.

## Run it locally

Requires Node 22 or later.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run check      # run after a build
```

To test the sub-path that GitHub Pages uses:

```bash
BASE_PATH=/your-repo-name npm run build && BASE_PATH=/your-repo-name npm run preview
```

## Personalise it

Open `src/site.config.mjs` and fill in your name, role, LinkedIn address and a
contact address you are happy to publish. Anything left empty is not shown.
The About page and the methodology page say the documents were drafted with an
AI assistant and edited by the author; change that wording if it is not accurate
for you.

## Publish it safely

Create the repository **private first**, check it, then make it public.

1. On GitHub, create a new **private** repository. Do not add a README or licence there.
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<you>/<repository-name>.git
   git push -u origin main
   ```
3. Create your personal deny-list: copy `.privacy-denylist.example.txt` to
   `.privacy-denylist.txt` (it is git-ignored) and list every real name, company,
   address or number that must never appear. Then run:
   ```bash
   npm ci
   BASE_PATH=/<repository-name> npm run build && BASE_PATH=/<repository-name> npm run check
   ```
   It must end with "All checks passed" and "deny-list: N terms checked".
4. Look at the pushed files on GitHub once (the Word files too), and check the
   commit author name and e-mail shown on the commits are the ones you want public.
5. Make the repository public (Settings, General, Danger zone).
6. Turn on Pages: Settings, Pages, Build and deployment, Source: **GitHub Actions**.
   Then run the "Build, check and deploy" workflow from the Actions tab. The site
   appears at `https://<you>.github.io/<repository-name>/`.

The workflow builds the site, runs the same checks and deploys. A failed check
stops the deploy.

## Checks

`npm run check` fails the build if it finds:

- a broken internal link, image, script or `#anchor` in the built site;
- a Word file with comments, tracked changes or a personal author field;
- an e-mail address outside the reserved `.example` domain (the supervisory
  authority's public address is allowed);
- a leftover template marker in a page;
- any term from your private `.privacy-denylist.txt`.

## Licence

- Documents, page text, registers and data: [CC BY 4.0](LICENSE-CONTENT.md)
- Code: [MIT](LICENSE)

Please keep the disclaimer when you reuse the templates.
