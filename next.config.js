/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    gmailUsername: "louislei.ca.go@gmail.com",
    gmailAppPass: "zrztlkatmrjmqgcn",
    sendGridAPI:
      "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",
  },

  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
