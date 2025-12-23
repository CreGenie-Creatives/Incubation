import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This is the important part!
  images: {
    unoptimized: true, // Required for static sites
  },
};

export default nextConfig;