import { siteConfig } from "@/lib/site-config";
import { getActiveDemo } from "@/lib/demo-config";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  const demo = getActiveDemo();

  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -left-28 -top-28 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "rgb(var(--accent) / 0.22)" }}
            />
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="text-xs font-semibold tracking-wide text-white/60">Final CTA</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-4xl">
                Turn taste into trust — with a cinematic presence.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65">{demo.ctaBody}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-neutral-950"
                  style={{ background: "rgb(var(--accent))" }}
                >
                  {demo.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  Email: {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-neutral-950/40 p-6">
                <div className="text-sm font-semibold">What you get</div>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {[
                    "Dark cinematic system (grid + vignette + glass)",
                    "Config-driven brand + demo switching",
                    "Minimal code, App Router only",
                    "lucide-react icons, motion used safely"
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "rgb(var(--accent) / 0.85)" }}
                      />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mt-6 text-xs text-white/55">
                  Brand config:{" "}
                  <code className="rounded bg-white/5 px-1 py-0.5">lib/site-config.ts</code>
                  <br />
                  Demo config:{" "}
                  <code className="rounded bg-white/5 px-1 py-0.5">lib/demo-config.ts</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
