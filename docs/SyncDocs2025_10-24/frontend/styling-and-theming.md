---
title: Styling and Theming Guide
description: Visual language, motion, and consistency across the UI.
---

Primary styles live at src/css/custom.css. Component-level styles are inlined in many interactive components for clarity and portability.

Visual themes we reinforce:

- Sacred gradient surfaces (blues for info, reds for danger, gold for sacred accents)
- Soft depth (box-shadow) with spiritual luminosity
- Motion as blessing: framer-motion micro-interactions on buttons and icons
- Accessibility: adequate contrast, clear affordances, readable sizes

Key components embodying the style:

- CustomConnectButton (gradient border, sparkle, hover/tap micro-motion)
- WalletConnectionBanner (fixed, glowing safety card)
- Icon set under docs/src/components/icons/* (consistent visual language)
- Effects under docs/src/components/effects/* (ambient, not distracting)

Practical patterns:

- Prefer CSS modules or inline styles for portability when components are destined for other apps
- Group shadows and transitions in small helper classes to keep consistency
- Use color tokens (CSS variables) for quick theme tweaks

Checklist before publishing:

- Hover states present and clear
- Focus states keyboard-visible
- Mobile/touch hit areas ≥ 44px
- Motion respects “reduce motion” preferences where feasible

