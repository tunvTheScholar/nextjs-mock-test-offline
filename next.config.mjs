import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swDest: "public/sw.js",
  swSrc: "src/service-worker/worker.ts",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSerwist(nextConfig);
