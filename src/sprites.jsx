import React from 'react';
import { PAL } from './constants.js';

// =============================================================================
// PIXEL DRAWING HELPERS
// =============================================================================

const tileVariant = (r, c, variants) => {
  if (!variants) return null;
  const h = ((r * 73856093) ^ (c * 19349663)) >>> 0;
  return variants[h % variants.length];
};

// Stable pseudo-random for deterministic decoration positioning
const hash = (a, b, c = 0) => {
  let h = (a * 73856093) ^ (b * 19349663) ^ (c * 83492791);
  h = (h ^ (h >>> 16)) * 0x85ebca6b;
  h = (h ^ (h >>> 13)) * 0xc2b2ae35;
  return ((h ^ (h >>> 16)) >>> 0);
};

// =============================================================================
// PLAYER SPRITE — slightly bigger, 24x24 pixel character
// =============================================================================

const PlayerSprite = ({ dir, walkFrame = 0 }) => {
  const eyeOff = dir === 'left' ? -1 : dir === 'right' ? 1 : 0;
  const facingUp = dir === 'up';
  const legOffsetA = walkFrame === 1 ? 1 : 0;
  const legOffsetB = walkFrame === 1 ? 0 : 1;
  return (
    <g shapeRendering="crispEdges">
      <ellipse cx="12" cy="22" rx="6" ry="1.5" fill="rgba(0,0,0,0.4)" />
      {/* legs (animated) */}
      <rect x="8"  y={16 + legOffsetA} width="3" height={5 - legOffsetA} fill="#3a2a8a" />
      <rect x="13" y={16 + legOffsetB} width="3" height={5 - legOffsetB} fill="#3a2a8a" />
      {/* shoes */}
      <rect x="8"  y={20} width="3" height="1" fill="#1a1208" />
      <rect x="13" y={20} width="3" height="1" fill="#1a1208" />
      {/* body */}
      <rect x="6" y="10" width="12" height="7" fill="#c14e3e" />
      <rect x="6" y="10" width="12" height="1" fill="#e07666" />
      <rect x="6" y="16" width="12" height="1" fill="#8b3a2e" />
      {/* belt */}
      <rect x="6" y="15" width="12" height="1" fill="#3a2418" />
      {/* arms */}
      <rect x="4"  y="11" width="2" height="5" fill="#c14e3e" />
      <rect x="18" y="11" width="2" height="5" fill="#c14e3e" />
      {/* hands */}
      <rect x="4"  y="15" width="2" height="2" fill="#f4c896" />
      <rect x="18" y="15" width="2" height="2" fill="#f4c896" />
      {/* head */}
      <rect x="7" y="3" width="10" height="8" fill="#f4c896" />
      <rect x="7" y="3" width="10" height="1" fill="#d4a574" />
      <rect x="7" y="10" width="10" height="1" fill="#d4a574" />
      {/* hair */}
      <rect x="6" y="2" width="12" height="3" fill="#3a2418" />
      <rect x="6" y="3" width="2"  height="3" fill="#3a2418" />
      <rect x="16" y="3" width="2" height="3" fill="#3a2418" />
      {!facingUp && (
        <>
          <rect x={9 + eyeOff}  y="7" width="1" height="1" fill="#1a1208" />
          <rect x={14 + eyeOff} y="7" width="1" height="1" fill="#1a1208" />
        </>
      )}
    </g>
  );
};

// =============================================================================
// MAP DECORATIONS (drawn over base tiles)
// =============================================================================

const TileDecoration = ({ tileId, x, y, r, c }) => {
  const h = hash(r, c);

  if (tileId === 8) {
    // Tree — varied with shadow
    const variant = h % 4;
    const offX = (h % 3) - 1;
    const sway = (h % 2) * 0.5;
    return (
      <g shapeRendering="crispEdges">
        {/* ground shadow under tree */}
        <ellipse cx={x + 12 + offX} cy={y + 22} rx="10" ry="2" fill={PAL.shadowDk} />
        {/* trunk */}
        <rect x={x + 10 + offX} y={y + 14} width="4" height="9" fill={PAL.treeBrk} />
        <rect x={x + 10 + offX} y={y + 14} width="1" height="9" fill={PAL.treeBrkLt} />
        <rect x={x + 11 + offX} y={y + 18} width="2" height="1" fill={PAL.treeBrkLt} />
        {/* canopy variants */}
        {variant === 0 && (
          <>
            <ellipse cx={x + 12 + offX} cy={y + 9}  rx="11" ry="9"  fill={PAL.treeDk} />
            <ellipse cx={x + 11 + offX} cy={y + 8}  rx="9"  ry="7"  fill={PAL.treeMd} />
            <ellipse cx={x + 9 + offX}  cy={y + 6}  rx="5"  ry="4"  fill={PAL.treeLt} />
            <circle cx={x + 8 + offX}   cy={y + 5}  r="2" fill={PAL.treeHi} />
            <rect x={x + 14 + offX} y={y + 11} width="1" height="1" fill={PAL.treeHi} />
          </>
        )}
        {variant === 1 && (
          <>
            <ellipse cx={x + 12 + offX} cy={y + 8}  rx="10" ry="8"  fill={PAL.treeDk} />
            <ellipse cx={x + 13 + offX} cy={y + 7}  rx="8"  ry="6"  fill={PAL.treeMd} />
            <ellipse cx={x + 14 + offX} cy={y + 6}  rx="4"  ry="3"  fill={PAL.treeLt} />
            <rect x={x + 15 + offX} y={y + 5} width="1" height="1" fill={PAL.treeHi} />
          </>
        )}
        {variant === 2 && (
          <>
            <ellipse cx={x + 12 + offX} cy={y + 9}  rx="10" ry="9"  fill={PAL.treeDk} />
            <ellipse cx={x + 11 + offX} cy={y + 8}  rx="8"  ry="7"  fill={PAL.treeMd} />
            <ellipse cx={x + 12 + offX} cy={y + 7}  rx="5"  ry="4"  fill={PAL.treeLt} />
            <ellipse cx={x + 13 + offX} cy={y + 5}  rx="2"  ry="2"  fill={PAL.treeHi} />
          </>
        )}
        {variant === 3 && (
          <>
            {/* tall conifer */}
            <ellipse cx={x + 12 + offX} cy={y + 12} rx="9" ry="6"   fill={PAL.treeDk} />
            <ellipse cx={x + 12 + offX} cy={y + 9}  rx="7" ry="5"   fill={PAL.treeMd} />
            <ellipse cx={x + 12 + offX} cy={y + 6}  rx="5" ry="4"   fill={PAL.treeLt} />
            <ellipse cx={x + 12 + offX} cy={y + 3}  rx="3" ry="3"   fill={PAL.treeLt} />
            <rect x={x + 12 + offX} y={y + 1} width="1" height="2" fill={PAL.treeHi} />
          </>
        )}
      </g>
    );
  }

  if (tileId === 10) {
    // Flowers cluster
    const colorA = PAL.flower[h % PAL.flower.length];
    const colorB = PAL.flower[(h >> 3) % PAL.flower.length];
    return (
      <g shapeRendering="crispEdges">
        <rect x={x + 6 + (h % 3)}  y={y + 14} width="1" height="3" fill={PAL.treeMd} />
        <rect x={x + 6 + (h % 3)}  y={y + 12} width="3" height="3" fill={colorA} />
        <rect x={x + 7 + (h % 3)}  y={y + 13} width="1" height="1" fill={PAL.flowerCtr} />
        <rect x={x + 14 + ((h >> 4) % 3)} y={y + 16} width="1" height="3" fill={PAL.treeMd} />
        <rect x={x + 14 + ((h >> 4) % 3)} y={y + 14} width="3" height="3" fill={colorB} />
        <rect x={x + 15 + ((h >> 4) % 3)} y={y + 15} width="1" height="1" fill={PAL.flowerCtr} />
        <rect x={x + 10 + ((h >> 8) % 3)} y={y + 17} width="1" height="2" fill={PAL.treeMd} />
        <rect x={x + 10 + ((h >> 8) % 3)} y={y + 16} width="3" height="1" fill={PAL.flower[(h >> 8) % PAL.flower.length]} />
      </g>
    );
  }

  if (tileId === 14) {
    // Rocks with moss
    return (
      <g shapeRendering="crispEdges">
        <ellipse cx={x + 12} cy={y + 17} rx="9" ry="2" fill={PAL.shadowDk} />
        <rect x={x + 8}  y={y + 12} width="9" height="6" fill={PAL.rockM} />
        <rect x={x + 9}  y={y + 11} width="7" height="1" fill={PAL.rockL} />
        <rect x={x + 8}  y={y + 17} width="9" height="1" fill={PAL.rockD} />
        <rect x={x + 10} y={y + 13} width="3" height="1" fill={PAL.rockL} />
        {/* moss */}
        <rect x={x + 9}  y={y + 11} width="2" height="1" fill={PAL.treeMd} />
        <rect x={x + 14} y={y + 12} width="2" height="1" fill={PAL.treeMd} />
        {/* small rock beside */}
        <rect x={x + 4}  y={y + 16} width="3" height="2" fill={PAL.rockM} />
        <rect x={x + 4}  y={y + 17} width="3" height="1" fill={PAL.rockD} />
      </g>
    );
  }

  if (tileId === 15) {
    // Bush — denser, with more flowers
    return (
      <g shapeRendering="crispEdges">
        <ellipse cx={x + 12} cy={y + 19} rx="10" ry="2" fill={PAL.shadowDk} />
        <ellipse cx={x + 12} cy={y + 16} rx="10" ry="6" fill={PAL.bush[0]} />
        <ellipse cx={x + 11} cy={y + 14} rx="8" ry="5"  fill={PAL.bush[1]} />
        <ellipse cx={x + 13} cy={y + 13} rx="5" ry="3"  fill={PAL.bush[3]} />
        <ellipse cx={x + 10} cy={y + 12} rx="3" ry="2"  fill={PAL.treeHi} />
        {(h % 2 === 0) && (
          <>
            <rect x={x + 14} y={y + 13} width="1" height="1" fill={PAL.flower[h % PAL.flower.length]} />
            <rect x={x + 8}  y={y + 15} width="1" height="1" fill={PAL.flower[(h>>2) % PAL.flower.length]} />
            <rect x={x + 16} y={y + 16} width="1" height="1" fill={PAL.flower[(h>>4) % PAL.flower.length]} />
          </>
        )}
        {(h % 3 === 0) && (
          <rect x={x + 6} y={y + 14} width="1" height="1" fill={PAL.flower[(h>>6) % PAL.flower.length]} />
        )}
      </g>
    );
  }

  if (tileId === 9) {
    // Water shimmer + occasional ripple
    const elements = [];
    if (h % 4 === 0) {
      elements.push(
        <rect key="r1" x={x + (h % 12) + 4} y={y + ((h >> 3) % 14) + 4} width="3" height="1" fill={PAL.waterHi} opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin={`${(h % 5) * 0.3}s`} />
        </rect>
      );
    }
    if (h % 7 === 0) {
      elements.push(
        <rect key="r2" x={x + ((h >> 5) % 14) + 4} y={y + ((h >> 9) % 16) + 4} width="2" height="1" fill={PAL.waterFoam} opacity="0.5">
          <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.5s" repeatCount="indefinite" begin={`${(h % 7) * 0.4}s`} />
        </rect>
      );
    }
    // Vertical wave lines
    if (h % 5 === 0) {
      elements.push(
        <rect key="r3" x={x + 8} y={y + ((h >> 2) % 18) + 2} width="6" height="1" fill={PAL.waterDk} opacity="0.5" />
      );
    }
    return <g shapeRendering="crispEdges">{elements}</g>;
  }

  return null;
};

export { tileVariant, hash, PlayerSprite, TileDecoration };
