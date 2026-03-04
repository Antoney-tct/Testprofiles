"use client"

import { useEffect, useRef, useState } from "react"
import {
  Code, Paintbrush, TrendingUp, PieChart, Shield, Megaphone, ListTodo,
} from "lucide-react"
import { skills } from "@/lib/data"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  Code, Paintbrush, TrendingUp, PieChart, Shield, Megaphone, ListTodo,
}

const levelPercent: Record<string, number> = {
  Learning: 30,
  Intermediate: 55,
  Advanced: 75,
  Expert: 92,
}

export function SkillsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1 }
    )
    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon]
            const isRed = skill.color === "red"
            return (
              <div
                key={skill.title}
                data-index={index}
                className={cn(
                  "bg-card rounded-xl p-6 transition-all duration-500 border border-border/50 hover:border-primary/20 hover:shadow-[0_8px_30px_-10px_rgba(30,58,138,0.12)] hover:-translate-y-1 group",
                  visibleCards.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors",
                  isRed ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-4">{skill.title}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-foreground/80">{item.name}</span>
                        <span className={cn(
                          "text-[10px] font-semibold px-2 py-0.5 rounded-full",
                          isRed ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                        )}>
                          {item.level}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-1000 ease-out",
                            isRed ? "bg-accent" : "bg-primary"
                          )}
                          style={{
                            width: visibleCards.has(index) ? `${levelPercent[item.level] || 50}%` : "0%"
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
