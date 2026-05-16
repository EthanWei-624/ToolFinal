import React from 'react';
import { PAL } from './constants.js';

// =============================================================================
// MARCEL — figure (60s, hunched, fountain pen, shabby suit)
// =============================================================================

const MarcelFigure = ({ talking, mood }) => {
  return (
    <g shapeRendering="crispEdges">
      <ellipse cx="200" cy="220" rx="42" ry="3" fill="rgba(0,0,0,0.3)" />
      <rect x="180" y="180" width="14" height="40" fill="#3a3a4a" />
      <rect x="206" y="180" width="14" height="40" fill="#3a3a4a" />
      <rect x="180" y="180" width="2"  height="40" fill="#1a1a2a" />
      <rect x="206" y="180" width="2"  height="40" fill="#1a1a2a" />
      <rect x="178" y="216" width="18" height="6" fill="#1a1208" />
      <rect x="204" y="216" width="18" height="6" fill="#1a1208" />
      <rect x="172" y="138" width="56" height="46" fill="#5a4a3a" />
      <rect x="172" y="138" width="56" height="3" fill="#3a2a1a" />
      <polygon points="172,138 200,148 192,170 180,170" fill="#3a2a1a" />
      <polygon points="228,138 200,148 208,170 220,170" fill="#3a2a1a" />
      <rect x="190" y="148" width="20" height="20" fill="#d8d0b8" />
      <rect x="180" y="150" width="6" height="4" fill="#a83a4a" />
      <rect x="180" y="150" width="6" height="1" fill="#7a2a3a" />
      <polygon points="194,148 200,152 206,148 208,154 200,156 192,154" fill="#3a2a1a" />
      <rect x="199" y="151" width="2" height="3" fill="#1a1208" />
      <rect x="158" y="148" width="14" height="40" fill="#5a4a3a" />
      <rect x="158" y="148" width="2"  height="40" fill="#3a2a1a" />
      <rect x="228" y="148" width="14" height="40" fill="#5a4a3a" />
      <rect x="228" y="148" width="2"  height="40" fill="#3a2a1a" />
      <rect x="156" y="184" width="12" height="10" fill="#e8c898" />
      <rect x="156" y="184" width="12" height="2" fill="#c8a878" />
      <rect x="232" y="184" width="12" height="10" fill="#e8c898" />
      <rect x="232" y="184" width="12" height="2" fill="#c8a878" />
      <rect x="244" y="186" width="14" height="2" fill="#1a1208" />
      <rect x="258" y="186" width="3"  height="2" fill="#e0c46a" />
      <rect x="190" y="122" width="20" height="16" fill="#c8a878" />
      <rect x="192" y="122" width="16" height="14" fill="#e8c898" />
      <rect x="174" y="60" width="52" height="68" fill="#e8c898" />
      <rect x="174" y="60" width="4"  height="68" fill="#c8a878" />
      <rect x="222" y="60" width="4"  height="68" fill="#c8a878" />
      <rect x="174" y="120" width="52" height="8" fill="#c8a878" />
      <rect x="172" y="58" width="56" height="14" fill="#888880" />
      <rect x="172" y="58" width="56" height="3"  fill="#a8a8a0" />
      <rect x="172" y="58" width="3"  height="20" fill="#888880" />
      <rect x="225" y="58" width="3"  height="20" fill="#888880" />
      <rect x="186" y="62" width="28" height="6" fill="#e8c898" />
      <rect x="186" y="62" width="28" height="2" fill="#c8a878" />
      <rect x="172" y="88" width="4" height="10" fill="#c8a878" />
      <rect x="224" y="88" width="4" height="10" fill="#c8a878" />
      <rect x="180" y="86" width="14" height="2" fill="#888880" />
      <rect x="206" y="86" width="14" height="2" fill="#888880" />
      {mood === 'gave' ? (
        <>
          <rect x="184" y="96" width="6" height="2" fill="#888880" />
          <rect x="186" y="96" width="3" height="2" fill="#1a1208" />
          <rect x="210" y="96" width="6" height="2" fill="#888880" />
          <rect x="212" y="96" width="3" height="2" fill="#1a1208" />
        </>
      ) : (
        <>
          <rect x="184" y="94" width="6" height="6" fill="#f0e2c4" />
          <rect x="186" y="96" width="4" height="4" fill="#1a1208" />
          <rect x="210" y="94" width="6" height="6" fill="#f0e2c4" />
          <rect x="212" y="96" width="4" height="4" fill="#1a1208" />
        </>
      )}
      <rect x="180" y="92" width="14" height="10" fill="none" stroke="#3a2a1a" strokeWidth="1" />
      <rect x="206" y="92" width="14" height="10" fill="none" stroke="#3a2a1a" strokeWidth="1" />
      <rect x="194" y="96" width="12" height="1" fill="#3a2a1a" />
      <rect x="196" y="100" width="8"  height="10" fill="#c8a878" />
      <rect x="198" y="102" width="4"  height="8"  fill="#e8c898" />
      <rect x="198" y="110" width="2"  height="1"  fill="#a88858" />
      <rect x="202" y="110" width="2"  height="1"  fill="#a88858" />
      <rect x="186" y="114" width="28" height="3" fill="#888880" />
      {talking ? (
        <g>
          <rect x="194" y="120" width="12" height="4" fill="#7a4a4a" />
          <rect x="196" y="121" width="8"  height="2" fill="#1a1208" />
        </g>
      ) : mood === 'gave' ? (
        <g>
          <rect x="195" y="121" width="10" height="1" fill="#7a4a4a" />
          <rect x="197" y="120" width="6"  height="1" fill="#7a4a4a" />
        </g>
      ) : (
        <g>
          <rect x="194" y="120" width="12" height="1" fill="#7a4a4a" />
          <rect x="192" y="121" width="3"  height="1" fill="#7a4a4a" />
          <rect x="205" y="121" width="3"  height="1" fill="#7a4a4a" />
        </g>
      )}
    </g>
  );
};

const MarcelScene = ({ talking, mood }) => {
  const W = 400, H = 240;
  const lampOn = mood === 'gave';
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMid meet"
         style={{ display: 'block', imageRendering: 'pixelated' }}
         shapeRendering="crispEdges">
      <rect x="0" y="0" width={W} height="180" fill="#5a3a3a" />
      <rect x="0" y="0" width={W} height="40" fill="#6a4a4a" />
      <rect x="0" y="40" width={W} height="40" fill="#5a3a3a" />
      <rect x="0" y="80" width={W} height="40" fill="#4a2a2a" />
      <rect x="0" y="120" width={W} height="60" fill="#3a1a1a" />
      <rect x="0" y="0" width={W} height="4" fill="#1a0808" />
      <rect x="0" y="4" width={W} height="2" fill="#3a1a1a" />
      {[...Array(20)].map((_, i) => (
        <rect key={`v${i}`} x={i * 20} y="6" width="1" height="174" fill="#3a1a1a" opacity="0.6" />
      ))}
      <rect x="0" y="180" width={W} height="60" fill="#3a2418" />
      <rect x="0" y="180" width={W} height="3"  fill="#5a3a28" />
      {[...Array(8)].map((_, i) => (
        <rect key={`fp${i}`} x={i * 50} y="183" width="2" height="57" fill="#1a0a04" />
      ))}
      <polygon points="280,180 360,180 380,240 240,240" fill="#e8a060" opacity="0.15" />
      <rect x="296" y="40" width="76" height="100" fill="#3a2418" />
      <rect x="298" y="42" width="72" height="96"  fill="#5a3a28" />
      <rect x="300" y="44" width="68" height="92"  fill="#f8a060" />
      <rect x="300" y="44" width="68" height="20" fill="#ffc080" />
      <rect x="300" y="64" width="68" height="20" fill="#f8a060" />
      <rect x="300" y="84" width="68" height="24" fill="#e8804a" />
      <rect x="300" y="108" width="68" height="28" fill="#a85838" />
      <rect x="300" y="124" width="68" height="12" fill="#3a1a1a" />
      <ellipse cx="312" cy="124" rx="8" ry="6" fill="#3a1a1a" />
      <ellipse cx="328" cy="122" rx="6" ry="5" fill="#3a1a1a" />
      <ellipse cx="344" cy="125" rx="7" ry="5" fill="#3a1a1a" />
      <ellipse cx="360" cy="123" rx="5" ry="4" fill="#3a1a1a" />
      <rect x="332" y="44" width="2" height="92" fill="#3a2418" />
      <rect x="300" y="88" width="68" height="2" fill="#3a2418" />
      <circle cx="334" cy="100" r="10" fill="#fff8c8" />
      <circle cx="334" cy="100" r="6" fill="#ffe8a0" />
      <rect x="20" y="20" width="48" height="60" fill="#1a0808" />
      <rect x="22" y="22" width="44" height="56" fill="#3a2418" />
      <rect x="24" y="24" width="40" height="52" fill="#e8d8b0" />
      <rect x="28" y="30" width="32" height="2" fill="#3a2418" />
      <rect x="28" y="34" width="28" height="1" fill="#3a2418" />
      <rect x="28" y="37" width="30" height="1" fill="#3a2418" />
      <rect x="28" y="40" width="26" height="1" fill="#3a2418" />
      <rect x="28" y="43" width="28" height="1" fill="#3a2418" />
      <rect x="28" y="48" width="30" height="1" fill="#3a2418" />
      <rect x="28" y="51" width="22" height="1" fill="#3a2418" />
      <rect x="28" y="54" width="26" height="1" fill="#3a2418" />
      <rect x="28" y="28" width="32" height="3" fill="#5a2a1a" />
      <text x="44" y="72" fontSize="3" fontFamily="monospace" fill="#3a2418">REJECTED</text>
      <rect x="80" y="40" width="80" height="120" fill="#3a2418" />
      <rect x="80" y="40" width="80" height="3"  fill="#5a3a28" />
      <rect x="80" y="68" width="80" height="3" fill="#1a0a04" />
      <rect x="80" y="98" width="80" height="3" fill="#1a0a04" />
      <rect x="80" y="128" width="80" height="3" fill="#1a0a04" />
      {[
        [85, 50, 6, 18, '#5a2a3a'],[92, 48, 5, 20, '#3a4a5a'],[98, 52, 7, 16, '#4a3a2a'],
        [106, 50, 6, 18, '#2a3a3a'],[113, 49, 6, 19, '#5a3a2a'],[120, 51, 5, 17, '#3a2a4a'],
        [126, 48, 7, 20, '#4a4a2a'],[134, 50, 6, 18, '#5a2a2a'],[141, 52, 5, 16, '#3a3a4a'],
        [148, 49, 6, 19, '#4a2a3a'],
        [85, 78, 7, 20, '#3a2a3a'],[93, 80, 6, 18, '#5a4a2a'],[100, 78, 7, 20, '#2a3a4a'],
        [108, 82, 5, 16, '#4a3a3a'],[114, 80, 6, 18, '#3a2a2a'],[121, 79, 7, 19, '#5a3a4a'],
        [130, 81, 6, 17, '#4a2a2a'],[137, 78, 5, 20, '#3a3a3a'],
        [85, 108, 7, 20, '#5a3a3a'],[93, 110, 6, 18, '#3a2a4a'],[100, 108, 7, 20, '#4a4a3a'],
        [108, 112, 5, 16, '#5a2a3a'],[114, 110, 6, 18, '#3a3a4a'],[121, 109, 7, 19, '#4a3a2a'],
        [130, 111, 6, 17, '#5a4a3a'],[137, 108, 5, 20, '#3a2a3a'],
      ].map(([x, y, w, h, c], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} fill={c} />
          <rect x={x} y={y} width={w} height="1" fill="#e0c46a" opacity="0.4" />
        </g>
      ))}
      <rect x="120" y="138" width="40" height="2" fill="#888880" opacity="0.3" />
      <rect x="100" y="158" width="180" height="22" fill="#3a2418" />
      <rect x="100" y="158" width="180" height="3"  fill="#5a3a28" />
      <rect x="104" y="180" width="6" height="40" fill="#1a0a04" />
      <rect x="270" y="180" width="6" height="40" fill="#1a0a04" />
      <rect x="106" y="148" width="24" height="14" fill="#f0e2c4" />
      <rect x="108" y="151" width="20" height="1" fill="#3a2418" />
      <rect x="108" y="153" width="18" height="1" fill="#3a2418" />
      <rect x="108" y="155" width="20" height="1" fill="#3a2418" />
      <rect x="108" y="157" width="14" height="1" fill="#3a2418" />
      <rect x="108" y="151" width="20" height="1" fill="#a83a2e" opacity="0.6" />
      <rect x="108" y="153" width="18" height="1" fill="#a83a2e" opacity="0.6" />
      <g transform="rotate(-8, 145, 156)">
        <rect x="138" y="148" width="22" height="14" fill="#f0e2c4" />
        <rect x="140" y="151" width="18" height="1" fill="#3a2418" />
        <rect x="140" y="153" width="16" height="1" fill="#3a2418" />
        <rect x="140" y="155" width="18" height="1" fill="#3a2418" />
        <rect x="140" y="151" width="18" height="1" fill="#a83a2e" opacity="0.6" />
      </g>
      <rect x="170" y="142" width="40" height="20" fill="#f0e2c4" />
      <rect x="172" y="146" width="36" height="1" fill="#3a2418" />
      <rect x="172" y="149" width="34" height="1" fill="#3a2418" />
      <rect x="172" y="152" width="36" height="1" fill="#3a2418" />
      <rect x="172" y="155" width="30" height="1" fill="#3a2418" />
      <rect x="172" y="158" width="34" height="1" fill="#3a2418" />
      <rect x="172" y="146" width="36" height="1" fill="#a83a2e" opacity="0.6" />
      <rect x="172" y="152" width="36" height="1" fill="#a83a2e" opacity="0.6" />
      <g transform="rotate(15, 220, 200)">
        <rect x="216" y="194" width="20" height="14" fill="#f0e2c4" />
        <rect x="218" y="197" width="16" height="1" fill="#3a2418" />
        <rect x="218" y="200" width="14" height="1" fill="#3a2418" />
        <rect x="218" y="197" width="16" height="1" fill="#a83a2e" opacity="0.6" />
      </g>
      <polygon points="220,134 234,134 230,148 224,148" fill="#88102a" opacity="0.3" />
      <rect x="225" y="148" width="4" height="6" fill="#3a2418" />
      <ellipse cx="227" cy="156" rx="6" ry="1" fill="#3a2418" />
      <rect x="116" y="142" width="2" height="10" fill="#1a0a04" />
      <rect x="112" y="138" width="10" height="6" fill="#3a2a1a" />
      <rect x="112" y="138" width="10" height="1" fill="#5a3a2a" />
      <rect x="113" y="139" width="8" height="4" fill={lampOn ? '#ffe8a0' : '#1a0a04'}>
        {lampOn && <animate attributeName="opacity" values="0.85;1;0.9;1" dur="2s" repeatCount="indefinite" />}
      </rect>
      {lampOn && (
        <>
          <circle cx="117" cy="142" r="40" fill="#ffe8a0" opacity="0.12" />
          <circle cx="117" cy="142" r="22" fill="#ffe8a0" opacity="0.18" />
          <rect x="20" y="20" width="48" height="60" fill="#ffe8a0" opacity="0.08" />
          <rect x="80" y="40" width="80" height="120" fill="#ffe8a0" opacity="0.06" />
        </>
      )}
      <rect x="246" y="156" width="16" height="2" fill="#1a0a04" />
      <rect x="262" y="156" width="3" height="2" fill="#e0c46a" />
      <polygon points="294,160 340,160 344,180 290,180" fill="#a8a8a0" />
      <rect x="294" y="160" width="46" height="2" fill="#a8a8a0" />
      {[
        [184, 16, -3], [212, 14, 4], [240, 18, -2], [266, 16, 3],
        [186, 50, 2], [216, 52, -3], [246, 48, 4], [272, 52, -1],
        [188, 86, -4], [218, 84, 3], [248, 88, -2], [274, 84, 4],
      ].map(([x, y, rot], i) => (
        <g key={`pn${i}`} transform={`rotate(${rot}, ${x + 11}, ${y + 14})`}>
          <rect x={x} y={y} width="22" height="28" fill="#f0e2c4" />
          <rect x={x + 2} y={y + 4}  width="18" height="1" fill="#3a2418" />
          <rect x={x + 2} y={y + 7}  width="16" height="1" fill="#3a2418" />
          <rect x={x + 2} y={y + 10} width="18" height="1" fill="#3a2418" />
          <rect x={x + 2} y={y + 13} width="14" height="1" fill="#3a2418" />
          <rect x={x + 2} y={y + 16} width="18" height="1" fill="#3a2418" />
          <rect x={x + 2} y={y + 19} width="14" height="1" fill="#3a2418" />
          <rect x={x + 2} y={y + 4}  width="18" height="1" fill="#a83a2e" opacity="0.7" />
          <rect x={x + 2} y={y + 10} width="18" height="1" fill="#a83a2e" opacity="0.7" />
          <rect x={x + 2} y={y + 16} width="18" height="1" fill="#a83a2e" opacity="0.7" />
          <rect x={x + 10} y={y - 1} width="2" height="2" fill="#a83a2e" />
        </g>
      ))}
      <g transform="translate(0, -10)">
        <MarcelFigure talking={talking} mood={mood} />
      </g>
      <rect x="174" y="200" width="56" height="6" fill="#1a0a04" />
    </svg>
  );
};

export { MarcelScene };
