import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["192.168.0.103"],
  images: {
    unoptimized: true, // importante no Cloudflare Pages
  },
};

export default nextConfig;
