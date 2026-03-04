"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ExternalLink, X, Calendar, User, Tag } from "lucide-react"
import { portfolioItems, filterCategories } from "@/lib/data"
import { cn } from "@/lib/utils"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

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
      { threshold: 0.08 }
    )
    const cards = sectionRef.current?.querySelectorAll("[data-portfolio]")
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [filteredItems])

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [selectedProject])

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Selected Projects
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveFilter(cat.value)
                setVisibleCards(new Set())
              }}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                activeFilter === cat.value
                  ? "bg-primary text-primary-foreground shadow-[0_2px_8px_rgba(30,58,138,0.2)]"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              data-portfolio
              data-index={index}
              className={cn(
                "bg-card rounded-xl overflow-hidden border border-border/50 transition-all duration-500 group cursor-pointer hover:border-primary/20 hover:shadow-[0_8px_30px_-10px_rgba(30,58,138,0.12)] hover:-translate-y-1",
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => setSelectedProject(item)}
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
                  <span className="px-4 py-2 bg-card text-foreground rounded-lg font-medium text-xs shadow-lg flex items-center gap-1.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-muted-foreground text-[10px] font-medium px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="bg-secondary text-muted-foreground text-[10px] font-medium px-2.5 py-1 rounded-md">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[2000] bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card rounded-xl w-full max-w-[850px] max-h-[90vh] overflow-y-auto relative animate-fade-in-up border border-border/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-secondary text-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200 z-10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-56 md:h-auto min-h-[260px]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {selectedProject.fullDescription}
                </p>
                <ul className="space-y-2 py-4 border-y border-border/50 mb-5">
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Tag className="w-3.5 h-3.5 text-accent" />
                    <strong className="text-foreground min-w-[60px]">Category:</strong>
                    {filterCategories.find((c) => c.value === selectedProject.category)?.label || selectedProject.category}
                  </li>
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="w-3.5 h-3.5 text-accent" />
                    <strong className="text-foreground min-w-[60px]">Client:</strong>
                    {selectedProject.client}
                  </li>
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <strong className="text-foreground min-w-[60px]">Date:</strong>
                    {selectedProject.date}
                  </li>
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="bg-secondary text-muted-foreground text-[10px] font-medium px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm no-underline hover:bg-primary/90 transition-all duration-200 shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
