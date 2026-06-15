import "./globals.css";

export const metadata = {
  title: "DJ Digital",
  description: "Web Development • Hosting • SEO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>

        <nav className="navbar">

          <a href="/" className="logo-wrap">
            <img
              src="/logo.png"
              alt="DJ Digital"
              className="logo"
            />
          </a>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/diensten">Diensten</a>
            <a href="/tarieven">Tarieven</a>
            <a href="/over-ons">Over</a>
            <a href="/contact">Contact</a>
          </div>

        </nav>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}