import React, { useState, useEffect, useCallback } from 'react';
import { PLAYER_START, isWalkable, getDoorAt, PAL } from './constants.js';
import { NPCS } from './npcs.js';
import { World } from './world.jsx';
import { ChatOverlay } from './chat.jsx';

// =============================================================================
// INVENTORY
// =============================================================================

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

// =============================================================================
// MAIN APP
// =============================================================================

export default function App() {
  const [player, setPlayer] = useState({ ...PLAYER_START, dir: 'down' });
  const [walkFrame, setWalkFrame] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [npcHistories, setNpcHistories] = useState({});
  const [npcMet, setNpcMet] = useState({});
  const [activeNpc, setActiveNpc] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Patrick+Hand&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const [vp, setVp] = useState(() => computeVp());
  useEffect(() => {
    const onResize = () => setVp(computeVp());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const movePlayer = useCallback((row, col, dir) => {
    setPlayer(prev => ({ row, col, dir: dir || prev.dir }));
    setWalkFrame(f => 1 - f);
  }, []);

  const handleEnterDoor = useCallback((npcId) => {
    setActiveNpc(npcId);
    setNpcMet(prev => ({ ...prev, [npcId]: true }));
  }, []);

  const handleCloseChat = useCallback(() => {
    setPlayer(prev => {
      const { row, col } = prev;
      const tries = [[row + 1, col], [row, col + 1], [row, col - 1], [row - 1, col]];
      for (const [tr, tc] of tries) {
        if (isWalkable(tr, tc) && !getDoorAt(tr, tc)) {
          return { row: tr, col: tc, dir: 'down' };
        }
      }
      return prev;
    });
    setActiveNpc(null);
  }, []);

  const handleMessage = useCallback((msg) => {
    setNpcHistories(prev => ({
      ...prev,
      [activeNpc]: [...(prev[activeNpc] || []), msg],
    }));
  }, [activeNpc]);

  const handleItemReceived = useCallback((item) => {
    setInventory(prev => {
      if (prev.some(i => i.id === item.id && i.fromNpc === activeNpc)) return prev;
      return [...prev, { ...item, fromNpc: activeNpc }];
    });
  }, [activeNpc]);

  const resetGame = useCallback(() => {
    if (!window.confirm('Reset all progress?')) return;
    setPlayer({ ...PLAYER_START, dir: 'down' });
    setInventory([]);
    setNpcHistories({});
    setNpcMet({});
  }, []);

  useEffect(() => {
    const paused = !!activeNpc || showWelcome;
    if (paused) return;

    const heldKeys = new Set();
    let moveLock = 0;

    const tryMove = (dir) => {
      const now = performance.now();
      if (now - moveLock < 130) return;
      let r = player.row, c = player.col;
      if (dir === 'up') r -= 1;
      if (dir === 'down') r += 1;
      if (dir === 'left') c -= 1;
      if (dir === 'right') c += 1;
      if (!isWalkable(r, c)) {
        movePlayer(player.row, player.col, dir);
        moveLock = now;
        return;
      }
      movePlayer(r, c, dir);
      moveLock = now;
      const npcId = getDoorAt(r, c);
      if (npcId) handleEnterDoor(npcId);
    };

    const dirFromKey = (k) => {
      const key = k.toLowerCase();
      if (key === 'arrowup' || key === 'w') return 'up';
      if (key === 'arrowdown' || key === 's') return 'down';
      if (key === 'arrowleft' || key === 'a') return 'left';
      if (key === 'arrowright' || key === 'd') return 'right';
      return null;
    };

    const onDown = (e) => {
      const dir = dirFromKey(e.key);
      if (!dir) return;
      e.preventDefault();
      heldKeys.add(dir);
      tryMove(dir);
    };
    const onUp = (e) => {
      const dir = dirFromKey(e.key);
      if (!dir) return;
      heldKeys.delete(dir);
    };

    let raf;
    const loop = () => {
      if (heldKeys.size > 0) {
        for (const d of ['up', 'down', 'left', 'right']) {
          if (heldKeys.has(d)) { tryMove(d); break; }
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
      cancelAnimationFrame(raf);
    };
  }, [player, movePlayer, handleEnterDoor, activeNpc, showWelcome]);

  const npcHistory = activeNpc ? (npcHistories[activeNpc] || []) : [];
  const isFirstMeeting = activeNpc ? !npcMet[activeNpc] || npcHistory.length === 0 : true;

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: 'linear-gradient(180deg, #1a0e08 0%, #2a1a0e 50%, #1a0e08 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Patrick Hand', 'Comic Sans MS', sans-serif",
      padding: '12px', boxSizing: 'border-box',
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", color: '#e0c46a',
        fontSize: '14px', letterSpacing: '2px', marginBottom: '8px',
        textShadow: '2px 2px 0 #3a2418', textAlign: 'center',
      }}>★ THE TOWN THAT DIDN'T ★</div>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", color: '#a89070',
        fontSize: '7px', letterSpacing: '1px',
        marginBottom: '12px', opacity: 0.7,
      }}>ARROW KEYS / WASD TO MOVE</div>

      <div style={{
        border: '4px solid #5a3920', boxShadow: '6px 6px 0 #1a0e08',
        background: '#1a0e08',
      }}>
        <World player={player} vw={vp.w} vh={vp.h} walkFrame={walkFrame} />
      </div>

      <Inventory inventory={inventory} onReset={resetGame} />

      {activeNpc && (
        <ChatOverlay key={activeNpc} npcId={activeNpc}
          history={npcHistory} isFirstMeeting={isFirstMeeting}
          onClose={handleCloseChat} onMessage={handleMessage}
          onItemReceived={handleItemReceived}
        />
      )}

      {showWelcome && <WelcomeScreen onClose={() => setShowWelcome(false)} />}

      <style>{`@keyframes townblink {
        0%, 60%, 100% { opacity: 0.3; }
        30% { opacity: 1; }
      }`}</style>
    </div>
  );
}

const WelcomeScreen = ({ onClose }) => (
  <div style={{
    position: 'fixed', inset: 0,
    background: 'rgba(20, 12, 6, 0.95)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 200, fontFamily: "'Patrick Hand', sans-serif", padding: '20px',
  }}>
    <div style={{
      maxWidth: '480px', background: '#3a2418',
      border: '4px solid #b08560',
      borderRight: '4px solid #1a0e08', borderBottom: '4px solid #1a0e08',
      padding: '24px', color: '#f0e2c4', textAlign: 'center',
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", color: '#e0c46a',
        fontSize: '14px', letterSpacing: '2px',
        marginBottom: '16px', lineHeight: 1.6,
      }}>THE TOWN<br/>THAT DIDN'T</div>
      <div style={{ fontSize: '17px', lineHeight: '1.6', marginBottom: '20px' }}>
        A small town. Five people who never quite got where they were going.<br/><br/>
        Each of them has something. Each has a reason they won't give it to you.<br/><br/>
        Find out why.
      </div>
      <button onClick={onClose} style={{
        background: '#c14e3e', border: '3px solid #8b3a2e',
        color: '#f0e2c4', fontFamily: "'Press Start 2P', monospace",
        fontSize: '11px', padding: '12px 20px',
        cursor: 'pointer', letterSpacing: '1px',
        boxShadow: '3px 3px 0 #1a0e08',
      }}>ENTER THE TOWN</button>
    </div>
  </div>
);

function computeVp() {
  const maxW = Math.min(window.innerWidth - 48, 720);
  const maxH = Math.min(window.innerHeight - 200, 480);
  const w = Math.floor(maxW / 24) * 24;
  const h = Math.floor(maxH / 24) * 24;
  return { w: Math.max(360, w), h: Math.max(264, h) };
}
