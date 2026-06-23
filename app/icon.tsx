import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#131929",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1.5px solid #B8906A",
        }}
      >
        <div
          style={{
            color: "#B8906A",
            fontSize: 21,
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            lineHeight: 1,
            marginTop: 1,
          }}
        >
          N
        </div>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
