"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag, Share2, Linkedin, Facebook } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/data"

type Post = (typeof blogPosts)[number]

export function BlogPostContent({ post }: { post: Post }) {
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <article className="max-w-[800px] mx-auto px-5">
          {/* Back Link */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm no-underline hover:text-red-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full mb-3 inline-block">
                {post.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-pretty">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-accent" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Share2 className="w-4 h-4 text-accent" />
              <span>Share:</span>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Share on LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Share on Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5">
            {post.content.map((block, index) =>
              block.type === "heading" ? (
                <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-3">
                  {block.text}
                </h2>
              ) : (
                <p key={index} className="text-foreground leading-relaxed text-[1.05rem]">
                  {block.text}
                </p>
              )
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/blog/${rp.id}`}
                    className="bg-card rounded-xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(30,58,138,0.08)] group no-underline hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                        {rp.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-primary text-sm mb-1 text-pretty">{rp.title}</h4>
                      <p className="text-xs text-muted-foreground">{rp.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}
