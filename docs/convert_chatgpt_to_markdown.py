#!/usr/bin/env python3
"""
Convert ChatGPT JSON export to comprehensive Markdown format
Handles large conversations like blockchain development assistance.json
Created for Ethereal Offering project
"""

import json
import sys
import os
from datetime import datetime

def format_timestamp(timestamp):
    """Convert Unix timestamp to readable date"""
    try:
        if timestamp:
            dt = datetime.fromtimestamp(timestamp)
            return dt.strftime('%Y-%m-%d %H:%M:%S')
    except:
        pass
    return "Unknown date"

def extract_text_from_parts(parts):
    """Extract text from message parts (handles different formats)"""
    if not parts:
        return ""
    
    text_parts = []
    for part in parts:
        if isinstance(part, dict):
            if 'text' in part:
                text_parts.append(part['text'])
            elif 'content' in part:
                text_parts.append(str(part['content']))
        elif isinstance(part, str):
            text_parts.append(part)
    
    return '\n'.join(text_parts)

def format_message(message, index):
    """Format a single message for markdown"""
    author_role = message.get('author', {}).get('role', 'unknown')
    
    # Get message content
    content = message.get('content', {})
    if isinstance(content, dict):
        parts = content.get('parts', [])
        text = extract_text_from_parts(parts)
    elif isinstance(content, str):
        text = content
    else:
        text = str(content)
    
    # Skip empty messages
    if not text or text.strip() == '':
        return None
    
    # Format based on role
    if author_role == 'user':
        header = f"## 👤 User Message #{index}\n\n"
    elif author_role == 'assistant':
        header = f"## 🤖 Assistant Response #{index}\n\n"
    elif author_role == 'system':
        header = f"## ⚙️ System Message #{index}\n\n"
    else:
        header = f"## 📝 Message #{index} ({author_role})\n\n"
    
    # Get metadata
    create_time = message.get('create_time')
    timestamp = format_timestamp(create_time) if create_time else None
    
    metadata = ""
    if timestamp:
        metadata = f"*{timestamp}*\n\n"
    
    return f"{header}{metadata}{text}\n\n---\n\n"

def convert_conversation_to_markdown(json_file, output_file=None):
    """Convert ChatGPT conversation JSON to Markdown"""
    
    print(f"📂 Reading {json_file}...")
    
    # Load JSON with error handling
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Try to load normally first
        try:
            data = json.loads(content)
        except json.JSONDecodeError as e:
            print(f"⚠️  Warning: JSON decode error at position {e.pos}")
            print(f"   Attempting to fix and retry...")

            # Try to fix common issues
            # Remove trailing commas
            content = content.replace(',]', ']').replace(',}', '}')

            # Try again
            try:
                data = json.loads(content)
                print("✅ Successfully loaded after fixing")
            except json.JSONDecodeError as e2:
                print(f"❌ Error: Could not parse JSON even after fixes")
                print(f"   Error: {e2}")
                print(f"\n💡 Tip: Try validating the JSON file with a JSON validator")
                print(f"   The file may be corrupted or incomplete")
                sys.exit(1)

    except FileNotFoundError:
        print(f"❌ Error: File '{json_file}' not found")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Error reading file: {e}")
        sys.exit(1)
    
    # Extract conversation data
    if isinstance(data, list):
        # Multiple conversations
        conversation = data[0] if data else {}
    elif isinstance(data, dict):
        conversation = data
    else:
        print("❌ Error: Unexpected JSON structure")
        sys.exit(1)
    
    # Get conversation metadata
    title = conversation.get('title', 'Untitled Conversation')
    create_time = conversation.get('create_time')
    update_time = conversation.get('update_time')
    
    # Get messages
    mapping = conversation.get('mapping', {})
    
    # Build message tree (ChatGPT uses a tree structure)
    messages = []
    for msg_id, msg_data in mapping.items():
        message = msg_data.get('message')
        if message and message.get('content'):
            messages.append(message)
    
    # Sort by create_time if available
    messages.sort(key=lambda x: x.get('create_time', 0))
    
    print(f"📊 Found {len(messages)} messages")
    print(f"📝 Title: {title}")
    
    # Generate output filename if not provided
    if not output_file:
        safe_title = "".join(c for c in title if c.isalnum() or c in (' ', '-', '_')).strip()
        safe_title = safe_title.replace(' ', '_')
        if len(safe_title) > 100:
            safe_title = safe_title[:100]
        output_file = f"{safe_title}.md"
    
    print(f"📁 Output file: {output_file}")
    
    # Build markdown content
    markdown = []
    
    # Header
    markdown.append(f"# {title}\n\n")
    
    # Metadata
    markdown.append("## 📋 Conversation Metadata\n\n")
    if create_time:
        markdown.append(f"**Created:** {format_timestamp(create_time)}\n\n")
    if update_time:
        markdown.append(f"**Last Updated:** {format_timestamp(update_time)}\n\n")
    markdown.append(f"**Total Messages:** {len(messages)}\n\n")
    markdown.append("---\n\n")
    
    # Table of Contents
    markdown.append("## 📑 Table of Contents\n\n")
    user_count = 0
    assistant_count = 0
    for i, msg in enumerate(messages, 1):
        role = msg.get('author', {}).get('role', 'unknown')
        if role == 'user':
            user_count += 1
        elif role == 'assistant':
            assistant_count += 1
    
    markdown.append(f"- **User Messages:** {user_count}\n")
    markdown.append(f"- **Assistant Responses:** {assistant_count}\n")
    markdown.append(f"- **Total Exchanges:** {len(messages)}\n\n")
    markdown.append("---\n\n")
    
    # Messages
    markdown.append("## 💬 Conversation\n\n")
    
    message_count = 0
    for i, message in enumerate(messages, 1):
        formatted = format_message(message, i)
        if formatted:
            markdown.append(formatted)
            message_count += 1
            
            # Progress indicator for large files
            if message_count % 10 == 0:
                print(f"  ✍️  Processed {message_count}/{len(messages)} messages...")
    
    # Footer
    markdown.append("\n---\n\n")
    markdown.append("## 📊 Summary\n\n")
    markdown.append(f"**Conversation:** {title}\n\n")
    markdown.append(f"**Messages Processed:** {message_count}\n\n")
    markdown.append(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
    markdown.append("---\n\n")
    markdown.append("*Converted from ChatGPT JSON export for Ethereal Offering project*\n")
    markdown.append("*🍄 ✨ ⛪*\n")
    
    # Write to file
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(''.join(markdown))
        print(f"\n✅ Successfully converted to {output_file}")
        print(f"📄 File size: {os.path.getsize(output_file):,} bytes")
    except Exception as e:
        print(f"❌ Error writing file: {e}")
        sys.exit(1)

def main():
    """Main entry point"""
    if len(sys.argv) < 2:
        print("Usage: python convert_chatgpt_to_markdown.py <json_file> [output_file]")
        print("\nExamples:")
        print("  python convert_chatgpt_to_markdown.py 'blockchain development assistance.json'")
        print("  python convert_chatgpt_to_markdown.py 'chat.json' 'output.md'")
        print("\nThis script converts ChatGPT JSON exports to readable Markdown format.")
        print("Perfect for large conversations that web-based tools can't handle.")
        sys.exit(1)
    
    json_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None
    
    convert_conversation_to_markdown(json_file, output_file)

if __name__ == "__main__":
    main()

