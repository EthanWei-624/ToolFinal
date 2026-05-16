import React from 'react';

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

const Baguette = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    <rect x={x} y={y + 1} width="20" height="3" fill="#d89040" />
    <rect x={x} y={y} width="20" height="1" fill="#a8602a" />
    <rect x={x} y={y + 4} width="20" height="1" fill="#7a4520" />
    {[3, 7, 11, 15].map(o => (
      <rect key={o} x={x + o} y={y + 2} width="1" height="1" fill="#a8602a" />
    ))}
    <rect x={x + 1} y={y + 1} width="18" height="1" fill="#f0b46a" />
  </g>
);

const Croissant = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    <rect x={x + 2} y={y} width="9" height="1" fill="#a8602a" />
    <rect x={x + 1} y={y + 1} width="11" height="1" fill="#d89040" />
    <rect x={x} y={y + 2} width="13" height="3" fill="#d89040" />
    <rect x={x + 1} y={y + 5} width="11" height="1" fill="#7a4520" />
    <rect x={x + 2} y={y + 6} width="9" height="1" fill="#7a4520" />
    <rect x={x + 1} y={y + 2} width="11" height="1" fill="#f0b46a" />
    <rect x={x + 4} y={y + 3} width="1" height="1" fill="#a8602a" />
    <rect x={x + 8} y={y + 3} width="1" height="1" fill="#a8602a" />
  </g>
);

const PineappleBun = ({ x, y }) => (
  <g shapeRendering="crispEdges">
    <rect x={x + 1} y={y} width="8" height="1" fill="#a8602a" />
    <rect x={x} y={y + 1} width="10" height="6" fill="#f0b46a" />
    <rect x={x + 1} y={y + 7} width="8" height="1" fill="#7a4520" />
    {[[2,2],[5,2],[8,2],[1,4],[4,4],[7,4],[3,6],[6,6]].map(([dx, dy], i) => (
      <rect key={i} x={x + dx} y={y + dy} width="1" height="1" fill="#a8602a" />
    ))}
  </g>
);

export { RoundLoaf, Baguette, Croissant, PineappleBun };
