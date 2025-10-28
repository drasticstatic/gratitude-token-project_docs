---
sidebar_position: 3
title: On-Chain Mushroom Tracking (Helium + Solana)
---

# On-Chain Mushroom Tracking (Helium + Solana)

IoT sensors + decentralized wireless + high-throughput chain for transparent supply and impact.

## Goals

- Prove sustainable cultivation practices on-chain
- Track environmental conditions for quality and safety
- Enable impact-backed NFTs and revenue shares

## Components

- Sensors: Temp, humidity, CO2, light, motion
- Network: Helium IoT for low-power, wide-area connectivity
- Ingest: Helium Console → webhook → indexer
- Storage: IPFS for raw files; Solana accounts for state summaries
- Verification: Chainlink/attestors sign summaries

## Data Flow

1. Sensor emits reading every minute
2. Helium forwards payload to webhook
3. Indexer normalizes, signs, and stores to IPFS
4. Solana program updates state with CID and digest
5. Frontend displays batch history and KPIs

## Use Cases

- Proof-of-Practice NFTs tied to grow batches
- Quality badges for retreats and practitioners
- Research datasets for universities

## Privacy & Safety

- No geolocation without explicit consent
- Aggregate data by batch; redact sensitive fields
- Public summaries, private raw where necessary

## Milestones

- POC: Single farm, 3 sensors, weekly reports
- Pilot: 5 farms, automated summaries, NFT badges
- Scale: National network, marketplace integrations

> Mushroom tracking serves education and accountability, not surveillance.

