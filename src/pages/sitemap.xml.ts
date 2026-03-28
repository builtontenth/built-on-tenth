import { getCollection } from 'astro:content';
import { existsSync, statSync } from 'node:fs';

const SITE = 'https://www.builtontenth.com';
const staticRoutes = [
  { path: '/', file: 'src/pages/index.astro' },
  { path: '/report', file: 'src/pages/report.astro' },
  { path: '/about', file: 'src/pages/about.astro' },
  { path: '/apply', file: 'src/pages/apply.astro' },
  { path: '/newsletter', file: 'src/pages/newsletter.astro' },
  { path: '/insights', file: 'src/pages/insights/index.astro' },
  { path: '/tools', file: 'src/pages/tools/index.astro' },
  { path: '/tools/phone-calculator', file: 'src/pages/tools/phone-calculator.astro' },
  { path: '/tools/estimate-follow-up', file: 'src/pages/tools/estimate-follow-up.astro' },
  { path: '/tools/agency-report-card', file: 'src/pages/tools/agency-report-card.astro' },
  { path: '/tools/revenue-per-tech', file: 'src/pages/tools/revenue-per-tech.astro' },
  { path: '/tools/marketing-calculator', file: 'src/pages/tools/marketing-calculator.astro' },
  { path: '/tools/gbp-scorecard', file: 'src/pages/tools/gbp-scorecard.astro' },
  { path: '/tools/website-audit', file: 'src/pages/tools/website-audit.astro' },
];

const xmlEscape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const getFileLastMod = (file: string) => {
  if (!existsSync(file)) return new Date().toISOString().slice(0, 10);
  return statSync(file).mtime.toISOString().slice(0, 10);
};

export async function GET() {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  const urls = [
    ...staticRoutes.map((route) => ({
      loc: `${SITE}${route.path}`,
      lastmod: getFileLastMod(route.file),
    })),
    ...posts.map((post) => ({
      loc: `${SITE}/insights/${post.slug}`,
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${xmlEscape(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
