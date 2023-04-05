/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    remotePatterns:[
      {
        protocol : "https",
        hostname: "image.winudf.com",
        port:'',

      }
    ]
  }
}

module.exports = nextConfig
