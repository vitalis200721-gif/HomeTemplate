import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";
import { getActiveDemo } from "@/lib/demo-config";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const demo = getActiveDemo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0a0a0a",
          color: "white",
          position: "relative"
        }}
      >
        {/* Background lighting */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(900px 500px at 50% 0%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(700px 400px at 15% 20%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(800px 500px at 90% 10%, rgba(255,255,255,0.06), transparent 60%)"
          }}
        />

        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.12,
            WebkitMaskImage:
              "radial-gradient(700px 460px at 50% 25%, black 55%, transparent 100%)"
          }}
        />

        {/* Top brand */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: -1
            }}
          >
            OT
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>
              {siteConfig.name}
            </div>
            <div style={{ fontSize: 14, opacity: 0.7 }}>
              {demo.label}
            </div>
          </div>
        </div>

        {/* Center hero */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1
            }}
          >
            {demo.heroTitle}
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 22,
              opacity: 0.8,
              maxWidth: 920,
              lineHeight: 1.4
            }}
          >
            {demo.heroSubtitle}
          </div>
        </div>

        {/* Bottom tags */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            {["Next.js 14+", "App Router", "Tailwind CSS", "Cinematic Dark"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.06)",
                    fontSize: 14,
                    opacity: 0.9
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>

          <div style={{ fontSize: 14, opacity: 0.65 }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}