// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/Portfolio",         // <-- replace with your repo name
  assetPrefix: "/Portfolio",
  trailingSlash: true
};

export default nextConfig;
