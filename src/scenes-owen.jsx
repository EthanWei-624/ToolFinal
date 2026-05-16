import React from 'react';
import { PAL } from './constants.js';

// =============================================================================
// OWEN — figure (71, blue postal uniform, brass pin)
// =============================================================================

const OwenFigure = ({ talking, mood, pinDropped = false }) => {
  return (
    <g shapeRendering="crispEdges">
      <ellipse cx="200" cy="220" rx="42" ry="3" fill="rgba(0,0,0,0.3)" />
      <rect x="178" y="180" width="14" height="40" fill="#1a3858" />
      <rect x="208" y="180" width="14" height="40" fill="#1a3858" />
      <rect x="178" y="180" width="2"  height="40" fill="#0a1838" />
      <rect x="208" y="180" width="2"  height="40" fill="#0a1838" />
      <rect x="174" y="216" width="22" height="6" fill="#1a1208" />
      <rect x="206" y="216" width="22" height="6" fill="#1a1208" />
      <rect x="170" y="138" width="60" height="46" fill="#2a4868" />
      <rect x="170" y="138" width="60" height="3"  fill="#1a3858" />
      <rect x="170" y="180" width="60" height="3"  fill="#0a1838" />
      <rect x="199" y="141" width="2" height="42" fill="#1a3858" />
      <rect x="190" y="148" width="3" height="3" fill="#e0c46a" />
      <rect x="207" y="148" width="3" height="3" fill="#e0c46a" />
      <rect x="190" y="158" width="3" height="3" fill="#e0c46a" />
      <rect x="207" y="158" width="3" height="3" fill="#e0c46a" />
      <rect x="190" y="168" width="3" height="3" fill="#e0c46a" />
      <rect x="207" y="168" width="3" height="3" fill="#e0c46a" />
      <polygon points="170,138 200,148 196,170 184,170" fill="#1a3858" />
      <polygon points="230,138 200,148 204,170 216,170" fill="#1a3858" />
      <rect x="194" y="144" width="12" height="8" fill="#e8e8d8" />
      <polygon points="198,148 202,148 204,152 200,166 196,152" fill="#1a3858" />
      <rect x="158" y="170" width="14" height="1" fill="#e0c46a" />
      <rect x="158" y="174" width="14" height="1" fill="#e0c46a" />
      <rect x="228" y="170" width="14" height="1" fill="#e0c46a" />
      <rect x="228" y="174" width="14" height="1" fill="#e0c46a" />
      <rect x="156" y="148" width="16" height="42" fill="#2a4868" />
      <rect x="156" y="148" width="2"  height="42" fill="#1a3858" />
      <rect x="228" y="148" width="16" height="42" fill="#2a4868" />
      <rect x="228" y="148" width="2"  height="42" fill="#1a3858" />
      <rect x="156" y="184" width="16" height="3" fill="#1a3858" />
      <rect x="228" y="184" width="16" height="3" fill="#1a3858" />
      <rect x="156" y="186" width="16" height="1" fill="#e0c46a" />
      <rect x="228" y="186" width="16" height="1" fill="#e0c46a" />
      <rect x="156" y="190" width="16" height="10" fill="#e8c8a0" />
      <rect x="156" y="190" width="16" height="2" fill="#c8a880" />
      <rect x="228" y="190" width="16" height="10" fill="#e8c8a0" />
      <rect x="228" y="190" width="16" height="2" fill="#c8a880" />
      {!pinDropped && (
        <g>
          <rect x="184" y="142" width="6" height="6" fill="#e0c46a" />
          <rect x="184" y="142" width="6" height="1" fill="#fff8c8" />
          <rect x="185" y="143" width="4" height="4" fill="#c89020" />
          <rect x="186" y="144" width="2" height="2" fill="#e0c46a" />
        </g>
      )}
      <rect x="190" y="122" width="20" height="16" fill="#c8a880" />
      <rect x="192" y="122" width="16" height="14" fill="#e8c8a0" />
      <rect x="174" y="58" width="52" height="68" fill="#e8c8a0" />
      <rect x="174" y="58" width="4"  height="68" fill="#c8a880" />
      <rect x="222" y="58" width="4"  height="68" fill="#c8a880" />
      <rect x="174" y="118" width="52" height="8" fill="#c8a880" />
      <rect x="172" y="52" width="56" height="14" fill="#e0e0e0" />
      <rect x="172" y="52" width="56" height="3"  fill="#f0f0f0" />
      <rect x="172" y="52" width="3"  height="22" fill="#e0e0e0" />
      <rect x="225" y="52" width="3"  height="22" fill="#e0e0e0" />
      <rect x="195" y="56" width="2" height="10" fill="#a0a0a0" />
      <rect x="186" y="74" width="28" height="1" fill="#c8a880" opacity="0.7" />
      <rect x="184" y="80" width="32" height="1" fill="#c8a880" opacity="0.5" />
      <rect x="172" y="86" width="4" height="10" fill="#c8a880" />
      <rect x="224" y="86" width="4" height="10" fill="#c8a880" />
      <rect x="174" y="80" width="4" height="20" fill="#a0a0a0" />
      <rect x="222" y="80" width="4" height="20" fill="#a0a0a0" />
      <rect x="180" y="88" width="14" height="3" fill="#888880" />
      <rect x="206" y="88" width="14" height="3" fill="#888880" />
      <rect x="180" y="94" width="14" height="10" fill="none" stroke="#e0c46a" strokeWidth="1" />
      <rect x="206" y="94" width="14" height="10" fill="none" stroke="#e0c46a" strokeWidth="1" />
      <rect x="194" y="98" width="12" height="1" fill="#e0c46a" />
      {mood === 'gave' ? (
        <>
          <rect x="184" y="98" width="6" height="3" fill="#888880" />
          <rect x="186" y="98" width="3" height="2" fill="#1a1208" />
          <rect x="210" y="98" width="6" height="3" fill="#888880" />
          <rect x="212" y="98" width="3" height="2" fill="#1a1208" />
        </>
      ) : (
        <>
          <rect x="184" y="96" width="6" height="6" fill="#f0e2c4" />
          <rect x="186" y="98" width="4" height="4" fill="#1a1208" />
          <rect x="187" y="99" width="2" height="2" fill="#5a8aba" />
          <rect x="210" y="96" width="6" height="6" fill="#f0e2c4" />
          <rect x="212" y="98" width="4" height="4" fill="#1a1208" />
          <rect x="213" y="99" width="2" height="2" fill="#5a8aba" />
        </>
      )}
      <rect x="196" y="102" width="8" height="12" fill="#c8a880" />
      <rect x="198" y="104" width="4" height="10" fill="#e8c8a0" />
      <rect x="184" y="116" width="32" height="3" fill="#a0a0a0" />
      <rect x="186" y="115" width="28" height="1" fill="#888880" />
      {talking ? (
        <g>
          <rect x="194" y="121" width="12" height="4" fill="#7a4a4a" />
          <rect x="196" y="122" width="8"  height="2" fill="#1a1208" />
        </g>
      ) : mood === 'gave' ? (
        <g>
          <rect x="195" y="121" width="10" height="1" fill="#7a4a4a" />
          <rect x="197" y="122" width="6"  height="1" fill="#7a4a4a" />
        </g>
      ) : (
        <g>
          <rect x="194" y="121" width="12" height="1" fill="#7a4a4a" />
          <rect x="192" y="121" width="2"  height="1" fill="#7a4a4a" />
          <rect x="206" y="121" width="2"  height="1" fill="#7a4a4a" />
        </g>
      )}
    </g>
  );
};

const OwenScene = ({ talking, mood }) => {
  const W = 400, H = 240;
  const pinDropped = mood === 'gave';
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMid meet"
         style={{ display: 'block', imageRendering: 'pixelated' }}
         shapeRendering="crispEdges">
      <rect x="0" y="0" width={W} height="180" fill={pinDropped ? '#9a9aa8' : '#7a8898'} />
      <rect x="0" y="0" width={W} height="40" fill={pinDropped ? '#a8a8b8' : '#88a0b0'} />
      <rect x="0" y="100" width={W} height="40" fill={pinDropped ? '#8a8a98' : '#6a7888'} />
      <rect x="0" y="140" width={W} height="40" fill={pinDropped ? '#7a7a88' : '#5a6878'} />
      <rect x="0" y="0" width={W} height="3" fill="#e0c46a" />
      <rect x="0" y="3" width={W} height="2" fill="#a87a20" />
      <rect x="0" y="180" width={W} height="60" fill={pinDropped ? '#5a4a3a' : '#3a2a18'} />
      <rect x="0" y="180" width={W} height="3"  fill={pinDropped ? '#7a6a5a' : '#5a3a28'} />
      {[...Array(20)].map((_, i) => [...Array(3)].map((_, j) => (
        ((i + j) % 2 === 0) ? (
          <rect key={`t${i}-${j}`} x={i * 20} y={184 + j * 18} width="20" height="18"
                fill={pinDropped ? '#6a5a4a' : '#4a3828'} />
        ) : null
      )))}
      <polygon points="280,40 320,40 350,180 250,180" fill="#fff8c8" opacity={pinDropped ? 0.18 : 0.1} />
      <circle cx="290" cy="80" r="1" fill="#fff8c8" opacity="0.4">
        <animate attributeName="cy" values="80;160;80" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="310" cy="120" r="0.5" fill="#fff8c8" opacity="0.5">
        <animate attributeName="cy" values="120;180;120" dur="5s" repeatCount="indefinite" />
      </circle>
      <rect x="170" y="14" width="60" height="20" fill="#3a2418" />
      <rect x="172" y="16" width="56" height="16" fill="#e0c46a" />
      <rect x="172" y="16" width="56" height="2"  fill="#fff8c8" />
      <text x="200" y="24" textAnchor="middle" fontSize="6"
            fontFamily="'Press Start 2P', monospace" fill="#3a2418">POST</text>
      <text x="200" y="32" textAnchor="middle" fontSize="4"
            fontFamily="'Press Start 2P', monospace" fill="#3a2418">EST. 1923</text>
      <rect x="6" y="42" width="80" height="140" fill="#3a2418" />
      <rect x="6" y="42" width="80" height="3"  fill="#5a3a28" />
      {[...Array(8)].map((_, row) => [...Array(5)].map((_, col) => {
        const x = 10 + col * 15;
        const y = 48 + row * 16;
        return (
          <g key={`mb${row}-${col}`}>
            <rect x={x} y={y} width="13" height="14" fill="#1a0a04" />
            <rect x={x + 1} y={y + 1} width="11" height="12" fill="#e0c46a" />
            <rect x={x + 1} y={y + 1} width="11" height="2" fill="#fff8c8" />
            <rect x={x + 1} y={y + 11} width="11" height="2" fill="#a87a20" />
            <rect x={x + 4} y={y + 6} width="5" height="3" fill="#3a2418" />
            <rect x={x + 9} y={y + 6} width="2" height="3" fill="#3a2418" />
          </g>
        );
      }))}
      <rect x="290" y="60" width="100" height="120" fill="#3a2418" />
      <rect x="290" y="60" width="100" height="3"  fill="#5a3a28" />
      {[...Array(7)].map((_, row) => [...Array(4)].map((_, col) => {
        const x = 296 + col * 23;
        const y = 66 + row * 16;
        return (
          <g key={`ss${row}-${col}`}>
            <rect x={x} y={y} width="20" height="13" fill="#1a0a04" />
            <rect x={x + 1} y={y + 1} width="18" height="11" fill="#5a3920" />
            <text x={x + 10} y={y + 9} textAnchor="middle" fontSize="5"
                  fontFamily="'Press Start 2P', monospace" fill="#e0c46a">
              {String.fromCharCode(65 + ((row * 4 + col) % 26))}
            </text>
          </g>
        );
      }))}
      <rect x="0" y="180" width={W} height="6" fill="#5a3a28" />
      <rect x="0" y="180" width={W} height="2" fill="#8b6a3a" />
      <rect x="0" y="186" width={W} height="54" fill="#5a3a28" />
      {[...Array(8)].map((_, i) => (
        <rect key={`p${i}`} x={i * 50} y="186" width="2" height="54" fill="#3a2418" />
      ))}
      <rect x="0" y="236" width={W} height="4" fill="#3a2418" />
      <rect x="80" y="170" width="40" height="14" fill="#3a2418" />
      <rect x="82" y="172" width="36" height="10" fill="#888888" />
      <rect x="82" y="172" width="36" height="2"  fill="#cccccc" />
      <ellipse cx="100" cy="166" rx="10" ry="8" fill="#e0c46a" />
      <ellipse cx="100" cy="166" rx="8" ry="6" fill="#fff8c8" />
      <rect x="99" y="160" width="2" height="2" fill="#3a2418" />
      <rect x="106" y="166" width="2" height="1" fill="#3a2418" />
      <rect x="92" y="166" width="2" height="1" fill="#3a2418" />
      <rect x="99" y="161" width="2" height="6" fill="#a83a2e" />
      <rect x="260" y="174" width="36" height="10" fill="#3a2418" />
      <rect x="260" y="174" width="36" height="2"  fill="#5a3a28" />
      {[262, 270, 278, 286].map((x, i) => (
        <g key={`stamp${i}`}>
          <rect x={x} y="166" width="6" height="10" fill="#5a3920" />
          <rect x={x} y="166" width="6" height="2"  fill="#b08560" />
          <rect x={x + 1} y="174" width="4" height="2" fill="#1a0a04" />
        </g>
      ))}
      <rect x="138" y="166" width="50" height="14" fill="#f0e2c4" />
      <rect x="138" y="166" width="50" height="2"  fill="#c4b48a" />
      <text x="163" y="174" textAnchor="middle" fontSize="3.5"
            fontFamily="'Press Start 2P', monospace" fill="#3a2418">NEXT WINDOW</text>
      <text x="163" y="178" textAnchor="middle" fontSize="3"
            fontFamily="'Press Start 2P', monospace" fill="#3a2418">→</text>
      <rect x="334" y="20" width="50" height="40" fill="#e0c46a" />
      <rect x="336" y="22" width="46" height="36" fill="#3a2418" />
      <rect x="338" y="24" width="42" height="32" fill="#888880" />
      <rect x="346" y="34" width="8"  height="20" fill="#5a6878" />
      <rect x="346" y="30" width="8"  height="6"  fill="#c8a880" />
      <rect x="346" y="28" width="8"  height="2"  fill="#888880" />
      <rect x="364" y="34" width="8"  height="20" fill="#5a6878" />
      <rect x="364" y="30" width="8"  height="6"  fill="#c8a880" />
      <rect x="364" y="28" width="8"  height="2"  fill="#888880" />
      <rect x="350" y="36" width="1" height="1" fill="#e0c46a" />
      <rect x="368" y="36" width="1" height="1" fill="#e0c46a" />
      <circle cx="240" cy="50" r="22" fill="#3a2418" />
      <circle cx="240" cy="50" r="18" fill="#f0e2c4" />
      <circle cx="240" cy="50" r="18" fill="none" stroke="#e0c46a" strokeWidth="1" />
      <text x="240" y="38" textAnchor="middle" fontSize="3" fontFamily="'Press Start 2P', monospace" fill="#3a2418">12</text>
      <text x="254" y="53" textAnchor="middle" fontSize="3" fontFamily="'Press Start 2P', monospace" fill="#3a2418">3</text>
      <text x="240" y="65" textAnchor="middle" fontSize="3" fontFamily="'Press Start 2P', monospace" fill="#3a2418">6</text>
      <text x="226" y="53" textAnchor="middle" fontSize="3" fontFamily="'Press Start 2P', monospace" fill="#3a2418">9</text>
      <rect x="240" y="38" width="1" height="12" fill="#3a2418" />
      <rect x="240" y="49" width="14" height="1" fill="#3a2418" />
      <circle cx="240" cy="50" r="1.5" fill="#e0c46a" />
      <rect x="116" y="38" width="24" height="32" fill="#3a2418" />
      <rect x="118" y="40" width="20" height="28" fill="#5a3a28" />
      <ellipse cx="128" cy="48" rx="6" ry="3" fill="#1a0a04" />
      <rect x="124" y="56" width="2" height="3" fill="#e0c46a" />
      <rect x="130" y="56" width="2" height="3" fill="#e0c46a" />
      <rect x="120" y="62" width="16" height="4" fill="#1a0a04" />
      <rect x="128" y="70" width="2" height="20" fill="#3a2418" />
      <ellipse cx="129" cy="92" rx="5" ry="2" fill="#1a0a04" />
      <g transform="translate(0, 4)">
        <OwenFigure talking={talking} mood={mood} pinDropped={pinDropped} />
      </g>
      {pinDropped && (
        <g shapeRendering="crispEdges">
          <rect x="196" y="186" width="8" height="8" fill="#e0c46a">
            <animate attributeName="opacity" values="0.5;1;0.8;1" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="196" y="186" width="8" height="2" fill="#fff8c8" />
          <rect x="197" y="187" width="6" height="6" fill="#c89020" />
          <rect x="198" y="188" width="4" height="4" fill="#e0c46a" />
          <ellipse cx="200" cy="196" rx="6" ry="1" fill="rgba(0,0,0,0.3)" />
        </g>
      )}
      <rect x="40" y="192" width="24" height="16" fill="#f0e2c4" />
      <rect x="40" y="192" width="24" height="1" fill="#c4b48a" />
      <rect x="42" y="195" width="20" height="1" fill="#3a2418" />
      <rect x="42" y="198" width="18" height="1" fill="#3a2418" />
      <rect x="42" y="201" width="20" height="1" fill="#3a2418" />
      <rect x="42" y="204" width="14" height="1" fill="#3a2418" />
      <text x="52" y="194" textAnchor="middle" fontSize="2"
            fontFamily="'Press Start 2P', monospace" fill="#3a2418">FORM 47-B</text>
    </svg>
  );
};

export { OwenScene };
