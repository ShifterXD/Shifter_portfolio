import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/Shifter_portfolio" : "",
  assetPrefix: isGithubPages ? "/Shifter_portfolio/" : "",
};

export default nextConfig;
