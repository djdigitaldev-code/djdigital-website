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

    </>
  );
}