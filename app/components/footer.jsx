"use client";

import Link from "next/link";
import Image from "next/image";
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
            <Image
              src="/logo.png"
              alt="DJ Digital"
              width={637}
              height={392}
              className="footer-logo-image"
            />
          </Link>

          <p>
            Professionele websites voor ondernemers die online willen groeien.
            Snel, modern en volledig geoptimaliseerd voor Google.
          </p>

          <Link href="/contact" className="footer-cta">
            Gratis kennismaken
            <span>→</span>
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
        <div className="footer-links footer-contact">

          <h3>Contact</h3>

          <a href="mailto:info@djdigital.nl">
            <span className="footer-contact-icon">✉</span>
            info@djdigital.nl
          </a>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">⌖</span>
            <span>Heel Nederland</span>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">◷</span>
            <span>Reactie binnen 24 uur</span>
          </div>

        </div>

      </div>


      {/* ONDERSTE BALK */}
      <div className="footer-bottom-wrapper">

        <div className="footer-bottom">

          <p>
            © {year} DJ Digital. Alle rechten voorbehouden.
          </p>

          <div className="footer-bottom-links">
            <Link href="/privacy">Privacyverklaring</Link>
            <Link href="/algemene-voorwaarden">
              Algemene voorwaarden
            </Link>
            <Link href="/cookiebeleid">Cookiebeleid</Link>
          </div>

        </div>

      </div>

    </footer>
  );
}