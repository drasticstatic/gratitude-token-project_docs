const fs = require('fs');
const path = require('path');

const srcPath = path.join(
  'docs',
  'CHATGPT_ethereal_offering_docusaurus_packages',
  'chatGPT exports since migration',
  'Token economics review.json'
);

const raw = fs.readFileSync(srcPath, 'utf8');
const partsMatches = [...raw.matchAll(/"parts"\s*:\s*\[(.*?)\]/gs)];
const sections = [];
for (const m of partsMatches) {
  const inner = m[1];
  const strMatches = [...inner.matchAll(/"(?:[^"\\]|\\.)*"/g)];
  const texts = [];
  for (const sm of strMatches) {
    const s = sm[0];
    try {
      const parsed = JSON.parse(s);
      if (parsed && String(parsed).trim()) texts.push(String(parsed));
    } catch (e) {
      // skip malformed string
    }
  }
  if (texts.length) {
    sections.push(texts.join('\n\n'));
  }
}

const header = [
  '# Token Economics Review (ChatGPT export)',
  '',
  'Source: docs/CHATGPT_ethereal_offering_docusaurus_packages/chatGPT exports since migration/Token economics review.json',
  '',
  'Note: This is a lenient extraction of all `parts` strings from the ChatGPT export.'
].join('\n');

const body = sections.join('\n\n---\n\n');

fs.mkdirSync(path.join('docs', 'tokenomics'), { recursive: true });
fs.writeFileSync(
  path.join('docs', 'tokenomics', 'token-economics-review.md'),
  header + '\n\n' + body + '\n'
);

fs.mkdirSync(path.join('whitepaper4print', '05-tokenomics'), { recursive: true });
fs.writeFileSync(
  path.join('whitepaper4print', '05-tokenomics', 'token-economics-review.md'),
  header + '\n\n' + body + '\n'
);

console.log('Extracted sections:', sections.length);

