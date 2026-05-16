import React from 'react';
import { WangScene } from './scenes-wang.jsx';
import { MarcelScene } from './scenes-marcel.jsx';
import { VeraScene } from './scenes-vera.jsx';
import { OwenScene } from './scenes-owen.jsx';
import { MayorScene } from './scenes-mayor.jsx';

const NpcScene = ({ npcId, talking, mood }) => {
  switch (npcId) {
    case 'wang':   return <WangScene   talking={talking} mood={mood} />;
    case 'marcel': return <MarcelScene talking={talking} mood={mood} />;
    case 'vera':   return <VeraScene   talking={talking} mood={mood} />;
    case 'owen':   return <OwenScene   talking={talking} mood={mood} />;
    case 'mayor':  return <MayorScene  talking={talking} mood={mood} />;
    default:       return <WangScene   talking={talking} mood={mood} />;
  }
};

export { NpcScene };
