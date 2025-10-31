const fs = require('fs');
const path = require('path');

const out = path.join('whitepaper4print','ALL-IN-ONE.md');

const filesInOrder = [
  'whitepaper4print/README.md',
  'whitepaper4print/TABLE_OF_CONTENTS.md',
  'whitepaper4print/00-START-HERE/README.md',
  'whitepaper4print/01-modals/01-vision-ethereal-offering.md',
  'whitepaper4print/01-modals/02-purpose-and-values.md',
  'whitepaper4print/01-modals/03-living-offering.md',
  // principles
  ...fs.readdirSync('whitepaper4print/02-principles').filter(f=>f.endsWith('.md')).sort().map(f=>path.join('whitepaper4print/02-principles',f)),
  // whitepaper
  ...fs.readdirSync('whitepaper4print/03-whitepaper').filter(f=>f.endsWith('.md')).sort().map(f=>path.join('whitepaper4print/03-whitepaper',f)),
  'whitepaper4print/04-getting-started/overview.md',
  'whitepaper4print/05-tokenomics/overview.md',
  // include token economics review if present
  ...(['whitepaper4print/05-tokenomics/token-economics-review.md'].filter(f=>fs.existsSync(f))),
  'whitepaper4print/06-governance/overview.md',
  'whitepaper4print/07-architecture/overview.md',
  // research
  ...fs.readdirSync('whitepaper4print/08-research').filter(f=>f.endsWith('.md')).sort().map(f=>path.join('whitepaper4print/08-research',f)),
];

const header = [
  '# Ethereal Offering - Complete Whitepaper (All-in-One)',
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  'Note: Use your browser print or PDF printer.',
  '',
  '---',
  '',
].join('\n');

fs.writeFileSync(out, header);

for (const f of filesInOrder) {
  if (!fs.existsSync(f)) continue;
  const content = fs.readFileSync(f, 'utf8');
  fs.appendFileSync(out, content + '\n\n---\n\n');
}

console.log('Built', out);

