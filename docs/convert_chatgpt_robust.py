#!/usr/bin/env python3
"""
Robust ChatGPT JSON to Markdown converter
Handles truncated, malformed, and large JSON files
Created for Ethereal Offering project
"""

import json
import sys
import os
import re
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

def extract_messages_from_mapping(mapping_dict):
    """Extract messages from ChatGPT mapping structure"""
    messages = []

    for msg_id, msg_data in mapping_dict.items():
        if isinstance(msg_data, dict):
            message = msg_data.get('message')
            if message and isinstance(message, dict):
                content = message.get('content')
                if content:
                    messages.append(message)

    # Sort by create_time (handle None values)
    messages.sort(key=lambda x: x.get('create_time') or 0)
    return messages

def extract_text_from_content(content):
    """Extract text from message content (handles various formats)"""
    if isinstance(content, str):
        return content
    
    if isinstance(content, dict):
        # Try parts array
        parts = content.get('parts', [])
        if parts:
            text_parts = []
            for part in parts:
                if isinstance(part, str):
                    text_parts.append(part)
                elif isinstance(part, dict) and 'text' in part:
                    text_parts.append(part['text'])
            return '\n'.join(text_parts)
        
        # Try direct text field
        if 'text' in content:
            return content['text']
    
    return str(content)

def format_message_md(message, index):
    """Format a single message as markdown"""
    author_role = message.get('author', {}).get('role', 'unknown')
    content = message.get('content', {})
    text = extract_text_from_content(content)
    
    # Skip empty messages
    if not text or text.strip() == '':
        return None
    
    # Format header based on role
    if author_role == 'user':
        header = f"## 👤 User Message #{index}\n\n"
    elif author_role == 'assistant':
        header = f"## 🤖 Assistant Response #{index}\n\n"
    elif author_role == 'system':
        header = f"## ⚙️ System Message #{index}\n\n"
    else:
        header = f"## 📝 Message #{index} ({author_role})\n\n"
    
    # Get timestamp
    create_time = message.get('create_time')
    timestamp = format_timestamp(create_time) if create_time else None
    
    metadata = ""
    if timestamp:
        metadata = f"*{timestamp}*\n\n"
    
    return f"{header}{metadata}{text}\n\n---\n\n"

def try_fix_json(content):
    """Attempt to fix common JSON issues"""
    print("🔧 Attempting to repair JSON...")
    
    # Remove trailing commas
    content = re.sub(r',(\s*[}\]])', r'\1', content)
    
    # If file ends abruptly, try to close it properly
    content = content.rstrip()
    
    # Count braces and brackets
    open_braces = content.count('{')
    close_braces = content.count('}')
    open_brackets = content.count('[')
    close_brackets = content.count(']')
    
    # Add missing closing characters
    if open_braces > close_braces:
        print(f"   Adding {open_braces - close_braces} closing braces")
        content += '}' * (open_braces - close_braces)
    
    if open_brackets > close_brackets:
        print(f"   Adding {open_brackets - close_brackets} closing brackets")
        content += ']' * (open_brackets - close_brackets)
    
    return content

def convert_conversation_robust(json_file, output_file=None):
    """Convert ChatGPT conversation JSON to Markdown (robust version)"""
    
    print(f"📂 Reading {json_file}...")
    
    # Read file
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ Error: File '{json_file}' not found")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Error reading file: {e}")
        sys.exit(1)
    
    print(f"📊 File size: {len(content):,} bytes")
    
    # Try to parse JSON
    data = None
    attempts = [
        ("Original", content),
        ("Fixed", try_fix_json(content))
    ]
    
    for attempt_name, attempt_content in attempts:
        try:
            print(f"🔍 Trying to parse ({attempt_name})...")
            data = json.loads(attempt_content)
            print(f"✅ Successfully parsed JSON ({attempt_name})")
            break
        except json.JSONDecodeError as e:
            print(f"⚠️  {attempt_name} parse failed: {e}")
            if attempt_name == attempts[-1][0]:
                print(f"\n❌ Could not parse JSON after all attempts")
                print(f"💡 The file may be severely corrupted or incomplete")
                print(f"   Error position: {e.pos}")
                sys.exit(1)
    
    # Extract conversation data
    if isinstance(data, list):
        conversation = data[0] if data else {}
    elif isinstance(data, dict):
        # Check if it's already a conversation object
        if 'mapping' in data:
            conversation = data
        # Or if it's wrapped in a conversations key
        elif 'conversations' in data:
            conversations = data['conversations']
            conversation = conversations[0] if conversations else {}
        else:
            conversation = data
    else:
        print("❌ Error: Unexpected JSON structure")
        sys.exit(1)
    
    # Get metadata
    title = conversation.get('title', 'Untitled Conversation')
    create_time = conversation.get('create_time')
    update_time = conversation.get('update_time')
    
    # Get messages
    mapping = conversation.get('mapping', {})
    messages = extract_messages_from_mapping(mapping)
    
    print(f"📝 Title: {title}")
    print(f"💬 Found {len(messages)} messages")
    
    # Generate output filename
    if not output_file:
        safe_title = "".join(c for c in title if c.isalnum() or c in (' ', '-', '_')).strip()
        safe_title = safe_title.replace(' ', '_')
        if len(safe_title) > 100:
            safe_title = safe_title[:100]
        output_file = f"{safe_title}.md"
    
    print(f"📁 Output: {output_file}")
    
    # Build markdown
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
    
    # Count message types
    user_count = sum(1 for m in messages if m.get('author', {}).get('role') == 'user')
    assistant_count = sum(1 for m in messages if m.get('author', {}).get('role') == 'assistant')
    
    markdown.append("## 📑 Table of Contents\n\n")
    markdown.append(f"- **User Messages:** {user_count}\n")
    markdown.append(f"- **Assistant Responses:** {assistant_count}\n")
    markdown.append(f"- **Total Exchanges:** {len(messages)}\n\n")
    markdown.append("---\n\n")
    
    # Messages
    markdown.append("## 💬 Conversation\n\n")
    
    message_count = 0
    for i, message in enumerate(messages, 1):
        formatted = format_message_md(message, i)
        if formatted:
            markdown.append(formatted)
            message_count += 1
            
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
    
    # Write file
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(''.join(markdown))
        print(f"\n✅ Successfully converted to {output_file}")
        print(f"📄 Output size: {os.path.getsize(output_file):,} bytes")
    except Exception as e:
        print(f"❌ Error writing file: {e}")
        sys.exit(1)

def main():
    if len(sys.argv) < 2:
        print("Usage: python convert_chatgpt_robust.py <json_file> [output_file]")
        print("\nThis is a robust converter that can handle truncated/malformed JSON files.")
        sys.exit(1)
    
    json_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None
    
    convert_conversation_robust(json_file, output_file)

if __name__ == "__main__":
    main()

