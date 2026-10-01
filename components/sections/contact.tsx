"use client"

import { useEffect, useState } from "react"
import { ArrowUpRightIcon, CheckIcon, CopyIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { profile } from "@/lib/data"

function TorontoTime() {
  const [now, setNow] = useState<string | null>(null)
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Toronto",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    const tick = () => setNow(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])
  return <span suppressHydrationWarning>{now ?? "--:--"}</span>
}

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="pt-20 sm:pt-28">
      <Reveal>
        <div className="border-t border-foreground/80 pt-4">
          <p className="label">
            <span className="text-signal">04</span> / Contact
          </p>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-10 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] tracking-[-0.02em]">
          Get in <span className="italic text-signal">touch</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I’m open to co-op and internship opportunities, collaborations, or just a chat about
          what you’re building. Email is the best way to reach me, and I’ll get back to you soon.
        </p>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-base break-all underline decoration-signal decoration-2 underline-offset-[6px] transition-colors hover:text-signal sm:text-xl"
          >
            {profile.email}
          </a>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={copy} aria-label="Copy email address">
                {copied ? <CheckIcon className="text-signal" /> : <CopyIcon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{copied ? "Copied" : "Copy"}</TooltipContent>
          </Tooltip>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-sm bg-transparent">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn <ArrowUpRightIcon className="text-muted-foreground" />
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-sm bg-transparent">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub <ArrowUpRightIcon className="text-muted-foreground" />
            </a>
          </Button>
        </div>
      </Reveal>

      <footer className="mt-28 pb-10">
        <Separator />
        <div className="label mt-5 flex flex-col gap-2 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>
            Toronto · <TorontoTime /> ET
          </span>
          <span>Next.js + shadcn/ui</span>
        </div>
      </footer>
    </section>
  )
}
