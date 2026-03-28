const DEFAULT_HOST = 'www.builtontenth.com';
const DEFAULT_KEY = '5d8b0a6d1d6c4f43b97e7c6c0c2e0c11';
const DEFAULT_KEY_LOCATION = `https://${DEFAULT_HOST}/${DEFAULT_KEY}.txt`;

const args = process.argv.slice(2);
const host = process.env.INDEXNOW_HOST || DEFAULT_HOST;
const key = process.env.INDEXNOW_KEY || DEFAULT_KEY;
const keyLocation = process.env.INDEXNOW_KEY_LOCATION || `https://${host}/${key}.txt`;

const urls = args
  .filter((value) => value !== '--all')
  .map((value) => value.startsWith('http') ? value : `https://${host}${value.startsWith('/') ? value : `/${value}`}`);

if (args.includes('--all')) {
  urls.push(
    `https://${host}/`,
    `https://${host}/report`,
    `https://${host}/about`,
    `https://${host}/tools`,
    `https://${host}/insights`,
    `https://${host}/newsletter`,
  );
}

if (!urls.length) {
  console.error('Usage: npm run indexnow -- --all');
  console.error('   or: npm run indexnow -- /insights/my-article /tools/phone-calculator');
  process.exit(1);
}

const payload = {
  host,
  key,
  keyLocation,
  urlList: [...new Set(urls)],
};

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(payload),
});

if (!response.ok) {
  const text = await response.text();
  console.error(`IndexNow submission failed: ${response.status} ${response.statusText}`);
  console.error(text);
  process.exit(1);
}

console.log(`Submitted ${payload.urlList.length} URL(s) to IndexNow for ${host}.`);
