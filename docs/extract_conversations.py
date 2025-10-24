#!/usr/bin/env python3
"""
Extract individual conversations from ChatGPT's JSON export
Created by Claude for Ethereal Offering project
"""

import json
import os
import sys

def extract_conversations(json_file, output_dir="extracted_conversations"):
    """Extract individual conversations from ChatGPT export JSON"""
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"📂 Reading {json_file}...")
    
    # Load the JSON
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"❌ Error: File '{json_file}' not found")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"❌ Error: Invalid JSON - {e}")
        sys.exit(1)
    
    # If data is a list of conversations
    if isinstance(data, list):
        conversations = data
    # If data has a conversations key
    elif isinstance(data, dict) and 'conversations' in data:
        conversations = data['conversations']
    else:
        conversations = [data]
    
    print(f"📊 Found {len(conversations)} conversation(s)")
    print(f"📁 Output directory: {output_dir}\n")
    
    # Extract each conversation
    for i, conv in enumerate(conversations):
        title = conv.get('title', f'conversation_{i}')
        
        # Clean filename - remove invalid characters
        safe_title = "".join(c for c in title if c.isalnum() or c in (' ', '-', '_')).strip()
        safe_title = safe_title.replace(' ', '_')
        
        # Limit filename length
        if len(safe_title) > 100:
            safe_title = safe_title[:100]
        
        # Save to individual JSON file
        output_file = os.path.join(output_dir, f"{safe_title}.json")
        
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(conv, f, indent=2, ensure_ascii=False)
            print(f"✅ Extracted: {safe_title}")
        except Exception as e:
            print(f"❌ Error extracting '{safe_title}': {e}")
    
    print(f"\n🎉 Total conversations extracted: {len(conversations)}")
    print(f"📂 Files saved to: {output_dir}/")

def main():
    """Main entry point"""
    if len(sys.argv) < 2:
        print("Usage: python extract_conversations.py <json_file> [output_dir]")
        print("\nExample:")
        print("  python extract_conversations.py conversations.json")
        print("  python extract_conversations.py blockchain_dev.json extracted_chats")
        sys.exit(1)
    
    json_file = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "extracted_conversations"
    
    extract_conversations(json_file, output_dir)

if __name__ == "__main__":
    main()

