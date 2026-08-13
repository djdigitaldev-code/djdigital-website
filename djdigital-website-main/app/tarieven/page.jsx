 "use client";

import Link from "next/link";
import { useState } from "react";
import "./tarieven.css";

const pakketten = [
  {
    titel: "Kleine bedrijfswebsite",
    prijs: "vanaf €899",
    tekst:
      "Een professionele, snelle website voor starters en kleine ondernemers die online goed voor de dag willen komen.",
    kenmerken: [
      "Tot 5 pagina's",
      "Volledig responsive",
      "Basis SEO-optimalisatie",
      "Contactformulier",
      "Professioneel maatwerkdesign",
      "Snelle en veilige oplevering",
    ],
  },
  {
    titel: "Uitgebreide website",
    prijs: "vanaf €1399",
    tekst:
      "Voor bedrijven die meer functionaliteit nodig hebben en een website willen die klaar is om mee te groeien.",
    kenmerken: [
      "Meerdere maatwerkpagina's",
      "Uitgebreide functionaliteiten",
      "Geavanceerde formulieren",
      "Uitgebreidere SEO-optimalisatie",
      "Responsive maatwerkdesign",
      "Snelle en veilige oplevering",
    ],
  },
  {
    titel: "Maatwerk",
    prijs: "Op aanvraag",
    tekst:
      "Een volledig maatwerktraject voor bedrijven met specifieke wensen, functionaliteiten of koppelingen.",
    kenmerken: [
      "Volledig maatwerk",
      "Complexe functionaliteiten",
      "Koppelingen met externe systemen",
      "Uitbreidbare technische basis",
      "Persoonlijk advies",
      "Prijs afgestemd op het project",
    ],
  },
];

export default function TarievenPage() {
  const [gekozen, setGekozen] = useState(null);

  const whatsapp = () => {
    const txt = encodeURIComponent(
      `Hoi DJ Digital,\n\nIk heb interesse in het pakket "${gekozen}". Ik hoor graag wat de mogelijkheden zijn.`
    );

    window.open(
      `https://wa.me/31612345678?text=${txt}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const mail = () => {
    const body = encodeURIComponent(
      `Hoi DJ Digital,\n\nIk heb interesse in het pakket "${gekozen}". Ik hoor graag wat de mogelijkheden zijn.`
    );

    window.location.href = `mailto:info@djdigitalworks.nl?subject=Pakket aanvraag - ${encodeURIComponent(
      gekozen
    )}&body=${body}`;
  };

  return (
    <main className="pricing-page">
      <section className="pricing-title">
        <div className="hero-tag">TARIEVEN</div>

        <h1>
          Transparante <span>prijzen</span>
        </h1>

        <p>
          Heldere tarieven zonder verrassingen. Kies het pakket dat bij jouw
          onderneming past of neem contact op voor een oplossing op maat.
        </p>

        <div className="hero-buttons">
          <Link href="/contact" className="button">
            Gratis kennismaken
          </Link>

          <Link href="/projecten" className="button secondary">
            Bekijk projecten
          </Link>
        </div>
      </section>

      {/* =========================
          WEBSITEPAKKETTEN
      ========================= */}

      <section className="packages-section">
        <div className="packages-heading">
          <span>WEBSITEPAKKETTEN</span>

          <h2>Een website die bij jouw bedrijf past.</h2>

          <p>
            Van een professionele bedrijfswebsite tot volledig maatwerk.
            Iedere website wordt op maat gebouwd, is responsive, snel en
            technisch SEO-vriendelijk.
          </p>
        </div>

        <div className="packages-grid">
          {pakketten.map((p) => (
            <article className="package-card" key={p.titel}>
              <div className="package-top">
                <h3>{p.titel}</h3>
                <p>{p.tekst}</p>
              </div>

              <div className="package-price">{p.prijs}</div>

              <div className="package-line"></div>

              <ul className="package-features">
                {p.kenmerken.map((kenmerk) => (
                  <li key={kenmerk}>
                    <span>✓</span>
                    {kenmerk}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="package-button"
                onClick={() => setGekozen(p.titel)}
              >
                Kies dit pakket
                <span>→</span>
              </button>
            </article>
          ))}
        </div>

        <div className="packages-bottom">
          <span>★</span>
          Alle websites worden op maat gemaakt en responsive, snel,
          technisch SEO-vriendelijk en veilig opgeleverd.
        </div>
      </section>

      {/* =========================
          DIENSTEN + WAAROM
      ========================= */}

      <section className="pricing-bottom-grid">
        {/* DIENSTEN */}

        <div className="services-price-block">
          <div className="bottom-block-heading">
            <span className="bottom-label">DIENSTEN & TARIEVEN</span>

            <h2>Losse diensten</h2>

            <p>
              Voor werkzaamheden buiten een websitepakket of voor bestaande
              websites.
            </p>
          </div>

          <div className="service-price-row">
            <div className="service-price-info">
              <div className="service-icon">&lt;/&gt;</div>

              <div>
                <h3>Website ontwikkeling</h3>
                <p>
                  Aanpassingen, nieuwe pagina's, uitbreidingen en
                  maatwerkfunctionaliteiten aan bestaande of nieuwe websites.
                </p>
              </div>
            </div>

            <div className="service-price">
              €59
              <span>per uur</span>
            </div>
          </div>

          <div className="service-price-row">
            <div className="service-price-info">
              <div className="service-icon">◇</div>

              <div>
                <h3>Hosting & onderhoud</h3>
                <p>
                  Hosting, beveiligingsupdates, technisch onderhoud en
                  monitoring zodat je website veilig en betrouwbaar blijft
                  werken.
                </p>
              </div>
            </div>

            <div className="service-price">
              €75
              <span>per maand</span>
            </div>
          </div>

          <div className="service-price-row">
            <div className="service-price-info">
              <div className="service-icon">↗</div>

              <div>
                <h3>SEO optimalisatie</h3>
                <p>
                  Doorlopende optimalisatie gericht op betere online
                  vindbaarheid, relevante zoekwoorden en lokale
                  zoekresultaten.
                </p>
              </div>
            </div>

            <div className="service-price">
              €250
              <span>per maand</span>
            </div>
          </div>
        </div>

        {/* WAAROM DJ DIGITAL */}

        <div className="why-price-block">
          <div className="bottom-block-heading">
            <span className="bottom-label purple-label">
              WAAROM DJ DIGITAL?
            </span>

            <h2>Meer dan alleen een website.</h2>

            <p>
              Een professionele website is de basis. Daarom kijk ik ook naar
              snelheid, vindbaarheid, veiligheid en gebruiksgemak.
            </p>
          </div>

          <div className="why-row">
            <div className="why-icon">⚡</div>

            <div>
              <h3>Snelle websites</h3>
              <p>
                Geoptimaliseerd voor snelle laadtijden en een prettige
                gebruikerservaring.
              </p>
            </div>
          </div>

          <div className="why-row">
            <div className="why-icon">📈</div>

            <div>
              <h3>SEO-vriendelijke basis</h3>
              <p>
                Iedere website wordt technisch opgebouwd met een goede basis
                voor vindbaarheid in zoekmachines.
              </p>
            </div>
          </div>

          <div className="why-row">
            <div className="why-icon">💬</div>

            <div>
              <h3>Persoonlijk contact</h3>
              <p>
                Korte lijnen, duidelijke afspraken en direct contact zonder
                onnodige tussenpersonen.
              </p>
            </div>
          </div>

          <div className="why-row">
            <div className="why-icon">🔒</div>

            <div>
              <h3>Veilig & betrouwbaar</h3>
              <p>
                Een veilige technische basis met SSL, hosting en onderhoud als
                je daarvoor kiest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {gekozen && (
        <div
          className="contact-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pakket-titel"
        >
          <div className="contact-box">
            <button
              type="button"
              className="close-modal"
              onClick={() => setGekozen(null)}
              aria-label="Sluiten"
            >
              ✕
            </button>

            <span>CONTACT OPNEMEN</span>

            <h2 id="pakket-titel">{gekozen}</h2>

            <p>Kies hoe je contact wilt opnemen.</p>

            <button
              type="button"
              className="modal-primary"
              onClick={whatsapp}
            >
              WhatsApp
            </button>

            <button
              type="button"
              className="modal-secondary"
              onClick={mail}
            >
              E-mail
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
