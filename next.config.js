/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['ik.imagekit.io'],
    },
    plugins: ['tailwindcss'],
}

module.exports = nextConfig
