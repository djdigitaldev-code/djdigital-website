"use client";

import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>

      <Navbar />

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

      <section className="portfolio-preview">

  <div className="portfolio-text">

    <span className="section-tag">
      RECENTE PROJECTEN
    </span>

    <h2>
      Websites die
      opvallen en converteren.
    </h2>

    <p>

      Premium websites gebouwd
      voor ondernemers die online
      professioneel willen groeien.

    </p>

    <Link
      href="/projecten"
      className="button"
    >
      Bekijk projecten
    </Link>

  </div>

<div className="portfolio-grid">

  <Link
href="/projecten"
className="project-card"
>

<div className="project-overlay">

  <div className="browser-bar">

    <span></span>
    <span></span>
    <span></span>

  </div>

  <span>
    WEBDESIGN
  </span>

  <h3>
    Premium Websites
  </h3>

</div>

  </Link>

  <Link
href="/projecten"
className="project-card"
>

<div className="project-overlay">

  <div className="browser-bar">

    <span></span>
    <span></span>
    <span></span>

  </div>

  <span>
    HOSTING
  </span>

  <h3>
    Snelle Hosting
  </h3>

</div>

  </Link>

  <Link
href="/projecten"
className="project-card"
>

<div className="project-overlay">

  <div className="browser-bar">

    <span></span>
    <span></span>
    <span></span>

  </div>

  <span>
    SEO
  </span>

  <h3>
    Meer Vindbaarheid
  </h3>

</div>

  </Link>

</div>

</section>

      <section className="stats">

        <div className="stat-card">
          <h2>100%</h2>
          <span>Maatwerk</span>
        </div>

        <div className="stat-card">
          <h2>&lt;2s</h2>
          <span>Snelle websites</span>
        </div>

        <div className="stat-card">
          <h2>SEO</h2>
          <span>Geoptimaliseerd</span>
        </div>

      </section>

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