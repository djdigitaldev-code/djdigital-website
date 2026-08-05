"use client";

import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-glow footer-glow-blue"></div>
      <div className="footer-glow footer-glow-purple"></div>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <Link href="/" className="footer-logo">
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

          <Link href="/contact" className="footer-cta">
            <span>Gratis kennismaken</span>
            <span className="footer-arrow">→</span>
          </Link>

        </div>


        {/* NAVIGATIE */}
        <div className="footer-links">

          <h3>Navigatie</h3>

          <Link href="/">Home</Link>
          <Link href="/diensten">Diensten</Link>
          <Link href="/projecten">Projecten</Link>
          <Link href="/tarieven">Tarieven</Link>
          <Link href="/over-ons">Over ons</Link>
          <Link href="/contact">Contact</Link>

        </div>


        {/* DIENSTEN */}
        <div className="footer-links">

          <h3>Diensten</h3>

          <Link href="/diensten">Webdesign</Link>
          <Link href="/diensten">SEO optimalisatie</Link>
          <Link href="/diensten">Hosting</Link>
          <Link href="/diensten">Onderhoud</Link>

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

          <Link href="/privacy">
            Privacyverklaring
          </Link>

          <span className="footer-dot"></span>

          <Link href="/algemene-voorwaarden">
            Algemene voorwaarden
          </Link>

          <span className="footer-dot purple"></span>

          <Link href="/cookiebeleid">
            Cookiebeleid
          </Link>

        </div>

      </div>

    </footer>
  );
}