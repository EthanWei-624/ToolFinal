import React, { useState, useEffect, useCallback } from 'react';
import { PLAYER_START, isWalkable, getDoorAt, getClueAt } from './constants.js';
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
  const [questStates, setQuestStates] = useState({ wang: 'idle', marcel: 'idle', vera: 'idle', owen: 'idle', mayor: 'idle' });
  const [activeClue, setActiveClue] = useState(null);
  const [showEnding, setShowEnding] = useState(false);

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

  useEffect(() => {
    setActiveClue(getClueAt(player.row, player.col));
  }, [player.row, player.col]);

  useEffect(() => {
    if (inventory.length >= 5) setShowEnding(true);
  }, [inventory.length]);

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

  const handleQuestActivated = useCallback(() => {
    setQuestStates(prev => ({ ...prev, [activeNpc]: 'active' }));
  }, [activeNpc]);

  const handleQuestComplete = useCallback(() => {
    setQuestStates(prev => ({ ...prev, [activeNpc]: 'complete' }));
  }, [activeNpc]);

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
    setQuestStates({ wang: 'idle', marcel: 'idle', vera: 'idle', owen: 'idle', mayor: 'idle' });
    setShowEnding(false);
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

      {activeClue && (
        <div style={{
          fontFamily: "'Patrick Hand', sans-serif",
          background: '#3a2418', border: '3px solid #b08560',
          borderTop: 'none', color: '#f0e2c4',
          padding: '8px 16px', textAlign: 'center',
          fontSize: '14px', whiteSpace: 'pre-line',
          width: vp.w + 8, boxSizing: 'border-box',
          boxShadow: '3px 3px 0 #1a0e08',
        }}>
          📜 {activeClue}
        </div>
      )}

      <Inventory inventory={inventory} onReset={resetGame} />

      {activeNpc && (
        <ChatOverlay key={activeNpc} npcId={activeNpc}
          history={npcHistory} isFirstMeeting={isFirstMeeting}
          onClose={handleCloseChat} onMessage={handleMessage}
          onItemReceived={handleItemReceived}
          questState={questStates[activeNpc]}
          onQuestActivated={handleQuestActivated}
          onQuestComplete={handleQuestComplete}
        />
      )}

      {showWelcome && <WelcomeScreen onClose={() => setShowWelcome(false)} />}

      {showEnding && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(10, 6, 3, 0.97)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 300, fontFamily: "'Press Start 2P', monospace", padding: '20px',
        }}>
          <div style={{
            maxWidth: '500px', color: '#f0e2c4', textAlign: 'center', padding: '32px',
            background: '#3a2418', border: '4px solid #b08560',
            borderRight: '4px solid #1a0e08', borderBottom: '4px solid #1a0e08',
          }}>
            <div style={{ color: '#e0c46a', fontSize: '12px', letterSpacing: '2px', marginBottom: '24px', lineHeight: 1.8 }}>
              ★ YOU LEAVE THE TOWN ★
            </div>
            <div style={{ fontSize: '13px', lineHeight: 1.9, marginBottom: '24px', fontFamily: "'Patrick Hand', sans-serif" }}>
              You found them. Five things, each held too long.<br /><br />
              The town watches you go. No one waves.<br /><br />
              Maybe they're used to it by now.
            </div>
            <div style={{ fontSize: '9px', marginBottom: '12px', color: '#a89070', letterSpacing: '1px' }}>ITEMS COLLECTED</div>
            {inventory.map(item => (
              <div key={item.id} style={{ fontSize: '11px', lineHeight: 2, color: '#e0c46a' }}>
                · {item.name.toUpperCase()}
              </div>
            ))}
            <button onClick={() => { setPlayer({...PLAYER_START, dir: 'down'}); setInventory([]); setNpcHistories({}); setNpcMet({}); setQuestStates({wang:'idle',marcel:'idle',vera:'idle',owen:'idle',mayor:'idle'}); setShowEnding(false); }} style={{
              marginTop: '24px',
              background: '#c14e3e', border: '3px solid #8b3a2e',
              color: '#f0e2c4', fontFamily: "'Press Start 2P', monospace",
              fontSize: '10px', padding: '12px 20px', cursor: 'pointer',
              letterSpacing: '1px', boxShadow: '3px 3px 0 #1a0e08',
            }}>PLAY AGAIN</button>
          </div>
        </div>
      )}

      <style>{`@keyframes townblink {
        0%, 60%, 100% { opacity: 0.3; }
        30% { opacity: 1; }
      }`}</style>
    </div>
  );
}
