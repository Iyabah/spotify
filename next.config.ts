/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // This helps with the searchParams invariant error
    missingSuspenseWithCSRBailout: false,
  },
  // Ensure proper handling of client components
  transpilePackages: [],
}

module.exports = nextConfig