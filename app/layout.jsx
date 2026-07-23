import "./globals.css";

export const metadata = {
  title: "DJ Digital",
  description: "Web Development • Hosting • SEO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}