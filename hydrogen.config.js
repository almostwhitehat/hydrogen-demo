import { defineConfig } from "@shopify/hydrogen/config";

export default defineConfig({
  shopify: {
    storeDomain:
      process.env.PUBLIC_STORE_DOMAIN || "hydrogen-preview.myshopify.com",
    storefrontToken:
      process.env.PUBLIC_STOREFRONT_API_TOKEN ||
      "3b580e70970c4528da70c98e097c2fa0",
    storefrontApiVersion: "2022-07",
  },
});
