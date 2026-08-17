export const metadata = {
  title: "Tarieven",

  description:
    "Bekijk de tarieven van DJ Digital Works voor professionele websites, webdesign, hosting, onderhoud en SEO. Transparante prijzen voor ondernemers.",

  alternates: {
    canonical: "/tarieven",
  },

  openGraph: {
    type: "website",
    title: "Tarieven | DJ Digital Works",
    description:
      "Bekijk de tarieven voor professionele websites, webdesign, hosting, onderhoud en SEO bij DJ Digital Works.",
    url: "/tarieven",
    siteName: "DJ Digital Works",
    locale: "nl_NL",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "DJ Digital Works - Tarieven voor webdesign, hosting en SEO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tarieven | DJ Digital Works",
    description:
      "Bekijk de tarieven voor professionele websites, webdesign, hosting, onderhoud en SEO bij DJ Digital Works.",
    images: ["/og-image-v2.png"],
  },
};

export default function TarievenLayout({ children }) {
  return children;
}