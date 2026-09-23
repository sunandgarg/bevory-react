import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Loader2, Send, Sparkles, X } from "lucide-react";
import { useLocation as useRouterLocation } from "react-router-dom";
import { apiClient } from "@/integrations/api/client";
import { useLocation } from "@/hooks/useLocation";
import { INFORMATIONAL_PRICE_NOTICE } from "@/lib/informationNotice";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  provider?: string;
};

const starterQuestions = (pathname: string) => {
  if (pathname.includes("/product/")) return [
    "What price and bottle sizes are listed here?",
    "How should I serve this responsibly?",
    "What similar products can I compare?",
  ];
  if (pathname.includes("/brand/")) return [
    "Which products from this brand are listed?",
    "What styles does this brand offer?",
    "Which bottle should I compare first?",
  ];
  if (pathname.includes("/category/")) return [
    "What are popular options in this category?",
    "What can I compare within my budget?",
    "How do the main styles differ?",
  ];
  if (pathname.includes("wine-universe")) return [
    "Help me choose a wine style",
    "Which wine pairs with Indian food?",
    "Explain dry, sweet and sparkling wine",
  ];
  if (pathname.includes("party-planner")) return [
    "How should I split my party budget?",
    "How much water and ice should I arrange?",
    "Help me plan a balanced drinks mix",
  ];
  if (pathname.includes("cocktail")) return [
    "Can I make this recipe using ml?",
    "What Indian ingredient can I substitute?",
    "How can I make a lower-alcohol version?",
  ];
  if (pathname.includes("guide")) return [
    "Summarise this guide for me",
    "What should a beginner remember?",
    "Which BevOry pages should I explore next?",
  ];
  return [
    "Help me find a drink by budget",
    "What is trending in my city?",
    "How does BevOry's price guide work?",
  ];
};

const greeting = `Hi, I’m oRy AI. Ask about this page, local price information, comparisons or responsible party planning.\n\n${INFORMATIONAL_PRICE_NOTICE}`;
const withInformationNotice = (content: string) => content.includes(INFORMATIONAL_PRICE_NOTICE)
  ? content
  : `${content.trim()}\n\n${INFORMATIONAL_PRICE_NOTICE}`;

const OryAssistant = () => {
  const { pathname } = useRouterLocation();
  const { selectedCity } = useLocation();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", content: greeting },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const questions = useMemo(() => starterQuestions(pathname), [pathname]);

  useEffect(() => {
    setMessages([{ id: `welcome-${pathname}`, role: "assistant", content: greeting }]);
    setInput("");
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  const ask = async (question: string) => {
    const prompt = question.trim().slice(0, 500);
    if (!prompt || loading) return;
    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: "user", content: prompt };
    const history = messages.slice(-6).map(({ role, content }) => ({ role, content }));
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);
    const { data, error } = await apiClient.functions.invoke("ai-recommend", {
      body: {
        prompt,
        pathname,
        city: selectedCity?.name || "Gurgaon",
        history,
      },
    });
    setMessages((current) => [...current, {
      id: crypto.randomUUID(),
      role: "assistant",
      content: withInformationNotice(error?.message || data?.content || "I could not answer that right now. Please try again shortly."),
      provider: data?.provider,
    }]);
    setLoading(false);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    void ask(input);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open oRy AI assistant"
        aria-expanded={open}
        className="fixed bottom-20 right-4 z-40 flex flex-col items-center gap-1 text-foreground transition-transform hover:scale-105 active:scale-95 md:bottom-6"
      >
        <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/70 bg-white p-1 shadow-lg">
          <img src="/ory-ai-logo.png" alt="" width={148} height={148} className="h-full w-full rounded-full object-contain" />
        </span>
        <span className="text-xs font-bold">oRy AI</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[70]" role="presentation">
          <button type="button" className="absolute inset-0 bg-foreground/25 backdrop-blur-[1px]" onClick={() => setOpen(false)} aria-label="Close oRy AI" />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="ory-ai-title"
            className="absolute inset-x-0 bottom-0 flex max-h-[82vh] flex-col rounded-t-3xl border border-border bg-background shadow-2xl md:inset-x-auto md:bottom-6 md:right-6 md:h-[640px] md:max-h-[calc(100vh-3rem)] md:w-[400px] md:rounded-3xl"
          >
            <header className="flex items-center gap-3 border-b border-border p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white p-1">
                <img src="/ory-ai-logo.png" alt="" className="h-full w-full object-contain" />
              </span>
              <div className="min-w-0 flex-1">
                <h2 id="ory-ai-title" className="font-semibold">oRy AI</h2>
                <p className="truncate text-xs text-muted-foreground">Page-aware BevOry assistant</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-secondary" aria-label="Close oRy AI">
                <X className="h-5 w-5" />
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === "user" ? "bg-foreground text-background" : "bg-secondary text-foreground"
                  }`}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.provider === "google-gemini" && (
                      <p className="mt-1.5 flex items-center gap-1 text-[10px] opacity-60"><Sparkles className="h-2.5 w-2.5" /> Gemini</p>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-secondary px-3.5 py-2.5 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" /> Checking BevOry data…
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border p-3">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {questions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void ask(question)}
                    disabled={loading}
                    className="max-w-[220px] shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-left text-xs hover:border-accent disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <form onSubmit={submit} className="flex items-end gap-2">
                <label className="sr-only" htmlFor="ory-ai-question">Ask oRy AI</label>
                <textarea
                  id="ory-ai-question"
                  value={input}
                  onChange={(event) => setInput(event.target.value.slice(0, 500))}
                  placeholder="Ask about this page…"
                  rows={1}
                  className="max-h-24 min-h-11 flex-1 resize-none rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-foreground text-background disabled:opacity-40"
                  aria-label="Send question"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-[10px] leading-snug text-muted-foreground">
                Questions and page context are processed by Google Gemini. Don’t share personal information. {INFORMATIONAL_PRICE_NOTICE}
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default OryAssistant;
