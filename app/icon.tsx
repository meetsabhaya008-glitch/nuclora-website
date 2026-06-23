import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const logoBuffer = readFileSync(join(process.cwd(), "public/newonlylogo.png"));
  const base64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        <img
          src={base64}
          style={{
            width: 500,
            height: 500,
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
      </div>
    ),
    { width: 64, height: 64 }
  );
}
