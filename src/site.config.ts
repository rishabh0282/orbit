/**
 * site.config.ts — the ONE file to edit when reusing this template.
 * All text, links and section toggles live here. Colours/fonts live in src/styles/tokens.css.
 * The default content describes Orbit and can be customized for a new project.
 */

export type Feature = { icon: IconName; title: string; body: string };
export type IconName =
  | 'bolt' | 'shield' | 'plug' | 'server' | 'code' | 'chat' | 'layers' | 'globe' | 'heart' | 'star' | 'check' | 'github';

export const site = {
  name: 'Orbit',
  tagline: 'The open platform for building fast',
  description: 'Orbit is a self-hosted platform that gives developers full control, a clean architecture and zero lock-in.',
  url: 'https://rishabh0282.github.io/orbit',
  logo: '/logo.svg',
  ogImage: '/og.png',

  nav: {
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Compare', href: '#compare' },
      { label: 'Quickstart', href: '#quickstart' },
      { label: 'FAQ', href: '#faq' },
    ],
    // Optional GitHub button with live star count. Set repo to '' to hide.
    github: { repo: 'rishabh0282/orbit', showStars: true },
    cta: { label: 'Get started', href: '#quickstart' },
  },

  // Turn sections on/off and reorder them in src/pages/index.astro
  hero: {
    badge: { text: 'v1.0 released', link: { label: "What's new", href: '#' } },
    titleLines: ['Ship your', 'next idea', 'faster'],
    highlightLines: [1, 2], // indexes of titleLines drawn in the accent colour
    lead: 'A self-hosted platform for developers who want to own their stack — <strong>full control</strong>, a clean architecture and <strong>zero lock-in</strong>.',
    primary: { label: 'Get started', href: '#quickstart' },
    secondary: { label: 'View on GitHub', href: 'https://github.com/rishabh0282/orbit' },
    points: ['100% free', 'Open source', 'Self-hosted', 'Production ready'],
    // Icons orbiting the logo in the hero diagram (desktop only)
    orbit: ['server', 'shield', 'chat', 'layers', 'plug', 'globe'] as IconName[],
  },

  stats: [
    { value: 12000, suffix: '+', label: 'Developers' },
    { value: 99.9, suffix: '%', label: 'Uptime', decimals: 1 },
    { value: 150, suffix: '+', label: 'Contributors' },
    { value: 0, prefix: '$', label: 'License cost' },
  ],

  features: {
    eyebrow: 'Features',
    title: 'Everything you need, nothing you don’t',
    lead: 'A focused set of building blocks that stay out of your way.',
    items: [
      { icon: 'bolt', title: 'Fast by default', body: 'Static output and zero client JavaScript unless you opt in.' },
      { icon: 'plug', title: 'Pluggable', body: 'Swap the database, storage or cache without touching your app.' },
      { icon: 'shield', title: 'Secure', body: 'Sensible defaults, API keys, rate limiting and audit logs.' },
      { icon: 'server', title: 'Self-hosted', body: 'Run it on your own server. Your data never leaves it.' },
      { icon: 'code', title: 'Developer first', body: 'Typed SDKs, a clean REST API and webhooks for everything.' },
      { icon: 'layers', title: 'Scales with you', body: 'From a single container to a multi-node cluster.' },
    ] as Feature[],
  },

  compare: {
    eyebrow: 'Compare',
    title: 'How we stack up',
    columns: ['Orbit', 'Hosted SaaS', 'DIY'],
    highlight: 0,
    rows: [
      { label: 'Self-hosted', values: [true, false, true] },
      { label: 'Free forever', values: [true, false, true] },
      { label: 'Production ready', values: [true, true, false] },
      { label: 'No vendor lock-in', values: [true, false, true] },
      { label: 'Setup time', values: ['5 min', '5 min', 'Weeks'] },
    ],
  },

  quickstart: {
    eyebrow: 'Quickstart',
    title: 'Up and running in minutes',
    tabs: [
      { label: 'Docker', lang: 'bash', code: 'docker run -d -p 3000:3000 orbit/orbit:latest' },
      { label: 'npm', lang: 'bash', code: 'npm install -g orbit\norbit start' },
      { label: 'cURL', lang: 'bash', code: 'curl -X POST http://localhost:3000/api/hello \\\n  -H "X-API-Key: $KEY" \\\n  -d \'{"name":"world"}\'' },
    ],
    note: 'Open http://localhost:3000 once the container is running.',
  },

  tech: {
    eyebrow: 'Built with',
    title: 'Modern, boring, reliable tech',
    // name + optional logo path in /public/logos
    items: [
      { name: 'TypeScript' }, { name: 'Node.js' }, { name: 'PostgreSQL' },
      { name: 'Redis' }, { name: 'Docker' }, { name: 'React' },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered',
    items: [
      { q: 'Is it really free?', a: 'Yes. The software is open source and free to self-host.' },
      { q: 'Can I use it in production?', a: 'Yes. It ships with health checks, metrics and graceful shutdown.' },
      { q: 'How do I upgrade?', a: 'Pull the latest image and restart. Migrations run automatically.' },
      { q: 'Where do I get help?', a: 'Open an issue or join the community chat.' },
    ],
  },

  cta: {
    title: 'Ready to build?',
    lead: 'Start in five minutes. No account, no credit card.',
    primary: { label: 'Get started', href: '#quickstart' },
    secondary: { label: 'Read the docs', href: '#' },
  },

  footer: {
    columns: [
      { title: 'Product', links: [{ label: 'Features', href: '#features' }, { label: 'Quickstart', href: '#quickstart' }] },
      { title: 'Resources', links: [{ label: 'Docs', href: '#' }, { label: 'Changelog', href: '#' }] },
      { title: 'Community', links: [{ label: 'GitHub', href: 'https://github.com/rishabh0282/orbit' }, { label: 'Discord', href: '#' }] },
    ],
    copyright: `© ${new Date().getFullYear()} Orbit. MIT licensed.`,
  },
};
