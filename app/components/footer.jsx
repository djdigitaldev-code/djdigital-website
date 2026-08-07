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
            <img
              src="/logo.png"
              alt="DJ Digital"
            />
          </Link>

          <p>
            Professionele websites voor ondernemers die
            online willen groeien. Snel, modern en volledig
            geoptimaliseerd voor Google.
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
            href="mailto:info@djdigital.nl"
            className="contact-item"
          >
            <span className="contact-icon">✉</span>
            <span>info@djdigital.nl</span>
          </a>

          <div className="contact-item">
            <span className="contact-icon">⌖</span>
            <span>Heel Nederland</span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">◷</span>
            <span>Reactie binnen 24 uur</span>
          </div>

        </div>

      </div>


      {/* ONDERKANT */}
      <div className="footer-bottom">

        <p>
          © {year} DJ Digital. Alle rechten voorbehouden.
        </p>

        <div className="footer-bottom-links">

          <Link href="/privacy" onClick={handleFooterNavClick}>
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

          <Link href="/cookiebeleid" onClick={handleFooterNavClick}>
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