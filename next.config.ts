import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves route/index.html; without this, /route/ URLs 404.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
