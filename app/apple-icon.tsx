import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#131929",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "4px solid #B8906A",
        }}
      >
        <div
          style={{
            color: "#B8906A",
            fontSize: 110,
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            lineHeight: 1,
            marginTop: 6,
          }}
        >
          N
        </div>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
