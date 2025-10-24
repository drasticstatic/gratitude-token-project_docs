import React from 'react';

/**
 * PsilocybinMolecule - SVG representation of the psilocybin molecule (C12H17N2O4P)
 * Displays when no mushroom is currently growing (after harvest)
 * Features psychedelic color-changing animation
 */
const PsilocybinMolecule = ({ scale = 1, chargeFlash = false }) => {
  return (
    <svg
      width={280 * scale}
      height={280 * scale}
      viewBox="0 0 280 280"
      style={{
        display: 'block',
        filter: chargeFlash ? 'drop-shadow(0 0 16px rgba(59,130,246,0.9))' : 'none',
        transition: 'filter 280ms ease'
      }}
    >
      <defs>
        {/* Gradients for atoms */}
        <radialGradient id="carbonGlow">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </radialGradient>
        <radialGradient id="nitrogenGlow">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#3b82f6" />
        </radialGradient>
        <radialGradient id="oxygenGlow">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="100%" stopColor="#ef4444" />
        </radialGradient>
        <radialGradient id="phosphorusGlow">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
        <radialGradient id="hydrogenGlow">
          <stop offset="0%" stopColor="#e9d5ff" />
          <stop offset="100%" stopColor="#c084fc" />
        </radialGradient>
      </defs>

      {/* Accurate Psilocybin structure: 4-phosphoryloxy-N,N-dimethyltryptamine */}
      {/* Spread horizontally with longer branches */}
      <g transform="translate(140, 140)">
        {/* Bonds (draw first so they appear behind atoms) */}
        <g stroke="#a78bfa" strokeWidth="3" opacity="0.6">
          {/* Indole ring - Benzene part (6-membered ring) - wider */}
          <line x1="-90" y1="-30" x2="-65" y2="-50" />
          <line x1="-65" y1="-50" x2="-25" y2="-50" />
          <line x1="-25" y1="-50" x2="0" y2="-30" />
          <line x1="0" y1="-30" x2="0" y2="0" />
          <line x1="0" y1="0" x2="-25" y2="20" />
          <line x1="-25" y1="20" x2="-65" y2="20" />
          <line x1="-65" y1="20" x2="-90" y2="0" />
          <line x1="-90" y1="0" x2="-90" y2="-30" />

          {/* Pyrrole part (5-membered ring fused to benzene) */}
          <line x1="-65" y1="20" x2="-50" y2="0" />
          <line x1="-50" y1="0" x2="-25" y2="0" />
          <line x1="-25" y1="0" x2="-25" y2="20" />

          {/* Ethylamine chain from indole nitrogen - longer horizontal branch */}
          <line x1="-50" y1="0" x2="-50" y2="35" />
          <line x1="-50" y1="35" x2="-20" y2="50" />
          <line x1="-20" y1="50" x2="15" y2="50" />

          {/* N,N-dimethyl groups - spread out more */}
          <line x1="15" y1="50" x2="30" y2="70" />
          <line x1="15" y1="50" x2="40" y2="35" />

          {/* Phosphate group at position 4 - longer horizontal branch */}
          <line x1="0" y1="-30" x2="35" y2="-40" />
          <line x1="35" y1="-40" x2="75" y2="-40" />

          {/* Phosphorus with 4 oxygens - spread out */}
          <line x1="75" y1="-40" x2="75" y2="-65" />
          <line x1="75" y1="-40" x2="100" y2="-50" />
          <line x1="75" y1="-40" x2="100" y2="-30" />
          <line x1="75" y1="-40" x2="75" y2="-15" />

          {/* Pulsing animation for bonds */}
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke"
            values="#a78bfa;#ec4899;#fbbf24;#a78bfa"
            dur="8s"
            repeatCount="indefinite"
          />
        </g>

        {/* Carbon atoms (purple) - Benzene ring of indole - wider spread */}
        <circle cx="-90" cy="-30" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="-65" cy="-50" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.2s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="6.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="-25" cy="-50" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="7s" repeatCount="indefinite"/>
        </circle>
        <circle cx="0" cy="-30" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.6s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="7.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="0" cy="0" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="-25" cy="20" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="8.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="-65" cy="20" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="3.2s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="9s" repeatCount="indefinite"/>
        </circle>
        <circle cx="-90" cy="0" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="6.2s" repeatCount="indefinite"/>
        </circle>

        {/* Pyrrole carbons */}
        <circle cx="-25" cy="0" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.7s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="7.2s" repeatCount="indefinite"/>
        </circle>

        {/* Ethylamine chain carbons - longer branches */}
        <circle cx="-50" cy="35" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.9s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="8.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="-20" cy="50" r="7" fill="url(#carbonGlow)">
          <animate attributeName="r" values="7;9;7" dur="3.1s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="8.7s" repeatCount="indefinite"/>
        </circle>

        {/* Methyl carbons on nitrogen - spread out */}
        <circle cx="30" cy="70" r="6" fill="url(#carbonGlow)">
          <animate attributeName="r" values="6;8;6" dur="2.3s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="6.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="40" cy="35" r="6" fill="url(#carbonGlow)">
          <animate attributeName="r" values="6;8;6" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#carbonGlow);#a78bfa;#c084fc;url(#carbonGlow)" dur="7.3s" repeatCount="indefinite"/>
        </circle>

        {/* Oxygen bridge to phosphate - longer branch */}
        <circle cx="35" cy="-40" r="7" fill="url(#oxygenGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#oxygenGlow);#f87171;#fca5a5;url(#oxygenGlow)" dur="5s" repeatCount="indefinite"/>
        </circle>

        {/* Nitrogen atoms (blue) with gradient animation */}
        {/* Indole nitrogen */}
        <circle cx="-50" cy="0" r="8" fill="url(#nitrogenGlow)">
          <animate attributeName="r" values="8;11;8" dur="2.3s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#nitrogenGlow);#60a5fa;#93c5fd;url(#nitrogenGlow)" dur="5s" repeatCount="indefinite"/>
        </circle>
        {/* Dimethylamine nitrogen */}
        <circle cx="15" cy="50" r="8" fill="url(#nitrogenGlow)">
          <animate attributeName="r" values="8;11;8" dur="2.9s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#nitrogenGlow);#60a5fa;#93c5fd;url(#nitrogenGlow)" dur="5.5s" repeatCount="indefinite"/>
        </circle>

        {/* Phosphorus atom (golden) - larger with gradient animation */}
        <circle cx="75" cy="-40" r="11" fill="url(#phosphorusGlow)">
          <animate attributeName="r" values="11;14;11" dur="2.1s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#phosphorusGlow);#fcd34d;#fbbf24;url(#phosphorusGlow)" dur="4s" repeatCount="indefinite"/>
        </circle>

        {/* Oxygen atoms (red) - Phosphate group (4 oxygens total) with gradient animation */}
        <circle cx="75" cy="-65" r="7" fill="url(#oxygenGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#oxygenGlow);#f87171;#fca5a5;url(#oxygenGlow)" dur="5.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="100" cy="-50" r="7" fill="url(#oxygenGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.6s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#oxygenGlow);#f87171;#fca5a5;url(#oxygenGlow)" dur="5.4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="100" cy="-30" r="7" fill="url(#oxygenGlow)">
          <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#oxygenGlow);#f87171;#fca5a5;url(#oxygenGlow)" dur="5.6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="75" cy="-15" r="7" fill="url(#oxygenGlow)">
          <animate attributeName="r" values="7;9;7" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="url(#oxygenGlow);#f87171;#fca5a5;url(#oxygenGlow)" dur="5.8s" repeatCount="indefinite"/>
        </circle>

        {/* Hydrogen atoms (small, light purple) - representative selection spread out */}
        <circle cx="-105" cy="-40" r="4" fill="url(#hydrogenGlow)" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="-80" cy="30" r="4" fill="url(#hydrogenGlow)" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="10" cy="-40" r="4" fill="url(#hydrogenGlow)" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.9s" repeatCount="indefinite"/>
        </circle>
        <circle cx="-60" cy="50" r="4" fill="url(#hydrogenGlow)" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="40" cy="80" r="4" fill="url(#hydrogenGlow)" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="110" cy="-40" r="4" fill="url(#hydrogenGlow)" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.3s" repeatCount="indefinite"/>
        </circle>

        {/* Atom labels - updated positions */}
        <text x="-50" y="5" fontSize="10" fill="#0a3157" textAnchor="middle" opacity="0.9">N</text>
        <text x="15" y="55" fontSize="10" fill="#0a3157" textAnchor="middle" opacity="0.9">N</text>
        <text x="75" y="-35" fontSize="11" fill="#0a3157" textAnchor="middle" opacity="0.9">P</text>
        <text x="35" y="-35" fontSize="9" fill="#0a3157" textAnchor="middle" opacity="0.9">O</text>

        {/* Glow effect */}
        <circle cx="0" cy="-10" r="100" fill="none" stroke="rgba(167,139,250,0.2)" strokeWidth="2">
          <animate attributeName="r" values="100;120;100" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Label */}
      <text 
        x="140" 
        y="244" 
        fontSize="22" 
        fill="rgba(167,139,250,0.8)" 
        textAnchor="middle"
        fontFamily="monospace"
      >
        C₁₂H₁₇N₂O₄P
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
      </text>
    </svg>
  );
};

export default React.memo(PsilocybinMolecule);
