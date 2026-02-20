import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.12)",
          color: "white",
          fontWeight: 900,
          fontSize: 28,
          letterSpacing: -1
        }}
      >
        OT
      </div>
    ),
    size
  );
}