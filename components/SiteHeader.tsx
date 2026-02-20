"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { getActiveDemo } from "@/lib/demo-config";
import { ChevronRight, Globe, Sparkles } from "lucide-react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const demo = getActiveDemo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cx("mx-auto max-w-6xl px-4", "transition-all")}>
        <div
          className={cx(
            "mt-3 flex items-center justify-between rounded-2xl border",
            scrolled
              ? "border-white/10 bg-neutral-950/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              : "border-white/5 bg-neutral-950/30 backdrop-blur-md"
          )}
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <Link href="/" className="group inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide text-white">
                  {siteConfig.name}
                </div>
                <div className="text-xs text-white/60">{demo.label}</div>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-1 px-2 md:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 px-4 py-3">
            <button
              type="button"
              className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 md:inline-flex"
              aria-label="Language switch"
            >
              <Globe className="h-4 w-4" />
              EN
            </button>

            <a
              href={siteConfig.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-neutral-950 shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
              style={{ background: `rgb(var(--accent))` }}
            >
              {demo.ctaLabel}
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
