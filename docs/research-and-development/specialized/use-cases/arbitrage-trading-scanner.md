---
sidebar_position: 1
title: Arbitrage Trading Scanner (Use Case)
---

# Arbitrage Trading Scanner (Use Case)

A practical application of agent automation for extracting price inefficiencies while funding the mission.

## Summary

- Agents scan DEXs/CEXs for cross-venue price gaps
- Execute low-risk market-neutral trades with strict limits
- Profits flow to Treasury DAO and LIGHT rewards pool

## Architecture

- Data: DEX subgraphs, CEX APIs, mempool stream
- Strategy: Triangular and cross-chain arbitrage
- Risk: Circuit breakers, position caps, kill switch
- Ops: Dry-run mode, logging, weekly audits

## Governance

- DAO votes on risk parameters (exposure, pairs, caps)
- Quarterly performance reviews; strategy changes via PIPs

## Link to Detailed Roadmap

See the technical plan in: /docs/research-and-development/roadmaps/arbitrage-scanner

## KPIs

- Sharpe ratio and max drawdown
- Realized PnL (monthly)
- Contribution to Treasury and LIGHT emissions

> The scanner is a tool, not a casino. Mission-first, risk-managed.

