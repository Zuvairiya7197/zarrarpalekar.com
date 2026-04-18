import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lightgoldenrodyellow-fox-787789.hostingersite.com",
      },
    ],
  },
  allowedDevOrigins: ["192.168.0.62"],
};

export default nextConfig;
