import { data } from "@/lib/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-xs font-semibold tracking-wide text-white/60">Testimonials</div>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
          Trusted by teams who sell taste.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {data.testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <Quote className="h-4 w-4 text-white/75" />
                </div>
              </div>

              <div className="mt-1 text-xs text-white/55">{t.role}</div>

              <p className="mt-4 text-sm leading-relaxed text-white/70">“{t.quote}”</p>

              <div className="mt-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-6 rounded-full bg-white/10"
                    style={{
                      background:
                        i < t.rating ? "rgb(var(--accent) / 0.75)" : "rgba(255,255,255,0.10)"
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold">Also included: blog mock data</div>
          <p className="mt-2 text-sm text-white/65">
            Seed posts live in{" "}
            <code className="rounded bg-white/5 px-1 py-0.5">lib/data.ts</code>. You can wire a
            real CMS later without touching the visual system.
          </p>
        </div>
      </div>
    </section>
  );
}
