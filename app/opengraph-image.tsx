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
          background: "#0a0a0a",
          color: "white"
        }}
      >
        {/* Top */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 24
            }}
          >
            OT
          </div>

          <div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>
              {siteConfig.name}
            </div>
            <div style={{ fontSize: 14, opacity: 0.7 }}>
              {demo.label}
            </div>
          </div>
        </div>

        {/* Center */}
        <div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1
            }}
          >
            {demo.heroTitle}
          </div>

          <div
            style={{
              marginTop: 20,
              fontSize: 24,
              opacity: 0.8,
              maxWidth: 900,
              lineHeight: 1.4
            }}
          >
            {demo.heroSubtitle}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            opacity: 0.65
          }}
        >
          <div>Next.js 14+ · App Router · Tailwind</div>
          <div>{siteConfig.url.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    size
  );
}