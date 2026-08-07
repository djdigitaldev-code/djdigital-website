import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CookieBanner from "./components/CookieBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL("https://djdigital.nl"),

  title: {
    default: "Website laten maken | DJ Digital",
    template: "%s | DJ Digital",
  },

  description:
    "Professionele website laten maken? DJ Digital bouwt snelle, moderne en goed vindbare websites voor ondernemers, inclusief hosting en SEO.",

  alternates: {
    canonical: "/",
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/",
    siteName: "DJ Digital",
    title: "Website laten maken | DJ Digital",
    description:
      "DJ Digital bouwt snelle, moderne en goed vindbare websites voor ondernemers, inclusief hosting en SEO.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DJ Digital - Webdesign, hosting en SEO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website laten maken | DJ Digital",
    description:
      "DJ Digital bouwt snelle, moderne en goed vindbare websites voor ondernemers, inclusief hosting en SEO.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DJ Digital",
  url: "https://djdigital.nl",
  logo: "https://djdigital.nl/icon.png",
  image: "https://djdigital.nl/og-image.png",
  description:
    "DJ Digital bouwt snelle, moderne en goed vindbare websites voor ondernemers, inclusief hosting en SEO.",
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  serviceType: [
    "Webdesign",
    "Website ontwikkeling",
    "Hosting en onderhoud",
    "SEO optimalisatie",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Navbar />

        <main>{children}</main>

        <Footer />

        <GoogleAnalytics />

        <CookieBanner />
        
      </body>
    </html>
  );
}