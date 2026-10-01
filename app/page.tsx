import { Hero } from "@/components/sections/hero"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Stack } from "@/components/sections/stack"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-8">
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
    </main>
  )
}
