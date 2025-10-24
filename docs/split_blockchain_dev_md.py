#!/usr/bin/env python3
"""
Split blockchain_development_assistance.md into topic-based chunks.
Analyzes content to identify major topics and creates separate markdown files.
"""

import re
import os
from pathlib import Path
from collections import defaultdict

def extract_topics_and_content(md_file):
    """Read the markdown file and extract topics with their content."""
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by message boundaries
    messages = re.split(r'(?=## 👤 User Message|## 🤖 Assistant Response)', content)
    
    # Extract header
    header = messages[0] if messages else ""
    
    # Topic categories based on keywords
    topics = {
        'smart_contracts': {
            'keywords': ['smart contract', 'solidity', 'erc20', 'erc721', 'openzeppelin', 'hardhat', 'truffle', 'remix'],
            'title': 'Smart Contract Development',
            'content': []
        },
        'voting_system': {
            'keywords': ['voting', 'vote', 'ballot', 'election', 'governance', 'dao', 'proposal'],
            'title': 'Voting System & Governance',
            'content': []
        },
        'privacy_zkp': {
            'keywords': ['privacy', 'anonymous', 'zero-knowledge', 'zkp', 'zk-snark', 'encryption', 'secret network'],
            'title': 'Privacy & Zero-Knowledge Proofs',
            'content': []
        },
        'nft_tokens': {
            'keywords': ['nft', 'erc721', 'erc1155', 'token', 'mint', 'metadata', 'ipfs'],
            'title': 'NFT & Token Development',
            'content': []
        },
        'frontend_dapp': {
            'keywords': ['react', 'web3', 'ethers', 'frontend', 'ui', 'dapp', 'wallet', 'metamask', 'rainbowkit'],
            'title': 'Frontend & DApp Integration',
            'content': []
        },
        'testing_deployment': {
            'keywords': ['test', 'deploy', 'hardhat test', 'mocha', 'chai', 'deployment', 'network', 'testnet'],
            'title': 'Testing & Deployment',
            'content': []
        },
        'tokenomics': {
            'keywords': ['tokenomics', 'economics', 'supply', 'distribution', 'burn', 'stake', 'reward'],
            'title': 'Tokenomics & Economics',
            'content': []
        },
        'architecture': {
            'keywords': ['architecture', 'design', 'structure', 'pattern', 'system design', 'planning'],
            'title': 'System Architecture & Design',
            'content': []
        },
        'psychedelic_policy': {
            'keywords': ['psychedelic', 'policy', 'reform', 'psilocybin', 'mushroom', 'decriminalization'],
            'title': 'Psychedelic Policy Reform',
            'content': []
        },
        'security_audit': {
            'keywords': ['security', 'audit', 'vulnerability', 'attack', 'reentrancy', 'overflow'],
            'title': 'Security & Auditing',
            'content': []
        },
        'general': {
            'keywords': [],
            'title': 'General Discussion',
            'content': []
        }
    }
    
    # Categorize each message
    for msg in messages[1:]:  # Skip header
        if not msg.strip():
            continue
            
        msg_lower = msg.lower()
        categorized = False
        
        # Check each topic
        for topic_key, topic_data in topics.items():
            if topic_key == 'general':
                continue
                
            # Check if message contains topic keywords
            keyword_count = sum(1 for keyword in topic_data['keywords'] if keyword in msg_lower)
            
            if keyword_count >= 2:  # At least 2 keywords to categorize
                topic_data['content'].append(msg)
                categorized = True
                break
        
        # If not categorized, add to general
        if not categorized:
            topics['general']['content'].append(msg)
    
    return header, topics

def create_topic_file(output_dir, topic_key, topic_data, header):
    """Create a markdown file for a specific topic."""
    if not topic_data['content']:
        return None
        
    filename = f"{topic_key}.md"
    filepath = output_dir / filename
    
    with open(filepath, 'w', encoding='utf-8') as f:
        # Write header
        f.write(f"# {topic_data['title']}\n\n")
        f.write(f"*Extracted from Blockchain Development Assistance conversation*\n\n")
        f.write(f"**Total Messages in this topic:** {len(topic_data['content'])}\n\n")
        f.write("---\n\n")
        
        # Write content
        for msg in topic_data['content']:
            f.write(msg)
            f.write("\n\n")
    
    return filepath

def main():
    # Paths
    input_file = Path("Docusaurus | Gitbook/CHATGPT_ethereal_offering_docusaurus_packages/Claude GPT export/chatGPT json exports/blockchain_development_assistance.md")
    output_dir = Path("Docusaurus | Gitbook/CHATGPT_ethereal_offering_docusaurus_packages/Claude GPT export/chatGPT json exports/blockchain_dev_topics")
    
    # Create output directory
    output_dir.mkdir(exist_ok=True)
    
    print(f"📖 Reading {input_file}...")
    header, topics = extract_topics_and_content(input_file)
    
    print(f"\n📊 Topic Distribution:")
    created_files = []
    
    for topic_key, topic_data in topics.items():
        msg_count = len(topic_data['content'])
        if msg_count > 0:
            print(f"  - {topic_data['title']}: {msg_count} messages")
            filepath = create_topic_file(output_dir, topic_key, topic_data, header)
            if filepath:
                created_files.append(filepath)
    
    print(f"\n✅ Created {len(created_files)} topic files in {output_dir}")
    print(f"\n📁 Files created:")
    for filepath in created_files:
        print(f"  - {filepath.name}")
    
    # Create index file
    index_path = output_dir / "README.md"
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write("# Blockchain Development Topics\n\n")
        f.write("*Organized extracts from the Blockchain Development Assistance conversation*\n\n")
        f.write("## 📚 Available Topics\n\n")
        
        for topic_key, topic_data in topics.items():
            msg_count = len(topic_data['content'])
            if msg_count > 0:
                f.write(f"### [{topic_data['title']}]({topic_key}.md)\n")
                f.write(f"- **Messages:** {msg_count}\n")
                f.write(f"- **Keywords:** {', '.join(topic_data['keywords'][:5])}\n\n")
    
    print(f"\n📋 Created index file: {index_path.name}")

if __name__ == "__main__":
    main()

