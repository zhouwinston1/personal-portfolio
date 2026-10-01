// Small schematic illustrations for the featured projects.

const bars = [38, 52, 44, 66, 58, 81, 74, 96]

export function DashboardVisual() {
  const x0 = 40
  const w = 30
  const gap = 12
  const base = 210
  const line = bars
    .map((h, i) => `${i ? "L" : "M"}${x0 + i * (w + gap) + w / 2},${base - h * 1.15 - 14}`)
    .join(" ")

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Schematic of a prompt becoming a chart">
      <rect x="24" y="20" width="352" height="34" rx="3" className="fill-background stroke-border" />
      <text x="38" y="42" className="fill-signal font-mono text-[11px]">›</text>
      <text x="52" y="42" className="fill-foreground font-mono text-[11px]">
        weekly volume by region, last 8 wks
      </text>
      <rect x="326" y="31" width="2" height="13" className="caret fill-foreground" />

      <g className="font-mono text-[9px] uppercase">
        {["profile", "plan", "render"].map((s, i) => (
          <g key={s} transform={`translate(${40 + i * 92} 72)`}>
            <circle r="3" cx="3" cy="-3" className={i === 2 ? "fill-signal" : "fill-muted-foreground"} />
            <text x="12" y="0" className="fill-muted-foreground tracking-widest">{s}</text>
            {i < 2 && <line x1="64" y1="-3" x2="84" y2="-3" className="stroke-border" strokeDasharray="2 3" />}
          </g>
        ))}
      </g>

      <line x1="30" y1={base} x2="376" y2={base} className="stroke-foreground/40" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={x0 + i * (w + gap)}
          y={base - h * 1.15}
          width={w}
          height={h * 1.15}
          className={i >= 5 ? "fill-signal" : "fill-foreground/15"}
        />
      ))}
      <path
        d={line}
        fill="none"
        strokeWidth="1.5"
        className="stroke-foreground"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
        style={{ animation: "draw 2.4s 0.4s ease-out forwards" }}
      />
    </svg>
  )
}

const nodes = [
  { id: "a", x: 24, y: 40, label: "src.loans_csv" },
  { id: "b", x: 24, y: 150, label: "src.crm_api" },
  { id: "c", x: 150, y: 95, label: "stg.accounts" },
  { id: "d", x: 276, y: 40, label: "fct.exposure" },
  { id: "e", x: 276, y: 150, label: "dim.owner" },
]
const W = 100
const H = 30

function edge(from: string, to: string) {
  const a = nodes.find((n) => n.id === from)!
  const b = nodes.find((n) => n.id === to)!
  const x1 = a.x + W
  const y1 = a.y + H / 2
  const x2 = b.x
  const y2 = b.y + H / 2
  const mx = (x1 + x2) / 2
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`
}

export function LineageVisual() {
  const hot = new Set(["a", "c", "d"])
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label="Schematic of a data lineage graph">
      {[
        ["b", "c"],
        ["c", "e"],
      ].map(([f, t]) => (
        <path key={f + t} d={edge(f, t)} fill="none" className="stroke-foreground/30" strokeDasharray="3 3" />
      ))}
      {[
        ["a", "c"],
        ["c", "d"],
      ].map(([f, t], i) => (
        <path
          key={f + t}
          d={edge(f, t)}
          fill="none"
          strokeWidth="1.75"
          className="stroke-signal"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1}
          style={{ animation: `draw 0.9s ${0.4 + i * 0.8}s ease-out forwards` }}
        />
      ))}
      {nodes.map((n) => (
        <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
          <rect
            width={W}
            height={H}
            rx="3"
            className={hot.has(n.id) ? "fill-background stroke-signal" : "fill-background stroke-border"}
          />
          <text x="10" y="19" className="fill-foreground font-mono text-[9.5px]">
            {n.label}
          </text>
        </g>
      ))}
      <text x="24" y="222" className="fill-muted-foreground font-mono text-[9px] uppercase tracking-widest">
        3 hops · owner resolved
      </text>
    </svg>
  )
}
