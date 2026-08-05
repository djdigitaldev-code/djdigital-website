import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: {
    default: "DJ Digital",
    template: "%s | DJ Digital",
  },
  description: "Professionele websites voor ondernemers. Webdesign, hosting en SEO.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "DJ Digital",
    title: "DJ Digital — Websites die ondernemers laten groeien",
    description: "Professionele websites voor ondernemers. Webdesign, hosting en SEO.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DJ Digital — Webdesign, hosting en SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Digital — Websites die ondernemers laten groeien",
    description: "Professionele websites voor ondernemers. Webdesign, hosting en SEO.",
    images: ["/og-image.png"],
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