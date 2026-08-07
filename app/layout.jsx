import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
