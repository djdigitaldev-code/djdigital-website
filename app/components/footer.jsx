"use client";

import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleFooterNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openCookiePreferences = () => {
    window.dispatchEvent(new Event("openCookiePreferences"));
  };

  return (
    <footer className="footer">
      {/* BACKGROUND GLOWS */}
      <div className="footer-glow footer-glow-blue"></div>
      <div className="footer-glow footer-glow-purple"></div>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <Link
            href="/"
            className="footer-logo"
            onClick={handleFooterNavClick}
          >
            <img src="/logo.png" alt="DJ Digital" />
          </Link>

          <p>
            Professionele websites voor ondernemers die online willen groeien.
            Snel, modern en volledig geoptimaliseerd voor Google.
          </p>

          <Link
            href="/contact"
            className="footer-cta"
            onClick={handleFooterNavClick}
          >
            <span>Gratis kennismaken</span>
            <span className="footer-arrow">→</span>
          </Link>
        </div>

        {/* NAVIGATIE */}
        <div className="footer-links">
          <h3>Navigatie</h3>

          <Link href="/" onClick={handleFooterNavClick}>
            Home
          </Link>

          <Link href="/diensten" onClick={handleFooterNavClick}>
            Diensten
          </Link>

          <Link href="/projecten" onClick={handleFooterNavClick}>
            Projecten
          </Link>

          <Link href="/tarieven" onClick={handleFooterNavClick}>
            Tarieven
          </Link>

          <Link href="/over-ons" onClick={handleFooterNavClick}>
            Over ons
          </Link>

          <Link href="/contact" onClick={handleFooterNavClick}>
            Contact
          </Link>
        </div>

        {/* DIENSTEN */}
        <div className="footer-links">
          <h3>Diensten</h3>

          <Link href="/diensten" onClick={handleFooterNavClick}>
            Webdesign
          </Link>

          <Link href="/diensten" onClick={handleFooterNavClick}>
            SEO optimalisatie
          </Link>

          <Link href="/diensten" onClick={handleFooterNavClick}>
            Hosting
          </Link>

          <Link href="/diensten" onClick={handleFooterNavClick}>
            Onderhoud
          </Link>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <a
            href="mailto:info@djdigitalworks.nl"
            className="contact-item"
          >
            <span className="contact-icon">✉</span>
            <span>info@djdigitalworks.nl</span>
          </a>

          <div className="contact-item">
            <span className="contact-icon">⌖</span>
            <span>Heel Nederland</span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">◷</span>
            <span>Reactie binnen 24 uur</span>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="footer-socials">

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/djdigitalworks/"
              className="social-icon"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/djdigitalworks/"
              className="social-icon"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1.2"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* LINKEDIN */}
            <a
              href="#"
              className="social-icon"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.1 2.1 0 1 0 4.75 7.2 2.1 2.1 0 0 0 4.75 3ZM21 13.8c0-3.75-2-5.5-4.7-5.5-2.15 0-3.1 1.18-3.65 2v-1.8H9.15V21h3.5v-6.2c0-1.64.31-3.22 2.34-3.22 2 0 2.02 1.87 2.02 3.33V21H21v-7.2Z"
                  fill="currentColor"
                />
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* ONDERKANT */}
      <div className="footer-bottom">
        <p>
          © {year} DJ Digital. Alle rechten voorbehouden.
        </p>

        <div className="footer-bottom-links">
          <Link
            href="/privacy"
            onClick={handleFooterNavClick}
          >
            Privacyverklaring
          </Link>

          <span className="footer-dot"></span>

          <Link
            href="/algemene-voorwaarden"
            onClick={handleFooterNavClick}
          >
            Algemene voorwaarden
          </Link>

          <span className="footer-dot purple"></span>

          <Link
            href="/cookiebeleid"
            onClick={handleFooterNavClick}
          >
            Cookiebeleid
          </Link>

          <span className="footer-dot"></span>

          <button
            type="button"
            onClick={openCookiePreferences}
            className="footer-cookie-button"
          >
            Cookievoorkeuren
          </button>
        </div>
      </div>
    </footer>
  );
}