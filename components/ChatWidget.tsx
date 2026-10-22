"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const QUICK_QUESTIONS = [
  "What services do you offer?",
  "Can I request a quotation?",
  "Show me your work",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi there! 👋 Welcome to VZX Labs. I can help you explore our services, digital invitations, and website solutions. What can we help you create?",
    },
  ]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = message.trim();
    if (!text || isLoading) return;

    setHasStartedChat(true);
    setMessages((previous) => [...previous, { role: "user", text }]);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Assistant unavailable");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: data.reply || "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: "Sorry, our AI assistant is temporarily unavailable. You can reach our team through Messenger instead.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function askQuestion(question: string) {
    if (isLoading) return;

    setHasStartedChat(true);
    setMessages((previous) => [
      ...previous,
      { role: "user", text: question },
    ]);
    setIsLoading(true);

    void (async () => {
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: question }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Assistant unavailable");
        }

        setMessages((previous) => [
          ...previous,
          {
            role: "assistant",
            text: data.reply || "Sorry, I couldn't generate a response.",
          },
        ]);
      } catch {
        setMessages((previous) => [
          ...previous,
          {
            role: "assistant",
            text: "Sorry, our AI assistant is temporarily unavailable. Please contact us through Messenger instead.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    })();
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] font-sans">
      {isOpen && (
        <section
          aria-label="VZX Labs AI chat"
          className="mb-3 flex h-[min(570px,calc(100dvh-110px))] w-[min(370px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_70px_-20px_rgba(15,23,42,0.3)]"
        >
          {/* Header */}
          <header className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-slate-950 to-slate-800 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/15 text-lg font-bold text-blue-200">
                V
              </div>

              <div>
                <h2 className="text-sm font-semibold tracking-wide">
                  VZX Labs
                </h2>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  AI Project Assistant
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="flex h-9 w-9 items-center justify-center rounded-full text-2xl text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </header>

          {/* Messages */}
          <div
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50/80 p-4"
            aria-live="polite"
          >
            <p className="text-center text-[11px] font-medium tracking-wide text-slate-400">
              YOUR DIGITAL JOURNEY STARTS HERE
            </p>

            {messages.map((item, index) => (
              <div
                key={`${index}-${item.role}`}
                className={`flex ${
                  item.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    item.role === "user"
                      ? "rounded-br-md bg-blue-600 text-white shadow-sm shadow-blue-600/10"
                      : "rounded-bl-md border border-slate-100 bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start" role="status">
                <div className="rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            )}

            {!hasStartedChat && (
              <div className="space-y-2 pt-1">
                <p className="px-1 text-xs font-medium text-slate-500">
                  Quick questions
                </p>

                {QUICK_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => askQuestion(question)}
                    disabled={isLoading}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 text-left text-sm text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/70 hover:text-blue-700 disabled:opacity-50"
                  >
                    <span>{question}</span>
                    <span className="ml-3 text-blue-500">↗</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Messenger contact */}
          <div className="border-t border-slate-100 bg-white px-4 pt-3">
            <a
              href="https://m.me/vzxlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-3 py-3 text-sm font-medium text-blue-700 transition hover:border-blue-200 hover:bg-blue-100"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.16 2 11.3c0 2.93 1.45 5.54 3.72 7.27V22l3.22-1.77c.96.27 1.98.42 3.06.42 5.52 0 10-4.16 10-9.3S17.52 2 12 2Zm1 12.5-2.55-2.72-4.98 2.72 5.48-5.82 2.62 2.72 4.91-2.72L13 14.5Z" />
              </svg>
              Chat with us on Messenger
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 bg-white p-3"
          >
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message VZX Labs..."
              aria-label="Your message"
              maxLength={4000}
              autoComplete="off"
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              disabled={!message.trim() || isLoading}
              aria-label="Send message"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ↑
            </button>
          </form>
        </section>
      )}

      {/* Floating launcher */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Minimize chat" : "Chat with VZX Labs"}
          aria-expanded={isOpen}
          className="flex items-center gap-2.5 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
        >
          <span className="text-lg text-blue-300" aria-hidden="true">
            {isOpen ? "⌄" : "✦"}
          </span>
          {isOpen ? "Minimize" : "Chat with VZX"}
        </button>
      </div>
    </div>
  );
}
