/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      { source: "/admin", destination: "/admin/index.html", permanent: false },
    ];
  },
};

export default nextConfig;
