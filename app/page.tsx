import Faq from "./faq";

const portraits = [
  "linear-gradient(160deg,#9ec5e8,#f0c9b4)",
  "linear-gradient(160deg,#c8102e,#7a0a1c)",
  "linear-gradient(160deg,#5c8a3a,#d98aa0)",
  "linear-gradient(160deg,#17b8b0,#0b6f72)",
];
const courseCards = [
  { t: "Growth that pops", d: "Learn how to post your content so it stands out and grows.", g: "linear-gradient(170deg,#d9441c,#3a0d05)" },
  { t: "Posting on lock", d: "Build a weekly posting flow that moves fast without burnout.", g: "linear-gradient(170deg,#3f8a5c,#0c1a14)" },
  { t: "Content on repeat", d: "Turn one idea into many posts that keep performing.", g: "linear-gradient(170deg,#c21fd1,#25062b)" },
  { t: "Monetized views", d: "Learn to turn attention into steady income.", g: "linear-gradient(170deg,#e0622a,#4a1a08)" },
  { t: "Real engagement", d: "Create posts that spark real comments and shares.", g: "linear-gradient(170deg,#1f6fa8,#06141f)" },
  { t: "Level-up energy", d: "Keep your pace up week after week, in a calm way.", g: "linear-gradient(170deg,#f2a516,#4b2a05)" },
];
const platforms = [
  { n: "Instagram", c: "#e1306c" }, { n: "Facebook", c: "#1877f2" }, { n: "TikTok", c: "#111" },
  { n: "YouTube", c: "#ff0033" }, { n: "Threads", c: "#111" }, { n: "Telegram", c: "#229ed9" },
];
const pills = ["System-Based", "No Guesswork", "Reusable System", "Platform-Agnostic", "Clear Direction", "Easy Consistency", "Repeatable Wins", "Creator-First", "Smart Posting"];
const teaches = [
  { t: "Foundation", g: "#b52fd6", items: ["How the Tokko system works", "What actually drives reach", "Clear content pillars", "Planning without overthinking", "Turning posts into a process", "Building structure that scales"], tags: ["System", "Clarity", "Structure"] },
  { t: "Content", g: "#f2682a", items: ["Create once, post everywhere", "What to repeat and scale", "Writing with intention", "Visuals that stand out", "Turning ideas into posts", "Creating content faster"], tags: ["Hooks", "Scripts", "Visuals"] },
  { t: "Momentum", g: "#f0285a", items: ["Staying consistent with ease", "Reading performance signals", "Improving engagement naturally", "Building audience trust", "Avoiding one-off spikes", "Growing with momentum"], tags: ["Growth", "Scaling", "Monetizing"] },
];
const reviews = [
  { n: "Jordan K.", t: "This course made consistency feel realistic. Instead of guessing, I know exactly what to post and why it works." },
  { n: "Alex R.", t: "Tokko gave me clarity. I don't second-guess my content anymore, and my reach has grown a lot." },
  { n: "Lena M.", t: "The biggest change was my confidence. I knew what I'm doing now, and my content reflects that." },
  { n: "Emily S.", t: "They helped me turn posting into a system. The templates alone saved me hours every week." },
];
const included = [
  ["Access", "Direct lifetime access to every lesson."], ["System", "A complete content system to plan and post with ease."],
  ["Lessons", "Short, clear lessons you can apply right away."], ["Platforms", "Works across Instagram, TikTok, YouTube and more."],
  ["Structure", "Organized steps from idea to published post."], ["Guidance", "Clear direction at every stage of the process."],
  ["Clarity", "No confusing theory. Just what you need to know."], ["Updates", "New lessons added as platforms evolve."],
];
const plans = [
  { n: "Core", p: "$299", g: "#f0239a", pop: false, items: ["Full access to core lessons", "Content fundamentals & planning", "Strategies that work everywhere", "Lifetime access with updates"] },
  { n: "Plus", p: "$399", g: "#b52fd6", pop: true, items: ["Everything included in Core", "Proven content frameworks", "Ready-to-use templates", "Private community access"] },
  { n: "Max", p: "$599", g: "#2f6bff", pop: false, items: ["Everything included in Plus", "Direct feedback on your posts", "Private 1-on-1 strategy call", "Priority support & guidance"] },
];

const Btn = ({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) => (
  <a href="#pricing" className={`rounded-full px-5 py-2.5 text-sm font-medium transition hover:scale-105 ${dark ? "bg-[#141414] text-white" : "bg-black/[0.06] text-[#141414]"}`}>{children}</a>
);
const Title = ({ children, cta }: { children: React.ReactNode; cta?: string }) => (
  <div className="mx-auto flex max-w-6xl items-end justify-between px-6">
    <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{children}</h2>
    {cta && <a href="#pricing" className="rounded-full bg-black/[0.06] px-4 py-2 text-sm">{cta}</a>}
  </div>
);

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <nav className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d9c8f5]"><span className="h-4 w-4 rounded-full bg-[#2b1450]" /></span>
        <div className="hidden gap-1 rounded-full bg-white/70 p-1.5 text-sm text-black/60 shadow-soft backdrop-blur sm:flex">
          {["Approach", "Instructor", "Curriculum", "Pricing"].map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="rounded-full px-3 py-1 hover:bg-black/5">{l}</a>)}
        </div>
        <Btn>Enroll Now</Btn>
      </nav>

      <section className="relative px-6 pb-24 pt-36 text-center">
        {[["8800", "left-[10%] top-44", "#6b6bff"], ["760", "right-[10%] top-48", "#ff7a3d"], ["1520", "left-[12%] top-72", "#ff3b5c"], ["730", "right-[12%] top-72", "#6cc417"]].map(([v, pos, c]) => (
          <span key={v} className={`float absolute hidden items-center gap-1.5 rounded-lg bg-white px-2.5 py-1 text-xs shadow-soft md:flex ${pos}`}><i className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />{v}</span>
        ))}
        <h1 className="reveal mx-auto max-w-3xl text-6xl font-semibold leading-[0.95] tracking-tighter md:text-8xl">Take over the timeline</h1>
        <p className="reveal mx-auto mt-6 max-w-md text-lg text-black/60">Unlock the content tactics creators use to blow up fast and stay at the top of the feed.</p>
        <div className="reveal mt-8 flex justify-center gap-3"><Btn>Enroll Now</Btn><Btn dark={false}>See Details</Btn></div>
        <div className="mx-auto mt-16 flex max-w-3xl items-end justify-center gap-3">
          {portraits.map((g, i) => (
            <div key={i} className="float shadow-soft h-44 w-36 rounded-3xl border-4 border-white md:h-64 md:w-48" style={{ background: g, ["--r" as string]: `${[-4, 3, -2, 5][i]}deg`, animationDelay: `${i * 0.4}s` }} />
          ))}
        </div>
      </section>

      <section id="approach" className="py-24">
        <Title cta="Our Approach">You&apos;ll love<br />this course</Title>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
          {courseCards.map((c) => (
            <div key={c.t} className="shadow-soft flex aspect-[3/4] flex-col justify-end rounded-3xl p-5 text-white transition hover:-translate-y-2" style={{ background: c.g }}>
              <h3 className="text-xl font-semibold">{c.t}</h3><p className="mt-1 text-sm text-white/70">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 text-center">
        <div className="relative mx-auto flex h-48 max-w-3xl items-center justify-around">
          {platforms.slice(0, 3).map((p, i) => <span key={p.n} className="float grid h-12 w-12 place-items-center rounded-2xl bg-white text-xs font-bold shadow-soft" style={{ color: p.c, animationDelay: `${i * 0.7}s` }}>{p.n[0]}</span>)}
        </div>
        <h2 className="-mt-6 text-4xl font-semibold tracking-tight md:text-6xl">Built to Go<br />Everywhere</h2>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">The system<br />that works</h2>
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
          {pills.map((p) => <span key={p} className="flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 text-sm font-medium shadow-soft"><i className="h-6 w-6 rounded-full bg-[#2f6bff]" />{p}</span>)}
        </div>
        <p className="mx-auto mt-8 max-w-sm text-sm text-black/60">This system works because it replaces guessing with structure — so every post has a purpose and results build over time.</p>
        <div className="mt-6 flex justify-center gap-2"><Btn>Enroll Now</Btn><Btn dark={false}>See Curriculum</Btn></div>
      </section>

      <section id="instructor" className="mx-auto max-w-5xl px-6 py-24">
        <div className="shadow-soft grid overflow-hidden rounded-3xl bg-white md:grid-cols-2">
          <div className="relative min-h-80" style={{ background: "linear-gradient(160deg,#c89a6a,#4a2f1c)" }}>
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white p-3 text-sm"><b>Olivia Morgan</b><br /><span className="text-black/50">Tokko Creator & Educator</span></div>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-xs uppercase text-black/40">Background</p>
            <h2 className="mt-1 text-3xl font-semibold">My story</h2>
            <p className="mt-4 text-sm leading-relaxed text-black/60">I created Tokko after years of trying to stay consistent, figure out what to post, and understand why some content worked while other didn&apos;t. Over time, that process became a system built from real creator workflows, repeated until it was clear.</p>
            <div className="mt-6 flex gap-6 text-sm font-medium"><span>1.1M+</span><span>4.6M+</span><span>750K+</span></div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="py-24">
        <Title cta="View Pricing">What this<br />teaches you</Title>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 px-6 md:grid-cols-3">
          {teaches.map((t) => (
            <div key={t.t} className="shadow-soft overflow-hidden rounded-3xl bg-white">
              <div className="p-5 text-white" style={{ background: t.g }}><h3 className="text-lg font-semibold">{t.t}</h3><p className="text-sm text-white/80">Build a strong base that supports every post.</p></div>
              <div className="p-5 text-sm"><p className="mb-2 text-xs text-black/40">What you&apos;ll learn</p>
                <ol className="space-y-1.5 text-black/70">{t.items.map((x, i) => <li key={x}>{i + 1}. {x}</li>)}</ol>
                <div className="mt-4 flex gap-2">{t.tags.map((g) => <span key={g} className="rounded-full bg-black/5 px-2 py-1 text-xs">{g}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl bg-black/[0.05] p-4 text-sm md:mx-6 xl:mx-auto"><span>Ready to put it into action?<br /><span className="text-black/50">Built to be practical, repeatable, and easy to apply.</span></span><span className="flex gap-2"><Btn>Enroll Now</Btn><Btn dark={false}>See Stories</Btn></span></div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Tokko is a practical course built around a clear system for content and growth.</h2>
        <div className="shadow-soft mx-auto mt-12 grid aspect-video max-w-3xl place-items-center rounded-3xl" style={{ background: "linear-gradient(135deg,#7a5a3a,#d6b48a)" }}>
          <span className="grid h-16 w-16 place-items-center rounded-full bg-[#b58cf0] text-2xl text-white">▶</span>
        </div>
        <p className="mt-6 text-sm text-black/50">It&apos;s built to make content feel simpler, clearer, and easier to stick with over time.</p>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Real stories<br />from creators</h2>
        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {reviews.map((r, i) => (
            <div key={r.n} className="shadow-soft rounded-2xl bg-white p-5 text-left text-sm" style={{ transform: `rotate(${[-3, 2, 2, -2][i]}deg)` }}>
              <p className="text-[#ff5a3c]">★★★★★</p><p className="mt-2 text-black/70">{r.t}</p><p className="mt-3 font-medium">{r.n}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <Title cta="View FAQs">Included in<br />the course</Title>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
          {included.map(([t, d]) => (
            <div key={t} className="shadow-soft rounded-2xl bg-[#2f6bff] p-5 text-white transition hover:-translate-y-1">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/20">◆</span>
              <h3 className="mt-6 font-semibold">{t}</h3><p className="mt-1 text-xs text-white/75">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Get more<br />with Tokko</h2>
        <div className="mt-6 flex justify-center gap-2"><Btn>Enroll Now</Btn><Btn dark={false}>View Pricing</Btn></div>
        <div className="mx-auto mt-14 flex max-w-xl justify-center gap-4">
          {[["Content Templates", "Plug-and-play templates to help you move faster and post with confidence."], ["Content Breakdowns", "Step-by-step breakdowns of how posts are structured and why they work."]].map(([t, d], i) => (
            <div key={t} className="shadow-soft w-1/2 rounded-2xl bg-white p-5 text-left text-sm" style={{ transform: `rotate(${i ? 2 : -3}deg)` }}><p className="text-xs text-[#b52fd6]">{t}</p><p className="mt-2 text-lg font-semibold leading-tight">{d}</p></div>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-4 text-xs text-black/50">
          {["Trend Tracker", "Private Community", "Ongoing Updates"].map((x) => <span key={x}><b className="block text-black">{x}</b>Stay ahead of what&apos;s working.</span>)}
        </div>
      </section>

      <section id="pricing" className="py-24 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Invest once.<br />Use it forever</h2>
        <p className="mt-4 text-sm text-black/50">One-time payment. Lifetime access. 30-day money-back guarantee.</p>
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 px-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.n} className="shadow-soft overflow-hidden rounded-3xl bg-white text-left">
              <div className="p-5 text-white" style={{ background: p.g }}><span className="rounded-full bg-white/25 px-2 py-0.5 text-xs">{p.n}{p.pop ? " · Popular" : ""}</span><p className="mt-8 text-4xl font-semibold">{p.p}</p></div>
              <ul className="space-y-2 p-5 text-sm text-black/70">{p.items.map((i) => <li key={i}>• {i}</li>)}</ul>
              <div className="px-5 pb-5"><a href="#" className="block rounded-full bg-black/[0.06] py-2.5 text-center text-sm font-medium">Start with {p.n}</a></div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <h2 className="text-center text-4xl font-semibold tracking-tight md:text-6xl">Let&apos;s clear a<br />few things up</h2>
        <Faq />
      </section>

      <section className="mx-4 rounded-[2rem] bg-black/[0.05] px-6 py-24 text-center">
        <span className="rounded-full bg-white px-3 py-1 text-xs">Take control</span>
        <h2 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">Plan better.<br />Post smarter</h2>
        <p className="mx-auto mt-4 max-w-sm text-sm text-black/60">Stop guessing after you&apos;ve started building content with structure and confidence, using a clear system.</p>
        <div className="mt-6 flex justify-center gap-2"><Btn>Enroll Now</Btn><Btn dark={false}>View Pricing</Btn></div>
        <div className="mx-auto mt-12 flex max-w-sm justify-center">
          {portraits.slice(0, 3).map((g, i) => <div key={i} className="shadow-soft -mx-3 h-40 w-32 rounded-2xl border-4 border-white" style={{ background: g, transform: `rotate(${[-6, 0, 6][i]}deg)` }} />)}
        </div>
      </section>

      <footer className="mx-auto grid max-w-5xl gap-10 px-6 py-16 text-sm md:grid-cols-[1fr_auto_auto]">
        <div><p className="flex items-center gap-2 font-semibold"><span className="h-5 w-5 rounded-full bg-[#d9c8f5]" />Tokko</p><p className="mt-2 max-w-xs text-black/50">Tokko helps creators build content with clarity, consistency, and confidence.</p></div>
        {[["Menu", ["Approach", "Instructor", "Curriculum", "Pricing"]], ["Support", ["Email Us", "Telegram", "Live chat", "Help Center"]]].map(([h, l]) => (
          <div key={h as string}><b>{h as string}</b><ul className="mt-2 space-y-1 text-black/50">{(l as string[]).map((x) => <li key={x}>{x}</li>)}</ul></div>
        ))}
      </footer>
    </main>
  );
}
