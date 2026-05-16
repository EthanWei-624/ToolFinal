import React from 'react';
import { PAL } from './constants.js';

// =============================================================================
// MAYOR — figure (55, blue suit, red tie, town pin)
// =============================================================================

const MayorFigure = ({ talking, mood, seated = false }) => {
  return (
    <g shapeRendering="crispEdges">
      <ellipse cx="200" cy="220" rx="48" ry="3" fill="rgba(0,0,0,0.3)" />
      <rect x="178" y={seated ? 188 : 180} width="14" height={seated ? 32 : 40} fill="#1a3858" />
      <rect x="208" y={seated ? 188 : 180} width="14" height={seated ? 32 : 40} fill="#1a3858" />
      <rect x="178" y={seated ? 188 : 180} width="2"  height={seated ? 32 : 40} fill="#0a1838" />
      <rect x="208" y={seated ? 188 : 180} width="2"  height={seated ? 32 : 40} fill="#0a1838" />
      <rect x="174" y="216" width="22" height="6" fill="#1a1208" />
      <rect x="206" y="216" width="22" height="6" fill="#1a1208" />
      <rect x="166" y="138" width="68" height="46" fill="#1a3868" />
      <rect x="166" y="138" width="68" height="3"  fill="#0a2058" />
      <rect x="166" y="180" width="68" height="3"  fill="#0a1838" />
      <polygon points="166,138 200,150 192,176 178,176" fill="#0a2058" />
      <polygon points="234,138 200,150 208,176 222,176" fill="#0a2058" />
      <rect x="190" y="148" width="20" height="22" fill="#f0f0e0" />
      <polygon points="194,150 206,150 210,156 204,180 200,182 196,180 190,156" fill="#a83a2e" />
      <polygon points="194,150 206,150 210,156 204,180 200,182 196,180 190,156" fill="#7a2a1e" opacity="0.3" />
      <rect x="194" y="148" width="12" height="6" fill="#7a2a1e" />
      <rect x="195" y="149" width="10" height="1" fill="#a83a2e" />
      <rect x="195" y="160" width="10" height="1" fill="#7a2a1e" />
      <rect x="195" y="167" width="10" height="1" fill="#7a2a1e" />
      <rect x="195" y="174" width="10" height="1" fill="#7a2a1e" />
      <circle cx="180" cy="155" r="3" fill="#e0c46a" />
      <circle cx="180" cy="155" r="2" fill="#c89020" />
      {!seated ? (
        <>
          <rect x="148" y="148" width="18" height="42" fill="#1a3868" />
          <rect x="148" y="148" width="2"  height="42" fill="#0a2058" />
          <rect x="234" y="148" width="18" height="42" fill="#1a3868" />
          <rect x="234" y="148" width="2"  height="42" fill="#0a2058" />
          <rect x="148" y="190" width="18" height="10" fill="#e8c8a0" />
          <rect x="148" y="190" width="18" height="2" fill="#c8a880" />
          <rect x="234" y="190" width="18" height="10" fill="#e8c8a0" />
          <rect x="234" y="190" width="18" height="2" fill="#c8a880" />
        </>
      ) : (
        <>
          <rect x="148" y="160" width="18" height="30" fill="#1a3868" />
          <rect x="234" y="160" width="18" height="30" fill="#1a3868" />
          <rect x="148" y="160" width="2"  height="30" fill="#0a2058" />
          <rect x="234" y="160" width="2"  height="30" fill="#0a2058" />
          <rect x="148" y="186" width="18" height="6" fill="#e8c8a0" />
          <rect x="234" y="186" width="18" height="6" fill="#e8c8a0" />
        </>
      )}
      <rect x="172" y="148" width="6" height="4" fill="#f0f0e0" />
      <rect x="172" y="148" width="6" height="1" fill="#a8a890" />
      <rect x="190" y="122" width="20" height="16" fill="#c8a880" />
      <rect x="192" y="122" width="16" height="14" fill="#e8c8a0" />
      <rect x="174" y="58" width="52" height="68" fill="#e8c8a0" />
      <rect x="174" y="58" width="4"  height="68" fill="#c8a880" />
      <rect x="222" y="58" width="4"  height="68" fill="#c8a880" />
      <rect x="174" y="118" width="52" height="8" fill="#c8a880" />
      <rect x="172" y="54" width="56" height="12" fill="#3a2a1a" />
      <rect x="172" y="54" width="56" height="2" fill="#5a3a2a" />
      <rect x="172" y="54" width="3" height="20" fill="#3a2a1a" />
      <rect x="225" y="54" width="3" height="20" fill="#3a2a1a" />
      <rect x="172" y="68" width="3" height="12" fill="#a0a0a0" />
      <rect x="225" y="68" width="3" height="12" fill="#a0a0a0" />
      <rect x="180" y="56" width="40" height="1" fill="#5a3a2a" />
      <rect x="180" y="58" width="40" height="1" fill="#5a3a2a" />
      <rect x="172" y="88" width="4" height="10" fill="#c8a880" />
      <rect x="224" y="88" width="4" height="10" fill="#c8a880" />
      <rect x="180" y="86" width="14" height="3" fill="#3a2a1a" />
      <rect x="206" y="86" width="14" height="3" fill="#3a2a1a" />
      {mood === 'gave' ? (
        <>
          <rect x="184" y="96" width="6" height="3" fill="#888880" />
          <rect x="186" y="96" width="3" height="2" fill="#1a1208" />
          <rect x="210" y="96" width="6" height="3" fill="#888880" />
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
      <rect x="196" y="100" width="8" height="12" fill="#c8a880" />
      <rect x="198" y="102" width="4" height="10" fill="#e8c8a0" />
      <rect x="178" y="100" width="4" height="1" fill="#c8a880" opacity="0.7" />
      <rect x="218" y="100" width="4" height="1" fill="#c8a880" opacity="0.7" />
      {talking ? (
        <g>
          <rect x="192" y="119" width="16" height="5" fill="#7a4a4a" />
          <rect x="194" y="121" width="12" height="2" fill="#1a1208" />
        </g>
      ) : mood === 'gave' ? (
        <g>
          <rect x="194" y="120" width="12" height="1" fill="#7a4a4a" />
          <rect x="196" y="121" width="8"  height="1" fill="#7a4a4a" />
        </g>
      ) : (
        <g>
          <rect x="192" y="119" width="16" height="1" fill="#7a4a4a" />
          <rect x="190" y="120" width="2"  height="1" fill="#7a4a4a" />
          <rect x="208" y="120" width="2"  height="1" fill="#7a4a4a" />
          <rect x="194" y="120" width="12" height="1" fill="#7a4a4a" />
        </g>
      )}
    </g>
  );
};

const MayorScene = ({ talking, mood }) => {
  const W = 400, H = 240;
  const namesRevealed = mood === 'gave';
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMid meet"
         style={{ display: 'block', imageRendering: 'pixelated' }}
         shapeRendering="crispEdges">
      <rect x="0" y="0" width={W} height="180" fill={namesRevealed ? '#d8c8a8' : '#c8b898'} />
      <rect x="0" y="0" width={W} height="40" fill={namesRevealed ? '#e8d8b8' : '#d8c8a8'} />
      <rect x="0" y="100" width={W} height="80" fill={namesRevealed ? '#b8a888' : '#a89878'} />
      <rect x="0" y="0" width={W} height="3" fill="#3a2418" />
      <rect x="0" y="3" width={W} height="2" fill="#5a3a28" />
      <rect x="0" y="5" width={W} height="1" fill="#e0c46a" />
      <rect x="0" y="138" width={W} height="3" fill="#3a2418" />
      <rect x="0" y="141" width={W} height="2" fill="#5a3a28" />
      {[...Array(8)].map((_, i) => (
        <rect key={`p${i}`} x={i * 50 + 4} y="148" width="42" height="28" fill="none"
              stroke="#5a3a28" strokeWidth="0.5" opacity="0.6" />
      ))}
      <rect x="0" y="180" width={W} height="60" fill={namesRevealed ? '#7a6a5a' : '#5a4a3a'} />
      <rect x="0" y="180" width={W} height="3"  fill={namesRevealed ? '#9a8a7a' : '#7a6a5a'} />
      {[...Array(20)].map((_, i) => (
        <rect key={`mv${i}`} x={i * 20} y="190" width="1" height="50" fill="#3a2a18" opacity="0.4" />
      ))}
      {[40, 90, 140, 260, 310, 360].map((x, i) => (
        <g key={`p${i}`}>
          <rect x={x} y="20" width="36" height="50" fill="#3a2418" />
          <rect x={x + 2} y="22" width="32" height="46" fill="#e0c46a" />
          <rect x={x + 2} y="22" width="32" height="2" fill="#fff8c8" />
          <rect x={x + 2} y="66" width="32" height="2" fill="#a87a20" />
          <rect x={x + 4} y="24" width="28" height="42" fill="#5a4a3a" />
          <rect x={x + 12} y="32" width="12" height="18" fill="#1a3868" />
          <rect x={x + 14} y="28" width="8" height="6" fill="#e8c8a0" />
          <rect x={x + 17} y="34" width="2" height="6" fill="#a83a2e" />
          <rect x={x + 4} y="62" width="28" height="4" fill="#3a2418" />
          <text x={x + 18} y="65" textAnchor="middle" fontSize="2"
                fontFamily="'Press Start 2P', monospace" fill="#e0c46a">MAYOR</text>
          <text x={x + 18} y="76" textAnchor="middle" fontSize="2.5"
                fontFamily="'Press Start 2P', monospace" fill="#3a2418">{1985 + i * 7}</text>
        </g>
      ))}
      <rect x="186" y="14" width="60" height="66" fill="#3a2418" />
      <rect x="188" y="16" width="56" height="62" fill="#e8d8b0" />
      <rect x="188" y="16" width="56" height="4"  fill="#3a2418" />
      <text x="216" y="20" textAnchor="middle" fontSize="3.5"
            fontFamily="'Press Start 2P', monospace" fill="#e0c46a">TOWN PLAN</text>
      <rect x="192" y="24" width="14" height="10" fill="#a83a2e" opacity="0.4" />
      <text x="199" y="30" textAnchor="middle" fontSize="2" fontFamily="monospace" fill="#3a2418">DOWNTOWN</text>
      <rect x="210" y="24" width="14" height="10" fill="#3a7a4a" opacity="0.4" />
      <text x="217" y="30" textAnchor="middle" fontSize="2" fontFamily="monospace" fill="#3a2418">ARTS</text>
      <rect x="228" y="24" width="14" height="10" fill="#3a5a8a" opacity="0.4" />
      <text x="235" y="30" textAnchor="middle" fontSize="2" fontFamily="monospace" fill="#3a2418">TRANSIT</text>
      <polygon points="192,40 244,40 240,76 192,76" fill="#5a8aba" opacity="0.4" />
      {[[200, 50], [212, 56], [220, 60], [232, 50], [228, 70]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="3" height="3" fill="#a83a2e" />
      ))}
      <text x="216" y="75" textAnchor="middle" fontSize="2" fontFamily="monospace" fill="#3a2418">EST. 1923</text>
      <rect x="20" y="160" width="360" height="20" fill="#3a2418" />
      <rect x="20" y="160" width="360" height="3"  fill="#e0c46a" />
      <rect x="20" y="160" width="360" height="2"  fill="#fff8c8" />
      <rect x="20" y="178" width="360" height="2"  fill="#1a0a04" />
      <rect x="30" y="180" width="6" height="40" fill="#1a0a04" />
      <rect x="364" y="180" width="6" height="40" fill="#1a0a04" />
      {(() => {
        const allNames = ['WANG', 'MARCEL', 'VERA', 'OWEN', 'NORA', 'PETE', 'LYLE', 'LYRA', 'CABBAGE', '?', '?'];
        const positions = [
          [40, 156], [70, 156], [100, 156], [130, 156], [160, 156],
          [240, 156], [270, 156], [300, 156], [330, 156], [360, 156],
          [220, 156]
        ];
        return positions.map(([x, y], i) => (
          <g key={`np${i}`}>
            <rect x={x} y={y} width="22" height="6" fill="#3a2418" />
            <rect x={x + 1} y={y + 1} width="20" height="4"
                  fill={namesRevealed ? "#e0c46a" : "#5a3a28"} />
            {namesRevealed ? (
              <text x={x + 11} y={y + 4.5} textAnchor="middle" fontSize="2.5"
                    fontFamily="'Press Start 2P', monospace" fill="#3a2418">{allNames[i]}</text>
            ) : (
              <rect x={x + 8} y={y + 1.5} width="6" height="3" fill="#3a2418" />
            )}
          </g>
        ));
      })()}
      <g>
        <rect x="190" y="156" width="22" height="6" fill="#e0c46a" />
        <rect x="190" y="156" width="22" height="1" fill="#fff8c8" />
        <text x="201" y="160.5" textAnchor="middle" fontSize="2.5"
              fontFamily="'Press Start 2P', monospace" fill="#3a2418">HALLORAN</text>
      </g>
      {[60, 110, 250, 320].map((x, i) => (
        <g key={`cup${i}`}>
          <ellipse cx={x} cy="156" rx="5" ry="2" fill="#f0e8d8" />
          <rect x={x - 5} y="148" width="10" height="6" fill="#ffffff" />
          <rect x={x - 5} y="148" width="10" height="1" fill="#c8c0a8" />
          <ellipse cx={x + 6} cy="151" rx="2" ry="2" fill="none" stroke="#ffffff" strokeWidth="1" />
        </g>
      ))}
      <g>
        <rect x="195" y="148" width="10" height="6" fill="#ffffff" />
        <rect x="196" y="149" width="8" height="4" fill="#3a2418" />
      </g>
      {[40, 70, 100, 130, 160, 240, 270, 300, 330, 360].map((x, i) => (
        <rect key={`ch${i}`} x={x} y="200" width="22" height="20" fill="#3a2418" opacity="0.6" />
      ))}
      <g transform="translate(0, 0)">
        <MayorFigure talking={talking} mood={mood} seated={namesRevealed} />
      </g>
      <rect x="370" y="80" width="2" height="80" fill="#3a2418" />
      <rect x="368" y="80" width="6" height="3" fill="#e0c46a" />
      <rect x="372" y="84" width="20" height="14" fill="#a83a2e" />
      <rect x="372" y="84" width="20" height="2" fill="#7a2a1e" />
      <rect x="376" y="88" width="2" height="2" fill="#fff8c8" />
      <rect x="382" y="90" width="2" height="2" fill="#fff8c8" />
      <rect x="388" y="88" width="2" height="2" fill="#fff8c8" />
      <rect x="14" y="140" width="22" height="40" fill="#3a2418" />
      <rect x="14" y="140" width="22" height="3"  fill="#5a3a28" />
      <rect x="14" y="178" width="22" height="2"  fill="#1a0a04" />
      <circle cx="25" cy="160" r="6" fill="#e0c46a" />
      <circle cx="25" cy="160" r="4" fill="#c89020" />
      <rect x="18" y="146" width="14" height="6" fill="#3a3a3a" />
      <circle cx="22" cy="149" r="1.5" fill="#1a1208" />
      <circle cx="28" cy="149" r="1.5" fill="#1a1208" />
      {namesRevealed && (
        <rect x="0" y="0" width={W} height={H} fill="#ffe8a0" opacity="0.07" />
      )}
    </svg>
  );
};

export { MayorScene };
