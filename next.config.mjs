/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/_middleware.js",
      },
    ];
  },
};

export default nextConfig;
