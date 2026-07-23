import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "DJ Digital",
  description: "Web Development • Hosting • SEO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}