import React, { useState } from 'react';
import { PAL } from './constants.js';
import { NPCS } from './npcs.js';

const ITEM_EMOJI = { bread: '🍞', page: '📄', crystal: '💎', envelope: '✉', key: '🗝' };
const NPC_ORDER = ['wang', 'marcel', 'vera', 'owen', 'mayor'];

const Inventory = ({ inventory, onReset }) => {
  const [hovered, setHovered] = useState(null);
  const itemsByNpc = {};
  for (const item of inventory) itemsByNpc[item.fromNpc] = item;

  return (
    <div style={{
      position: 'fixed', top: '12px', right: '12px',
      background: 'rgba(58, 36, 24, 0.92)',
      border: `3px solid ${PAL.woodH}`,
      borderRight: `3px solid ${PAL.woodD}`, borderBottom: `3px solid ${PAL.woodD}`,
      padding: '10px 12px', fontFamily: "'Press Start 2P', monospace",
      color: PAL.apron, fontSize: '8px', letterSpacing: '1px',
      zIndex: 50, maxWidth: '200px',
    }}>
      <div style={{ marginBottom: '8px', color: PAL.gold, textAlign: 'center' }}>
        ★ {inventory.length}/5 ★
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px' }}>
        {NPC_ORDER.map(id => {
          const got = itemsByNpc[id];
          return (
            <div key={id}
              onMouseEnter={() => setHovered(id)} onMouseLeave={() => setHovered(null)}
              style={{
                width: '28px', height: '28px',
                background: got ? PAL.gold : '#2a1a0e',
                border: `2px solid ${got ? '#fff8c8' : PAL.woodM}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', color: got ? PAL.woodD : PAL.woodM,
                cursor: got ? 'help' : 'default',
              }}
              title={got ? got.name : `from ${NPCS[id].displayName}`}
            >{got ? ITEM_EMOJI[got.id] : '?'}</div>
          );
        })}
      </div>
      {hovered && itemsByNpc[hovered] && (
        <div style={{
          marginTop: '8px', padding: '6px 8px',
          background: '#1a0e08', border: `1px solid ${PAL.woodM}`,
          fontFamily: "'Patrick Hand', sans-serif", fontSize: '12px',
          color: PAL.apron, letterSpacing: '0', lineHeight: '1.3',
        }}>
          <strong>{itemsByNpc[hovered].name}</strong>
        </div>
      )}
      <button onClick={onReset} style={{
        marginTop: '10px', width: '100%', background: 'transparent',
        border: `1px solid ${PAL.woodM}`, color: PAL.apron,
        fontFamily: "'Press Start 2P', monospace", fontSize: '7px',
        padding: '4px', cursor: 'pointer', letterSpacing: '1px', opacity: 0.6,
      }}>RESET</button>
    </div>
  );
};

export { Inventory };
