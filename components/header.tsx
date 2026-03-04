"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-2 glass shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-1 no-underline group">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary transition-colors">
            Antoney
          </span>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-accent">
            .
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 no-underline rounded-lg hover:text-primary hover:bg-primary/5 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 inline-flex items-center px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold no-underline hover:bg-primary/90 transition-all duration-200 shadow-[0_2px_8px_rgba(30,58,138,0.2)]"
          >
            Hire Me
          </Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 w-9 h-9 rounded-lg border border-border bg-card/50 text-foreground flex items-center justify-center cursor-pointer hover:bg-secondary transition-all duration-200"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
          </button>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-lg border border-border bg-card/50 text-foreground flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center z-[1001]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-[999] lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Mobile Panel */}
        <nav
          className={cn(
            "fixed top-0 right-0 w-72 h-screen bg-card flex flex-col pt-20 px-6 pb-6 shadow-[-8px_0_24px_rgba(0,0,0,0.08)] transition-transform duration-300 z-[1000] lg:hidden",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-foreground font-medium text-base no-underline py-3 border-b border-border/50 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm no-underline"
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  )
}
