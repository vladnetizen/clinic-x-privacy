import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Set by the GitHub Actions workflow. Locally the site is served from '/'.
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || '/';
const repoUrl = process.env.REPO_URL || '';

const modules = [
  ['01-clinic-profile', '1 · Clinic Profile'],
  ['02-patient-notice', '2 · Patient notice'],
  ['03-ropa', '3 · Record of processing'],
  ['04-retention', '4 · Retention schedule'],
  ['05-data-subject-rights', '5 · Data subject rights'],
  ['06-incidents', '6 · Security incidents'],
  ['07-security-policy', '7 · Security policy'],
  ['08-training', '8 · Staff training'],
  ['09-providers', '9 · Providers and Art. 28'],
  ['10-cctv-lia', '10 · CCTV and legitimate interest'],
  ['11-employee-notice', '11 · Employee notice'],
  ['12-dpia', '12 · DPIA process'],
];

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: 'Clinic X privacy programme',
      description: 'A worked privacy programme for a fictional small clinic: twelve modules with documents, registers and blank templates. Educational example, not legal advice.',
      social: repoUrl ? [{ icon: 'github', label: 'Source on GitHub', href: repoUrl }] : [],
      customCss: ['./src/styles/custom.css'],
      components: { Footer: './src/components/Footer.astro' },
      head: [
        { tag: 'script', attrs: { src: `${base.replace(/\/$/, '')}/scripts/table-tools.js`, defer: true } },
        { tag: 'script', attrs: { src: `${base.replace(/\/$/, '')}/scripts/self-assess.js`, defer: true } },
      ],
      sidebar: [
        { label: 'Overview', link: '/' },
        { label: 'Modules', items: modules.map(([slug, label]) => ({ label, slug })) },
        { label: 'Method and tools', items: [
          { label: '13 · Methodology', slug: '13-methodology' },
          { label: '14 · Self-assessment', slug: '14-self-assessment' },
          { label: 'All downloads', slug: 'downloads' },
          { label: 'About', slug: 'about' },
        ] },
      ],
      pagination: true,
      lastUpdated: false,
    }),
  ],
});
