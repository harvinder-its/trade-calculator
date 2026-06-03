import { ImageResponse } from "next/og";

export const alt = "Trade Value Calculator - Fair Trade Checker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #120a1c 0%, #3b1854 40%, #552478 70%, #833AB4 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #833AB4, #E1306C, #F77737)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            ⚖
          </div>
          <span style={{ fontSize: 56, fontWeight: 700 }}>Trade Value Calculator</span>
        </div>
        <p style={{ fontSize: 28, opacity: 0.9, maxWidth: 800, textAlign: "center" }}>
          Free fair trade checker for gamers, collectors, and traders
        </p>
      </div>
    ),
    { ...size }
  );
}
