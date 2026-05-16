import React, { useMemo } from 'react';
import { MAP, MAP_W, MAP_H, TILE_SIZE, TILES, PAL } from './constants.js';
import { tileVariant, hash, PlayerSprite, TileDecoration } from './sprites.jsx';
import { buildExtras, BridgeExtras } from './props.jsx';

// =============================================================================
// WORLD VIEW
// =============================================================================

const World = ({ player, vw, vh, walkFrame }) => {
  const worldW = MAP_W * TILE_SIZE;
  const worldH = MAP_H * TILE_SIZE;
  const px = player.col * TILE_SIZE + TILE_SIZE / 2;
  const py = player.row * TILE_SIZE + TILE_SIZE / 2;
  const camX = Math.max(0, Math.min(worldW - vw, px - vw / 2));
  const camY = Math.max(0, Math.min(worldH - vh, py - vh / 2));

  const sCol = Math.max(0, Math.floor(camX / TILE_SIZE) - 1);
  const eCol = Math.min(MAP_W,  Math.ceil((camX + vw) / TILE_SIZE) + 1);
  const sRow = Math.max(0, Math.floor(camY / TILE_SIZE) - 1);
  const eRow = Math.min(MAP_H, Math.ceil((camY + vh) / TILE_SIZE) + 1);

  const tiles = useMemo(() => {
    const list = [];
    for (let r = sRow; r < eRow; r++) {
      for (let c = sCol; c < eCol; c++) {
        const id = MAP[r][c];
        const def = TILES[id];
        if (!def) continue;
        const x = c * TILE_SIZE, y = r * TILE_SIZE;
        const fill = def.variants ? tileVariant(r, c, def.variants) : '#5a8a3a';
        list.push(<rect key={`t${r}-${c}`} x={x} y={y} width={TILE_SIZE} height={TILE_SIZE} fill={fill} />);

        const h = hash(r, c, 1);
        // Grass noise — multiple layers
        if (id === 0) {
          // Tiny grass tufts
          if (h % 5 === 0) {
            const fc = PAL.grassDk[h % 3];
            const ox = (h % 18) + 2;
            const oy = ((h >> 4) % 18) + 2;
            list.push(<rect key={`gn1-${r}-${c}`} x={x + ox} y={y + oy} width="2" height="1" fill={fc} />);
            list.push(<rect key={`gn1b-${r}-${c}`} x={x + ox + 1} y={y + oy - 1} width="1" height="1" fill={fc} />);
          }
          // Lighter grass highlight
          if (h % 7 === 0) {
            const ox = ((h >> 2) % 20) + 1;
            const oy = ((h >> 6) % 20) + 1;
            list.push(<rect key={`gn2-${r}-${c}`} x={x + ox} y={y + oy} width="1" height="1" fill={PAL.grassHi[h % 2]} />);
          }
          // Tiny single flower
          if (h % 23 === 0) {
            const ox = ((h >> 3) % 18) + 3;
            const oy = ((h >> 7) % 18) + 3;
            list.push(<rect key={`gnf-${r}-${c}`} x={x + ox} y={y + oy} width="1" height="1" fill={PAL.flower[h % PAL.flower.length]} />);
          }
        }
        // Dirt noise
        if (id === 1) {
          if (h % 6 === 0) {
            list.push(<rect key={`dn-${r}-${c}`} x={x + (h % 18) + 2} y={y + ((h >> 4) % 18) + 2} width="2" height="1" fill={PAL.dirtDk} />);
          }
          if (h % 11 === 0) {
            // Small pebble
            list.push(<rect key={`dnp-${r}-${c}`} x={x + ((h >> 2) % 18) + 2} y={y + ((h >> 6) % 18) + 2} width="2" height="2" fill={PAL.rockM} />);
            list.push(<rect key={`dnp2-${r}-${c}`} x={x + ((h >> 2) % 18) + 2} y={y + ((h >> 6) % 18) + 2} width="2" height="1" fill={PAL.rockL} />);
          }
        }
        // Stone path detailing
        if (id === 17) {
          // Mortar lines
          if ((r + c) % 2 === 0) {
            list.push(<rect key={`st-l-${r}-${c}`} x={x} y={y + 11} width={TILE_SIZE} height="1" fill={PAL.stoneDk} opacity="0.5" />);
            list.push(<rect key={`st-v-${r}-${c}`} x={x + 11} y={y} width="1" height={TILE_SIZE} fill={PAL.stoneDk} opacity="0.5" />);
          } else {
            list.push(<rect key={`st-l2-${r}-${c}`} x={x} y={y + 12} width={TILE_SIZE} height="1" fill={PAL.stoneDk} opacity="0.4" />);
          }
          // Worn spots
          if (h % 13 === 0) {
            list.push(<rect key={`st-w-${r}-${c}`} x={x + (h % 16) + 4} y={y + ((h >> 4) % 16) + 4} width="2" height="1" fill={PAL.stone[3]} />);
          }
        }
      }
    }
    return list;
  }, [sRow, eRow, sCol, eCol]);

  const decorations = useMemo(() => {
    const list = [];
    for (let r = sRow; r < eRow; r++) {
      for (let c = sCol; c < eCol; c++) {
        const id = MAP[r][c];
        if (id === 8 || id === 10 || id === 14 || id === 15 || id === 9) {
          list.push(<TileDecoration key={`d${r}-${c}`} tileId={id} x={c * TILE_SIZE} y={r * TILE_SIZE} r={r} c={c} />);
        }
      }
    }
    return list;
  }, [sRow, eRow, sCol, eCol]);

  const extras = useMemo(buildExtras, []);

  return (
    <svg viewBox={`${camX} ${camY} ${vw} ${vh}`} width={vw} height={vh}
         style={{ display: 'block', imageRendering: 'pixelated', background: '#1a0e08' }}
         shapeRendering="crispEdges">
      {tiles}
      {decorations}
      <BridgeExtras />
      {extras}
      <g transform={`translate(${player.col * TILE_SIZE}, ${player.row * TILE_SIZE})`}>
        <PlayerSprite dir={player.dir} walkFrame={walkFrame} />
      </g>
    </svg>
  );
};

export { World };
