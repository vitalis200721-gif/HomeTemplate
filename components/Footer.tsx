import { siteConfig } from "@/lib/site-config";
import { Facebook, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold">{siteConfig.name}</div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.footerBlurb}
            </p>

            <div className="mt-5 text-sm text-white/70">
              <div>{siteConfig.contact.email}</div>
              <div className="mt-1 text-white/55">{siteConfig.contact.location}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:justify-self-center">
            <div>
              <div className="text-sm font-semibold text-white/90">Navigation</div>
              <ul className="mt-3 space-y-2">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <a className="text-sm text-white/65 hover:text-white" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/90">Contact</div>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                <li>
                  <a className="hover:text-white" href={siteConfig.primaryCta.href}>
                    {siteConfig.primaryCta.label}
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href={`mailto:${siteConfig.contact.email}`}>
                    Email us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#pricing">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="text-sm font-semibold text-white/90">Social</div>
            <div className="mt-3 flex items-center gap-2">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                href={siteConfig.socials.instagram}
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                href={siteConfig.socials.x}
                aria-label="X"
              >
                <X className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                href={siteConfig.socials.facebook}
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 text-xs text-white/45">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
