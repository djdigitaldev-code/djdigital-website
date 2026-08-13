export const metadata = {
  title: "Tarieven Webdesign & SEO",
  description:
    "Bekijk de tarieven van DJ Digital voor professionele websites, webdesign, hosting, onderhoud en SEO. Transparante prijzen voor ondernemers.",

  alternates: {
    canonical: "/tarieven",
  },

  openGraph: {
    type: "website",
    title: "Tarieven Webdesign & SEO | DJ Digital",
    description:
      "Bekijk de tarieven voor professionele websites, webdesign, hosting, onderhoud en SEO bij DJ Digital.",
    url: "/tarieven",
    siteName: "DJ Digital",
    locale: "nl_NL",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "DJ Digital - Tarieven voor webdesign, hosting en SEO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tarieven Webdesign & SEO | DJ Digital",
    description:
      "Bekijk de tarieven voor professionele websites, webdesign, hosting, onderhoud en SEO bij DJ Digital.",
    images: ["/og-image-v2.png"],
  },
};

export default function TarievenLayout({ children }) {
  return children;
}