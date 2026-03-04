"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Facebook, Instagram, ExternalLink } from "lucide-react"
import { siteConfig } from "@/lib/data"

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-3">{"Let's Work Together"}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Have a project in mind? Feel free to reach out using the form or any of the methods below.
            </p>

            <div className="space-y-4 mb-6">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 group no-underline">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground">{siteConfig.email}</p>
                </div>
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 group no-underline">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Phone</p>
                  <p className="text-xs text-muted-foreground">{siteConfig.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Location</p>
                  <p className="text-xs text-muted-foreground">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <p className="text-xs font-bold text-foreground mb-2">Follow Me</p>
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
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card rounded-xl p-6 border border-border/50"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="Antoney Ouko"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-foreground mb-1.5">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="antoney@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="block text-xs font-bold text-foreground mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-xs font-bold text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-y"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm cursor-pointer hover:bg-primary/90 hover:shadow-[0_4px_14px_rgba(30,58,138,0.3)] transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
            {submitted && (
              <p className="mt-3 text-center text-xs font-semibold text-green-600">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
