"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="hero">

        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="hero-grid">

          {/* LOGO */}
          <div className="hero-left">
            <div className="hero-logo-wrap">
              <Image
                src="/logo.png"
                alt="DJ Digital - Web Development"
                width={637}
                height={392}
                className="hero-logo"
                priority
              />
            </div>
          </div>

          {/* HERO CONTENT */}
          <div className="hero-right">

            <span className="hero-tag">
              WEBDESIGN • HOSTING • SEO
            </span>

            <h1>
              Websites die
              <span>
                ondernemers
                <br />
                laten groeien.
              </span>
            </h1>

            <p className="subtitle">
              Professionele websites die niet alleen mooi zijn, maar ook
              razendsnel laden, goed gevonden worden in Google en bezoekers
              omzetten in klanten.
            </p>

            <div className="hero-buttons">
              <Link href="/contact" className="button">
                Gratis kennismaking
                <span className="button-arrow">→</span>
              </Link>

              <Link href="/tarieven" className="button secondary">
                Bekijk tarieven
                <span className="button-arrow">→</span>
              </Link>
            </div>

            {/* HERO FEATURES */}
            <div className="hero-features">

              <div className="hero-feature">
                <div className="feature-icon feature-icon-speed">
                  ⚡
                </div>

                <div>
                  <strong>Razendsnel</strong>
                  <span>Optimale prestaties</span>
                </div>
              </div>

              <div className="hero-feature">
                <div className="feature-icon">
                  ↗
                </div>

                <div>
                  <strong>Goed vindbaar</strong>
                  <span>Hogere posities</span>
                </div>
              </div>

              <div className="hero-feature">
                <div className="feature-icon">
                  ▯
                </div>

                <div>
                  <strong>Mobielvriendelijk</strong>
                  <span>Perfect op elk scherm</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================
          SERVICES
      ========================= */}
      <section className="services-preview">

        <Link href="/diensten" className="service-card">

          <div className="service-icon">
            ◎
          </div>

          <div className="service-card-content">
            <h2>Website Ontwikkeling</h2>
            <p>
              Moderne websites volledig
              <br />
              op maat gebouwd.
            </p>
          </div>

          <span className="service-arrow">→</span>

        </Link>


        <Link href="/diensten" className="service-card">

          <div className="service-icon">
            ▤
          </div>

          <div className="service-card-content">
            <h2>Hosting &amp; Onderhoud</h2>
            <p>
              Snel, veilig en
              <br />
              altijd online.
            </p>
          </div>

          <span className="service-arrow">→</span>

        </Link>


        <Link href="/diensten" className="service-card">

          <div className="service-icon">
            ↗
          </div>

          <div className="service-card-content">
            <h2>SEO Optimalisatie</h2>
            <p>
              Meer bezoekers en
              <br />
              hogere posities.
            </p>
          </div>

          <span className="service-arrow">→</span>

        </Link>

      </section>


      {/* =========================
          STATS
      ========================= */}
      <section className="stats">

        <div className="stat-card">

          <div className="stat-icon">
            ◇
          </div>

          <div className="stat-content">
            <h2>100%</h2>
            <span>Maatwerk</span>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            ◴
          </div>

          <div className="stat-content">
            <h2>&lt;2s</h2>
            <span>Snelle websites</span>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-content stat-seo">
            <h2>SEO</h2>
            <span>Geoptimaliseerd</span>
          </div>

        </div>

      </section>


      {/* =========================
          PROJECTEN
      ========================= */}
      <section className="portfolio-preview">

        <div className="portfolio-text">

          <span className="section-tag">
            RECENTE PROJECTEN
          </span>

          <h2>
            Websites die
            <br />
            opvallen en converteren.
          </h2>

          <p>
            Premium websites gebouwd voor ondernemers die online
            professioneel willen groeien.
          </p>

          <Link href="/projecten" className="button">
            Bekijk projecten
            <span className="button-arrow">→</span>
          </Link>

        </div>


        <div className="portfolio-grid">

          <Link href="/projecten" className="project-card">

            <div className="project-overlay">

              <div className="browser-bar">
                <span />
                <span />
                <span />
              </div>

              <span>WEBDESIGN</span>

              <h3>
                Premium Websites
              </h3>

            </div>

          </Link>


          <Link href="/projecten" className="project-card">

            <div className="project-overlay">

              <div className="browser-bar">
                <span />
                <span />
                <span />
              </div>

              <span>HOSTING</span>

              <h3>
                Snelle Hosting
              </h3>

            </div>

          </Link>


          <Link href="/projecten" className="project-card">

            <div className="project-overlay">

              <div className="browser-bar">
                <span />
                <span />
                <span />
              </div>

              <span>SEO</span>

              <h3>
                Meer Vindbaarheid
              </h3>

            </div>

          </Link>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================= */}
      <section className="about-preview">

        <div className="about-left">

          <span className="section-tag">
            DJ DIGITAL
          </span>

          <h2>
            Websites die sneller laden,
            beter gevonden worden en
            professioneel uitstralen.
          </h2>

          <p>
            DJ Digital bouwt moderne websites voor ondernemers die meer online
            resultaat willen behalen. Geen standaard templates — volledig
            maatwerk.
          </p>

          <Link href="/contact" className="button">
            Start jouw website
            <span className="button-arrow">→</span>
          </Link>

        </div>


        <div className="about-right">

          <div className="feature">
            <span>⚡</span>
            <div>
              <strong>Snelle prestaties</strong>
              <small>Geoptimaliseerd voor snelheid</small>
            </div>
          </div>

          <div className="feature">
            <span>🔒</span>
            <div>
              <strong>Veilige hosting</strong>
              <small>Betrouwbaar en veilig online</small>
            </div>
          </div>

          <div className="feature">
            <span>📈</span>
            <div>
              <strong>Hogere vindbaarheid</strong>
              <small>Gebouwd met SEO als basis</small>
            </div>
          </div>

          <div className="feature">
            <span>💎</span>
            <div>
              <strong>Premium design</strong>
              <small>Uniek ontwerp voor jouw bedrijf</small>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}