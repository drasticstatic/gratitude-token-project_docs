---
sidebar_position: 3
---

# Components Catalog

A quick-reference catalog of major UI components available in this repo (docs/src/components). Use this to assemble pages quickly.

## Global/Layout

- App, LandingPage, Navigation, Footer, PageInfo, ImageGallery, InfoSection
- HeroNetwork, MycelialNetwork, MycelialTitle, NeighboringNetwork
- CursorWebbing, FlashlightCursor, ScrollIndicator, DynamicPagePadding, ShimmerBorder

## Wallet & Session

- CustomConnectButton: connect/disconnect UX
- WalletConnectionBanner: prompts network/wallet setup
- BrowserDetectionBanner, Web3BrowserModal: educate and assist users

## Domain Pages

- AltarBurn: offering burn flows and ceremony framing
- Swap: token swap UX
- Governance: proposals, voting, participation
- DailyShrooms: recurring engagement and streaks
- Donate: directed giving with transparency
- Contact: contact information and outreach gateways

## Domain Modals

- Treasury: TreasuryAnalyticsModal, TreasuryProposalModal
- Governance: GovernanceModal, DAOAccessModal, DAORestrictedModal, DAOWhitelistModal
- Tokens: ERC20SwapModal, GratitudeTokenModal, TokenomicsFAQ
- Admin & Safety: AdminPanelModal, EmergencyControlsModal, DenylistModal
- NFTs: NFTCollectionModal, CrossBreedingModal, CrossBreedingTokensModal, BreedingLabAccessModal, BreedingWhitelistModal, BreedingLabRestrictedModal
- Community: CommunityRewardsModal, ImagineModal, StillLostModal, AgentModal
- Contracts: ContractInfoModal, OracleModal, MultisigModal

## Effects

- AnimatedMushroomCursor, CursorTrail
- MistRainEffect, SporeEffect, TransactionSporeEffect, Sparkles
- BottomMushroomLayer, TrippyMushroom, ScatteredBlockchainCubes, MeshingGears

## Icons

- FlameIcon, MushroomIcon, MushroomClusterIcon, OfferingIcon, GovernanceIcon, GearIcon, BeakerIcon
- SimpleChurchIcon, SimpleWhitepaperIcon, SpiritualFoundationIcon, WhitepaperScrollIcon, ContactIcon, SwapIcon

## UI Primitives (suggested)

- Buttons: primary, ghost, destructive
- Cards: content, warning, action
- Inputs: text, number, token amount, address
- Badges & chips: status, network, token
- Progress: steps, spinners, skeletons

## Composition Patterns

- Page + Banner + InfoSection + Domain UI + Modals
- Info-first (what, why, how) → then action
- Always show wallet/network state nearby actionable controls

## Notes

- Many components are illustrative; adapt names/props for production
- Keep domain concerns inside domain components (e.g., DAO in DAO modals)
- Document props inline with JSDoc where possible

Need a new component? Create it under the appropriate folder and add a one-line description here so it remains discoverable.
