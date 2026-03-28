import { getCollection } from 'astro:content';

const SITE = 'https://www.builtontenth.com';
const BUILD_DATE = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  '/',
  '/report',
  '/about',
  '/apply',
  '/newsletter',
  '/insights',
  '/tools',
  '/tools/phone-calculator',
  '/tools/estimate-follow-up',
  '/tools/agency-report-card',
  '/tools/revenue-per-tech',
  '/tools/marketing-calculator',
  '/tools/gbp-scorecard',
  '/tools/website-audit',
];

const xmlEscape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export async function GET() {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  const urls = [
    ...staticRoutes.map((path) => ({
      loc: `${SITE}${path}`,
      lastmod: BUILD_DATE,
    })),
    ...posts.map((post) => ({
      loc: `${SITE}/insights/${post.slug}`,
      lastmod: post.data.pubDate.toISOString().slice(0, 10),
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
