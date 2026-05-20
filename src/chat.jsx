import React, { useState, useRef, useEffect } from 'react';
import { NPCS } from './npcs.js';
import { PAL } from './constants.js';
import { NpcScene } from './npc-scene.jsx';

// =============================================================================
// CHAT OVERLAY — now shows scene above, chat below
// =============================================================================

const parseGiveToken = (text) => {
  const giveRegex = /\[GIVE(?::[^\]]*)?\]\s*/i;
  if (giveRegex.test(text)) return { gave: true, cleanText: text.replace(giveRegex, '').trim() };
  return { gave: false, cleanText: text };
};

const parseQuestToken = (text) => {
  const regex = /\[QUEST\]\s*/i;
  if (regex.test(text)) return { hadQuest: true, cleanText: text.replace(regex, '').trim() };
  return { hadQuest: false, cleanText: text };
};

const ChatOverlay = ({ npcId, history, isFirstMeeting, onClose, onMessage, onItemReceived, questState = 'idle', onQuestActivated = () => {}, onQuestComplete = () => {} }) => {
  const npc = NPCS[npcId];
  if (!npc) return null;

  const seedIntro = history.length === 0
    ? [{ role: 'assistant', content: isFirstMeeting ? npc.intro : npc.reentryIntro }]
    : [];

  const [messages, setMessages] = useState([...seedIntro, ...history]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [itemReceived, setItemReceived] = useState(false);
  const [talking, setTalking] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);
  const seededRef = useRef(false);

  const mood = itemReceived ? 'gave' : 'normal';

  useEffect(() => {
    if (history.length === 0 && seedIntro.length > 0 && !seededRef.current) {
      onMessage(seedIntro[0]);
      seededRef.current = true;
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, loading]);

  useEffect(() => { inputRef.current?.focus(); }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    onMessage(userMsg);
    setInput('');
    setLoading(true);
    setTalking(true);

    let questAddition = '';
    let triggeredNow = false;
    if (npc.quest && questState !== 'complete') {
      const msgLower = userMsg.content.toLowerCase();
      const hasCorrectAnswer = npc.quest.acceptedAnswers.some(a => msgLower.includes(a.toLowerCase()));
      if (hasCorrectAnswer && (questState === 'idle' || questState === 'active')) {
        triggeredNow = true;
        onQuestActivated();
        questAddition = `\n\n[QUEST ANSWER — CORRECT — MANDATORY]\nThe player found the correct answer and brought it back to you. You MUST begin your reply with the literal token [GIVE] on its own line (no other text before it). Then react in-character with genuine surprise or emotion. Do not skip [GIVE].`;
      } else if (questState === 'idle' && npc.quest.triggerKeywords.some(kw => msgLower.includes(kw))) {
        triggeredNow = true;
        onQuestActivated();
        questAddition = `\n\n[HIDDEN QUEST — ACTIVATE NOW]\nStart your reply with the token [QUEST] on its own line. Then in your own voice and character, send the player on a quest to find something written somewhere in town. The underlying challenge: "${npc.quest.question}" Be in-character and mysterious.`;
      } else if (questState === 'active') {
        questAddition = `\n\n[QUEST — STILL SEARCHING]\nYou are waiting for the player to bring back a specific answer from somewhere in town. If they seem to be guessing or giving wrong answers, tell them in-character that they haven't found the right thing yet. If talking about something else, respond normally.`;
      }
    }

    try {
      const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
      if (!apiKey) throw new Error('API key missing — rename your env file to .env and restart npm run dev');
      const response = await fetch("/anthropic-api/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 400,
          system: npc.systemPrompt + questAddition,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(`API ${response.status}: ${data.error?.message || response.statusText}`);
      const rawReply = data.content?.filter(b => b.type === 'text')?.map(b => b.text)?.join('\n') || "...";
      const { hadQuest, cleanText: afterQuest } = parseQuestToken(rawReply);
      const { gave, cleanText } = parseGiveToken(afterQuest);
      const assistantMsg = { role: 'assistant', content: cleanText };
      setMessages([...newMessages, assistantMsg]);
      onMessage(assistantMsg);
      if (gave && !itemReceived) {
        setItemReceived(true);
        onItemReceived(npc.item);
        if (questState === 'active' || triggeredNow) onQuestComplete();
      }
    } catch (error) {
      const errorMsg = { role: 'assistant', content: `...error: ${error.message}` };
      setMessages([...newMessages, errorMsg]);
      onMessage(errorMsg);
    } finally {
      setLoading(false);
      setTimeout(() => setTalking(false), 1500);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(20, 12, 6, 0.92)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
      fontFamily: "'Patrick Hand', 'Comic Sans MS', sans-serif",
      padding: '12px', boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%', maxWidth: '720px',
        display: 'flex', flexDirection: 'column',
        maxHeight: '95vh',
      }}>
        {/* Title bar */}
        <div style={{
          background: PAL.woodM, padding: '8px 14px',
          borderTop: `4px solid ${PAL.woodH}`, borderLeft: `4px solid ${PAL.woodH}`,
          borderRight: `4px solid ${PAL.woodD}`,
          fontFamily: "'Press Start 2P', monospace", color: PAL.apron,
          fontSize: '10px', letterSpacing: '1px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexShrink: 0,
        }}>
          <div>★ {npc.displayName} ★</div>
          <button onClick={onClose} style={{
            background: 'transparent', border: 'none', color: PAL.apron,
            fontFamily: "'Press Start 2P', monospace", fontSize: '10px',
            cursor: 'pointer', padding: '0 4px',
          }} title="Leave (Esc)">✕ LEAVE</button>
        </div>

        {questState === 'active' && (
          <div style={{
            background: '#2a4818', padding: '5px 14px',
            borderLeft: `4px solid ${PAL.woodH}`, borderRight: `4px solid ${PAL.woodD}`,
            fontFamily: "'Press Start 2P', monospace", color: '#7ab058',
            fontSize: '8px', textAlign: 'center', letterSpacing: '1px',
            flexShrink: 0,
          }}>
            ✦ QUEST ACTIVE — FIND THE ANSWER IN TOWN ✦
          </div>
        )}
        {questState === 'complete' && (
          <div style={{
            background: '#1a3810', padding: '5px 14px',
            borderLeft: `4px solid ${PAL.woodH}`, borderRight: `4px solid ${PAL.woodD}`,
            fontFamily: "'Press Start 2P', monospace", color: '#e0c46a',
            fontSize: '8px', textAlign: 'center', letterSpacing: '1px',
            flexShrink: 0,
          }}>
            ✦ QUEST COMPLETE ✦
          </div>
        )}

        {/* SCENE */}
        <div style={{
          background: '#000',
          borderLeft: `4px solid ${PAL.woodH}`, borderRight: `4px solid ${PAL.woodD}`,
          flexShrink: 0,
        }}>
          <NpcScene npcId={npcId} talking={talking} mood={mood} />
        </div>

        {/* Chat box */}
        <div style={{
          background: PAL.apron, padding: '12px 14px',
          borderLeft: `4px solid ${PAL.woodH}`, borderRight: `4px solid ${PAL.woodD}`,
          minHeight: '120px', maxHeight: '180px', overflowY: 'auto',
          backgroundImage: `repeating-linear-gradient(0deg, transparent 0 23px, ${PAL.apronShade}40 23px 24px)`,
          flex: 1,
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              marginBottom: '10px', display: 'flex',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
              gap: '6px', alignItems: 'flex-start',
            }}>
              <div style={{
                background: msg.role === 'user' ? PAL.shirt : PAL.woodM,
                color: PAL.apron, padding: '3px 7px', fontSize: '8px',
                fontFamily: "'Press Start 2P', monospace", fontWeight: 'bold',
                whiteSpace: 'nowrap', border: `2px solid ${PAL.woodD}`,
                boxShadow: `2px 2px 0 ${PAL.woodD}`, marginTop: '2px', letterSpacing: '1px',
                flexShrink: 0,
              }}>{msg.role === 'user' ? 'YOU' : npc.displayName}</div>
              <div style={{
                background: msg.role === 'user' ? '#fff5e6' : '#fff',
                border: `2px solid ${msg.role === 'user' ? PAL.shirt : PAL.woodM}`,
                padding: '6px 10px', fontSize: '16px', lineHeight: '1.4',
                color: PAL.ink, maxWidth: 'calc(100% - 70px)',
                boxShadow: `2px 2px 0 ${PAL.woodD}`, whiteSpace: 'pre-wrap',
              }}>{msg.content}</div>
            </div>
          ))}
          {loading && (
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <div style={{
                background: PAL.woodM, color: PAL.apron, padding: '3px 7px',
                fontSize: '8px', fontFamily: "'Press Start 2P', monospace",
                border: `2px solid ${PAL.woodD}`, boxShadow: `2px 2px 0 ${PAL.woodD}`,
                letterSpacing: '1px',
              }}>{npc.displayName}</div>
              <div style={{
                background: '#fff', border: `2px solid ${PAL.woodM}`,
                padding: '6px 12px', color: PAL.ink, fontSize: '16px',
                letterSpacing: '4px', boxShadow: `2px 2px 0 ${PAL.woodD}`,
              }}>
                <span style={{ animation: 'townblink 1.4s infinite' }}>·</span>
                <span style={{ animation: 'townblink 1.4s infinite 0.2s' }}>·</span>
                <span style={{ animation: 'townblink 1.4s infinite 0.4s' }}>·</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {itemReceived && (
          <div style={{
            background: '#e0c46a', border: `4px solid ${PAL.woodD}`,
            borderTop: `4px solid ${PAL.woodH}`, color: PAL.ink,
            padding: '8px 12px', fontFamily: "'Press Start 2P', monospace",
            fontSize: '10px', textAlign: 'center', letterSpacing: '1px',
            flexShrink: 0,
          }}>
            ✦ RECEIVED: {npc.item.name.toUpperCase()} ✦
          </div>
        )}

        {/* Input */}
        <div style={{
          background: '#3a2418', padding: '10px 12px',
          display: 'flex', gap: '8px',
          borderLeft: `4px solid ${PAL.woodH}`, borderRight: `4px solid ${PAL.woodD}`,
          borderBottom: `4px solid ${PAL.woodD}`, flexShrink: 0,
        }}>
          <input ref={inputRef} type="text" value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey} disabled={loading}
            placeholder={`say something to ${npc.displayName.toLowerCase()}...`}
            style={{
              flex: 1, background: PAL.apron, border: `3px solid ${PAL.woodH}`,
              padding: '8px 10px', fontSize: '15px',
              fontFamily: "'Patrick Hand', sans-serif", color: PAL.ink, outline: 'none',
              boxShadow: `inset 2px 2px 0 ${PAL.apronShade}`,
            }}
          />
          <button onClick={sendMessage} disabled={loading || !input.trim()}
            style={{
              background: input.trim() && !loading ? PAL.red : PAL.woodM, color: PAL.apron,
              border: `3px solid ${input.trim() && !loading ? PAL.redDark : PAL.woodD}`,
              padding: '0 14px', fontSize: '10px',
              fontFamily: "'Press Start 2P', monospace", fontWeight: 'bold',
              cursor: input.trim() && !loading ? 'pointer' : 'default',
              boxShadow: `3px 3px 0 ${PAL.woodD}`, letterSpacing: '1px',
            }}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export { ChatOverlay };
