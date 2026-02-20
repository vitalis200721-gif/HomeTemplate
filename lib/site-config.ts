export const siteConfig = {
  name: "Obsidian Template",
  description:
    "A premium cinematic dark website template for studios — architecture, interior, or agency. App Router + Tailwind + lucide-react.",
  url: "https://example.com",
  nav: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/work" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Pricing", href: "/#pricing" }
  ],
  primaryCta: { label: "Get a quote", href: "/#contact" },
  contact: {
    email: "studio@obsidian-template.com",
    location: "Vilnius · Remote Worldwide"
  },
  socials: {
    instagram: "https://instagram.com/",
    x: "https://x.com/",
    facebook: "https://facebook.com/"
  },
  footerBlurb:
    "Obsidian is a dark cinematic template designed to make studios look premium on day one — clean structure, tasteful motion, and glassy contrast."
} as const;