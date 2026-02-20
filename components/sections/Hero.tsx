"use client";

import { motion } from "framer-motion";
import { getActiveDemo } from "@/lib/demo-config";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const demo = getActiveDemo();

  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:pb-20 md:pt-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Sparkles className="h-3.5 w-3.5" />
              Premium dark cinematic template · App Router · Tailwind
            </div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              style={{ opacity: 0, transform: "translateY(8px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl"
            >
              {demo.heroTitle}
            </motion.h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
              {demo.heroSubtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={siteConfig.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-neutral-950 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                style={{ background: `rgb(var(--accent))` }}
              >
                {demo.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
              >
                View featured work
                <ArrowRight className="h-4 w-4 text-white/70" />
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {[
                { k: "0.8s", v: "Perceived speed" },
                { k: "AA", v: "Contrast-first UI" },
                { k: "100%", v: "Dark canvas" }
              ].map((m) => (
                <div
                  key={m.v}
                  className="rounded-2xl border border-white/10 bg-neutral-900/40 px-4 py-3"
                >
                  <div className="text-lg font-semibold">{m.k}</div>
                  <div className="mt-1 text-xs text-white/60">{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute -left-20 -top-20 h-60 w-60 rounded-full blur-3xl"
                  style={{ background: "rgb(var(--accent) / 0.25)" }}
                />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="text-sm font-semibold text-white/90">Cinematic system</div>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Soft grid texture, vignette lighting, glass surfaces, and high-contrast typography —
                  tuned for premium studios and creative teams.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "App Router only — minimal, product-grade structure",
                    "No auth, no DB, no payments — sell-ready template",
                    "Accent color controlled by demo config (CSS variable)"
                  ].map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
                  <div className="text-xs text-white/60">Primary CTA</div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {demo.ctaLabel} → {siteConfig.primaryCta.href}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-white/45">
              Tip: swap demo type in{" "}
              <code className="rounded bg-white/5 px-1 py-0.5">lib/demo-config.ts</code>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
