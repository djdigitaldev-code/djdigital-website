export default function Home() {
  return (
    <>

      <section className="hero">

        <div className="hero-content">

          <h1>
            DJ DIGITAL
          </h1>

          <p className="subtitle">
            Premium websites.
            Snelle prestaties.
            SEO & hosting inbegrepen.
          </p>

          <div className="hero-buttons">

            <a
              href="/tarieven"
              className="button"
            >
              Bekijk tarieven
            </a>

            <a
              href="/diensten"
              className="button secondary"
            >
              Onze diensten
            </a>

          </div>

        </div>

      </section>

      <section className="services-preview">

        <div className="glass-card">

          <h3>🌐 Website Ontwikkeling</h3>

          <p>
            Moderne websites volledig op maat gebouwd.
          </p>

        </div>

        <div className="glass-card">

          <h3>⚡ Hosting & Onderhoud</h3>

          <p>
            Snel, veilig en altijd online.
          </p>

        </div>

        <div className="glass-card">

          <h3>📈 SEO Optimalisatie</h3>

          <p>
            Meer bezoekers en hogere posities.
          </p>

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

    <a
      href="/contact"
      className="button"
    >
      Start jouw website
    </a>

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