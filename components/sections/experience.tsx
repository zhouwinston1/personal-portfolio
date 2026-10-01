import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/reveal"
import { RichText } from "@/components/rich-text"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/lib/data"

export function Experience() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          index="01"
          stage="Work"
          title={
            <>
              Where I’ve <span className="italic">shipped</span>
            </>
          }
        />
      </Reveal>

      <Reveal delay={80}>
        <Accordion type="multiple" defaultValue={["role-0"]} className="border-b">
          {experience.map((role, i) => (
            <AccordionItem key={i} value={`role-${i}`} className="border-b last:border-b-0">
              <AccordionTrigger className="group grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 rounded-none py-6 hover:no-underline md:grid-cols-[11rem_1fr_auto_auto] md:items-baseline [&>[data-slot=accordion-trigger-icon]]:self-center">
                <span className="label col-span-2 md:col-span-1">
                  {role.start} — {role.end}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-display text-3xl leading-tight tracking-tight transition-colors group-hover:text-signal sm:text-4xl">
                    {role.title}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    @ <span className="text-foreground">{role.company}</span> · {role.location}
                  </span>
                </span>
                {role.rating && (
                  <Badge
                    variant="outline"
                    className="hidden rounded-sm font-mono text-[10px] tracking-wider uppercase md:inline-flex"
                  >
                    <span className="size-1.5 rounded-full bg-signal" />
                    Rated {role.rating}
                  </Badge>
                )}
              </AccordionTrigger>
              <AccordionContent className="pb-8 md:pl-[calc(11rem+1.5rem)]">
                <ul className="max-w-3xl space-y-3 text-base leading-relaxed text-muted-foreground">
                  {role.points.map((p, j) => (
                    <li key={j} className="grid grid-cols-[1.5rem_1fr]">
                      <span className="font-mono text-xs leading-7 text-signal">→</span>
                      <span>
                        <RichText text={p} />
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5 pl-6">
                  {role.stack.map((s) => (
                    <Badge key={s} variant="secondary" className="rounded-sm font-mono text-[10px]">
                      {s}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  )
}
