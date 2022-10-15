/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 'false' due to an incompatibility of google-map-react with React v18, until a fix is found (https://github.com/google-map-react/google-map-react/issues/1110)
  swcMinify: true,
};

module.exports = nextConfig;
