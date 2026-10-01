"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ArrowUpRightIcon, CopyIcon, HashIcon, MailIcon, SunMoonIcon } from "lucide-react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { profile, sections } from "@/lib/data"

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const run = (fn: () => void) => {
    setOpen(false)
    fn()
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-3 bg-transparent font-mono text-[11px] tracking-wider text-muted-foreground"
      >
        <span className="hidden sm:inline">jump to…</span>
        <kbd className="rounded-sm border bg-muted px-1.5 py-px text-[10px]">⌘K</kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Jump to" description="Navigate the site or reach out">
        <Command>
          <CommandInput placeholder="Type a section or action…" />
          <CommandList>
            <CommandEmpty>Nothing matches.</CommandEmpty>
            <CommandGroup heading="Sections">
              {sections.map((s) => (
                <CommandItem
                  key={s.id}
                  onSelect={() => run(() => document.getElementById(s.id)?.scrollIntoView())}
                >
                  <HashIcon />
                  {s.label}
                  <CommandShortcut>{s.index}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Reach out">
              <CommandItem
                onSelect={() => {
                  navigator.clipboard?.writeText(profile.email)
                  setCopied(true)
                  setTimeout(() => setCopied(false), 1500)
                }}
              >
                <CopyIcon />
                {copied ? "Copied!" : "Copy email"}
              </CommandItem>
              <CommandItem onSelect={() => run(() => (window.location.href = `mailto:${profile.email}`))}>
                <MailIcon />
                Write an email
              </CommandItem>
              <CommandItem onSelect={() => run(() => window.open(profile.linkedin, "_blank"))}>
                <LinkedInIcon />
                LinkedIn
                <ArrowUpRightIcon className="ml-auto" />
              </CommandItem>
              <CommandItem onSelect={() => run(() => window.open(profile.github, "_blank"))}>
                <GitHubIcon />
                GitHub
                <ArrowUpRightIcon className="ml-auto" />
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Display">
              <CommandItem onSelect={() => run(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))}>
                <SunMoonIcon />
                Switch to {resolvedTheme === "dark" ? "paper" : "terminal"} mode
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
