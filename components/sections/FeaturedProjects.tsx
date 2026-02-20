import Link from "next/link";
import { data } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold tracking-wide text-white/60">
              Featured projects
            </div>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Cinematic cards. Strong hierarchy. Real portfolio energy.
            </h2>
          </div>

          <Link
            href="/work"
            className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 md:inline-flex"
          >
            View all work
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {data.projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-6 transition hover:bg-white/5"
            >
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                  style={{ background: "rgb(var(--accent) / 0.18)" }}
                />
              </div>

              <div className="relative">
                <div className="text-xs font-semibold text-white/60">{p.category}</div>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{p.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{p.description}</p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                    <ArrowUpRight className="h-4 w-4 text-white/75" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-neutral-950/40 px-3 py-2">
                    <div className="text-sm font-semibold">{p.meta.timeline}</div>
                    <div className="mt-0.5 text-xs text-white/55">Timeline</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-neutral-950/40 px-3 py-2">
                    <div className="text-sm font-semibold">{p.meta.scope}</div>
                    <div className="mt-0.5 text-xs text-white/55">Scope</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-neutral-950/40 px-3 py-2">
                    <div className="text-sm font-semibold">{p.meta.year}</div>
                    <div className="mt-0.5 text-xs text-white/55">Year</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold">Gallery (mock)</div>
          <p className="mt-2 text-sm text-white/65">
            Use <code className="rounded bg-white/5 px-1 py-0.5">lib/data.ts</code> to swap in real images later.
            This template keeps surfaces dark and cinematic.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {data.gallery.map((g) => (
              <div
                key={g.alt}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-4"
              >
                <div className="text-xs text-white/55">{g.alt}</div>
                <div className="mt-3 h-24 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}