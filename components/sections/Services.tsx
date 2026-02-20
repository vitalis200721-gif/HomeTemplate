import { Brush, Building2, Camera, DraftingCompass, Sparkles, Workflow } from "lucide-react";
import { data } from "@/lib/data";

const iconMap = {
  DraftingCompass,
  Building2,
  Camera,
  Brush,
  Workflow,
  Sparkles
} as const;

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold tracking-wide text-white/60">Services</div>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Built to fit architecture, interior, or agency.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
              Swap the demo type for different hero copy + accent color. Keep the system, change the story.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {data.services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <div
                key={s.title}
                className="group rounded-3xl border border-white/10 bg-neutral-900/40 p-6 transition hover:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5"
                    style={{ boxShadow: "0 0 0 1px rgb(var(--accent) / 0.0)" }}
                  >
                    <Icon className="h-5 w-5 text-white/85" />
                  </div>
                  <div>
                    <div className="text-base font-semibold">{s.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
                  </div>
                </div>

                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <ul className="mt-5 space-y-2 text-sm text-white/65">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "rgb(var(--accent) / 0.8)" }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
