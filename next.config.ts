import type { NextConfig } from "next";
import { dataset, projectId } from "./sanity/env";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.83.90.186"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: `/images/${projectId}/${dataset}/**`,
      },
    ],
  },
};

export default nextConfig;
