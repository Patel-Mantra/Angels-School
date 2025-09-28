import { useEffect, useRef, useState } from "react";

interface Message { role: "user" | "assistant"; content: string }

import { Sparkles, X } from "lucide-react";

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I’m your AI assistant. Ask about admissions, programs, or campus life." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = (text: string) => {
    if (!text.trim()) return;
    const next: Message[] = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    const reply = getLocalAnswer(text);
    setTimeout(() => setMessages((m) => [...m, { role: "assistant" as const, content: reply }]), 200);
    inputRef.current && (inputRef.current.value = "");
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open AI assistant"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-500 to-brand-300 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <Sparkles className="h-5 w-5" aria-hidden />
        Ask AI
      </button>
      {open && (
        <div role="dialog" aria-modal className="fixed inset-0 z-50 grid place-items-end bg-black/30 p-4 md:place-items-center">
          <div className="w-full max-w-lg rounded-xl border bg-background p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold">AI Assistant</h2>
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-md p-2 hover:bg-accent">
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="mt-3 max-h-80 overflow-auto rounded-md border bg-muted/20 p-3 text-sm">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                  <p className={m.role === "user" ? "inline-block rounded-lg bg-primary text-primary-foreground px-3 py-2" : "inline-block rounded-lg bg-accent px-3 py-2"}>
                    {m.content}
                  </p>
                </div>
              ))}
            </div>
            <form
              className="mt-3 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                send(inputRef.current?.value || "");
              }}
            >
              <input ref={inputRef} type="text" aria-label="Ask a question" placeholder="Type a question..." className="flex-1 rounded-md border px-3 py-2" />
              <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground" type="submit">Send</button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground">Press Ctrl/⌘+K to toggle</p>
          </div>
        </div>
      )}
    </div>
  );
}

function getLocalAnswer(q: string): string {
  const s = q.toLowerCase();
  if (/(admission|apply|deadline)/.test(s)) return "Admissions are open year-round. Start at Admissions → Apply. Virtual tours available.";
  if (/(program|academ|curricul)/.test(s)) return "We offer STEM, Arts, and IB-aligned programs with personalized pathways.";
  if (/(tuition|fee|scholar)/.test(s)) return "Tuition assistance and scholarships are available. Contact Admissions for details.";
  if (/(contact|visit|tour)/.test(s)) return "Book a virtual or on-campus tour from the Admissions page. We’d love to meet you!";
  return "I’m not sure yet, but I’ll learn from your interests. Try asking about admissions, programs, or campus life.";
}
