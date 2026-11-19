import type { NextConfig } from 'next';

const usePolling = process.env.WATCHPACK_POLLING === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  // Compose runs `next dev --webpack`. Turbopack's watchOptions never apply there.
  webpack: (config, { dev }) => {
    if (dev && usePolling) {
      config.watchOptions = {
        poll: 500,
        aggregateTimeout: 200,
      };
    }
    return config;
  },
};

export default nextConfig;
