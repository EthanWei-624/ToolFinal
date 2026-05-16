import React from 'react';
import { PAL } from './constants.js';
import { RoundLoaf, Baguette, Croissant, PineappleBun } from './bread.jsx';

// =============================================================================
// BAKER (Wang) standing figure - re-from earlier design, scaled
// =============================================================================

const Baker = ({ talking, mood = 'normal' }) => {
  // mood: 'normal' (loud), 'gave' (quiet, sad smile)
  return (
    <g shapeRendering="crispEdges">
      <ellipse cx="200" cy="218" rx="48" ry="4" fill="rgba(0,0,0,0.25)" />

      {/* body inside apron */}
      <rect x="160" y="165" width="80" height="60" fill="#a83a2e" />

      {/* apron */}
      <rect x="154" y="138" width="92" height="90" fill="#f0e2c4" />
      <rect x="154" y="138" width="92" height="3" fill="#c4b48a" />
      <rect x="186" y="122" width="4" height="18" fill="#8b5a3c" />
      <rect x="210" y="122" width="4" height="18" fill="#8b5a3c" />
      <rect x="150" y="180" width="100" height="6" fill="#8b5a3c" />
      <rect x="150" y="180" width="100" height="1" fill="#3a2418" />
      <rect x="150" y="185" width="100" height="1" fill="#3a2418" />
      <rect x="168" y="195" width="26" height="18" fill="#c4b48a" />
      <rect x="170" y="197" width="22" height="14" fill="#f0e2c4" />
      <rect x="178" y="188" width="8" height="4" fill="#b08560" />
      <rect x="176" y="188" width="2" height="4" fill="#5a3920" />
      <rect x="186" y="188" width="2" height="4" fill="#5a3920" />

      {/* shirt collar */}
      <rect x="186" y="138" width="28" height="4" fill="#a83a2e" />
      <rect x="190" y="142" width="20" height="6" fill="#6e2a1f" />
      <rect x="194" y="146" width="12" height="6" fill="#a83a2e" />

      {/* neck */}
      <rect x="190" y="122" width="20" height="16" fill="#d4a574" />
      <rect x="192" y="122" width="16" height="14" fill="#f4c896" />

      {/* head silhouette */}
      <rect x="168" y="60" width="64" height="70" fill="#4a2818" />
      <rect x="170" y="70" width="60" height="56" fill="#f4c896" />
      <rect x="170" y="70" width="4" height="56" fill="#d4a574" />
      <rect x="226" y="70" width="4" height="56" fill="#d4a574" />
      <rect x="170" y="120" width="60" height="6" fill="#d4a574" />

      {/* bandana */}
      <rect x="166" y="56" width="70" height="16" fill="#c14e3e" />
      <rect x="166" y="70" width="70" height="4" fill="#8b3a2e" />
      <rect x="170" y="50" width="60" height="8" fill="#c14e3e" />
      <rect x="170" y="50" width="60" height="2" fill="#8b3a2e" />
      <rect x="232" y="60" width="14" height="10" fill="#c14e3e" />
      <rect x="244" y="56" width="6" height="6" fill="#c14e3e" />
      <rect x="232" y="60" width="14" height="2" fill="#8b3a2e" />
      {[[176,58],[192,62],[208,56],[222,64],[180,66],[204,68],[218,60]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="4" height="4" fill="#f0e2c4" />
      ))}

      {/* sideburns */}
      <rect x="168" y="72" width="4" height="30" fill="#4a2818" />
      <rect x="228" y="72" width="4" height="30" fill="#4a2818" />
      <rect x="168" y="96" width="8" height="8"  fill="#4a2818" />
      <rect x="224" y="96" width="8" height="8"  fill="#4a2818" />

      {/* ears */}
      <rect x="168" y="88" width="4" height="10" fill="#d4a574" />
      <rect x="228" y="88" width="4" height="10" fill="#d4a574" />

      {/* eyebrows */}
      <rect x="180" y="86" width="14" height="4" fill="#4a2818" />
      <rect x="206" y="86" width="14" height="4" fill="#4a2818" />

      {/* eyes */}
      {mood === 'gave' ? (
        <>
          {/* slightly closed/sad eyes */}
          <rect x="184" y="96" width="6" height="3" fill="#1a1208" />
          <rect x="210" y="96" width="6" height="3" fill="#1a1208" />
        </>
      ) : (
        <>
          <rect x="184" y="94" width="6" height="6" fill="#f0e2c4" />
          <rect x="186" y="96" width="4" height="4" fill="#1a1208" />
          <rect x="210" y="94" width="6" height="6" fill="#f0e2c4" />
          <rect x="212" y="96" width="4" height="4" fill="#1a1208" />
        </>
      )}

      {/* nose */}
      <rect x="196" y="100" width="8" height="8" fill="#d4a574" />
      <rect x="198" y="102" width="4" height="6" fill="#f4c896" />
      <rect x="198" y="108" width="2" height="1" fill="#a8754a" />
      <rect x="202" y="108" width="2" height="1" fill="#a8754a" />

      {/* cheeks */}
      <rect x="176" y="106" width="6" height="4" fill="#e89080" />
      <rect x="218" y="106" width="6" height="4" fill="#e89080" />

      {/* mustache */}
      <rect x="180" y="114" width="40" height="4" fill="#4a2818" />
      <rect x="176" y="116" width="6" height="4" fill="#6a3828" />
      <rect x="218" y="116" width="6" height="4" fill="#6a3828" />
      <rect x="184" y="118" width="32" height="2" fill="#4a2818" />
      <rect x="190" y="110" width="20" height="4" fill="#4a2818" />

      {/* mouth */}
      {talking ? (
        <g>
          <rect x="192" y="120" width="16" height="6" fill="#7a2a1a" />
          <rect x="194" y="122" width="12" height="2" fill="#1a1208" />
        </g>
      ) : mood === 'gave' ? (
        <g>
          {/* small, gentle smile */}
          <rect x="194" y="121" width="12" height="1" fill="#7a2a1a" />
          <rect x="192" y="120" width="2" height="2" fill="#7a2a1a" />
          <rect x="206" y="120" width="2" height="2" fill="#7a2a1a" />
        </g>
      ) : (
        <g>
          <rect x="192" y="120" width="16" height="2" fill="#7a2a1a" />
          <rect x="194" y="122" width="12" height="2" fill="#7a2a1a" />
          <rect x="190" y="120" width="2" height="2" fill="#7a2a1a" />
          <rect x="208" y="120" width="2" height="2" fill="#7a2a1a" />
        </g>
      )}

      <rect x="186" y="124" width="28" height="2" fill="#d4a574" />

      {/* arms */}
      <rect x="238" y="170" width="24" height="14" fill="#a83a2e" />
      <rect x="238" y="170" width="24" height="2" fill="#6e2a1f" />
      <rect x="258" y="170" width="12" height="14" fill="#f4c896" />
      <rect x="258" y="170" width="12" height="2" fill="#d4a574" />
      <rect x="266" y="170" width="4" height="14" fill="#d4a574" />
      <rect x="260" y="178" width="1" height="4" fill="#d4a574" />
      <rect x="263" y="178" width="1" height="4" fill="#d4a574" />

      <rect x="132" y="170" width="30" height="14" fill="#a83a2e" />
      <rect x="132" y="170" width="30" height="2" fill="#6e2a1f" />
      <rect x="132" y="170" width="14" height="14" fill="#f4c896" />
      <rect x="132" y="170" width="14" height="2" fill="#d4a574" />
      <rect x="132" y="170" width="4" height="14" fill="#d4a574" />
    </g>
  );
};

// =============================================================================
// WANG'S BAKERY INTERIOR — full pixel scene
// =============================================================================

const WangScene = ({ talking, mood }) => {
  const W = 400, H = 240;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMid meet"
         style={{ display: 'block', imageRendering: 'pixelated' }}
         shapeRendering="crispEdges">
      {/* === Wall: warm tan with horizontal wood paneling === */}
      <rect x="0" y="0" width={W} height="180" fill="#f0d4a8" />
      <rect x="0" y="0" width={W} height="40" fill="#e8c89c" />
      <rect x="0" y="40" width={W} height="40" fill="#dcbc8c" />
      <rect x="0" y="80" width={W} height="40" fill="#d0b07c" />
      <rect x="0" y="120" width={W} height="60" fill="#c4a574" />
      {/* horizontal trim */}
      <rect x="0" y="0" width={W} height="6" fill="#5a3920" />
      <rect x="0" y="6" width={W} height="2" fill="#8b5a3c" />
      <rect x="0" y="8" width={W} height="2" fill="#b08560" />
      {/* vertical wood strips */}
      {[...Array(20)].map((_, i) => (
        <rect key={`v${i}`} x={i * 20} y="10" width="1" height="170" fill="#9a8060" opacity="0.5" />
      ))}
      {/* floor (front 60px) */}
      <rect x="0" y="180" width={W} height="60" fill="#8b5a3c" />
      <rect x="0" y="180" width={W} height="3" fill="#a06a4a" />
      {/* floor planks */}
      {[...Array(8)].map((_, i) => (
        <rect key={`fp${i}`} x={i * 50} y="183" width="2" height="57" fill="#5a3920" />
      ))}
      {/* floor highlights */}
      {[...Array(40)].map((_, i) => (
        <rect key={`fh${i}`} x={(i * 17) % 400} y={184 + (i % 4) * 14} width="1" height="1" fill="#a06a4a" opacity="0.5" />
      ))}

      {/* === SIGN above === */}
      <rect x="180" y="10" width="2" height="14" fill="#3a2418" />
      <rect x="218" y="10" width="2" height="14" fill="#3a2418" />
      <rect x="158" y="22" width="84" height="32" fill="#3a2418" />
      <rect x="160" y="24" width="80" height="28" fill="#5a3920" />
      <rect x="162" y="26" width="76" height="24" fill="#8b5a3c" />
      <rect x="162" y="26" width="76" height="2" fill="#b08560" />
      <text x="200" y="42" textAnchor="middle" fill="#f0e2c4"
            fontSize="9" fontFamily="'Press Start 2P', monospace"
            style={{ letterSpacing: '1px' }}>
        ★ BAKERY ★
      </text>
      <rect x="166" y="46" width="68" height="1" fill="#f0e2c4" opacity="0.5" />

      {/* === WALL DECORATIONS === */}
      {/* Hanging garlic / herbs */}
      <rect x="60" y="14" width="2" height="10" fill="#5a3920" />
      <ellipse cx="61" cy="28" rx="5" ry="6" fill="#e0e0a0" />
      <rect x="58" y="24" width="6" height="6" fill="#f0f0c0" />
      <rect x="58" y="30" width="6" height="2" fill="#c0c080" />
      {/* Hanging utensils */}
      <rect x="340" y="14" width="2" height="8" fill="#5a3920" />
      <rect x="338" y="22" width="6" height="14" fill="#888888" />
      <rect x="335" y="36" width="12" height="3" fill="#888888" />
      <rect x="335" y="36" width="12" height="1" fill="#aaaaaa" />
      <rect x="358" y="14" width="2" height="6" fill="#5a3920" />
      <ellipse cx="359" cy="28" rx="6" ry="8" fill="#aaaaaa" />
      <ellipse cx="359" cy="28" rx="4" ry="6" fill="#666666" />

      {/* Framed certificate - ironic */}
      <rect x="100" y="14" width="40" height="32" fill="#5a3920" />
      <rect x="102" y="16" width="36" height="28" fill="#f0e2c4" />
      <rect x="105" y="20" width="30" height="2" fill="#3a2418" />
      <rect x="105" y="25" width="30" height="1" fill="#3a2418" />
      <rect x="105" y="28" width="30" height="1" fill="#3a2418" />
      <rect x="115" y="34" width="10" height="6" fill="#c14e3e" />
      <rect x="115" y="34" width="10" height="1" fill="#8b3a2e" />

      {/* === LEFT: OVEN === */}
      <rect x="20" y="68" width="56" height="100" fill="#3a2418" />
      <rect x="22" y="70" width="52" height="6" fill="#5a3920" />
      <rect x="22" y="68" width="52" height="2" fill="#b08560" />
      {/* oven door */}
      <rect x="26" y="82" width="44" height="32" fill="#0a0604" />
      <rect x="28" y="84" width="40" height="28" fill="#c14e3e" />
      <rect x="28" y="84" width="40" height="3" fill="#8b3a2e" />
      {/* fire */}
      <g>
        <rect x="32" y="92" width="6" height="14" fill="#ff8844">
          <animate attributeName="height" values="14;18;12;16;14" dur="0.9s" repeatCount="indefinite" />
          <animate attributeName="y" values="92;88;94;90;92" dur="0.9s" repeatCount="indefinite" />
        </rect>
        <rect x="42" y="90" width="6" height="18" fill="#ffcc66">
          <animate attributeName="height" values="18;14;20;16;18" dur="1.1s" repeatCount="indefinite" />
          <animate attributeName="y" values="90;94;88;92;90" dur="1.1s" repeatCount="indefinite" />
        </rect>
        <rect x="52" y="93" width="6" height="14" fill="#ffe899">
          <animate attributeName="height" values="14;17;12;16;14" dur="0.7s" repeatCount="indefinite" />
          <animate attributeName="y" values="93;90;95;91;93" dur="0.7s" repeatCount="indefinite" />
        </rect>
      </g>
      <RoundLoaf x={36} y={104} w={14} h={5} />
      {/* knobs */}
      <rect x="26" y="120" width="8" height="8" fill="#b08560" />
      <rect x="27" y="121" width="6" height="6" fill="#3a2418" />
      <rect x="44" y="120" width="8" height="8" fill="#b08560" />
      <rect x="45" y="121" width="6" height="6" fill="#3a2418" />
      <rect x="62" y="120" width="8" height="8" fill="#b08560" />
      <rect x="63" y="121" width="6" height="6" fill="#3a2418" />
      {/* exhaust */}
      <rect x="22" y="134" width="52" height="10" fill="#5a3920" />
      <rect x="26" y="136" width="44" height="6" fill="#3a2418" />
      {/* bottom drawer */}
      <rect x="22" y="148" width="52" height="18" fill="#5a3920" />
      <rect x="38" y="156" width="20" height="3" fill="#b08560" />
      <rect x="39" y="157" width="18" height="1" fill="#3a2418" />

      {/* steam from oven */}
      <g opacity="0.5">
        <circle cx="44" cy="62" r="3" fill="#ffffff">
          <animate attributeName="cy" values="62;46;30" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="62" r="2" fill="#ffffff">
          <animate attributeName="cy" values="62;46;30" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0;0.5;0" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
      </g>

      {/* === RIGHT: BREAD SHELVES === */}
      <rect x="280" y="62" width="110" height="80" fill="#5a3920" />
      <rect x="280" y="62" width="110" height="2" fill="#b08560" />
      <rect x="280" y="140" width="110" height="2" fill="#3a2418" />
      <rect x="276" y="84" width="118" height="3" fill="#3a2418" />
      <rect x="276" y="84" width="118" height="1" fill="#b08560" />
      <rect x="276" y="108" width="118" height="3" fill="#3a2418" />
      <rect x="276" y="108" width="118" height="1" fill="#b08560" />
      <rect x="276" y="132" width="118" height="3" fill="#3a2418" />
      <rect x="276" y="132" width="118" height="1" fill="#b08560" />
      <rect x="282" y="64" width="106" height="20" fill="#3a2418" opacity="0.3" />
      <rect x="282" y="87" width="106" height="21" fill="#3a2418" opacity="0.3" />
      <rect x="282" y="111" width="106" height="21" fill="#3a2418" opacity="0.3" />

      <Baguette x={286} y={76} />
      <Baguette x={310} y={76} />
      <Baguette x={334} y={76} />
      <Baguette x={358} y={76} />

      <Croissant x={284} y={97} />
      <Croissant x={302} y={97} />
      <PineappleBun x={324} y={98} />
      <PineappleBun x={340} y={98} />
      <Croissant x={358} y={97} />
      <Croissant x={376} y={97} />

      <RoundLoaf x={286} y={122} w={10} h={8} />
      <RoundLoaf x={300} y={122} w={10} h={8} />
      <RoundLoaf x={314} y={122} w={10} h={8} />
      <PineappleBun x={332} y={122} />
      <RoundLoaf x={350} y={122} w={10} h={8} />
      <RoundLoaf x={364} y={122} w={10} h={8} />
      <PineappleBun x={380} y={122} />

      {/* price tags */}
      <rect x="296" y="138" width="14" height="6" fill="#f0e2c4" />
      <rect x="296" y="138" width="14" height="1" fill="#3a2418" />
      <text x="303" y="143" textAnchor="middle" fontSize="4" fontFamily="monospace" fill="#3a2418">$3</text>
      <rect x="358" y="138" width="14" height="6" fill="#f0e2c4" />
      <rect x="358" y="138" width="14" height="1" fill="#3a2418" />
      <text x="365" y="143" textAnchor="middle" fontSize="4" fontFamily="monospace" fill="#3a2418">$5</text>

      {/* "OPEN" sign hanging on shelf */}
      <rect x="290" y="56" width="20" height="8" fill="#c14e3e" />
      <rect x="290" y="56" width="20" height="1" fill="#8b3a2e" />
      <text x="300" y="62" textAnchor="middle" fontSize="5" fontFamily="'Press Start 2P', monospace" fill="#f0e2c4">OPEN</text>

      {/* spider web in corner — visual joke about no customers */}
      <g opacity="0.4">
        <line x1="370" y1="14" x2="380" y2="20" stroke="#cccccc" strokeWidth="0.5" />
        <line x1="380" y1="20" x2="385" y2="14" stroke="#cccccc" strokeWidth="0.5" />
        <line x1="370" y1="14" x2="385" y2="14" stroke="#cccccc" strokeWidth="0.5" />
        <line x1="375" y1="14" x2="378" y2="20" stroke="#cccccc" strokeWidth="0.5" />
      </g>

      {/* === WANG === */}
      <Baker talking={talking} mood={mood} />

      {/* === COUNTER === */}
      <rect x="0" y="195" width={W} height="45" fill="#8b5a3c" />
      <rect x="0" y="195" width={W} height="6" fill="#b08560" />
      <rect x="0" y="195" width={W} height="2" fill="#f0e2c4" opacity="0.4" />
      <rect x="0" y="201" width={W} height="2" fill="#3a2418" />
      {[...Array(8)].map((_, i) => (
        <rect key={`p${i}`} x={i * 50} y="203" width="2" height="37" fill="#3a2418" />
      ))}
      <rect x="0" y="236" width={W} height="4" fill="#3a2418" />

      {/* counter trays */}
      <rect x="20" y="186" width="60" height="12" fill="#3a2418" />
      <rect x="22" y="187" width="56" height="10" fill="#5a3920" />
      <rect x="22" y="187" width="56" height="1" fill="#b08560" />
      <PineappleBun x={26} y={187} />
      <PineappleBun x={42} y={187} />
      <PineappleBun x={58} y={187} />

      <rect x="280" y="186" width="80" height="12" fill="#3a2418" />
      <rect x="282" y="187" width="76" height="10" fill="#5a3920" />
      <rect x="282" y="187" width="76" height="1" fill="#b08560" />
      <Croissant x={286} y={188} />
      <Croissant x={304} y={188} />
      <Croissant x={322} y={188} />
      <Croissant x={340} y={188} />

      {/* register */}
      <rect x="106" y="170" width="28" height="28" fill="#3a2418" />
      <rect x="108" y="172" width="24" height="24" fill="#c14e3e" />
      <rect x="108" y="172" width="24" height="3" fill="#8b3a2e" />
      <rect x="110" y="178" width="20" height="8" fill="#3a2418" />
      <rect x="111" y="179" width="18" height="6" fill="#ffe899" />
      <text x="120" y="184" textAnchor="middle" fontSize="5" fontFamily="monospace" fill="#3a2418">$</text>
      <rect x="111" y="188" width="3" height="3" fill="#f0e2c4" />
      <rect x="116" y="188" width="3" height="3" fill="#f0e2c4" />
      <rect x="121" y="188" width="3" height="3" fill="#f0e2c4" />
      <rect x="126" y="188" width="3" height="3" fill="#f0e2c4" />

      {/* flower vase */}
      <rect x="376" y="186" width="10" height="12" fill="#c89858" />
      <rect x="377" y="186" width="8" height="11" fill="#ffd28a" />
      <rect x="378" y="180" width="2" height="6" fill="#4a2818" />
      <rect x="382" y="178" width="2" height="8" fill="#4a2818" />
      <rect x="377" y="176" width="3" height="4" fill="#c14e3e" />
      <rect x="381" y="174" width="3" height="4" fill="#c14e3e" />
      <rect x="378" y="178" width="1" height="1" fill="#ffcc66" />
      <rect x="382" y="176" width="1" height="1" fill="#ffcc66" />
    </svg>
  );
};

export { WangScene };
