import fs from 'fs';
import path from 'path';

const root = process.cwd();
const blogDir = path.join(root, 'src/content/blog');
const distInsightsDir = path.join(root, 'dist/insights');
const insightsIndexPath = path.join(root, 'dist/insights/index.html');
const sitemapPath = path.join(root, 'dist/sitemap.xml');

const sourceSlugs = fs
  .readdirSync(blogDir)
  .filter((file) => file.endsWith('.md'))
  .map((file) => file.replace(/\.md$/, ''))
  .sort();

const builtSlugs = fs
  .readdirSync(distInsightsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const insightsIndexHtml = fs.readFileSync(insightsIndexPath, 'utf8');
const insightsIndexSlugs = [
  ...new Set(
    [...insightsIndexHtml.matchAll(/href="\/insights\/([^"]+)"/g)]
      .map((match) => match[1])
      .filter((slug) => slug !== '${post.slug}')
  ),
].sort();

const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
const sitemapSlugs = [...new Set(
  [...sitemapXml.matchAll(/<loc>https:\/\/www\.builtontenth\.com\/insights\/([^<]+)<\/loc>/g)].map(
    (match) => match[1]
  )
)].sort();

const diff = (left, right) => left.filter((item) => !right.includes(item));

const checks = [
  ['built routes missing source articles', diff(sourceSlugs, builtSlugs)],
  ['insights index missing source articles', diff(sourceSlugs, insightsIndexSlugs)],
  ['sitemap missing source articles', diff(sourceSlugs, sitemapSlugs)],
];

const failures = checks.filter(([, items]) => items.length > 0);

if (failures.length > 0) {
  for (const [label, items] of failures) {
    console.error(`${label}:`);
    for (const item of items) console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log(`Content pipeline verified for ${sourceSlugs.length} article(s).`);
