import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Primary favicon is /public/favicon.svg served via layout.tsx <link> tag.
// This is a fallback for environments that don't support SVG favicons.
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#131929",
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #B8906A",
        }}
      >
        <div style={{ color: "#B8906A", fontSize: 44, lineHeight: 1, marginTop: 4 }}>
          N
        </div>
      </div>
    ),
    { width: 64, height: 64 }
  );
}
