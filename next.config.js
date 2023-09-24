/** @type {import('next').NextConfig} */
const path = require('path');
const { parsed: localEnv } = require('dotenv-safe').config({
  allowEmptyValues: false,
  path: path.resolve(__dirname, `.env`),
});

const nextConfig = {
  reactStrictMode: true,
  env: localEnv,
};

module.exports = nextConfig;