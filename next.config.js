/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org', 'www.avvenire.it', 'e3.365dm.com', 'pnrr.protezionecivile.it', 'openbdap.rgs.mef.gov.it'],
  },
}

module.exports = nextConfig
