import type { Metadata } from "next"
import { Instrument_Serif, Schibsted_Grotesk, Martian_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"
import "../styles/globals.css"

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
})
const body = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-body" })
const code = Martian_Mono({ subsets: ["latin"], variable: "--font-code" })

export const metadata: Metadata = {
  title: "Winston Zhou",
  description:
    "Software engineer building data platforms and agentic tools. Computer Science at the University of Waterloo.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(display.variable, body.variable, code.variable)}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider delayDuration={150}>
            <SiteHeader />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
