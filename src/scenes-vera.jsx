import React from 'react';
import { PAL } from './constants.js';

// =============================================================================
// VERA — figure (40s, layered scarves, cheap jewelry)
// =============================================================================

const VeraFigure = ({ talking, mood }) => {
  return (
    <g shapeRendering="crispEdges">
      <ellipse cx="200" cy="220" rx="48" ry="3" fill="rgba(0,0,0,0.3)" />
      <polygon points="160,220 162,165 200,150 238,165 240,220" fill="#5a2a6a" />
      <polygon points="160,220 162,165 200,150 238,165 240,220" fill="#3a1a4a" opacity="0.4" />
      <rect x="180" y="170" width="2" height="50" fill="#3a1a4a" />
      <rect x="218" y="170" width="2" height="50" fill="#3a1a4a" />
      <rect x="160" y="218" width="80" height="2" fill="#e0c46a" />
      <rect x="160" y="218" width="80" height="1" fill="#fff8c8" />
      <circle cx="180" cy="195" r="2" fill="#e0c46a" opacity="0.7" />
      <circle cx="220" cy="195" r="2" fill="#e0c46a" opacity="0.7" />
      <rect x="199" y="180" width="2" height="2" fill="#e0c46a" opacity="0.7" />
      <polygon points="155,150 175,160 175,200 145,210 140,170" fill="#5a2a6a" />
      <polygon points="245,150 225,160 225,200 255,210 260,170" fill="#5a2a6a" />
      <polygon points="155,150 175,160 175,200 145,210 140,170" fill="#3a1a4a" opacity="0.3" />
      <rect x="148" y="200" width="14" height="14" fill="#e8b890" />
      <rect x="148" y="200" width="14" height="2" fill="#c89870" />
      <rect x="238" y="200" width="14" height="14" fill="#e8b890" />
      <rect x="238" y="200" width="14" height="2" fill="#c89870" />
      <rect x="150" y="206" width="2" height="2" fill="#e0c46a" />
      <rect x="156" y="208" width="2" height="2" fill="#a8d8f0" />
      <rect x="244" y="206" width="2" height="2" fill="#e0c46a" />
      <polygon points="160,150 200,148 240,150 244,170 156,170" fill="#e0c46a" />
      <polygon points="160,150 200,148 240,150 244,170 156,170" fill="#c8902a" opacity="0.4" />
      <rect x="160" y="167" width="84" height="3" fill="#a8702a" />
      {[170, 185, 200, 215, 230].map(x => (
        <rect key={x} x={x} y="156" width="3" height="3" fill="#c8902a" />
      ))}
      <rect x="190" y="124" width="20" height="20" fill="#c89870" />
      <rect x="192" y="124" width="16" height="18" fill="#e8b890" />
      <rect x="184" y="138" width="32" height="2" fill="#e0c46a" />
      <rect x="190" y="142" width="20" height="2" fill="#a8d8f0" />
      <rect x="196" y="146" width="8"  height="2" fill="#e84858" />
      <rect x="198" y="148" width="4" height="4" fill="#e0c46a" />
      <rect x="199" y="149" width="2" height="2" fill="#e84858" />
      <rect x="174" y="64" width="52" height="64" fill="#e8b890" />
      <rect x="174" y="64" width="4"  height="64" fill="#c89870" />
      <rect x="222" y="64" width="4"  height="64" fill="#c89870" />
      <rect x="174" y="120" width="52" height="8" fill="#c89870" />
      <polygon points="170,56 230,56 240,80 234,98 200,90 166,98 160,80" fill="#7a2a8a" />
      <polygon points="170,56 230,56 240,80 234,98 200,90 166,98 160,80" fill="#5a1a6a" opacity="0.3" />
      <rect x="170" y="56" width="60" height="3" fill="#e0c46a" />
      <circle cx="186" cy="74" r="3" fill="#e0c46a" />
      <rect x="200" y="68" width="2" height="2" fill="#e0c46a" />
      <rect x="214" y="76" width="2" height="2" fill="#e0c46a" />
      <rect x="195" y="80" width="1" height="1" fill="#fff8c8" />
      <rect x="220" y="68" width="1" height="1" fill="#fff8c8" />
      <rect x="172" y="92" width="6" height="20" fill="#3a2a1a" />
      <rect x="222" y="92" width="6" height="20" fill="#3a2a1a" />
      <rect x="158" y="76" width="6" height="14" fill="#7a2a8a" />
      <rect x="158" y="76" width="2" height="14" fill="#5a1a6a" />
      <circle cx="172" cy="98" r="5" fill="none" stroke="#e0c46a" strokeWidth="1" />
      <circle cx="228" cy="98" r="5" fill="none" stroke="#e0c46a" strokeWidth="1" />
      <rect x="180" y="92" width="14" height="2" fill="#3a2a1a" />
      <rect x="206" y="92" width="14" height="2" fill="#3a2a1a" />
      <rect x="190" y="91" width="4"  height="1" fill="#3a2a1a" />
      <rect x="206" y="91" width="4"  height="1" fill="#3a2a1a" />
      <rect x="180" y="94" width="14" height="3" fill="#7a2a8a" opacity="0.6" />
      <rect x="206" y="94" width="14" height="3" fill="#7a2a8a" opacity="0.6" />
      {mood === 'gave' ? (
        <>
          <rect x="183" y="98" width="8" height="6" fill="#f0e2c4" />
          <rect x="186" y="100" width="4" height="4" fill="#1a1208" />
          <rect x="187" y="100" width="2" height="1" fill="#5a8aba" />
          <rect x="209" y="98" width="8" height="6" fill="#f0e2c4" />
          <rect x="212" y="100" width="4" height="4" fill="#1a1208" />
          <rect x="213" y="100" width="2" height="1" fill="#5a8aba" />
        </>
      ) : (
        <>
          <rect x="184" y="98" width="6" height="5" fill="#f0e2c4" />
          <rect x="186" y="99" width="4" height="4" fill="#1a1208" />
          <rect x="187" y="100" width="2" height="2" fill="#3a4a5a" />
          <rect x="210" y="98" width="6" height="5" fill="#f0e2c4" />
          <rect x="212" y="99" width="4" height="4" fill="#1a1208" />
          <rect x="213" y="100" width="2" height="2" fill="#3a4a5a" />
        </>
      )}
      <rect x="196" y="104" width="8" height="10" fill="#c89870" />
      <rect x="198" y="106" width="4" height="8"  fill="#e8b890" />
      <rect x="178" y="110" width="6" height="4" fill="#e84858" opacity="0.5" />
      <rect x="216" y="110" width="6" height="4" fill="#e84858" opacity="0.5" />
      {talking ? (
        <g>
          <rect x="190" y="118" width="20" height="6" fill="#7a1a2a" />
          <rect x="192" y="120" width="16" height="2" fill="#1a1208" />
        </g>
      ) : mood === 'gave' ? (
        <g>
          <rect x="194" y="119" width="12" height="1" fill="#a83a4a" />
          <rect x="196" y="120" width="8"  height="2" fill="#1a1208" />
        </g>
      ) : (
        <g>
          <rect x="190" y="118" width="20" height="3" fill="#a83a4a" />
          <rect x="192" y="121" width="16" height="2" fill="#a83a4a" />
        </g>
      )}
    </g>
  );
};

const VeraScene = ({ talking, mood }) => {
  const W = 400, H = 240;
  const ballGlowing = mood === 'gave';
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMid meet"
         style={{ display: 'block', imageRendering: 'pixelated' }}
         shapeRendering="crispEdges">
      <rect x="0" y="0" width={W} height="180" fill="#3a1a4a" />
      <rect x="0" y="0" width={W} height="40" fill="#4a2a5a" />
      <rect x="0" y="80" width={W} height="60" fill="#2a0a3a" />
      <rect x="0" y="140" width={W} height="40" fill="#1a0028" />
      <polygon points="0,0 0,180 60,180 80,0" fill="#5a1a3a" />
      <polygon points="0,0 0,180 60,180 80,0" fill="#3a0a2a" opacity="0.4" />
      <rect x="0" y="0" width="80" height="6" fill="#e0c46a" />
      {[15, 30, 45, 60].map(x => (
        <rect key={x} x={x} y="6" width="2" height="174" fill="#1a0028" opacity="0.5" />
      ))}
      <rect x="76" y="0" width="2" height="20" fill="#e0c46a" />
      <rect x="74" y="20" width="6" height="3" fill="#e0c46a" />
      <polygon points="320,0 400,0 400,180 340,180" fill="#5a1a3a" />
      <polygon points="320,0 400,0 400,180 340,180" fill="#3a0a2a" opacity="0.4" />
      <rect x="320" y="0" width="80" height="6" fill="#e0c46a" />
      {[336, 354, 372, 388].map(x => (
        <rect key={x} x={x} y="6" width="2" height="174" fill="#1a0028" opacity="0.5" />
      ))}
      <rect x="0" y="180" width={W} height="60" fill="#5a1a3a" />
      <rect x="0" y="180" width={W} height="3"  fill="#7a2a4a" />
      <rect x="40" y="186" width="320" height="2" fill="#e0c46a" />
      <rect x="40" y="234" width="320" height="2" fill="#e0c46a" />
      <rect x="40" y="186" width="2" height="48" fill="#e0c46a" />
      <rect x="358" y="186" width="2" height="48" fill="#e0c46a" />
      {[80, 130, 180, 230, 280, 330].map(x => (
        <g key={x}>
          <rect x={x} y="200" width="6" height="6" fill="#e0c46a" opacity="0.4" />
          <rect x={x + 2} y="220" width="2" height="2" fill="#e0c46a" opacity="0.5" />
        </g>
      ))}
      {[[40, 14], [110, 22], [150, 10], [200, 18], [240, 12], [290, 20], [340, 14]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="2" height="2" fill="#fff8c8" />
          <rect x={x - 1} y={y + 1} width="4" height="0.5" fill="#fff8c8" opacity="0.6" />
          <rect x={x + 1} y={y - 1} width="0.5" height="4" fill="#fff8c8" opacity="0.6" />
        </g>
      ))}
      <circle cx="350" cy="40" r="10" fill="#fff8c8" opacity="0.8" />
      <circle cx="346" cy="38" r="8" fill="#3a1a4a" opacity="0.5" />
      <rect x="86" y="20" width="64" height="50" fill="#1a0028" />
      <rect x="88" y="22" width="60" height="46" fill="#3a1a4a" />
      <rect x="88" y="22" width="60" height="3"  fill="#e0c46a" />
      <text x="118" y="26" textAnchor="middle" fontSize="3"
            fontFamily="'Press Start 2P', monospace" fill="#e0c46a">PROPHECIES</text>
      {[[92, 30, -3], [108, 32, 2], [126, 30, -1], [94, 46, 4], [112, 48, -2], [130, 46, 3]].map(([x, y, rot], i) => (
        <g key={`pn${i}`} transform={`rotate(${rot}, ${x + 7}, ${y + 6})`}>
          <rect x={x} y={y} width="14" height="12" fill="#f0e2c4" />
          <rect x={x + 1} y={y + 2} width="12" height="1" fill="#3a2418" />
          <rect x={x + 1} y={y + 5} width="10" height="1" fill="#3a2418" />
          <rect x={x + 1} y={y + 8} width="11" height="1" fill="#3a2418" />
          <rect x={x + 6} y={y - 1} width="2" height="2" fill="#a83a2e" />
        </g>
      ))}
      <rect x="20" y="80" width="40" height="60" fill="#3a1a4a" />
      <rect x="22" y="82" width="36" height="56" fill="#e0c46a" />
      <rect x="24" y="84" width="32" height="52" fill="#5a4a6a" />
      <rect x="24" y="84" width="32" height="52" fill="#a8a8a0" opacity="0.5" />
      <rect x="24" y="84" width="32" height="20" fill="#888880" opacity="0.4" />
      <rect x="28" y="90" width="20" height="40" fill="#7a3a4a" opacity="0.3" />
      <ellipse cx="200" cy="200" rx="80" ry="14" fill="#3a1a2a" />
      <ellipse cx="200" cy="196" rx="80" ry="14" fill="#5a2a3a" />
      <ellipse cx="200" cy="194" rx="76" ry="12" fill="#7a3a4a" />
      <ellipse cx="200" cy="194" rx="76" ry="12" fill="#3a1a4a" opacity="0.3" />
      {[126, 138, 150, 162, 174, 186, 198, 210, 222, 234, 246, 258, 270].map(x => (
        <rect key={x} x={x} y="208" width="2" height="6" fill="#e0c46a" />
      ))}
      <rect x="138" y="172" width="3" height="20" fill="#f0e2c4" />
      <rect x="138" y="166" width="3" height="6"  fill="#5a3920" />
      <rect x="138" y="160" width="3" height="6" fill="#ffcc66">
        <animate attributeName="height" values="6;5;7;6" dur="0.7s" repeatCount="indefinite" />
        <animate attributeName="y" values="160;161;159;160" dur="0.7s" repeatCount="indefinite" />
      </rect>
      <rect x="139" y="158" width="1" height="3" fill="#fff8c8">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="0.7s" repeatCount="indefinite" />
      </rect>
      <rect x="258" y="172" width="3" height="20" fill="#f0e2c4" />
      <rect x="258" y="166" width="3" height="6"  fill="#5a3920" />
      <rect x="258" y="160" width="3" height="6" fill="#ffcc66">
        <animate attributeName="height" values="6;7;5;6" dur="0.8s" repeatCount="indefinite" />
        <animate attributeName="y" values="160;159;161;160" dur="0.8s" repeatCount="indefinite" />
      </rect>
      {[
        [156, 192, -8], [170, 196, 3], [216, 194, -2], [228, 198, 7], [242, 192, -4],
      ].map(([x, y, rot], i) => (
        <g key={`tc${i}`} transform={`rotate(${rot}, ${x + 6}, ${y + 8})`}>
          <rect x={x} y={y} width="12" height="18" fill="#1a0028" />
          <rect x={x + 1} y={y + 1} width="10" height="16" fill="#5a1a3a" />
          <rect x={x + 1} y={y + 1} width="10" height="2" fill="#e0c46a" />
          <rect x={x + 1} y={y + 15} width="10" height="2" fill="#e0c46a" />
          <rect x={x + 4} y={y + 5} width="4" height="8" fill="#e0c46a" opacity="0.5" />
        </g>
      ))}
      <ellipse cx="200" cy="194" rx="14" ry="6" fill="#1a1a2a" />
      <rect x="186" y="188" width="28" height="6" fill="#3a3a4a" />
      <rect x="186" y="188" width="28" height="2" fill="#888880" />
      <circle cx="200" cy="174" r="16" fill="#5a4a6a" opacity="0.7" />
      <circle cx="200" cy="174" r="14" fill="#3a2a4a" opacity="0.6" />
      <circle cx="200" cy="174" r="14" fill="#88c8e8" opacity="0.2" />
      <ellipse cx="194" cy="168" rx="5" ry="3" fill="#ffffff" opacity="0.4" />
      <ellipse cx="194" cy="168" rx="2" ry="1" fill="#ffffff" opacity="0.7" />
      {ballGlowing && (
        <>
          <circle cx="200" cy="174" r="18" fill="#88c8e8" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="174" r="13" fill="#fff8c8" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="174" r="6" fill="#ffffff" opacity="0.7">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="174" r="60" fill="#88c8e8" opacity="0.08" />
          <circle cx="200" cy="174" r="40" fill="#fff8c8" opacity="0.1" />
        </>
      )}
      <g shapeRendering="crispEdges">
        <ellipse cx="345" cy="220" rx="14" ry="3" fill="rgba(0,0,0,0.5)" />
        <ellipse cx="345" cy="206" rx="12" ry="10" fill="#1a1a1a" />
        <ellipse cx="345" cy="194" rx="8" ry="7" fill="#1a1a1a" />
        <polygon points="338,189 340,182 343,188" fill="#1a1a1a" />
        <polygon points="347,188 350,182 352,189" fill="#1a1a1a" />
        <polygon points="339,187 341,184 342,187" fill="#3a2a3a" />
        <polygon points="349,187 350,184 351,187" fill="#3a2a3a" />
        <rect x="341" y="193" width="2" height="2" fill="#ffcc66" />
        <rect x="347" y="193" width="2" height="2" fill="#ffcc66" />
        <rect x="342" y="193" width="1" height="2" fill="#1a1208" />
        <rect x="348" y="193" width="1" height="2" fill="#1a1208" />
        <rect x="344" y="197" width="2" height="1" fill="#a83a4a" />
        <ellipse cx="358" cy="216" rx="3" ry="6" fill="#1a1a1a" />
      </g>
      <rect x="78" y="170" width="20" height="14" fill="#d8d0b0" />
      <rect x="80" y="172" width="16" height="1" fill="#3a2418" />
      <rect x="80" y="174" width="14" height="1" fill="#3a2418" />
      <rect x="80" y="176" width="16" height="1" fill="#3a2418" />
      <rect x="80" y="178" width="12" height="1" fill="#3a2418" />
      <rect x="80" y="172" width="16" height="1" fill="#a83a2e" opacity="0.6" />
      <g transform="translate(0, -4)">
        <VeraFigure talking={talking} mood={mood} />
      </g>
      <g opacity="0.4">
        <circle cx="262" cy="180" r="2" fill="#a8a8c8">
          <animate attributeName="cy" values="180;160;140" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

export { VeraScene };
