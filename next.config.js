
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir : "build",
    output: "standalone"
}

module.exports = withBundleAnalyzer(nextConfig)
