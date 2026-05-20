// =============================================================================
// CONSTANTS
// =============================================================================

const TILE_SIZE = 24;

// =============================================================================
// PALETTES — pulled from a coherent JRPG-ish range
// =============================================================================

const PAL = {
  grass:   ['#4a7a32', '#528a3a', '#5a9242', '#62a04a', '#3a6028', '#467a36', '#508638'],
  grassDk: ['#385824', '#2a4218', '#304820'],
  grassHi: ['#7ab058', '#82b860'],
  dirt:    ['#8a6a3a', '#9a7a4a', '#7a5a2a', '#a08858', '#705028'],
  dirtDk:  '#5a4020',
  stone:   ['#888070', '#a09888', '#706858', '#b8b0a0', '#988878'],
  stoneDk: '#605850',
  water:   ['#3a6a9a', '#4a7aaa', '#5a8aba', '#2a5a8a', '#3268a0'],
  waterDk: '#1a4878',
  waterHi: '#88c8e8',
  waterFoam: '#b8e0f0',
  treeDk:  '#1a3818',
  treeMd:  '#2a5028',
  treeLt:  '#3a6838',
  treeHi:  '#5a8848',
  treeBrk: '#3a2a18',
  treeBrkLt:'#5a3a28',
  bush:    ['#3a6028', '#4a7038', '#2a5018', '#446832'],
  flower:  ['#e84858', '#e8b048', '#e0e878', '#c878e8', '#ffffff', '#f8a058', '#a8d8f0'],
  flowerCtr: '#fff8c8',
  shadow:  'rgba(0,0,0,0.25)',
  shadowDk:'rgba(0,0,0,0.45)',

  roofRed:    ['#a83a2e', '#8b3024', '#c4503a', '#7a2a20'],
  roofRedDk:  '#5a1810',
  roofBlue:   ['#3a5a8a', '#2a4878', '#4a6a9a', '#1a3868'],
  roofBlueDk: '#102858',
  roofGreen:  ['#3a7a4a', '#2a6838', '#4a8a5a', '#1a5828'],
  roofGreenDk:'#0a4818',
  roofPurple: ['#6a3a7a', '#582a68', '#7a4a8a', '#481858'],
  roofPurpleDk:'#380848',
  roofOrange: ['#c46a2a', '#a8581a', '#d47a3a', '#88480a'],
  roofOrangeDk:'#683800',
  roofShade:  'rgba(0,0,0,0.35)',
  wallTan:    ['#e0c898', '#c8a878', '#d8b888', '#b89868'],
  wallTanDk:  '#806040',
  wallShade:  '#806040',
  windowBlue: '#88b8e0',
  windowDk:   '#3a2418',
  windowFr:   '#5a3920',

  woodD: '#3a2418', woodM: '#5a3920', woodL: '#8b5a3c', woodH: '#b08560', woodVH: '#d4a574',
  apron: '#f0e2c4', apronShade: '#c4b48a',
  red: '#c14e3e', redDark: '#8b3a2e',
  shirt: '#a83a2e', ink: '#3a2418', gold: '#e0c46a',

  brickD: '#5a2818', brickM: '#7a3828', brickL: '#9a4838',
  rockD: '#5a5a5a', rockM: '#8a8a8a', rockL: '#b0b0b0',
  metal: '#888888', metalDk: '#444444', metalHi: '#cccccc',
  hay: '#d8b870', hayDk: '#a89050',
  lantern: '#ffd060',
};

// =============================================================================
// TILE TYPES — used by tilemap. variants for noise; structures handled separately.
// =============================================================================

const TILES = {
  0:  { name: 'grass',     walkable: true,  variants: PAL.grass },
  1:  { name: 'dirt',      walkable: true,  variants: PAL.dirt },
  2:  { name: 'wall',      walkable: false, variants: PAL.wallTan },
  3:  { name: 'roof_red',  walkable: false, variants: PAL.roofRed,    decoTop: true },
  4:  { name: 'roof_blue', walkable: false, variants: PAL.roofBlue,   decoTop: true },
  5:  { name: 'roof_green',walkable: false, variants: PAL.roofGreen,  decoTop: true },
  6:  { name: 'roof_purple',walkable: false, variants: PAL.roofPurple,decoTop: true },
  7:  { name: 'roof_orange',walkable: false, variants: PAL.roofOrange,decoTop: true },
  8:  { name: 'tree',      walkable: false, variants: PAL.grass },     // grass beneath; tree drawn over
  9:  { name: 'water',     walkable: false, variants: PAL.water },
  10: { name: 'flower',    walkable: true,  variants: PAL.grass },
  11: { name: 'fence',     walkable: false, variants: PAL.grass },
  13: { name: 'stone',     walkable: true,  variants: PAL.stone },
  14: { name: 'rock',      walkable: true,  variants: PAL.grass },
  15: { name: 'bush',      walkable: false, variants: PAL.grass },
  16: { name: 'bridge',    walkable: true,  variants: ['#8b5a3c', '#a06a4a'] },
  17: { name: 'cobble',    walkable: true,  variants: ['#a09888', '#888070', '#b8b0a0'] },
};

// =============================================================================
// MAP — 30 wide x 22 tall
//
//  West bank (cols 0-6):  Wang's bakery (N), Owen's post (S), separated by stream
//  Stream + bridge (cols 7-8): water, bridge at rows 7-8
//  East bank (cols 9-29): Marcel's tavern (N-center), Vera's fortunes (N-right),
//                          Mayor's town hall (S-right), open plaza center
//
//  Paths: main E-W cobble at rows 7-8; N-S dirt paths at col 4 (west bank)
//         and col 21 (east bank) lead to south doors. Stone forecourts mark
//         each entrance.
// =============================================================================

const MAP = [
  //  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29
  [  8, 8, 8, 8, 8, 8, 8, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8 ], // 0
  [  8, 0, 0,10, 0,10, 0, 9, 9, 0, 0, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0,10, 0, 8 ], // 1
  [  8, 0, 3, 3, 3, 3, 3, 9, 9, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 8 ], // 2
  [  8, 0, 3, 3, 3, 3, 3, 9, 9, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 8 ], // 3
  [  8, 0, 2, 2, 2, 2, 2, 9, 9, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 8 ], // 4
  [  8, 0, 2, 2, 2, 2, 2, 9, 9, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 8, 0, 8 ], // 5
  //       Wang forecourt  stream  Marcel forecourt    gap     Vera forecourt
  [  8,10,10,13,13,13, 0, 9, 9, 0,15,13,13,13, 0, 0, 0, 0,14,15,13,13,13,14, 0, 0, 0,10, 0, 8 ], // 6  ← doors
  [  8, 0,17,17,17,17,17,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17, 1, 8 ], // 7
  [  8, 0,17,17,17,17,17,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17, 1, 8 ], // 8
  //       W-path              plaza area                           E-path (Mayor)
  [  8, 0, 0, 1, 1,15,14, 9, 9, 0, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,15, 0, 0, 8 ], // 9
  [  8, 0, 0, 0, 1, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0,15, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 8 ], // 10 ← player start
  [  8, 0, 0, 8, 1, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 8, 0, 8 ], // 11
  //       Owen forecourt  stream                        Mayor forecourt
  [  8, 0, 0,13,13,13, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,13,13,13, 0, 0, 0,10, 0, 0, 8 ], // 12 ← doors
  [  8, 0, 6, 6, 6, 6, 6, 9, 9, 0, 0,10,10, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0, 0, 0, 8 ], // 13
  [  8, 0, 6, 6, 6, 6, 6, 9, 9, 0, 0, 0,15, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0, 0, 0, 8 ], // 14
  [  8, 0, 2, 2, 2, 2, 2, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 8 ], // 15
  [  8, 0, 2, 2, 2, 2, 2, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 8 ], // 16
  [  8, 0, 0, 0,15, 0, 0, 9, 9, 0,10, 0,14, 0, 0, 0, 0, 0,14, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 8 ], // 17
  [  8, 0, 0,10, 0,15, 0, 9, 9, 0, 0, 0, 0, 0,10, 0, 0,15, 0, 0, 0, 0, 0, 0,10, 0, 0, 0, 0, 8 ], // 18
  [  8, 0,10, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0,10, 0,14, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 0, 0,15, 8 ], // 19
  [  8, 0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0,10, 0, 0, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8 ], // 20
  [  8, 8, 8, 8, 8, 8, 8, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8 ], // 21
];

const MAP_W = MAP[0].length;
const MAP_H = MAP.length;

// Door tiles (in front of buildings)
const DOORS = {
  '6,4':   'wang',
  '6,12':  'marcel',
  '6,21':  'vera',
  '12,4':  'owen',
  '12,21': 'mayor',
};

const SIGNS = {
  '6,4':   "WANG'S",
  '6,12':  "TAVERN",
  '6,21':  "FORTUNES",
  '12,4':  "POST",
  '12,21': "TOWN HALL",
};

const QUEST_CLUES = {
  '1,10':  "MIRA'S LUCKY NUMBER: 7",
  '9,25':  "LAST DELIVERY: MARCH 3",
  '18,24': "WANG'S OVEN: 375°",
  '19,5':  "WORKING TITLE:\nTHE WEIGHT OF SMALL WINDOWS",
  '20,17': "FOUNDED: 1887",
};
const getClueAt = (r, c) => QUEST_CLUES[`${r},${c}`] || null;

const PLAYER_START = { row: 10, col: 14 };

const isWalkable = (r, c) => {
  if (r < 0 || r >= MAP_H || c < 0 || c >= MAP_W) return false;
  return TILES[MAP[r][c]]?.walkable ?? false;
};
const getDoorAt = (r, c) => DOORS[`${r},${c}`] || null;

export { TILE_SIZE, PAL, TILES, MAP, MAP_W, MAP_H, DOORS, SIGNS, QUEST_CLUES, getClueAt, PLAYER_START, isWalkable, getDoorAt };
