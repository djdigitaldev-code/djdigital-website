export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://djdigital.nl/sitemap.xml",
  };
}