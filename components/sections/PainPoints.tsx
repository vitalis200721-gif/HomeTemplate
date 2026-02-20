import { AlertTriangle, Clock, Layers, Wand2 } from "lucide-react";

const points = [
  {
    icon: Clock,
    title: "Slow first impressions",
    body: "If your hero feels generic, prospects bounce. You need cinematic contrast and immediate clarity."
  },
  {
    icon: Layers,
    title: "Too many UI styles",
    body: "Mixed surfaces and random section colors break trust. This template stays on a dark canvas throughout."
  },
  {
    icon: AlertTriangle,
    title: "Hydration edge cases",
    body: "Motion is used carefully: reducedMotion='user', no server/client style divergence, scroll effects are stable."
  },
  {
    icon: Wand2,
    title: "Copy that doesn’t sell",
    body: "Default copy is tailored for studios: architecture, interior, or agency — with premium tone and structure."
  }
];

export default function PainPoints() {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold tracking-wide text-white/60">
              Why premium teams switch
            </div>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Dark, cinematic, conversion-first.
            </h2>
          </div>
          <div className="hidden text-sm text-white/55 md:block">
            No white section flips. Glass cards only.
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <p.icon className="h-5 w-5 text-white/85" />
                </div>
                <div>
                  <div className="text-base font-semibold">{p.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
