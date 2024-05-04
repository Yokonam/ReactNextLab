/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['api.thecatapi.com', 'cdn2.thecatapi.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.thecatapi.com',
          pathname: '/v1/images/search/**'
        },
        {
          protocol: 'https',
          hostname: 'cdn2.thecatapi.com',
          pathname: '/images/**'
        }
      ]
    },
  };

  export default nextConfig;
