---
sidebar_position: 6
title: Search (Omnitrove) Details
---

# Search (Omnitrove) Details

Design notes for site-wide semantic search and knowledge retrieval.

## Goals

- Search across docs, blogs, roadmaps, and R&D
- Support synonyms and spiritual vocabulary
- Privacy by default; no external data collection

## Architecture Options

- Local index (Lunr/elasticlunr) for keyword search
- Vector index (client or edge) for semantic search
- Hybrid: keyword for speed, vectors for relevance

## UI/UX

- Navbar search input with instant results
- On home: "Agentic Search" box with coming-soon preview
- Result types: docs, blog, glossary, external links

## Roadmap

- Phase 1: Local keyword search plugin
- Phase 2: Client-side vector search (privacy-preserving)
- Phase 3: Agent answers with citations and filters

> See README for install steps once approved to add dependencies.

