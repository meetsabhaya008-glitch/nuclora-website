import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: 64, height: 64, display: "flex" }} />
    ),
    { width: 64, height: 64 }
  );
}
