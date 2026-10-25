"use client";
import { useEffect, useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Scroll-driven entrance. Values are the *starting* offsets, eased to rest as the element scrolls into view. */
export type Fx = {
  x?: number;
  y?: number;
  r?: number;
  s?: number;
  o?: number;
  blur?: number;
  /** Continuous parallax in px: the element drifts as it crosses the viewport. */
  speed?: number;
  /** Viewport fraction where the entrance begins / ends (element top). */
  start?: number;
  end?: number;
  /** Stagger: higher values start later. */
  d?: number;
};

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Item = { el: HTMLElement; fx: Fx };
const items = new Set<Item>();
let queued = false;
let bound = false;

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

function apply({ el, fx }: Item, still: boolean) {
  const inner = el.firstElementChild as HTMLElement | null;
  if (!inner) return;
  const vh = window.innerHeight;
  const r = el.getBoundingClientRect();
  const start = (fx.start ?? 0.98) - (fx.d ?? 0) * 0.07;
  const end = (fx.end ?? 0.6) - (fx.d ?? 0) * 0.07;
  const p = still ? 1 : ease(clamp((start - r.top / vh) / (start - end)));
  const q = 1 - p;
  const drift = still || fx.speed === undefined ? 0 : (0.5 - (r.top + r.height / 2) / vh) * fx.speed;
  const scale = 1 - (1 - (fx.s ?? 1)) * q;
  inner.style.transform = `translate3d(${(fx.x ?? 0) * q}px, ${(fx.y ?? 0) * q + drift}px, 0) rotate(${(fx.r ?? 0) * q}deg) scale(${scale})`;
  inner.style.opacity = fx.o === undefined ? "" : String(fx.o + (1 - fx.o) * p);
  inner.style.filter = fx.blur ? `blur(${fx.blur * q}px)` : "";
}

function frame() {
  queued = false;
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  items.forEach((i) => apply(i, still));
}

function schedule() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(frame);
}

export function Motion({ children, className = "", style, ...fx }: Fx & { children: ReactNode; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  // Effects are static per usage, so the initial props are captured once.
  const fxRef = useRef(fx);

  useIso(() => {
    const el = ref.current;
    if (!el) return;
    const item: Item = { el, fx: fxRef.current };
    items.add(item);
    if (!bound) {
      bound = true;
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
    }
    apply(item, window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    return () => {
      items.delete(item);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      <div className="h-full will-change-transform">{children}</div>
    </div>
  );
}
