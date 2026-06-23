import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            color: "#B8906A",
            fontSize: 56,
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          N
        </div>
      </div>
    ),
    { width: 64, height: 64 }
  );
}
