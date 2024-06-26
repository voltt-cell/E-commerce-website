import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = withPWA({});

export default nextConfig;
