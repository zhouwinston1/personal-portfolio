import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { RichText } from "@/components/rich-text"
import { SectionHeading } from "@/components/section-heading"
import { DashboardVisual, LineageVisual } from "@/components/project-visuals"
import { archive, projects } from "@/lib/data"

export function Projects() {
  return (
    <section id="builds" className="py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          index="02"
          stage="Builds"
          title={
            <>
              Things I <span className="italic">made</span>
            </>
          }
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <Card className="group h-full gap-0 rounded-sm py-0 ring-0 border bg-card shadow-none transition-shadow hover:shadow-[6px_6px_0_0_var(--signal)]">
              <div className="aspect-[5/3] border-b bg-muted/50">
                {p.visual === "dashboard" ? <DashboardVisual /> : <LineageVisual />}
              </div>
              <CardHeader className="gap-2 px-6 pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-4xl tracking-tight">{p.name}</h3>
                  <span className="label">{p.date}</span>
                </div>
                <p className="text-lg leading-snug italic font-display text-muted-foreground">{p.tagline}</p>
              </CardHeader>
              <CardContent className="flex flex-col gap-5 px-6 pt-4 pb-6">
                <ul className="space-y-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {p.points.map((pt, j) => (
                    <li key={j} className="grid grid-cols-[1.25rem_1fr]">
                      <span className="font-mono text-xs leading-6 text-signal">{String(j + 1).padStart(2, "0")}</span>
                      <span className="pl-2">
                        <RichText text={pt} />
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="outline" className="rounded-sm font-mono text-[10px]">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-20 mb-6 flex items-baseline justify-between border-t pt-4">
          <h3 className="font-display text-3xl tracking-tight">From the archive</h3>
          <span className="label">Earlier work</span>
        </div>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {archive.map((a, i) => (
          <Reveal key={a.name} delay={i * 80}>
            <a
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col gap-4 outline-none"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border bg-muted">
                <Image
                  src={a.image}
                  alt={`${a.name} screenshot`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0 group-focus-visible:grayscale-0"
                />
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-lg font-medium">
                  {a.name}
                  <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal" />
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.blurb}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
