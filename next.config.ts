/* eslint-disable @typescript-eslint/ban-ts-comment */
// next.config.mjs
// @ts-ignore
import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development",
});

const nextConfig = {};

export default withAutoCert(nextConfig);