import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroScene } from "@/components/three/HeroScene";
import { motion, useScroll, useTransform } from "framer-motion";
import { initWasm, wasmAdd } from "@/lib/wasm";
import * as Lucide from "lucide-react";

export default function Index() {
  const [greeting, setGreeting] = useState("Welcome");
  const [sum, setSum] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening");
  }, []);

  useEffect(() => {
    initWasm().then(() => setSum(wasmAdd(21, 21))).catch(() => setSum(42));
  }, []);

  const pickIcon = (...names: string[]) => {
    for (const n of names) {
      const ic = (Lucide as any)[n];
      if (ic) return ic;
    }
    // fallback to sparkles or a simple span
    return (Lucide as any).Sparkles || ((props: any) => <span {...props} />);
  };

  const features = useMemo(
    () => [
      { title: "AI Personalization", desc: "Adaptive content tailored to each family.", Icon: pickIcon("Sparkles", "Star") },
      { title: "3D & Scrollytelling", desc: "Immersive stories that unfold as you scroll.", Icon: pickIcon("Cube", "Package", "Box") },
      { title: "PWA Offline", desc: "Installable, fast, and reliable on any device.", Icon: pickIcon("Bolt", "Zap") },
      { title: "WCAG 2.1 AA", desc: "Accessible by design with high-contrast controls.", Icon: pickIcon("UniversalAccess", "Accessibility", "Globe") },
    ],
    [],
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_10%_10%,hsl(var(--brand-500-raw))_0%,transparent_60%),radial-gradient(60%_50%_at_90%_20%,hsl(var(--brand-300-raw))_0%,transparent_60%)] opacity-40 dark:opacity-30" aria-hidden />
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <motion.h1 style={{ y: y1 }} className="text-5xl font-black tracking-tight md:text-6xl">
              {greeting}, meet Angels  School.
            </motion.h1>
            <p className="mt-4 max-w-prose text-lg text-muted-foreground">
              A storytelling-first, mobile-native school website with AI-powered personalization, interactive 3D, and accessible design.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#story" className="rounded-md bg-primary px-5 py-2.5 text-primary-foreground shadow hover:opacity-90">Experience the Story</a>
              <a href="/admissions" className="rounded-md border px-5 py-2.5 hover:bg-accent">Apply Now</a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Powered by WebAssembly • Example compute: 21 + 21 = {sum ?? "…"}</p>
          </div>
          <div className="h-[340px] overflow-hidden rounded-xl border bg-gradient-to-br from-brand-500/20 to-brand-300/20">
            <HeroScene />
          </div>
        </div>
      </section>

      {/* Scrollytelling chapters */}
      <section id="story" className="relative">
        <div className="container py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-3">
            {features.map(({ title, desc, Icon }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="rounded-xl border bg-card p-6 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-300 text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="sticky top-16 z-[-1] h-40 w-full bg-gradient-to-b from-transparent to-background" aria-hidden />
      </section>

      {/* Horizontal timeline */}
      <section aria-label="Student journey" className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight">A day at Angels </h2>
          <div className="mt-4 overflow-x-auto">
            <ol className="flex snap-x snap-mandatory gap-6 pb-4">
              {[
                { t: "Arrival", d: "Warm welcomes & advisory check-in" },
                { t: "Inquiry Labs", d: "Project-based learning in studios" },
                { t: "Arts", d: "Music, theater, and visual arts sessions" },
                { t: "Athletics", d: "Team practices and wellness" },
                { t: "Community", d: "Clubs, service, and leadership" },
              ].map((n, i) => (
                <li key={n.t} className="snap-center min-w-[240px] flex-1 rounded-xl border bg-card p-5">
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  <h3 className="text-lg font-semibold">{n.t}</h3>
                  <p className="text-sm text-muted-foreground">{n.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--brand-500-raw))_0%,transparent_60%)] opacity-20 dark:opacity-30" aria-hidden />
        <div className="container grid gap-8 py-16 md:grid-cols-[2fr,1fr] md:py-24">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Ready to explore Angels ?</h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              Join a community where curiosity leads the way. Take a virtual tour, meet our faculty, and discover pathways that fit your story.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/admissions" className="rounded-md bg-primary px-5 py-2.5 text-primary-foreground shadow hover:opacity-90">Start your application</a>
              <a href="/news" className="rounded-md border px-5 py-2.5 hover:bg-accent">News & Events</a>
            </div>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Install as App</h3>
            <p className="mt-1 text-sm text-muted-foreground">Install this site for an app-like experience with offline access.</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
              <li>Fast on any connection</li>
              <li>Works offline</li>
              <li>Add to Home Screen</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
