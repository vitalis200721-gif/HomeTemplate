import { data } from "@/lib/data";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold tracking-wide text-white/60">Pricing</div>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Simple tiers for premium studios.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
              These are mock tiers to help you sell the template. Replace copy, keep the structure.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {data.pricing.map((p) => (
            <div
              key={p.name}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-6"
            >
              {p.highlight ? (
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: "rgb(var(--accent))" }} />
              ) : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="mt-2 text-3xl font-semibold">{p.price}</div>
                  <div className="mt-1 text-xs text-white/55">{p.note}</div>
                </div>

                {p.highlight ? (
                  <span
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold"
                    style={{ color: "rgb(var(--accent))" }}
                  >
                    Best value
                  </span>
                ) : null}
              </div>

              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-xl border border-white/10 bg-white/5">
                      <Check className="h-4 w-4" style={{ color: "rgb(var(--accent))" }} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-neutral-950"
                style={{
                  background: p.highlight ? "rgb(var(--accent))" : "rgba(255,255,255,0.08)",
                  color: p.highlight ? "#0a0a0a" : "white"
                }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
