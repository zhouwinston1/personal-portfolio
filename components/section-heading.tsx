export function SectionHeading({
  index,
  stage,
  title,
}: {
  index: string
  stage: string
  title: React.ReactNode
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 border-t border-foreground/80 pt-4 sm:mb-14 sm:flex-row sm:items-baseline sm:justify-between">
      <h2 className="font-display text-5xl leading-none tracking-tight sm:text-6xl">{title}</h2>
      <p className="label order-first sm:order-none">
        <span className="text-signal">{index}</span> / {stage}
      </p>
    </div>
  )
}
