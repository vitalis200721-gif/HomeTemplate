import { CheckCircle2, Gauge, Shield, Stars } from "lucide-react";

const outcomes = [
  {
    icon: Stars,
    title: "Premium perception",
    body: "Glassy surfaces, subtle gradients, and high contrast that feel editorial and expensive."
  },
  {
    icon: Gauge,
    title: "Fast iteration",
    body: "Small number of files, clean section components, single source of truth configs."
  },
  {
    icon: Shield,
    title: "Product-grade defaults",
    body: "Accessible contrast, clear hierarchy, and sensible spacing — ready for client work."
  },
  {
    icon: CheckCircle2,
    title: "Sell-ready template",
    body: "No auth/DB/payments. Just a landing that looks like it cost a lot more than it did."
  }
];

export default function ValueOutcomes() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-semibold tracking-wide text-white/60">
                Outcomes
              </div>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                A template that sells the work before you speak.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                Built for studios that need a confident web presence. Everything sits on a deep neutral
                canvas with a cinematic lighting model and crisp typography.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                {outcomes.map((o) => (
                  <div
                    key={o.title}
                    className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
                        <o.icon className="h-5 w-5 text-white/85" />
                      </div>
                      <div>
                        <div className="text-base font-semibold">{o.title}</div>
                        <p className="mt-2 text-sm leading-relaxed text-white/65">{o.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
