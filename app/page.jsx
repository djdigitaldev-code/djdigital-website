"use client";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">

<Link
  href="/"
  className="nav-logo"
>

  <img
    src="/logo.png"
    alt="DJ Digital"
    className="hero-logo"
  />

</Link>

        <div className={`nav-links ${open ? "open" : ""}`}>

          <Link href="/">
            Home
          </Link>

          <Link href="/diensten">
            Diensten
          </Link>

          <Link href="/tarieven">
            Tarieven
          </Link>

          <Link href="/over-ons">
            Over ons
          </Link>

          <Link href="/contact">
            Contact
          </Link>

          <Link
            href="/contact"
            className="nav-cta"
          >
            Gratis gesprek
          </Link>

        </div>

        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>

    </nav>
  );
}

export default function Home() {
  return (
    <>

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <div className="hero-glow"></div>

        <div className="hero-grid">

          <div className="hero-left">

            <img
              src="/logo.png"
              alt="DJ Digital"
              className="hero-logo"
            />

          </div>

          <div className="hero-right">

            <h1>
              DJ DIGITAL
            </h1>

            <p className="subtitle">
              Premium websites.
              Hosting.
              SEO.
              Ontwikkeld voor ondernemers die online willen groeien.
            </p>

            <div className="hero-buttons">

              <Link
                href="/tarieven"
                className="button"
              >
                Bekijk tarieven
              </Link>

              <Link
                href="/contact"
                className="button secondary"
              >
                Contact opnemen
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="services-preview">

        <div className="glass-card">

          <h3>
            🌐 Website Ontwikkeling
          </h3>

          <p>
            Moderne websites volledig op maat gebouwd.
          </p>

        </div>

        <div className="glass-card">

          <h3>
            ⚡ Hosting & Onderhoud
          </h3>

          <p>
            Snel, veilig en altijd online.
          </p>

        </div>

        <div className="glass-card">

          <h3>
            📈 SEO Optimalisatie
          </h3>

          <p>
            Meer bezoekers en hogere posities.
          </p>

        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <div className="stat-card">

          <h2>100%</h2>

          <span>
            Maatwerk
          </span>

        </div>

        <div className="stat-card">

          <h2>&lt;2s</h2>

          <span>
            Snelle websites
          </span>

        </div>

        <div className="stat-card">

          <h2>SEO</h2>

          <span>
            Geoptimaliseerd
          </span>

        </div>

      </section>

      {/* ABOUT */}

      <section className="about-preview">

        <div className="about-left">

          <h2>
            Websites die sneller laden,
            beter gevonden worden
            en professioneel uitstralen.
          </h2>

          <p>

            DJ Digital bouwt moderne websites
            voor ondernemers die meer online
            resultaat willen behalen.

            Geen standaard templates —
            volledig maatwerk.

          </p>

          <Link
            href="/contact"
            className="button"
          >
            Start jouw website
          </Link>

        </div>

        <div className="about-right">

          <div className="feature">
            ⚡ Snelle prestaties
          </div>

          <div className="feature">
            🔒 Veilige hosting
          </div>

          <div className="feature">
            📈 Hogere vindbaarheid
          </div>

          <div className="feature">
            💎 Premium design
          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <h3>
          DJ DIGITAL
        </h3>

        <p>
          Web Development • Hosting • SEO
        </p>

      </footer>

    </>
  );
}