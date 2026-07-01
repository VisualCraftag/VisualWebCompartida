/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'visualcraftagency.com',
          },
        ],
        destination: 'https://www.visualcraftagency.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'visualcraftag.vercel.app',
          },
        ],
        destination: 'https://www.visualcraftagency.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
