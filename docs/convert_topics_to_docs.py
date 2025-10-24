#!/usr/bin/env python3
"""
Convert blockchain development topic files from conversational format to documentation-style writeups.
Removes conversation markers and reformats as technical documentation.
"""

import re
import os
from pathlib import Path

def clean_conversation_format(content):
    """Remove conversation markers and reformat as documentation."""
    
    # Remove message headers
    content = re.sub(r'## 👤 User Message #\d+\n\n', '', content)
    content = re.sub(r'## 🤖 Assistant Response #\d+\n\n', '', content)
    content = re.sub(r'## 📝 Message #\d+ \(tool\)\n\n', '', content)
    
    # Remove timestamps
    content = re.sub(r'\*\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\*\n\n', '', content)
    
    # Remove separator lines
    content = re.sub(r'\n---\n\n', '\n\n', content)
    
    # Remove metadata sections
    content = re.sub(r"{'content_type':.*?}\n\n", '', content, flags=re.DOTALL)
    
    # Clean up multiple newlines
    content = re.sub(r'\n{3,}', '\n\n', content)
    
    return content

def extract_code_blocks(content):
    """Extract and format code blocks."""
    # Find all code blocks
    code_blocks = re.findall(r'```(\w+)?\n(.*?)```', content, re.DOTALL)
    return code_blocks

def structure_documentation(content, topic_title):
    """Structure content as proper documentation."""
    
    # Clean conversation format
    content = clean_conversation_format(content)
    
    # Split into sections based on content
    sections = []
    current_section = []
    
    lines = content.split('\n')
    for line in lines:
        if line.strip().startswith('###') or line.strip().startswith('##'):
            if current_section:
                sections.append('\n'.join(current_section))
                current_section = []
        current_section.append(line)
    
    if current_section:
        sections.append('\n'.join(current_section))
    
    # Build documentation
    doc = f"# {topic_title}\n\n"
    doc += "*Technical documentation extracted and organized from blockchain development conversations*\n\n"
    doc += "---\n\n"
    
    # Add table of contents
    doc += "## 📚 Table of Contents\n\n"
    
    # Add sections
    for i, section in enumerate(sections):
        if section.strip():
            doc += section + "\n\n"
    
    return doc

def process_topic_file(input_file, output_dir):
    """Process a single topic file."""
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract title from first line
    first_line = content.split('\n')[0]
    topic_title = first_line.replace('# ', '').strip()
    
    # Structure as documentation
    doc_content = structure_documentation(content, topic_title)
    
    # Create output filename
    output_file = output_dir / f"{input_file.stem}_documentation.md"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(doc_content)
    
    return output_file

def create_master_index(output_dir, processed_files):
    """Create master index of all documentation."""
    
    index_path = output_dir / "DOCUMENTATION_INDEX.md"
    
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write("# Blockchain Development Documentation\n\n")
        f.write("*Comprehensive technical documentation for Ethereal Offering blockchain development*\n\n")
        f.write("---\n\n")
        f.write("## 📖 Documentation Files\n\n")
        f.write("This documentation has been extracted from extensive blockchain development conversations ")
        f.write("and reformatted into structured technical writeups.\n\n")
        f.write("### How to Use This Documentation\n\n")
        f.write("1. **Start with the topic most relevant to your current work**\n")
        f.write("2. **Each file is self-contained** - you can read them in any order\n")
        f.write("3. **Code examples are included** where applicable\n")
        f.write("4. **Cross-references** link related topics\n\n")
        f.write("### Available Documentation\n\n")
        
        for filepath in sorted(processed_files):
            filename = filepath.name
            title = filename.replace('_documentation.md', '').replace('_', ' ').title()
            f.write(f"- **[{title}]({filename})**\n")
        
        f.write("\n---\n\n")
        f.write("## 🔍 Quick Reference\n\n")
        f.write("### For Smart Contract Development\n")
        f.write("- See: `smart_contracts_documentation.md`\n")
        f.write("- See: `testing_deployment_documentation.md`\n\n")
        f.write("### For Frontend/DApp Work\n")
        f.write("- See: `frontend_dapp_documentation.md`\n")
        f.write("- See: `nft_tokens_documentation.md`\n\n")
        f.write("### For Governance & Voting\n")
        f.write("- See: `voting_system_documentation.md`\n")
        f.write("- See: `tokenomics_documentation.md`\n\n")
        f.write("### For Architecture & Planning\n")
        f.write("- See: `architecture_documentation.md`\n")
        f.write("- See: `general_documentation.md`\n\n")
        f.write("---\n\n")
        f.write("## 📝 Extraction Details\n\n")
        f.write("**Source:** blockchain_development_assistance.md (19,470 lines, 696 messages)\n\n")
        f.write("**Extraction Method:** Keyword-based topic categorization\n\n")
        f.write("**Format:** Conversational content cleaned and restructured as technical documentation\n\n")
        f.write("**Where to Dig Deeper:** Original conversation files are available in the parent directory\n\n")
    
    return index_path

def main():
    # Paths
    input_dir = Path("CHATGPT_ethereal_offering_docusaurus_packages/Claude GPT export/chatGPT json exports/blockchain_dev_topics")
    output_dir = Path("CHATGPT_ethereal_offering_docusaurus_packages/Claude GPT export/chatGPT json exports/blockchain_dev_documentation")

    # Create output directory
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"📖 Converting topic files to documentation format...\n")
    
    processed_files = []
    
    # Process each topic file
    for topic_file in input_dir.glob("*.md"):
        if topic_file.name == "README.md":
            continue
        
        print(f"  Processing: {topic_file.name}")
        output_file = process_topic_file(topic_file, output_dir)
        processed_files.append(output_file)
        print(f"    ✅ Created: {output_file.name}")
    
    print(f"\n📋 Creating master index...")
    index_file = create_master_index(output_dir, processed_files)
    print(f"  ✅ Created: {index_file.name}")
    
    print(f"\n✅ Documentation conversion complete!")
    print(f"📁 Output directory: {output_dir}")
    print(f"📊 Files created: {len(processed_files) + 1}")

if __name__ == "__main__":
    main()

