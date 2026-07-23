"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <section className="hero">

        <div className="hero-glow"></div>

        <div className="hero-grid">

          <div className="hero-left">

<Image
  src="/logo.png"
  alt="DJ Digital"
  width={700}
  height={700}
  className="hero-logo"
  priority
/>
          </div>

<div className="hero-right">

  <span className="hero-tag">
    WEBDESIGN • HOSTING • SEO
  </span>

  <h1>
    Websites die <br />
    <span>ondernemers laten groeien.</span>
  </h1>

  <p className="subtitle">
Professionele websites die niet alleen mooi zijn, maar ook razendsnel laden, goed gevonden worden in Google en bezoekers omzetten in klanten.
  </p>

  <div className="hero-buttons">

    <Link
      href="/contact"
      className="button"
    >
      Gratis kennismaking
    </Link>

    <Link
      href="/tarieven"
      className="button secondary"
    >
      Bekijk tarieven
    </Link>

  </div>

  <div className="hero-features">

    <span>⚡ Razendsnel</span>

    <span>📈 Goed vindbaar</span>

    <span>📱 Mobielvriendelijk</span>

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
    </>
  );
}