import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    // เพิ่ม .mjs เป็นส่วนหนึ่งของการ resolve
    config.resolve.extensions.push('.mjs');

    // ตัวอย่างการใช้ alias
    config.resolve.alias['@components'] = path.join(
      process.cwd(),
      'components',
    );
    config.resolve.alias['@'] = path.join(process.cwd(), 'src');

    // ตั้งค่า loader สำหรับไฟล์ .mjs
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    // ตัวอย่างการตั้งค่า resolve fallback
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }

    return config;
  },
};

export default nextConfig;
