export type DemoType = "architecture" | "interior" | "agency";

type Demo = {
  type: DemoType;
  label: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  ctaBody: string;
  /** Accent as rgb triplet string: "R G B" */
  accentRgb: string;
};

const demos: Record<DemoType, Demo> = {
  architecture: {
    type: "architecture",
    label: "Architecture demo",
    heroTitle: "Architecture that feels inevitable.",
    heroSubtitle:
      "A cinematic, contrast-first landing built for studios that design with restraint. Present work like a film still — quiet, sharp, premium.",
    ctaLabel: "Request a consultation",
    ctaBody:
      "Share your timeline and scope. We’ll respond with a clean plan and a premium presentation flow tailored to your studio.",
    accentRgb: "217 70 239"
  },
  interior: {
    type: "interior",
    label: "Interior demo",
    heroTitle: "Interiors with light, depth, and calm.",
    heroSubtitle:
      "A dark canvas that makes material, texture, and composition feel expensive. Perfect for residential and hospitality portfolios.",
    ctaLabel: "Book a walkthrough",
    ctaBody:
      "Send a few references and your target vibe. We’ll map the experience into a refined page narrative and visual system.",
    accentRgb: "34 211 238"
  },
  agency: {
    type: "agency",
    label: "Agency demo",
    heroTitle: "A brand site that closes before the call.",
    heroSubtitle:
      "High-contrast editorial layout with glass surfaces and precise hierarchy — built for creative agencies shipping premium work fast.",
    ctaLabel: "Start a project",
    ctaBody:
      "Tell us what you’re launching and when. We’ll propose a rollout plan and a page structure that feels unmistakably premium.",
    accentRgb: "74 222 128"
  }
};

function isDemoType(v: unknown): v is DemoType {
  return v === "architecture" || v === "interior" || v === "agency";
}

/**
 * Demo selection (sell-friendly):
 * - controlled via NEXT_PUBLIC_DEMO
 * - safe fallback to "architecture"
 *
 * Examples:
 *   NEXT_PUBLIC_DEMO=agency
 *   NEXT_PUBLIC_DEMO=interior
 */
export function getActiveDemoType(): DemoType {
  const raw = process.env.NEXT_PUBLIC_DEMO;
  const normalized = typeof raw === "string" ? raw.trim().toLowerCase() : "";
  return isDemoType(normalized) ? normalized : "architecture";
}

export function getActiveDemo(): Demo {
  return demos[getActiveDemoType()];
}