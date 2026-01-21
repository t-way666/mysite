import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? "/mysite" : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    // @ts-expect-error reactCompiler is valid but missing from types
    reactCompiler: true,
  },
};

export default nextConfig;
