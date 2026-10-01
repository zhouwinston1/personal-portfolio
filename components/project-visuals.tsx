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
