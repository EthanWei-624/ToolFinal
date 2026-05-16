import React, { useState, useEffect, useCallback } from 'react';
import { PLAYER_START, isWalkable, getDoorAt } from './constants.js';
import { World } from './world.jsx';
import { ChatOverlay } from './chat.jsx';
import { Inventory } from './inventory.jsx';
import { WelcomeScreen, computeVp } from './welcome.jsx';

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
