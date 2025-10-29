/**
 * Remark plugin to transform ChatGPT conversation exports into meditative Q&A documentation.
 *
 * Transformations:
 * - Removes "Conversation Metadata", "Table of Contents", and "Conversation Analysis" sections
 * - Removes conversation headers (User Message #X, Assistant Response #X)
 * - Removes timestamps (both italic and plain formats)
 * - Transforms user questions into collapsible Q&A format
 * - Changes perspective from "your" to "our" for inclusive community feel
 * - Creates a meditative reading experience with expandable sections
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
    /^💬\s*Conversation$/i.test(content) ||
    /^Conversation\s*Analysis$/i.test(content) ||
    /^❓\s*Questions\s*Asked$/i.test(content)
  );
}

function isTimestamp(node) {
  if (!node || node.type !== 'paragraph') return false;
  const content = textFrom(node).trim();
  // Match timestamps like: *2025-10-16 15:15:37* or plain 2025-10-16 15:15:37
  return /^\*?\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\*?$/.test(content);
}

function isHorizontalRule(node) {
  return node && node.type === 'thematicBreak';
}

function isMetadataLine(node) {
  if (!node || node.type !== 'paragraph') return false;
  const content = textFrom(node).trim();
  // Match lines like "Source: ...", "Analyzed: ...", "Exchanges: ..."
  return /^(Source|Analyzed|Exchanges|Created|Last Updated|Total Messages|User Messages|Assistant Responses|Total Exchanges):/i.test(content);
}

function changePerspective(node) {
  if (!node) return;

  if (node.type === 'text' && node.value) {
    // Change "your" to "our" (case-insensitive, preserving case)
    node.value = node.value
      .replace(/\byour\b/g, 'our')
      .replace(/\bYour\b/g, 'Our')
      .replace(/\bYOUR\b/g, 'OUR')
      // Change "you" to "we" in appropriate contexts
      .replace(/\byou could\b/gi, 'we could')
      .replace(/\byou can\b/gi, 'we can')
      .replace(/\byou might\b/gi, 'we might')
      .replace(/\byou would\b/gi, 'we would')
      .replace(/\byou should\b/gi, 'we should');
  }

  if (node.children) {
    node.children.forEach(changePerspective);
  }
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

    // Remove metadata lines
    if (isMetadataLine(node)) {
      i++;
      continue;
    }

    // Remove horizontal rules (often used as separators in chat exports)
    if (isHorizontalRule(node)) {
      i++;
      continue;
    }

    // Change perspective from "your" to "our"
    changePerspective(node);

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

