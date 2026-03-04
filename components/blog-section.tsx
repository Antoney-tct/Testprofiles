"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { cn } from "@/lib/utils"

export function BlogSection() {
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
    const cards = sectionRef.current?.querySelectorAll("[data-blog]")
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" ref={sectionRef} className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">Insights</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Latest Articles
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              data-blog
              data-index={index}
              className={cn(
                "bg-card rounded-xl overflow-hidden border border-border/50 transition-all duration-500 group no-underline hover:border-primary/20 hover:shadow-[0_8px_30px_-10px_rgba(30,58,138,0.12)] hover:-translate-y-1",
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-2.5">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2 text-pretty group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
