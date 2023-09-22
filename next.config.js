/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/email",
        destination: "http://tapeatale.vercel.app/",
      },
    ];
  },
};

module.exports = nextConfig;
