import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Cyclop Hub — Community Skills for Cyclop One";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0A0A0F 0%, #12121A 50%, #0A0A0F 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        {/* Top label */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#3B82F6",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          cyclop.one/skills
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#F0F0F5",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Cyclop Hub
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "#8888A0",
            marginBottom: 56,
          }}
        >
          Community Skills for Cyclop One
        </div>

        {/* Skill pills row */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          {["Gmail", "WhatsApp", "Slack", "Notion", "Spotify", "X", "+ more"].map((name) => (
            <div
              key={name}
              style={{
                padding: "10px 22px",
                borderRadius: 9999,
                background: "rgba(59, 130, 246, 0.12)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                color: "#93C5FD",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
