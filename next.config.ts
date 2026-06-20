import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",                    // Required for GitHub Pages (static export)
  images: {
    unoptimized: true,                 // Required for static export
  },
  basePath: "/xbibz-portfolio",        // Required for GitHub Pages project repo
  trailingSlash: true,
  // IMPORTANT: GitHub Pages only supports static sites.
  // This is a fully functional React/Next.js app (client-side).
  // Modals, animations, navigation, copy buttons — everything works.
};

export default nextConfig;
