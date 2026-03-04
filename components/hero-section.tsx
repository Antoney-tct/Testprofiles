"use client"

import { useEffect, useState } from "react"
import { Eye, Send, Download, ChevronDown, MapPin } from "lucide-react"
import Link from "next/link"

const roles = [
  "Business IT Specialist",
  "Creative Developer",
  "UI/UX Designer",
  "QA Analyst",
  "Data Analyst",
]

export function HeroSection() {
  const [visible, setVisible] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => { setVisible(true) }, [])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayText((prev) => prev.slice(0, -1)), 40)
    } else {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 80)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        {/* Content */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-6">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            Nairobi, Kenya
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4 text-balance text-foreground">
            Antoney{" "}
            <span className="text-primary">Ouko</span>
          </h1>

          <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium mb-6 h-8 sm:h-9">
            <span className="text-accent">{displayText}</span>
            <span className="inline-block w-0.5 h-5 sm:h-6 bg-accent ml-0.5 animate-[blink-caret_0.8s_step-end_infinite]" />
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            I craft <span className="text-foreground font-medium">digital experiences</span> that combine technical precision with visual excellence. Specializing in web development, QA testing, graphic design, and data analysis.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm no-underline shadow-[0_4px_14px_rgba(30,58,138,0.25)] hover:shadow-[0_6px_20px_rgba(30,58,138,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
              View My Work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm no-underline hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              Get In Touch
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm no-underline hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 pt-8 border-t border-border/50">
            {[
              { value: "50+", label: "Projects" },
              { value: "30+", label: "Happy Clients" },
              { value: "3+", label: "Years Exp." },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div
          className={`flex-shrink-0 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-primary via-ring to-accent p-1 shadow-[0_20px_60px_-15px_rgba(30,58,138,0.3)]">
              <div className="w-full h-full rounded-[calc(1rem-4px)] bg-card flex items-center justify-center">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-primary/20">AO</span>
              </div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent shadow-[0_4px_12px_rgba(220,38,38,0.3)]" />
            <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-primary shadow-[0_4px_12px_rgba(30,58,138,0.3)]" />
          </div>
        </div>
      </div>

      {/* Scroll */}
      <Link
        href="#skills"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5" />
      </Link>
    </section>
  )
}
