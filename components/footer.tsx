"use client"

import Link from "next/link"
import { Linkedin, Github, Facebook, Instagram, ExternalLink, ArrowUp } from "lucide-react"
import { siteConfig } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-lg font-extrabold">Antoney</span>
              <span className="text-lg font-extrabold text-accent">.</span>
            </div>
            <p className="text-background/60 text-xs leading-relaxed max-w-xs">
              Business IT Specialist, Designer, Analyst & Creative Developer based in Nairobi, Kenya. Creating digital solutions that blend technology with creativity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Skills", "Portfolio", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-background/60 text-xs no-underline hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold mb-3">Connect</h3>
            <div className="flex gap-2">
              {[
                { Icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { Icon: Github, href: siteConfig.social.github, label: "GitHub" },
                { Icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                { Icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                { Icon: ExternalLink, href: siteConfig.social.tiktok, label: "TikTok" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-background/40 text-xs">
            {new Date().getFullYear()} Antoney Ouko. All rights reserved.
          </p>
          <Link
            href="#home"
            className="w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
