import Faq from "./faq";
import Nav from "./nav";
import { Motion } from "./motion";

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
    <Motion y={70} blur={10} o={0}>
      <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{children}</h2>
    </Motion>
    {cta && <Motion x={40} o={0} d={2}><a href="#pricing" className="rounded-full bg-black/[0.06] px-4 py-2 text-sm">{cta}</a></Motion>}
  </div>
);
const Heading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <Motion y={80} blur={12} o={0} s={0.96} start={1.02} end={0.62}>
    <h2 className={`text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl ${className}`}>{children}</h2>
  </Motion>
);

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden">
      <Nav />

      <section className="relative px-6 pb-24 pt-32 text-center md:pt-40">
        {[["8800", "left-[10%] top-44", "#6b6bff"], ["760", "right-[10%] top-48", "#ff7a3d"], ["1520", "left-[12%] top-72", "#ff3b5c"], ["730", "right-[12%] top-72", "#6cc417"]].map(([v, pos, c], i) => (
          <div key={v} className={`absolute hidden md:block ${pos}`}>
            <Motion speed={i % 2 ? -120 : 160}>
              <span className="float flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1 text-xs shadow-soft" style={{ animationDelay: `${i * 0.5}s` }}><i className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />{v}</span>
            </Motion>
          </div>
        ))}
        <h1 className="reveal mx-auto max-w-3xl text-6xl font-semibold leading-[0.95] tracking-tighter md:text-8xl">Take over the timeline</h1>
        <p className="reveal mx-auto mt-6 max-w-md text-lg text-black/60" style={{ animationDelay: "0.15s" }}>Unlock the content tactics creators use to blow up fast and stay at the top of the feed.</p>
        <div className="reveal mt-8 flex justify-center gap-3" style={{ animationDelay: "0.3s" }}><Btn>Enroll Now</Btn><Btn dark={false}>See Details</Btn></div>
        <div className="mx-auto mt-16 flex max-w-3xl items-end justify-center gap-2 md:gap-3">
          {portraits.map((g, i) => (
            <Motion key={i} speed={[-60, -120, -90, -150][i]} y={0}>
              <div className="reveal" style={{ animationDelay: `${0.45 + i * 0.12}s` }}>
                <div className="float shadow-soft h-40 w-[22vw] rounded-3xl border-4 border-white md:h-64 md:w-48" style={{ background: g, ["--r" as string]: `${[-4, 3, -2, 5][i]}deg`, animationDelay: `${i * 0.4}s` }} />
              </div>
            </Motion>
          ))}
        </div>
      </section>

      <section id="approach" className="py-24">
        <Title cta="Our Approach">You&apos;ll love<br />this course</Title>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
          {courseCards.map((c, i) => (
            <Motion key={c.t} y={180} s={0.9} o={0} d={(i % 3) * 1.2 + Math.floor(i / 3) * 0.5}>
              <div className="shadow-soft flex aspect-[3/4] flex-col justify-end rounded-3xl p-5 text-white transition hover:-translate-y-2" style={{ background: c.g }}>
                <h3 className="text-xl font-semibold">{c.t}</h3><p className="mt-1 text-sm text-white/70">{c.d}</p>
              </div>
            </Motion>
          ))}
        </div>
      </section>

      <section className="relative py-32 text-center">
        <div className="relative mx-auto h-56 max-w-3xl">
          {[["left-[8%] top-[45%]", -160, 120], ["left-[28%] top-[10%]", -80, 160], ["left-[48%] top-[55%]", 0, 200], ["right-[28%] top-[8%]", 80, 150], ["right-[8%] top-[42%]", 160, 110]].map(([pos, x, y], i) => {
            const p = platforms[i];
            return (
              <div key={p.n} className={`absolute ${pos}`}>
                <Motion x={x as number} y={y as number} o={0} blur={8} s={0.5} speed={-40 - i * 20} d={i * 0.4}>
                  <span className="float relative grid h-12 w-12 place-items-center rounded-2xl bg-white text-sm font-bold shadow-soft" style={{ color: p.c, animationDelay: `${i * 0.6}s` }}>
                    {p.n[0]}
                    <i className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#ff3b5c]" />
                  </span>
                </Motion>
              </div>
            );
          })}
        </div>
        <Heading className="-mt-4">Built to Go<br />Everywhere</Heading>
        <div className="mx-auto mt-12 grid max-w-3xl gap-8 px-6 text-sm text-black/55 sm:grid-cols-3">
          {[["Clear System", "Follow a simple system that guides every post you make."], ["Every Platform", "Create once and show up everywhere your audience is."], ["Real Results", "Results that build over time, with no guessing."]].map(([t, d], i) => (
            <Motion key={t} y={60} o={0} d={i * 1.5}><p><b className="block text-black">{t}</b>{d}</p></Motion>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <Heading>The system<br />that works</Heading>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {pills.map((p, i) => (
            <Motion key={p} x={[-260, 0, 260][i % 3]} y={[0, 60, 0][i % 3]} o={0} blur={6} d={Math.floor(i / 3) * 1.2 + (i % 3) * 0.3}>
              <span className="shadow-soft flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 text-sm font-medium"><i className="h-6 w-6 rounded-full bg-[#2f6bff]" />{p}</span>
            </Motion>
          ))}
        </div>
        <Motion y={50} o={0}>
          <p className="mx-auto mt-8 max-w-sm text-sm text-black/60">This system works because it replaces guessing with structure — so every post has a purpose and results build over time.</p>
          <div className="mt-6 flex justify-center gap-2"><Btn>Enroll Now</Btn><Btn dark={false}>See Curriculum</Btn></div>
        </Motion>
      </section>

      <section id="instructor" className="mx-auto max-w-5xl px-6 py-24">
        <Motion y={140} s={0.92} o={0}>
          <div className="shadow-soft grid overflow-hidden rounded-3xl bg-white md:grid-cols-2">
            <Motion x={-80} s={1.15} o={0} start={0.9} end={0.4}>
              <div className="relative min-h-80 h-full" style={{ background: "linear-gradient(160deg,#c89a6a,#4a2f1c)" }}>
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white p-3 text-sm"><b>Olivia Morgan</b><br /><span className="text-black/50">Tokko Creator &amp; Educator</span></div>
              </div>
            </Motion>
            <div className="p-8 md:p-10">
              <p className="text-xs uppercase text-black/40">Background</p>
              <h2 className="mt-1 text-3xl font-semibold">My story</h2>
              <p className="mt-4 text-sm leading-relaxed text-black/60">I created Tokko after years of trying to stay consistent, figure out what to post, and understand why some content worked while other didn&apos;t. Over time, that process became a system built from real creator workflows, repeated until it was clear.</p>
              <div className="mt-6 flex gap-6 text-sm font-medium"><span>1.1M+</span><span>4.6M+</span><span>750K+</span></div>
            </div>
          </div>
        </Motion>
      </section>

      <section id="curriculum" className="py-24">
        <Title cta="View Pricing">What this<br />teaches you</Title>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 px-6 md:grid-cols-3">
          {teaches.map((t, i) => (
            <Motion key={t.t} y={220 - i * 40} o={0} s={0.94} d={i * 1.2}>
              <div className="shadow-soft h-full overflow-hidden rounded-3xl bg-white">
                <div className="p-5 text-white" style={{ background: t.g }}><h3 className="text-lg font-semibold">{t.t}</h3><p className="text-sm text-white/80">Build a strong base that supports every post.</p></div>
                <div className="p-5 text-sm"><p className="mb-2 text-xs text-black/40">What you&apos;ll learn</p>
                  <ol className="space-y-1.5 text-black/70">{t.items.map((x, j) => <li key={x}>{j + 1}. {x}</li>)}</ol>
                  <div className="mt-4 flex gap-2">{t.tags.map((g) => <span key={g} className="rounded-full bg-black/5 px-2 py-1 text-xs">{g}</span>)}</div>
                </div>
              </div>
            </Motion>
          ))}
        </div>
        <Motion y={60} o={0} className="mx-auto mt-4 max-w-6xl px-6">
          <div className="flex items-center justify-between rounded-2xl bg-black/[0.05] p-4 text-sm"><span>Ready to put it into action?<br /><span className="text-black/50">Built to be practical, repeatable, and easy to apply.</span></span><span className="flex gap-2"><Btn>Enroll Now</Btn><Btn dark={false}>See Stories</Btn></span></div>
        </Motion>
      </section>

      <section className="px-6 py-24 text-center">
        <Heading className="mx-auto max-w-3xl">Tokko is a practical course built around a clear system for content and growth.</Heading>
        <Motion y={200} s={0.8} o={0} className="mx-auto mt-12 max-w-3xl">
          <div className="shadow-soft grid aspect-video place-items-center rounded-3xl" style={{ background: "linear-gradient(135deg,#7a5a3a,#d6b48a)" }}>
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[#b58cf0] text-2xl text-white transition hover:scale-110">▶</span>
          </div>
        </Motion>
        <Motion y={30} o={0}><p className="mt-6 text-sm text-black/50">It&apos;s built to make content feel simpler, clearer, and easier to stick with over time.</p></Motion>
      </section>

      <section className="px-6 py-24 text-center">
        <Heading>Real stories<br />from creators</Heading>
        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {reviews.map((r, i) => (
            <Motion key={r.n} x={[-160, 160, -120, 120][i]} y={240} r={[-18, 16, -12, 14][i]} o={0} s={0.85} d={i * 0.8}>
              <div className="shadow-soft rounded-2xl bg-white p-5 text-left text-sm" style={{ transform: `rotate(${[-3, 2, 2, -2][i]}deg)` }}>
                <p className="text-[#ff5a3c]">★★★★★</p><p className="mt-2 text-black/70">{r.t}</p><p className="mt-3 font-medium">{r.n}</p>
              </div>
            </Motion>
          ))}
        </div>
      </section>

      <section className="py-24">
        <Title cta="View FAQs">Included in<br />the course</Title>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
          {included.map(([t, d], i) => (
            <Motion key={t} y={140 + Math.floor(i / 4) * 70} s={0.88} o={0} d={(i % 4) * 0.6 + Math.floor(i / 4) * 1.2}>
              <div className="shadow-soft h-full rounded-2xl bg-[#2f6bff] p-5 text-white transition hover:-translate-y-1">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/20">◆</span>
                <h3 className="mt-6 font-semibold">{t}</h3><p className="mt-1 text-xs text-white/75">{d}</p>
              </div>
            </Motion>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <Heading>Get more<br />with Tokko</Heading>
        <Motion y={40} o={0}><div className="mt-6 flex justify-center gap-2"><Btn>Enroll Now</Btn><Btn dark={false}>View Pricing</Btn></div></Motion>
        <div className="mx-auto mt-14 flex max-w-xl justify-center gap-4">
          {[["Content Templates", "Plug-and-play templates to help you move faster and post with confidence."], ["Content Breakdowns", "Step-by-step breakdowns of how posts are structured and why they work."]].map(([t, d], i) => (
            <Motion key={t} className="w-1/2" x={i ? 120 : -120} y={260} r={i ? 14 : -14} o={0} d={i * 0.8}>
              <div className="shadow-soft rounded-2xl bg-white p-5 text-left text-sm" style={{ transform: `rotate(${i ? 2 : -3}deg)` }}><p className="text-xs text-[#b52fd6]">{t}</p><p className="mt-2 text-lg font-semibold leading-tight">{d}</p></div>
            </Motion>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-4 text-xs text-black/50">
          {["Trend Tracker", "Private Community", "Ongoing Updates"].map((x, i) => <Motion key={x} y={40} o={0} d={i * 0.7}><span><b className="block text-black">{x}</b>Stay ahead of what&apos;s working.</span></Motion>)}
        </div>
      </section>

      <section id="pricing" className="py-24 text-center">
        <Heading>Invest once.<br />Use it forever</Heading>
        <Motion y={30} o={0}><p className="mt-4 text-sm text-black/50">One-time payment. Lifetime access. 30-day money-back guarantee.</p></Motion>
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 px-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Motion key={p.n} y={[220, 160, 280][i]} s={0.92} o={0} d={i * 0.8}>
              <div className="shadow-soft h-full overflow-hidden rounded-3xl bg-white text-left">
                <div className="p-5 text-white" style={{ background: p.g }}><span className="rounded-full bg-white/25 px-2 py-0.5 text-xs">{p.n}{p.pop ? " · Popular" : ""}</span><p className="mt-8 text-4xl font-semibold">{p.p}</p></div>
                <ul className="space-y-2 p-5 text-sm text-black/70">{p.items.map((it) => <li key={it}>• {it}</li>)}</ul>
                <div className="px-5 pb-5"><a href="#" className="block rounded-full bg-black/[0.06] py-2.5 text-center text-sm font-medium transition hover:bg-black/10">Start with {p.n}</a></div>
              </div>
            </Motion>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <Heading className="text-center">Let&apos;s clear a<br />few things up</Heading>
        <Faq />
      </section>

      <Motion s={0.9} y={80} o={0.3} start={1.05} end={0.5} className="mx-4">
        <section className="rounded-[2rem] bg-black/[0.05] px-6 py-24 text-center">
          <span className="rounded-full bg-white px-3 py-1 text-xs">Take control</span>
          <h2 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">Plan better.<br />Post smarter</h2>
          <p className="mx-auto mt-4 max-w-sm text-sm text-black/60">Stop guessing what works. Start building content with direction and confidence, using a clear system.</p>
          <div className="mt-6 flex justify-center gap-2"><Btn>Enroll Now</Btn><Btn dark={false}>View Pricing</Btn></div>
          <div className="mx-auto mt-12 flex max-w-sm justify-center">
            {portraits.slice(0, 3).map((g, i) => (
              <Motion key={i} x={[140, 0, -140][i]} y={120} r={[-30, 0, 30][i]} s={0.7} o={0} start={1.1} end={0.65}>
                <div className="shadow-soft -mx-3 h-40 w-32 rounded-2xl border-4 border-white" style={{ background: g, transform: `rotate(${[-6, 0, 6][i]}deg)` }} />
              </Motion>
            ))}
          </div>
        </section>
      </Motion>

      <Motion y={60} o={0} start={1.1} end={0.85}>
        <footer className="mx-auto grid max-w-5xl gap-10 px-6 py-16 text-sm md:grid-cols-[1fr_auto_auto]">
          <div><p className="flex items-center gap-2 font-semibold"><span className="h-5 w-5 rounded-full bg-[#d9c8f5]" />Tokko</p><p className="mt-2 max-w-xs text-black/50">Tokko helps creators build content with clarity, consistency, and confidence.</p></div>
          {[["Menu", ["Approach", "Instructor", "Curriculum", "Pricing"]], ["Support", ["Email Us", "Telegram", "Live chat", "Help Center"]]].map(([h, l]) => (
            <div key={h as string}><b>{h as string}</b><ul className="mt-2 space-y-1 text-black/50">{(l as string[]).map((x) => <li key={x}>{x}</li>)}</ul></div>
          ))}
        </footer>
      </Motion>
    </main>
  );
}
