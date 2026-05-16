import React from 'react';
import { PAL, TILE_SIZE, MAP, MAP_H, DOORS, SIGNS } from './constants.js';

// =============================================================================
// PROPS — standalone decorative items placed at specific tile positions
// =============================================================================

// A well with rope
const Well = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    {/* shadow */}
    <ellipse cx={x + 12} cy={y + 22} rx="11" ry="2" fill={PAL.shadowDk} />
    {/* base stones */}
    <rect x={x + 2}  y={y + 12} width="20" height="10" fill={PAL.rockM} />
    <rect x={x + 2}  y={y + 12} width="20" height="2"  fill={PAL.rockL} />
    <rect x={x + 2}  y={y + 20} width="20" height="2"  fill={PAL.rockD} />
    {/* stone seams */}
    <rect x={x + 8}  y={y + 12} width="1" height="10" fill={PAL.rockD} />
    <rect x={x + 16} y={y + 12} width="1" height="10" fill={PAL.rockD} />
    <rect x={x + 2}  y={y + 16} width="20" height="1" fill={PAL.rockD} />
    {/* water hole */}
    <rect x={x + 6}  y={y + 14} width="12" height="3" fill={PAL.waterDk} />
    <rect x={x + 7}  y={y + 14} width="2" height="1" fill={PAL.waterHi} opacity="0.6" />
    {/* posts */}
    <rect x={x + 4}  y={y + 2}  width="2" height="11" fill={PAL.woodM} />
    <rect x={x + 18} y={y + 2}  width="2" height="11" fill={PAL.woodM} />
    {/* roof */}
    <rect x={x + 1}  y={y - 1}  width="22" height="3" fill={PAL.woodD} />
    <rect x={x + 3}  y={y - 4}  width="18" height="3" fill={PAL.woodM} />
    <rect x={x + 5}  y={y - 6}  width="14" height="2" fill={PAL.woodL} />
    {/* roof shingle texture */}
    <rect x={x + 3}  y={y - 1}  width="18" height="1" fill={PAL.woodH} />
    {/* crank handle */}
    <rect x={x + 3}  y={y + 4}  width="18" height="1" fill={PAL.metalDk} />
    <rect x={x + 11} y={y + 5}  width="2" height="2" fill={PAL.metal} />
    {/* rope */}
    <rect x={x + 11} y={y + 5}  width="1" height="9" fill="#8b6a3a" />
  </g>
);

// Wooden barrel
const Barrel = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    <ellipse cx={x + 8} cy={y + 14} rx="7" ry="1.5" fill={PAL.shadowDk} />
    <rect x={x + 2}  y={y + 1}  width="12" height="13" fill={PAL.woodL} />
    <rect x={x + 2}  y={y + 1}  width="12" height="2"  fill={PAL.woodM} />
    <rect x={x + 2}  y={y + 12} width="12" height="2"  fill={PAL.woodM} />
    <rect x={x + 2}  y={y + 6}  width="12" height="2"  fill={PAL.woodM} />
    {/* metal bands */}
    <rect x={x + 2}  y={y + 3}  width="12" height="1"  fill={PAL.metalDk} />
    <rect x={x + 2}  y={y + 10} width="12" height="1"  fill={PAL.metalDk} />
    {/* highlight */}
    <rect x={x + 3}  y={y + 1}  width="1" height="11" fill={PAL.woodH} />
    <rect x={x + 4}  y={y + 1}  width="1" height="2" fill={PAL.woodH} />
    {/* top */}
    <ellipse cx={x + 8} cy={y + 1} rx="6" ry="1.2" fill={PAL.woodD} />
  </g>
);

// Lantern on a post
const Lantern = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    <ellipse cx={x + 6} cy={y + 22} rx="4" ry="1" fill={PAL.shadowDk} />
    {/* post */}
    <rect x={x + 5}  y={y + 12} width="2" height="10" fill={PAL.woodD} />
    {/* hook */}
    <rect x={x + 4}  y={y + 8}  width="4" height="1" fill={PAL.metalDk} />
    {/* lantern body */}
    <rect x={x + 2}  y={y + 6}  width="8" height="1" fill={PAL.metalDk} />
    <rect x={x + 1}  y={y + 7}  width="10" height="1" fill={PAL.metalDk} />
    <rect x={x + 1}  y={y + 8}  width="10" height="6" fill={PAL.lantern}>
      <animate attributeName="opacity" values="0.85;1;0.9;1" dur="2s" repeatCount="indefinite" />
    </rect>
    <rect x={x + 2}  y={y + 9}  width="8" height="4" fill="#fff8c8" opacity="0.6" />
    <rect x={x + 1}  y={y + 14} width="10" height="1" fill={PAL.metalDk} />
    {/* glow */}
    <circle cx={x + 6} cy={y + 11} r="8" fill={PAL.lantern} opacity="0.15" />
  </g>
);

// Bench
const Bench = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    <ellipse cx={x + 14} cy={y + 16} rx="13" ry="1" fill={PAL.shadowDk} />
    {/* legs */}
    <rect x={x + 2}  y={y + 8}  width="2" height="8" fill={PAL.woodD} />
    <rect x={x + 24} y={y + 8}  width="2" height="8" fill={PAL.woodD} />
    {/* seat */}
    <rect x={x}      y={y + 6}  width="28" height="4" fill={PAL.woodM} />
    <rect x={x}      y={y + 6}  width="28" height="1" fill={PAL.woodH} />
    <rect x={x}      y={y + 9}  width="28" height="1" fill={PAL.woodD} />
    {/* back */}
    <rect x={x + 1}  y={y - 2}  width="2" height="8" fill={PAL.woodM} />
    <rect x={x + 23} y={y - 2}  width="2" height="8" fill={PAL.woodM} />
    <rect x={x + 1}  y={y}      width="24" height="2" fill={PAL.woodM} />
    <rect x={x + 1}  y={y + 3}  width="24" height="1" fill={PAL.woodM} />
  </g>
);

// Cart with hay
const HayCart = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    <ellipse cx={x + 16} cy={y + 22} rx="16" ry="2" fill={PAL.shadowDk} />
    {/* wheels */}
    <circle cx={x + 5}  cy={y + 18} r="4" fill={PAL.woodD} />
    <circle cx={x + 5}  cy={y + 18} r="3" fill={PAL.woodM} />
    <rect x={x + 4}  y={y + 17} width="2" height="2" fill={PAL.woodD} />
    <circle cx={x + 27} cy={y + 18} r="4" fill={PAL.woodD} />
    <circle cx={x + 27} cy={y + 18} r="3" fill={PAL.woodM} />
    <rect x={x + 26} y={y + 17} width="2" height="2" fill={PAL.woodD} />
    {/* cart bed */}
    <rect x={x + 1}  y={y + 12} width="30" height="6" fill={PAL.woodL} />
    <rect x={x + 1}  y={y + 12} width="30" height="1" fill={PAL.woodH} />
    <rect x={x + 1}  y={y + 17} width="30" height="1" fill={PAL.woodD} />
    {/* sides */}
    <rect x={x + 1}  y={y + 8}  width="2" height="5" fill={PAL.woodM} />
    <rect x={x + 29} y={y + 8}  width="2" height="5" fill={PAL.woodM} />
    {/* hay */}
    <rect x={x + 3}  y={y + 6}  width="26" height="6" fill={PAL.hay} />
    <rect x={x + 3}  y={y + 6}  width="26" height="1" fill="#e8c890" />
    {/* hay strands */}
    {[5, 9, 14, 18, 22, 26].map(o => (
      <rect key={o} x={x + o} y={y + 4} width="1" height="3" fill={PAL.hayDk} />
    ))}
  </g>
);

// Mailbox
const Mailbox = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    <ellipse cx={x + 6} cy={y + 22} rx="5" ry="1" fill={PAL.shadowDk} />
    <rect x={x + 5}  y={y + 12} width="2" height="10" fill={PAL.woodD} />
    <rect x={x + 1}  y={y + 4}  width="10" height="9" fill={PAL.red} />
    <rect x={x + 1}  y={y + 4}  width="10" height="1" fill={PAL.redDark} />
    <rect x={x + 1}  y={y + 12} width="10" height="1" fill={PAL.redDark} />
    {/* slot */}
    <rect x={x + 3}  y={y + 7}  width="6" height="1" fill={PAL.woodD} />
    {/* flag */}
    <rect x={x + 11} y={y + 5}  width="1" height="4" fill={PAL.metalDk} />
    <rect x={x + 12} y={y + 5}  width="3" height="3" fill={PAL.gold} />
  </g>
);

// Sign post
const SignPost = ({ x, y, text = '?' }) => (
  <g shapeRendering="crispEdges">
    <ellipse cx={x + 8} cy={y + 22} rx="5" ry="1" fill={PAL.shadowDk} />
    <rect x={x + 7}  y={y + 8}  width="2" height="14" fill={PAL.woodD} />
    <rect x={x}      y={y}      width="16" height="9" fill={PAL.woodM} />
    <rect x={x}      y={y}      width="16" height="1" fill={PAL.woodH} />
    <rect x={x}      y={y + 8}  width="16" height="1" fill={PAL.woodD} />
    <text x={x + 8} y={y + 6} textAnchor="middle" fontSize="4"
          fontFamily="'Press Start 2P', monospace" fill={PAL.apron}>{text}</text>
  </g>
);

// Wooden fence section (horizontal)
const FenceH = ({ x, y, length = 3 }) => (
  <g shapeRendering="crispEdges">
    {[...Array(length)].map((_, i) => (
      <g key={i} transform={`translate(${i * TILE_SIZE}, 0)`}>
        <rect x={x + 4}  y={y + 8}  width="2" height="14" fill={PAL.woodD} />
        <rect x={x + 18} y={y + 8}  width="2" height="14" fill={PAL.woodD} />
        <rect x={x + 1}  y={y + 11} width="22" height="2" fill={PAL.woodM} />
        <rect x={x + 1}  y={y + 16} width="22" height="2" fill={PAL.woodM} />
        <rect x={x + 1}  y={y + 11} width="22" height="1" fill={PAL.woodH} />
        <rect x={x + 1}  y={y + 16} width="22" height="1" fill={PAL.woodH} />
      </g>
    ))}
  </g>
);

// Vegetable garden patch
const Garden = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    {/* dirt patch */}
    <rect x={x}      y={y + 4}  width={TILE_SIZE} height="18" fill={PAL.dirt[3]} />
    <rect x={x}      y={y + 4}  width={TILE_SIZE} height="2"  fill={PAL.dirt[0]} />
    <rect x={x}      y={y + 20} width={TILE_SIZE} height="2"  fill={PAL.dirtDk} />
    {/* furrows */}
    <rect x={x + 2}  y={y + 7}  width="20" height="1" fill={PAL.dirtDk} />
    <rect x={x + 2}  y={y + 13} width="20" height="1" fill={PAL.dirtDk} />
    <rect x={x + 2}  y={y + 19} width="20" height="1" fill={PAL.dirtDk} />
    {/* plants */}
    <rect x={x + 4}  y={y + 8}  width="2" height="2" fill={PAL.treeMd} />
    <rect x={x + 5}  y={y + 7}  width="1" height="2" fill={PAL.treeHi} />
    <rect x={x + 10} y={y + 8}  width="2" height="2" fill={PAL.treeMd} />
    <rect x={x + 11} y={y + 7}  width="1" height="2" fill={PAL.treeHi} />
    <rect x={x + 16} y={y + 8}  width="2" height="2" fill={PAL.treeMd} />
    <rect x={x + 4}  y={y + 14} width="2" height="2" fill={PAL.treeMd} />
    <rect x={x + 10} y={y + 14} width="2" height="2" fill={PAL.treeMd} />
    <rect x={x + 16} y={y + 14} width="2" height="2" fill={PAL.treeMd} />
    {/* tomatoes */}
    <rect x={x + 4}  y={y + 14} width="1" height="1" fill={PAL.red} />
    <rect x={x + 17} y={y + 14} width="1" height="1" fill={PAL.red} />
    <rect x={x + 11} y={y + 8}  width="1" height="1" fill={PAL.red} />
  </g>
);

// Crate stack
const Crates = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    <ellipse cx={x + 12} cy={y + 22} rx="11" ry="1.5" fill={PAL.shadowDk} />
    {/* bottom crate */}
    <rect x={x + 2}  y={y + 12} width="20" height="10" fill={PAL.woodL} />
    <rect x={x + 2}  y={y + 12} width="20" height="1"  fill={PAL.woodH} />
    <rect x={x + 2}  y={y + 21} width="20" height="1"  fill={PAL.woodD} />
    <rect x={x + 11} y={y + 12} width="2"  height="10" fill={PAL.woodD} />
    <rect x={x + 2}  y={y + 16} width="20" height="1"  fill={PAL.woodD} />
    {/* top crate (smaller) */}
    <rect x={x + 6}  y={y + 4}  width="14" height="8"  fill={PAL.woodM} />
    <rect x={x + 6}  y={y + 4}  width="14" height="1"  fill={PAL.woodH} />
    <rect x={x + 6}  y={y + 11} width="14" height="1"  fill={PAL.woodD} />
    <rect x={x + 12} y={y + 4}  width="2"  height="8"  fill={PAL.woodD} />
  </g>
);

// =============================================================================
// BREAD PROPS — RoundLoaf moved here so buildExtras can use it
// =============================================================================

const RoundLoaf = ({ x, y, w = 14, h = 8 }) => (
  <g shapeRendering="crispEdges">
    <rect x={x + 1} y={y} width={w - 2} height="1" fill="#a8602a" />
    <rect x={x} y={y + 1} width={w} height={h - 2} fill="#d89040" />
    <rect x={x + 1} y={y + h - 1} width={w - 2} height="1" fill="#7a4520" />
    <rect x={x + 2} y={y + 1} width={w - 4} height="1" fill="#f0b46a" />
    <rect x={x + 4} y={y + 3} width="1" height="1" fill="#3a2418" />
    <rect x={x + 8} y={y + 2} width="1" height="1" fill="#3a2418" />
  </g>
);

// =============================================================================
// BUILDING EXTRAS — proper 3D-ish buildings with eaves, base, side shadows
// =============================================================================

const buildExtras = () => {
  const extras = [];

  // Eaves (overhanging roof edges) — for each building, draw a darker line
  // just below the bottom-most roof tile, extending one pixel past the wall
  const buildings = [
    { topRow: 2, botRow: 3, startCol: 2, endCol: 6, color: PAL.roofRedDk,    door: '6,4' },
    { topRow: 2, botRow: 3, startCol: 10, endCol: 15, color: PAL.roofBlueDk,  door: '6,12' },
    { topRow: 2, botRow: 3, startCol: 19, endCol: 23, color: PAL.roofGreenDk, door: '6,21' },
    { topRow: 13, botRow: 14, startCol: 2, endCol: 6, color: PAL.roofPurpleDk, door: '12,4' },
    { topRow: 13, botRow: 14, startCol: 20, endCol: 24, color: PAL.roofOrangeDk,door: '12,21' },
  ];

  for (const b of buildings) {
    const x = (b.startCol - 0.2) * TILE_SIZE;
    const y = (b.botRow + 1) * TILE_SIZE;
    const w = (b.endCol - b.startCol + 1.4) * TILE_SIZE;
    // Eave (roof overhang shadow line)
    extras.push(
      <g key={`eave-${b.door}`} shapeRendering="crispEdges">
        <rect x={x} y={y - 4} width={w} height="3" fill={b.color} />
        <rect x={x} y={y - 1} width={w} height="2" fill="rgba(0,0,0,0.4)" />
        {/* roof texture - shingle lines */}
        <rect x={x + 2} y={(b.topRow * TILE_SIZE) + 8}  width={w - 4} height="1" fill="rgba(0,0,0,0.2)" />
        <rect x={x + 2} y={(b.topRow * TILE_SIZE) + 16} width={w - 4} height="1" fill="rgba(0,0,0,0.2)" />
        <rect x={x + 2} y={(b.topRow * TILE_SIZE) + 28} width={w - 4} height="1" fill="rgba(0,0,0,0.2)" />
        {/* chimney */}
        <rect x={(b.endCol - 1) * TILE_SIZE - 4} y={(b.topRow * TILE_SIZE) - 8} width="6" height="10" fill={PAL.brickM} />
        <rect x={(b.endCol - 1) * TILE_SIZE - 4} y={(b.topRow * TILE_SIZE) - 8} width="6" height="2"  fill={PAL.brickD} />
        <rect x={(b.endCol - 1) * TILE_SIZE - 6} y={(b.topRow * TILE_SIZE) - 10} width="10" height="3" fill={PAL.brickD} />
        <circle cx={(b.endCol - 1) * TILE_SIZE - 1} cy={(b.topRow * TILE_SIZE) - 12} r="3" fill="rgba(220,220,220,0.5)">
          <animate attributeName="cy" values={`${(b.topRow * TILE_SIZE) - 12};${(b.topRow * TILE_SIZE) - 28}`} dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="4s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;6" dur="4s" repeatCount="indefinite" />
        </circle>
        {/* base shadow */}
        <rect x={x} y={y + (1 * TILE_SIZE) - 2} width={w} height="3" fill="rgba(0,0,0,0.35)" />
      </g>
    );
  }

  // Wall side shadows — left side of each wall darker
  const wallSpec = [
    { row: 4, col: 2, h: 2 }, { row: 4, col: 10, h: 2 }, { row: 4, col: 19, h: 2 },
    { row: 15, col: 2, h: 2 }, { row: 15, col: 20, h: 2 },
  ];
  for (const w of wallSpec) {
    const x = w.col * TILE_SIZE;
    const y = w.row * TILE_SIZE;
    extras.push(
      <rect key={`ws-${w.row}-${w.col}`} x={x} y={y} width="3" height={w.h * TILE_SIZE} fill="rgba(0,0,0,0.25)" />
    );
  }

  // Building windows — fancier
  const windowSpec = [
    [4, 3], [4, 5], [4, 11], [4, 13], [4, 15], [4, 20], [4, 22], [4, 23],
    [15, 3], [15, 5], [15, 21], [15, 23],
  ];
  for (const [row, col] of windowSpec) {
    const x = col * TILE_SIZE, y = row * TILE_SIZE;
    extras.push(
      <g key={`win-${row}-${col}`} shapeRendering="crispEdges">
        <rect x={x + 6} y={y + 5} width="12" height="11" fill={PAL.windowFr} />
        <rect x={x + 7} y={y + 6} width="10" height="9"  fill={PAL.windowDk} />
        <rect x={x + 7} y={y + 6} width="10" height="4"  fill={PAL.windowBlue} />
        <rect x={x + 12} y={y + 6} width="1" height="9"  fill={PAL.windowFr} />
        <rect x={x + 7} y={y + 9} width="10" height="1"  fill={PAL.windowFr} />
        <rect x={x + 7} y={y + 6} width="3" height="2"   fill="#b0d8f0" opacity="0.7" />
        {/* shutters (just on the outside of the frame) */}
        <rect x={x + 4}  y={y + 5} width="2" height="11" fill={PAL.woodM} />
        <rect x={x + 4}  y={y + 5} width="2" height="1"  fill={PAL.woodH} />
        <rect x={x + 18} y={y + 5} width="2" height="11" fill={PAL.woodM} />
        <rect x={x + 18} y={y + 5} width="2" height="1"  fill={PAL.woodH} />
        {/* window box flowers */}
        <rect x={x + 5} y={y + 14} width="14" height="3" fill={PAL.woodM} />
        <rect x={x + 5} y={y + 14} width="14" height="1" fill={PAL.woodL} />
        <rect x={x + 7} y={y + 13} width="2" height="2" fill={PAL.flower[(row*col)%PAL.flower.length]} />
        <rect x={x + 11} y={y + 13} width="2" height="2" fill={PAL.flower[(row+col)%PAL.flower.length]} />
        <rect x={x + 15} y={y + 13} width="2" height="2" fill={PAL.flower[(row*7+col)%PAL.flower.length]} />
      </g>
    );
  }

  // Doors with signs - now more elaborate
  for (const [coords, npcId] of Object.entries(DOORS)) {
    const [row, col] = coords.split(',').map(Number);
    const wallRow = row - 1;
    const x = col * TILE_SIZE;
    const y = wallRow * TILE_SIZE;
    extras.push(
      <g key={`door-${coords}`} shapeRendering="crispEdges">
        {/* awning */}
        <rect x={x - 4}  y={y - 2} width="32" height="3" fill={PAL.woodD} />
        <rect x={x - 4}  y={y - 2} width="32" height="1" fill={PAL.woodH} />
        <rect x={x - 2}  y={y + 1} width="28" height="2" fill={PAL.red} />
        <rect x={x + 2}  y={y + 1} width="2" height="2" fill={PAL.apron} />
        <rect x={x + 8}  y={y + 1} width="2" height="2" fill={PAL.apron} />
        <rect x={x + 14} y={y + 1} width="2" height="2" fill={PAL.apron} />
        <rect x={x + 20} y={y + 1} width="2" height="2" fill={PAL.apron} />
        {/* door frame */}
        <rect x={x + 6} y={y + 5} width="12" height="19" fill={PAL.woodD} />
        <rect x={x + 7} y={y + 6} width="10" height="18" fill={PAL.woodM} />
        <rect x={x + 8} y={y + 7} width="8" height="7"  fill={PAL.woodL} />
        <rect x={x + 8} y={y + 16} width="8" height="6" fill={PAL.woodL} />
        <rect x={x + 8} y={y + 7} width="8" height="1"  fill={PAL.woodH} />
        <rect x={x + 8} y={y + 16} width="8" height="1" fill={PAL.woodH} />
        <rect x={x + 14} y={y + 14} width="2" height="2" fill={PAL.gold} />
        <rect x={x + 14} y={y + 14} width="1" height="1" fill="#fff8c8" />
        {/* hanging sign */}
        <rect x={x + 11} y={y - 8} width="1" height="2" fill="#888" />
        <rect x={x + 16} y={y - 8} width="1" height="2" fill="#888" />
        <rect x={x + 6}  y={y - 12} width="20" height="6" fill={PAL.woodM} />
        <rect x={x + 6}  y={y - 12} width="20" height="1" fill={PAL.woodH} />
        <rect x={x + 6}  y={y - 7} width="20" height="1" fill={PAL.woodD} />
        <text x={x + 16} y={y - 8} textAnchor="middle" fontSize="4"
              fontFamily="'Press Start 2P', monospace" fill={PAL.apron}
              style={{ letterSpacing: '0' }}>
          {SIGNS[coords] || ''}
        </text>
        {/* door step */}
        <rect x={x + 4} y={y + 23} width="16" height="2" fill={PAL.stone[2]} />
        <rect x={x + 4} y={y + 23} width="16" height="1" fill={PAL.stone[1]} />
      </g>
    );
  }

  // === Specific store-front decorations (tile-coord based) ===

  // Bakery (Wang) — outdoor bread display + barrel of flour
  extras.push(<Barrel key="b-bakery"  x={TILE_SIZE * 6 + 6}  y={TILE_SIZE * 7} />);
  extras.push(
    <g key="bread-display" shapeRendering="crispEdges">
      {/* outdoor bread crate */}
      <rect x={TILE_SIZE * 1 + 8} y={TILE_SIZE * 7 + 4} width="14" height="10" fill={PAL.woodM} />
      <rect x={TILE_SIZE * 1 + 8} y={TILE_SIZE * 7 + 4} width="14" height="1"  fill={PAL.woodH} />
      <RoundLoaf x={TILE_SIZE * 1 + 9} y={TILE_SIZE * 7 + 6} w={5} h={4} />
      <RoundLoaf x={TILE_SIZE * 1 + 15} y={TILE_SIZE * 7 + 6} w={5} h={4} />
    </g>
  );

  // Tavern (Marcel) — barrels stacked, a sandwich-board sign
  extras.push(<Barrel key="b-tav-1" x={TILE_SIZE * 9 + 4}  y={TILE_SIZE * 7} />);
  extras.push(<Barrel key="b-tav-2" x={TILE_SIZE * 16 + 4} y={TILE_SIZE * 7} />);

  // Fortunes (Vera) — lantern post + crystals (rocks) outside
  extras.push(<Lantern key="l-vera" x={TILE_SIZE * 24 + 6} y={TILE_SIZE * 7 - 4} />);

  // Post Office (Owen) — mailbox out front
  extras.push(<Mailbox key="m-owen" x={TILE_SIZE * 6 + 6} y={TILE_SIZE * 12 + 2} />);

  // Town Hall (Mayor) — bench
  extras.push(<Bench key="bench-mayor" x={TILE_SIZE * 25 + 4} y={TILE_SIZE * 12 + 4} />);

  // === Plaza decorations ===
  // Central well in plaza
  extras.push(<Well key="w-central" x={TILE_SIZE * 13 + 12} y={TILE_SIZE * 10 + 6} />);

  // A bench by the well
  extras.push(<Bench key="bench-plaza" x={TILE_SIZE * 16 + 6} y={TILE_SIZE * 10 + 6} />);

  // Lanterns lining the path
  extras.push(<Lantern key="l-path-1" x={TILE_SIZE * 9 + 6}  y={TILE_SIZE * 9 + 2} />);
  extras.push(<Lantern key="l-path-2" x={TILE_SIZE * 19 + 6} y={TILE_SIZE * 9 + 2} />);
  extras.push(<Lantern key="l-path-3" x={TILE_SIZE * 9 + 6}  y={TILE_SIZE * 11 + 2} />);
  extras.push(<Lantern key="l-path-4" x={TILE_SIZE * 19 + 6} y={TILE_SIZE * 11 + 2} />);

  // Sign post welcoming visitors near spawn
  extras.push(<SignPost key="sp-welcome" x={TILE_SIZE * 14 + 4} y={TILE_SIZE * 9 + 2} text="WELCOME" />);

  // Hay cart parked near tavern
  extras.push(<HayCart key="cart-tav" x={TILE_SIZE * 24 + 4} y={TILE_SIZE * 10 + 2} />);

  // Garden patch
  extras.push(<Garden key="g-1" x={TILE_SIZE * 26} y={TILE_SIZE * 17} />);
  extras.push(<Garden key="g-2" x={TILE_SIZE * 27} y={TILE_SIZE * 17} />);

  // Crate stacks in the south end
  extras.push(<Crates key="c-1" x={TILE_SIZE * 11} y={TILE_SIZE * 17 + 2} />);

  // Fence around garden
  // (decorative only - not blocking; player movement uses tile data)

  // === River bank stones - line both sides of the water ===
  for (let row = 0; row < MAP_H; row++) {
    if (MAP[row][7] === 9) {
      // West bank of stream (left edge)
      const x = 7 * TILE_SIZE;
      const y = row * TILE_SIZE;
      extras.push(
        <g key={`bank-w-${row}`} shapeRendering="crispEdges">
          <rect x={x - 2} y={y} width="3" height={TILE_SIZE} fill={PAL.dirt[2]} />
          <rect x={x - 2} y={y} width="3" height="1" fill={PAL.dirt[0]} />
          <rect x={x - 2} y={y + TILE_SIZE - 1} width="3" height="1" fill={PAL.dirtDk} />
          {/* small bank rocks */}
          {(row % 3 === 0) && (
            <>
              <rect x={x - 1} y={y + 8}  width="2" height="2" fill={PAL.rockM} />
              <rect x={x - 1} y={y + 9}  width="2" height="1" fill={PAL.rockL} />
            </>
          )}
        </g>
      );
    }
    if (MAP[row][8] === 9) {
      // East bank
      const x = 9 * TILE_SIZE;
      const y = row * TILE_SIZE;
      extras.push(
        <g key={`bank-e-${row}`} shapeRendering="crispEdges">
          <rect x={x - 1} y={y} width="3" height={TILE_SIZE} fill={PAL.dirt[2]} />
          <rect x={x - 1} y={y} width="3" height="1" fill={PAL.dirt[0]} />
          <rect x={x - 1} y={y + TILE_SIZE - 1} width="3" height="1" fill={PAL.dirtDk} />
          {(row % 4 === 1) && (
            <>
              <rect x={x} y={y + 14} width="2" height="2" fill={PAL.rockM} />
              <rect x={x} y={y + 15} width="2" height="1" fill={PAL.rockL} />
            </>
          )}
        </g>
      );
    }
  }

  return extras;
};

// Bridge decoration
const BridgeExtras = () => (
  <g shapeRendering="crispEdges">
    {/* Bridge planks */}
    {[0, 1].map(i => {
      const y = (7 + i) * TILE_SIZE;
      const x = 7 * TILE_SIZE;
      return (
        <g key={`bridge-${i}`}>
          <rect x={x} y={y} width={TILE_SIZE * 2} height={TILE_SIZE} fill="#8b5a3c" />
          <rect x={x} y={y} width={TILE_SIZE * 2} height={2} fill="#a06a4a" />
          <rect x={x} y={y + TILE_SIZE - 2} width={TILE_SIZE * 2} height={2} fill={PAL.woodD} />
          {/* plank lines */}
          {[4, 12, 20, 28, 36, 44].map(px => (
            <rect key={px} x={x + px} y={y + 2} width="1" height={TILE_SIZE - 4} fill={PAL.woodD} />
          ))}
          {/* railing posts */}
          <rect x={x - 2} y={y + (i === 0 ? 0 : 18)} width="3" height="6" fill={PAL.woodD} />
          <rect x={x + TILE_SIZE * 2 - 1} y={y + (i === 0 ? 0 : 18)} width="3" height="6" fill={PAL.woodD} />
        </g>
      );
    })}
    {/* Railings - top */}
    <rect x={7 * TILE_SIZE - 2} y={7 * TILE_SIZE - 1} width={TILE_SIZE * 2 + 4} height="2" fill={PAL.woodM} />
    <rect x={7 * TILE_SIZE - 2} y={9 * TILE_SIZE - 1} width={TILE_SIZE * 2 + 4} height="2" fill={PAL.woodM} />
  </g>
);

export { Well, Barrel, Lantern, Bench, HayCart, Mailbox, SignPost, FenceH, Garden, Crates, RoundLoaf, buildExtras, BridgeExtras };
