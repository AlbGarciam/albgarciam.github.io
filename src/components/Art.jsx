// Line illustrations for the projects. Drawn in code so no image has to be
// hosted anywhere; the motion comes from CSS (see ".art" in styles.css).

const NODES = [
  [120, 150], [260, 80], [400, 170], [300, 260], [160, 300], [470, 300], [520, 110],
];
const LINKS = [
  [0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [0, 4], [2, 5], [3, 5], [2, 6], [1, 6],
];

function Nalu() {
  return (
    <svg viewBox="0 0 640 400" className="art">
      {LINKS.map(([a, b], i) => (
        <line
          key={i}
          className="art__dash"
          style={{ animationDelay: `${i * -0.7}s` }}
          x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]}
        />
      ))}
      {NODES.map(([cx, cy], i) => (
        <g key={i}>
          <circle className="art__pulse" style={{ animationDelay: `${i * -0.55}s` }} cx={cx} cy={cy} r="14" />
          <circle className={i === 3 ? 'art__fill art__fill--hot' : 'art__fill'} cx={cx} cy={cy} r={i === 3 ? 16 : 9} />
        </g>
      ))}
    </svg>
  );
}

function Pacer() {
  return (
    <svg viewBox="0 0 640 400" className="art">
      {[150, 115, 80].map((r, i) => (
        <circle
          key={r}
          className="art__ring"
          style={{ animationDelay: `${i * 0.25}s` }}
          cx="200" cy="200" r={r}
          pathLength="100"
          strokeDasharray={`${82 - i * 16} 100`}
          transform="rotate(-90 200 200)"
        />
      ))}
      <circle className="art__fill art__fill--hot" cx="200" cy="200" r="12" />
      <path
        className="art__trace"
        pathLength="100"
        d="M330 250 C360 250 365 150 395 150 S430 230 460 230 495 110 525 110 560 190 600 190"
      />
      <line className="art__guide" x1="330" y1="180" x2="600" y2="180" />
    </svg>
  );
}

// Isometric tiles: a small world with one tile that does not sit still.
const TILES = [];
for (let row = 0; row < 4; row += 1) {
  for (let col = 0; col < 4; col += 1) {
    TILES.push({ x: 320 + (col - row) * 62, y: 110 + (col + row) * 36, key: `${row}-${col}`, lost: row === 1 && col === 2 });
  }
}

function Lost() {
  return (
    <svg viewBox="0 0 640 400" className="art">
      {TILES.map((tile, i) => (
        <g
          key={tile.key}
          className={tile.lost ? 'art__tile art__tile--lost' : 'art__tile'}
          style={{ animationDelay: `${i * -0.3}s` }}
          transform={`translate(${tile.x} ${tile.y})`}
        >
          <g>
            <path d="M0 0 62 36 0 72 -62 36Z" />
            <path d="M-62 36V58L0 94V72M0 94 62 58V36" />
          </g>
        </g>
      ))}
    </svg>
  );
}

const ART = { nalu: Nalu, pacer: Pacer, lost: Lost };

export function ProjectArt({ id }) {
  const Drawing = ART[id];
  return <Drawing />;
}
