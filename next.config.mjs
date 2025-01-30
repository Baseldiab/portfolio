/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  webpack(config) {
    // SVG Configuration
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
        }
      }]
    });

    // Disable CSS minification
    config.optimization = {
      ...config.optimization,
      minimize: false
    };

    return config;
  }
};

export default nextConfig;
