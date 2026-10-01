"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { sections } from "@/lib/data"

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }
    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled && "border-b bg-background/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="grid size-7 place-items-center rounded-sm bg-foreground font-display text-lg italic leading-none text-background transition-colors group-hover:bg-signal">
            w
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] sm:inline">
            Winston Zhou
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground",
                active === s.id && "text-foreground"
              )}
            >
              <span className={cn("mr-1.5", active === s.id ? "text-signal" : "opacity-50")}>{s.index}</span>
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <CommandMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
