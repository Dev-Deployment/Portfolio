import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export a fully static site for GitHub Pages
  output: "export",

  // Required because Pages is static and doesn't run the Next image optimizer
  images: { unoptimized: true },

  // Project-site path (must match your repo name exactly, case-sensitive)
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",

  // Helps with GH Pages directory-style routing
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
