import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-10">
          <div className="text-xs font-semibold tracking-wide text-white/60">Not found</div>
          <h1 className="mt-2 text-2xl font-semibold md:text-3xl">Project not found</h1>
          <p className="mt-3 text-sm text-white/65">
            The case study you’re looking for doesn’t exist.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/work"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
            >
              Back to Work
            </Link>
            <Link
              href="/"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}