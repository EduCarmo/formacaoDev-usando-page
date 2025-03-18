import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
  },

  images: {
    domains: ["dummyimage.com"]
  }
};

export default nextConfig;
