import path from 'path';

const nextConfig = {
  // การตั้งค่าพื้นฐานต่างๆ ของ Next.js
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false,
  },
  // การปรับแต่ง Webpack
  webpack: (config, { isServer }) => {
    // เพิ่ม .mjs เป็นส่วนหนึ่งของการ resolve
    config.resolve.extensions.push('.mjs');

    // ตัวอย่างการใช้ alias
    config.resolve.alias['@components'] = path.join(
      process.cwd(),
      'components',
    );

    // ตั้งค่า loader สำหรับไฟล์ .mjs
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
};

export default nextConfig;
