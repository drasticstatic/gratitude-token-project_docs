const fs=require('fs');
const path=require('path');
const srcPath=path.join('docs','CHATGPT_ethereal_offering_docusaurus_packages','chatGPT exports since migration','Token economics review.json');
const raw=fs.readFileSync(srcPath,'utf8');
const data=JSON.parse(raw);
const mapping=(data && data[0] && data[0].mapping) || {};
const chunks=[];
for(const id of Object.keys(mapping)){
  const msg=mapping[id].message;
  if(!msg) continue;
  const c=msg.content;
  if(c && c.content_type==='text' && Array.isArray(c.parts)){
    const text=c.parts.filter(p=>p && String(p).trim().length>0).join('\n\n');
    if(text) chunks.push(text);
  }
}
const header=[
  '# Token Economics Review (ChatGPT export)',
  '',
  'Source: docs/CHATGPT_ethereal_offering_docusaurus_packages/chatGPT exports since migration/Token economics review.json',
  '',
  'Note: This is an unedited export of all non-empty message parts, consolidated for reference.'
].join('\n');
const body=chunks.join('\n\n---\n\n');
fs.mkdirSync(path.join('docs','tokenomics'),{recursive:true});
fs.writeFileSync(path.join('docs','tokenomics','token-economics-review.md'), header+'\n\n'+body+'\n');
fs.mkdirSync(path.join('whitepaper4print','05-tokenomics'),{recursive:true});
fs.writeFileSync(path.join('whitepaper4print','05-tokenomics','token-economics-review.md'), header+'\n\n'+body+'\n');
console.log('Sections extracted:',chunks.length);
