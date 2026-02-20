import { notFound } from "next/navigation";
import Link from "next/link";
import { data } from "@/lib/data";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return data.projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const project = data.projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Work" };
  return { title: project.title, description: project.description };
}

export default function WorkDetailPage({ params }: Props) {
  const project = data.projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-neutral-950"
            style={{ background: "rgb(var(--accent))" }}
          >
            Start a similar project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-start">
          {/* Left: title + summary */}
          <div className="md:col-span-7">
            <div className="text-xs font-semibold tracking-wide text-white/60">
              {project.category}
            </div>
            <h1 className="mt-2 text-balance text-3xl font-semibold md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/70 md:text-base">
              {project.longSummary}
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-neutral-900/40 p-6">
              <div className="text-sm font-semibold">What we shipped</div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {project.outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "rgb(var(--accent) / 0.85)" }}
                    />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Gallery (placeholder)</div>
              <p className="mt-2 text-sm text-white/65">
                Replace placeholders with real images later (optional). Template stays dark and cinematic.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.gallery.map((g) => (
                  <div
                    key={g.alt}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-4"
                  >
                    <div className="text-xs text-white/55">{g.alt}</div>
                    <div className="mt-3 h-40 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: meta card */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-6">
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                  style={{ background: "rgb(var(--accent) / 0.18)" }}
                />
              </div>

              <div className="relative">
                <div className="text-sm font-semibold">Project details</div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    { label: "Year", value: project.meta.year },
                    { label: "Location", value: project.meta.location },
                    { label: "Timeline", value: project.meta.timeline },
                    { label: "Scope", value: project.meta.scope }
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3"
                    >
                      <div className="text-xs text-white/55">{m.label}</div>
                      <div className="mt-1 text-sm font-semibold text-white">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mt-5 text-sm font-semibold">Tags</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mt-5 text-sm font-semibold">Brief</div>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Next/Prev (minimal) */}
            <div className="mt-4 grid gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-neutral-950"
                style={{ background: "rgb(var(--accent))" }}
              >
                Request a quote
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
              >
                Back to landing
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}