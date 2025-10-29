/**
 * Remark plugin to transform ChatGPT conversation exports into FAQ-style documentation.
 *
 * Transformations:
 * - Removes "Conversation Metadata" and "Table of Contents" sections
 * - Removes conversation headers (User Message #X, Assistant Response #X)
 * - Removes timestamps
 * - Converts user messages to question-style headings
 * - Converts assistant responses to direct FAQ-style answers
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

function isMetadataSection(node) {
  if (!node || node.type !== 'heading') return false;
  const content = textFrom(node).trim();
  return (
    /^📋\s*Conversation\s*Metadata$/i.test(content) ||
    /^📑\s*Table\s*of\s*Contents$/i.test(content) ||
    /^💬\s*Conversation$/i.test(content)
  );
}

function isTimestamp(node) {
  if (!node || node.type !== 'paragraph') return false;
  const content = textFrom(node).trim();
  // Match timestamps like: *2025-10-16 15:15:37*
  return /^\*\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\*$/.test(content);
}

function isHorizontalRule(node) {
  return node && node.type === 'thematicBreak';
}

function transformConversationToFAQ(tree) {
  if (!tree || !tree.children) return;

  const newChildren = [];
  let i = 0;
  let inMetadataSection = false;
  let skipUntilNextHeading = false;

  while (i < tree.children.length) {
    const node = tree.children[i];

    // Check if we're entering a metadata section
    if (isMetadataSection(node)) {
      inMetadataSection = true;
      skipUntilNextHeading = true;
      i++;
      continue;
    }

    // If we hit a non-metadata heading, we're out of metadata sections
    if (node.type === 'heading' && !isMetadataSection(node) && !isChatHeader(node)) {
      inMetadataSection = false;
      skipUntilNextHeading = false;
    }

    // Skip content in metadata sections
    if (inMetadataSection || skipUntilNextHeading) {
      // Keep going until we hit a non-metadata heading
      if (node.type === 'heading' && !isMetadataSection(node) && !isChatHeader(node)) {
        skipUntilNextHeading = false;
        inMetadataSection = false;
        // Don't skip this heading, process it below
      } else {
        i++;
        continue;
      }
    }

    // Remove chat headers
    if (isChatHeader(node)) {
      i++;
      continue;
    }

    // Remove timestamps
    if (isTimestamp(node)) {
      i++;
      continue;
    }

    // Remove horizontal rules (often used as separators in chat exports)
    if (isHorizontalRule(node)) {
      i++;
      continue;
    }

    // Keep everything else
    newChildren.push(node);
    i++;
  }

  tree.children = newChildren;
}

module.exports = function removeChatGPTHeaders() {
  return function transformer(tree) {
    transformConversationToFAQ(tree);
  };
};

