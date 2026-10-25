"use client";
import { useState } from "react";

const links = ["Approach", "Instructor", "Curriculum", "Pricing"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between bg-white/70 px-4 py-3 backdrop-blur-md md:justify-center md:gap-3 md:bg-transparent md:py-4 md:backdrop-blur-none">
        <a href="#top" aria-label="Tokko" className="grid h-10 w-10 place-items-center rounded-full bg-[#d9c8f5]">
          <span className="h-4 w-4 rounded-full bg-[#2b1450]" />
        </a>
        <nav className="shadow-soft hidden gap-1 rounded-full bg-white/70 p-1.5 text-sm text-black/60 backdrop-blur md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="rounded-full px-3 py-1 transition hover:bg-black/5">{l}</a>
          ))}
        </nav>
        <a href="#pricing" className="hidden rounded-full bg-[#141414] px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105 md:block">Enroll Now</a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full bg-black/[0.06] md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-[#141414] transition-all ${open ? "top-1/2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1/2 h-0.5 w-5 rounded bg-[#141414] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-[#141414] transition-all ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
          </span>
        </button>
      </div>
      {open && (
        <div className="reveal shadow-soft mx-4 mt-2 flex flex-col gap-1 rounded-2xl bg-white p-3 md:hidden">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium hover:bg-black/5">{l}</a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="mt-1 rounded-full bg-[#141414] px-5 py-3 text-center text-sm font-medium text-white">Enroll Now</a>
        </div>
      )}
    </header>
  );
}
