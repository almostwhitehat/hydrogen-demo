import { defineConfig } from "@shopify/hydrogen/config";

export default defineConfig({
  shopify: {
    storeDomain:
      process.env.HYDROGEN_HOSTNAME || "hydrogen-preview.myshopify.com",
    storefrontToken:
      process.env.HYDROGEN_API_KEY || "3b580e70970c4528da70c98e097c2fa0",
    storefrontApiVersion: "2022-07",
  },
});
