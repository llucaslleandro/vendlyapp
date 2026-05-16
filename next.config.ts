import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vendlyapp",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.10.4"],
};

export default nextConfig;
