import { ImageResponse } from "next/og";

export const alt = "Zarrar Palekar Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(14,165,233,0.28), transparent 32%), radial-gradient(circle at bottom right, rgba(245,158,11,0.22), transparent 28%), #0b1220",
          color: "white",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              height: "74px",
              width: "74px",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg,#0ea5e9,#f59e0b)",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            ZP
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "24px", opacity: 0.75 }}>Frontend Architect</span>
            <span style={{ fontSize: "34px", fontWeight: 700 }}>Zarrar Palekar</span>
          </div>
        </div>

        <div style={{ maxWidth: "860px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "66px",
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            Premium Next.js websites that convert visitors into clients.
          </div>
          <div style={{ fontSize: "28px", opacity: 0.78 }}>
            Single-page portfolio, SEO-optimized structure, and polished frontend systems.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
