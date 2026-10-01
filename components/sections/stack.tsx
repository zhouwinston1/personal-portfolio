import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { skills } from "@/lib/data"

export function Stack() {
  return (
    <section id="stack" className="py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          index="03"
          stage="Stack"
          title={
            <>
              Tools I <span className="italic">reach for</span>
            </>
          }
        />
      </Reveal>
      <div className="border-y">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 60} className="border-t first:border-t-0">
            <div className="grid gap-3 py-5 md:grid-cols-[11rem_1fr] md:gap-6">
              <p className="label pt-1">{g.group}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="h-7 rounded-sm bg-card px-2.5 text-sm font-normal transition-colors hover:border-signal hover:text-signal"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
