import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/components/Providers";
import { siteConfig } from "@/lib/site-config";
import { getActiveDemo } from "@/lib/demo-config";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const demo = getActiveDemo();

  // Convert hex -> rgb triplet string for CSS var (fallback to default in globals).
  const accentRgb = demo.accentRgb ?? "99 102 241";

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        style={{ ["--accent" as any]: accentRgb }}
        className="min-h-screen bg-neutral-950 text-white"
      >
        <Providers>
          {/* Global cinematic canvas */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 obsidian-vignette" />
            <div className="absolute inset-0 obsidian-grid" />
            <div className="absolute inset-0 bg-[radial-gradient(800px_420px_at_50%_30%,rgba(255,255,255,0.07),transparent_60%)]" />
          </div>

          {children}
        </Providers>
      </body>
    </html>
  );
}
