"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput("")
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-[1500] w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300 hover:scale-110",
          isOpen
            ? "bg-accent text-accent-foreground"
            : "bg-gradient-to-br from-primary to-ring text-primary-foreground"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Pulse Ring */}
      {!isOpen && messages.length === 0 && (
        <span className="fixed bottom-6 right-6 z-[1499] w-14 h-14 rounded-full bg-primary/30 animate-pulse-ring pointer-events-none" />
      )}

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-[1500] w-[360px] max-w-[calc(100vw-2rem)] bg-card rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right",
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-90 opacity-0 pointer-events-none"
        )}
        style={{ height: "480px" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-ring text-primary-foreground p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Antoney{"'"}s Assistant</h3>
            <p className="text-xs text-primary-foreground/70">Ask me anything about my work</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <Bot className="w-12 h-12 text-primary/20 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                Hello! I{"'"}m Antoney{"'"}s virtual assistant. How can I help you today?
              </p>
              <div className="mt-4 space-y-2">
                {["What are Antoney's skills?", "Tell me about his projects", "How can I contact Antoney?"].map(
                  (q) => (
                    <button
                      key={q}
                      onClick={() => {
                        sendMessage({ text: q })
                      }}
                      className="block w-full text-left text-xs bg-secondary text-foreground px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {q}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {messages.map((message) => {
            const text = message.parts
              ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
              .map((p) => p.text)
              .join("") || ""

            return (
              <div
                key={message.id}
                className={cn(
                  "flex gap-2.5",
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0",
                    message.role === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {message.role === "user" ? (
                    <User className="w-3.5 h-3.5" />
                  ) : (
                    <Bot className="w-3.5 h-3.5" />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed",
                    message.role === "user"
                      ? "bg-accent text-accent-foreground rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm"
                  )}
                >
                  {text}
                </div>
              </div>
            )
          })}

          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="bg-secondary rounded-xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.15s]" />
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.3s]" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="p-3 border-t border-border flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 bg-secondary text-foreground text-sm px-4 py-2.5 rounded-full border-none outline-none placeholder:text-muted-foreground disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-ring text-primary-foreground flex items-center justify-center disabled:opacity-50 hover:shadow-md transition-all duration-300"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  )
}
