/**
 * Remark plugin to remove ChatGPT conversation headers while keeping content.
 * - Removes headings like: "## 👤 User Message #6" and "## 🤖 Assistant Response #7"
 */

function textFrom(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value || '';
  if (Array.isArray(node.children)) return node.children.map(textFrom).join('');
  return '';
}

function isChatHeader(node) {
  if (!node || node.type !== 'heading') return false;
  const content = textFrom(node).trim();
  return (
    /^👤\s*User\s*Message\s*#\d+$/i.test(content) ||
    /^🤖\s*Assistant\s*Response\s*#\d+$/i.test(content)
  );
}

function stripHeadersDeep(node) {
  if (!node || !node.children) return;
  node.children = node.children.filter((child) => !isChatHeader(child));
  for (const child of node.children) stripHeadersDeep(child);
}

module.exports = function removeChatGPTHeaders() {
  return function transformer(tree) {
    stripHeadersDeep(tree);
  };
};

