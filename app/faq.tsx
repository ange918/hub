"use client";
import { useState } from "react";

const items = [
  ["Will this work for my niche?", "Yes. The system is platform-agnostic and creator-first, so it adapts to any niche."],
  ["What if I don't see results?", "You're covered by a 30-day money-back guarantee."],
  ["Which plan should I choose?", "Core covers the fundamentals, Plus adds templates and community, Max adds 1-on-1 feedback."],
  ["Can I access this on mobile?", "Yes, every lesson works on phone, tablet and desktop."],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-12 max-w-xl space-y-3">
      {items.map(([q, a], i) => (
        <button key={q} onClick={() => setOpen(open === i ? null : i)} className="shadow-soft block w-full rounded-2xl bg-white p-4 text-left text-sm">
          <span className="flex items-center justify-between font-medium">{q}<span>{open === i ? "−" : "+"}</span></span>
          {open === i && <span className="mt-2 block text-black/60">{a}</span>}
        </button>
      ))}
    </div>
  );
}
