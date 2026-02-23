import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Cyclop One — AI Desktop Automation Agent for macOS";
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
          background: "linear-gradient(135deg, #0A0A0F 0%, #12121A 50%, #0A0A0F 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Eye */}
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "radial-gradient(circle at 40% 35%, #ffffff 0%, #e8e8f0 60%, #c8c8d8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 80px rgba(59, 130, 246, 0.5), 0 0 160px rgba(59, 130, 246, 0.2)",
            position: "relative",
          }}
        >
          {/* Iris */}
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: "50%",
              background: "radial-gradient(circle at 45% 40%, #60A5FA 0%, #3B82F6 50%, #1E40AF 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Pupil */}
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "radial-gradient(circle at 45% 40%, #1a1a2e 0%, #000000 100%)",
              }}
            />
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            marginTop: 40,
            fontSize: 52,
            fontWeight: 700,
            color: "#F0F0F5",
            letterSpacing: "-0.02em",
          }}
        >
          Cyclop One
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 12,
            fontSize: 24,
            color: "#8888A0",
          }}
        >
          AI Desktop Automation Agent for macOS
        </div>
      </div>
    ),
    { ...size }
  );
}
