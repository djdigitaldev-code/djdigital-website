"use client";

import Link from "next/link";
import "./diensten.css";

export default function Diensten() {
  return (
    <main className="diensten-page">

      {/* HERO */}

      <section className="diensten-hero">

        <span className="hero-tag">
          ONZE DIENSTEN
        </span>

        <h1>
          Alles voor een
          <br />
          <span>professionele online uitstraling.</span>
        </h1>

        <p>
          Van een moderne website tot veilige hosting en slimme SEO.
          DJ Digital helpt ondernemers groeien met snelle,
          betrouwbare en op maat gemaakte digitale oplossingen.
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

      </section>

      {/* DIENSTEN */}

      <section className="diensten-grid">

        <div className="dienst-card">

          <div className="dienst-icon">
            🌐
          </div>

          <h2>Website Ontwikkeling</h2>

          <p>
            Professionele maatwerk websites die snelheid,
            design en gebruiksgemak combineren.
          </p>

          <ul>
            <li>✓ Volledig maatwerk</li>
            <li>✓ Responsive ontwerp</li>
            <li>✓ Next.js ontwikkeling</li>
            <li>✓ Razendsnelle prestaties</li>
            <li>✓ Contactformulieren</li>
            <li>✓ Premium uitstraling</li>
          </ul>

        </div>

        <div className="dienst-card">

          <div className="dienst-icon">
            ⚡
          </div>

          <h2>Hosting & Onderhoud</h2>

          <p>
            Een veilige en stabiele omgeving zodat jouw
            website altijd optimaal blijft presteren.
          </p>

          <ul>
            <li>✓ SSL-certificaat</li>
            <li>✓ Dagelijkse back-ups</li>
            <li>✓ Updates</li>
            <li>✓ Monitoring</li>
            <li>✓ Domeinnaam</li>
            <li>✓ Onderhoud</li>
          </ul>

        </div>

        <div className="dienst-card">

          <div className="dienst-icon">
            📈
          </div>

          <h2>SEO Optimalisatie</h2>

          <p>
            Meer bezoekers dankzij een technisch
            geoptimaliseerde website.
          </p>

          <ul>
            <li>✓ Technische SEO</li>
            <li>✓ Metadata</li>
            <li>✓ Structured Data</li>
            <li>✓ Google-indexatie</li>
            <li>✓ Core Web Vitals</li>
            <li>✓ Lokale SEO</li>
          </ul>

        </div>

      </section>

      {/* WAAROM DJ DIGITAL */}

      <section className="why-section">

        <span className="section-tag">
          WAAROM DJ DIGITAL
        </span>

        <h2>
          Gebouwd voor snelheid,
          kwaliteit en resultaat.
        </h2>

        <div className="why-grid">

          <div className="feature">
            ⚡ Razendsnelle websites
          </div>

          <div className="feature">
            💎 Volledig maatwerk
          </div>

          <div className="feature">
            📱 Responsive design
          </div>

          <div className="feature">
            📈 SEO-geoptimaliseerd
          </div>

          <div className="feature">
            🔒 Veilig & betrouwbaar
          </div>

          <div className="feature">
            🚀 Moderne technieken
          </div>

        </div>

      </section>

      {/* WERKWIJZE */}

      <section className="process">

        <span className="section-tag">
          WERKWIJZE
        </span>

        <h2>
          Zo bouwen we jouw website.
        </h2>

        <div className="steps">

          <div className="step">
            <h3>01</h3>
            <h4>Kennismaking</h4>
            <p>
              We bespreken jouw wensen,
              doelgroep en doelen.
            </p>
          </div>

          <div className="step">
            <h3>02</h3>
            <h4>Ontwerp</h4>
            <p>
              We ontwerpen een moderne
              website die past bij jouw bedrijf.
            </p>
          </div>

          <div className="step">
            <h3>03</h3>
            <h4>Ontwikkeling</h4>
            <p>
              Daarna bouwen we een snelle,
              veilige en professionele website.
            </p>
          </div>

          <div className="step">
            <h3>04</h3>
            <h4>Livegang</h4>
            <p>
              Na controle zetten we alles
              online en blijft ondersteuning beschikbaar.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="diensten-cta">

        <h2>
          Klaar om online te groeien?
        </h2>

        <p>
          Plan vrijblijvend een kennismaking en ontdek
          wat DJ Digital voor jouw bedrijf kan betekenen.
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

      </section>

    </main>
  );
}