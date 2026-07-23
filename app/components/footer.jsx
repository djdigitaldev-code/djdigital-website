"use client";

import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            DJ <span>Digital</span>
          </Link>

          <p>
            Professionele websites voor ondernemers die online willen groeien.
            Snel, modern en volledig SEO-geoptimaliseerd.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Navigatie</h3>
          <Link href="/">Home</Link>
          <Link href="/diensten">Diensten</Link>
          <Link href="/projecten">Projecten</Link>
          <Link href="/tarieven">Tarieven</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Diensten</h3>
          <Link href="/diensten">Websites</Link>
          <Link href="/diensten">SEO</Link>
          <Link href="/diensten">Hosting</Link>
          <Link href="/diensten">Onderhoud</Link>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>
          <a href="mailto:info@djdigital.nl">info@djdigital.nl</a>
          <span>Heel Nederland</span>
          <span>Reactie binnen 24 uur</span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {year} DJ Digital. Alle rechten voorbehouden.</p>

        <div className="footer-bottom-links">
          <Link href="/privacy">Privacyverklaring</Link>
          <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
          <Link href="/cookiebeleid">Cookiebeleid</Link>
        </div>
      </div>
    </footer>
  );
}
