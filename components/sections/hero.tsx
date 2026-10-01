import Image from "next/image"
import { ArrowDownRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { metrics, profile } from "@/lib/data"

export function Hero() {
  return (
    <section id="top" className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="label">
            <span className="text-signal">00</span> / Hello
          </p>
          <p className="label flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            Last run: Data SWE @ Scotiabank · Aug 2026
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal delay={80}>
          <h1 className="font-display text-[clamp(4.25rem,15vw,11.5rem)] leading-[0.82] tracking-[-0.03em]">
            Winston
            <br />
            <span className="italic text-signal">Zhou</span>
            <span className="caret ml-1 inline-block h-[0.7em] w-[0.08em] translate-y-[0.02em] bg-foreground align-baseline" />
          </h1>
        </Reveal>

        <Reveal delay={160} className="hidden lg:block">
          <figure className="w-52 rotate-[1.5deg] border bg-card p-2 shadow-[6px_6px_0_0_var(--foreground)] transition-transform duration-300 hover:rotate-0">
            <Image
              src="/headshot.png"
              alt="Portrait of Winston Zhou"
              width={389}
              height={389}
              priority
              className="aspect-square w-full object-cover grayscale contrast-[1.05] sepia-[.15]"
            />
            <figcaption className="label mt-2 flex justify-between">
              <span>fig. 1</span>
              <span>CS ’28</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end">
        <Reveal delay={220}>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I build the plumbing data runs through: ingestion pipelines, access control for hundreds
            of users, and agentic tools that turn a plain-English question into a working dashboard.
            Studying {profile.program.split(" (")[0]} at the{" "}
            <span className="text-foreground">{profile.school}</span>, graduating {profile.grad}.
          </p>
        </Reveal>
        <Reveal delay={280} className="flex flex-wrap gap-3 md:justify-end">
          <Button asChild size="lg" className="h-11 rounded-sm px-5 hover:bg-signal hover:text-primary-foreground dark:hover:text-background">
            <a href="#work">
              See the work <ArrowDownRightIcon />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 rounded-sm bg-transparent px-5">
            <a href={`mailto:${profile.email}`}>Email me</a>
          </Button>
        </Reveal>
      </div>

      <Reveal delay={340}>
        <dl className="mt-16 grid grid-cols-2 border-y border-foreground/80 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={
                "flex flex-col gap-2 py-5 pr-4 " +
                (i % 2 === 1 ? "border-l pl-4 " : "") +
                (i === 2 ? "lg:border-l lg:pl-4 " : "") +
                (i >= 2 ? "border-t lg:border-t-0" : "")
              }
            >
              <dt className="order-last text-sm leading-snug text-muted-foreground">{m.label}</dt>
              <dd className="font-mono text-xl tracking-tight sm:text-2xl">{m.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
