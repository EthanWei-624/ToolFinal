import React from 'react';

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

export { WelcomeScreen, computeVp };
