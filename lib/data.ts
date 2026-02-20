export const data = {
  services: [
    {
      icon: "DraftingCompass",
      title: "Concept → narrative",
      body: "Translate intent into a crisp story: positioning, structure, and premium pacing.",
      bullets: ["Hero + proof stack", "Studio tone guidelines", "Conversion-first sections"]
    },
    {
      icon: "Building2",
      title: "Portfolio systems",
      body: "Project cards that feel like editorial spreads — consistent, cinematic, believable.",
      bullets: ["Featured projects grid", "Tags + metrics", "Gallery-ready layout"]
    },
    {
      icon: "Camera",
      title: "Visual direction",
      body: "A lighting model for the web: vignette depth, subtle gradients, glass surfaces.",
      bullets: ["Dark canvas rules", "Surface hierarchy", "Accent discipline"]
    },
    {
      icon: "Brush",
      title: "Brand refinement",
      body: "Type scale, spacing, and contrast tuned for luxury perception without noise.",
      bullets: ["High contrast AA+", "Editorial rhythm", "Polished micro-details"]
    },
    {
      icon: "Workflow",
      title: "Launch-ready structure",
      body: "Minimal Next.js App Router file tree — easy to maintain, easy to sell.",
      bullets: ["Few files", "No DB/auth", "Config-driven content"]
    },
    {
      icon: "Sparkles",
      title: "Tasteful motion",
      body: "Framer Motion used carefully to avoid mismatches — smooth, subtle, optional.",
      bullets: ["reducedMotion='user'", "No SSR/client divergence", "No scroll math on server"]
    }
  ],

  projects: [
    {
      slug: "obsidian-atrium",
      category: "Architecture",
      title: "Obsidian Atrium",
      description: "A restrained civic concept with dramatic negative space and quiet detailing.",
      longSummary:
        "A civic atrium concept designed as a calm, high-contrast volume — daylight is treated like a material. The presentation emphasizes restraint: fewer moves, stronger hierarchy, and a clear narrative from exterior massing to interior procession.",
      tags: ["Civic", "Concrete", "Daylight"],
      meta: {
        year: "2026",
        location: "Vilnius",
        timeline: "6 wks",
        scope: "Full concept"
      },
      outcomes: [
        "A portfolio-ready case study with editorial pacing",
        "Clear hierarchy: hero → proof → details → outcomes",
        "Dark cinematic visual system for premium perception",
        "Reusable card patterns for future projects"
      ],
      gallery: [
        { alt: "Atrium — daylight study" },
        { alt: "Atrium — circulation and void" },
        { alt: "Atrium — material palette" },
        { alt: "Atrium — facade rhythm" }
      ]
    },

    {
      slug: "noir-residence",
      category: "Interior",
      title: "Noir Residence",
      description: "Warm minimalism with controlled contrast — material-led, calm, confident.",
      longSummary:
        "A residential interior concept built around warmth and shadow. The narrative focuses on material relationships: walnut, stone, and quiet indirect lighting. The case study format highlights mood first, then decisions, then outcomes — like a magazine spread.",
      tags: ["Residential", "Walnut", "Stone"],
      meta: {
        year: "2026",
        location: "Kaunas",
        timeline: "4 wks",
        scope: "Interior concept"
      },
      outcomes: [
        "Premium hero + CTA framing for service-led studios",
        "Glassy cards that keep everything on a dark canvas",
        "Strong typography rhythm that reads like editorial",
        "Easy swap-in for real photos later"
      ],
      gallery: [
        { alt: "Residence — living area lighting" },
        { alt: "Residence — kitchen material contrast" },
        { alt: "Residence — bedroom calm palette" },
        { alt: "Residence — bathroom stone + glass" }
      ]
    },

    {
      slug: "studio-launch-kit",
      category: "Agency",
      title: "Studio Launch Kit",
      description: "A conversion-first brand site system built to ship fast with premium perception.",
      longSummary:
        "A launch kit for agencies who need a premium site quickly: a consistent dark system, a strong story arc, and modular sections that sell capability without noise. The case study highlights clarity — what was built, why it works, and how it converts.",
      tags: ["Brand", "Web", "Systems"],
      meta: {
        year: "2026",
        location: "Remote",
        timeline: "2 wks",
        scope: "Landing system"
      },
      outcomes: [
        "Config-driven structure (brand + demo + data)",
        "Safe motion rules (reduced motion + no SSR divergence)",
        "Clean section composition for fast customization",
        "Sell-ready template with no backend dependencies"
      ],
      gallery: [
        { alt: "Launch kit — hero layout" },
        { alt: "Launch kit — services grid" },
        { alt: "Launch kit — project cards" },
        { alt: "Launch kit — pricing and CTA" }
      ]
    }
  ],

  testimonials: [
    {
      name: "Elena Markauskaite",
      role: "Principal Architect",
      quote: "The layout feels like an editorial portfolio. Clients assumed we hired a high-end studio.",
      rating: 5
    },
    {
      name: "Tom R.",
      role: "Creative Director",
      quote: "Dark, cinematic, but still clean and readable. The structure is refreshingly minimal.",
      rating: 5
    },
    {
      name: "Mina S.",
      role: "Interior Designer",
      quote: "Finally a template that doesn’t flip to white sections. Everything stays consistent and premium.",
      rating: 5
    }
  ],

  pricing: [
    {
      name: "Starter",
      price: "$49",
      note: "For personal portfolios",
      features: ["Landing layout + sections", "Config-driven copy", "Dark cinematic system"],
      cta: "Choose Starter",
      highlight: false
    },
    {
      name: "Studio",
      price: "$99",
      note: "Best for client work",
      features: ["Everything in Starter", "Demo switching (3 modes)", "Work pages + case studies"],
      cta: "Choose Studio",
      highlight: true
    },
    {
      name: "Extended",
      price: "$199",
      note: "For products & marketplaces",
      features: ["Everything in Studio", "Commercial-friendly tier", "Priority template updates (mock)"],
      cta: "Choose Extended",
      highlight: false
    }
  ],

  blogPosts: [
    { title: "Cinematic contrast: why dark sells premium", date: "2026-01-10", tag: "Design" },
    { title: "Glass surfaces without losing readability", date: "2026-01-22", tag: "UI" },
    { title: "Portfolio pacing: the 7-section rule", date: "2026-02-02", tag: "Strategy" }
  ],

  gallery: [
    { alt: "Material study — matte stone" },
    { alt: "Shadow line — minimal details" },
    { alt: "Glassy UI — dark surfaces" },
    { alt: "Grid texture — subtle depth" }
  ]
} as const;