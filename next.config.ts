import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",                    // Required for GitHub Pages (static export)
  images: {
    unoptimized: true,                 // Required for static export
  },
  basePath: "/xbibz-portfolio",        // Important for GitHub Pages project site
  trailingSlash: true,                 // Better for GitHub Pages
  // Note: This makes the site static (client-side only).
  // All features (modals, animations, navigation) remain fully functional.
};

export default nextConfig;
