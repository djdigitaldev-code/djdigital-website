"use client";

import Link from "next/link";
import { useState } from "react";
import "./tarieven.css";

const pakketten = [
  {
    titel: "Kleine bedrijfswebsite",
    prijs: "vanaf €899",
    tekst: "Perfect voor starters en kleine ondernemers.",
    kenmerken: ["Tot 5 pagina's","Responsive","Basis SEO","Contactformulier"],
  },
  {
    titel: "Uitgebreide website",
    prijs: "vanaf €1399",
    tekst: "Meer functionaliteiten en ruimte om te groeien.",
    kenmerken: ["Maatwerk pagina's","Geavanceerde formulieren","SEO","Snelle oplevering"],
  },
  {
    titel: "Maatwerk",
    prijs: "Op aanvraag",
    tekst: "Volledig afgestemd op jouw bedrijf.",
    kenmerken: ["Volledig maatwerk","Koppelingen","Uitbreidbaar","Persoonlijk advies"],
  },
];

export default function TarievenPage() {
  const [gekozen, setGekozen] = useState(null);

  const whatsapp = () => {
    const txt = `Hoi DJ Digital,%0A%0AIk heb interesse in het pakket: ${gekozen}`;
    window.open(`https://wa.me/31612345678?text=${txt}`, "_blank");
  };

  const mail = () => {
    const body = encodeURIComponent(
      `Hoi DJ Digital,\n\nIk heb interesse in het pakket "${gekozen}".`
    );
    window.location.href = `mailto:info@djdigital.nl?subject=Pakket aanvraag&body=${body}`;
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
          onderneming past.
        </p>

        <div className="hero-buttons">
          <Link href="/contact" className="primary-btn">
            Gratis kennismaken
          </Link>

          <Link href="/projecten" className="secondary-btn">
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
      Kies het pakket dat aansluit bij jouw onderneming.
      Alle websites zijn snel, responsive en SEO-vriendelijk.
    </p>
  </div>


  <div className="packages-grid">

    {pakketten.map((p) => (
      <article className="package-card" key={p.titel}>

        <div className="package-top">
          <h3>{p.titel}</h3>
          <p>{p.tekst}</p>
        </div>

        <div className="package-price">
          {p.prijs}
        </div>

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
    Alle websites worden responsive, snel, veilig en SEO-vriendelijk opgeleverd.
  </div>

</section>



{/* =========================
    DIENSTEN + WAAROM
========================= */}

<section className="pricing-bottom-grid">


  {/* DIENSTEN */}

  <div className="services-price-block">

    <div className="bottom-block-heading">

      <span className="bottom-label">
        DIENSTEN & TARIEVEN
      </span>

      <h2>Losse diensten</h2>

      <p>
        Voor werkzaamheden buiten een websitepakket.
      </p>

    </div>


    <div className="service-price-row">

      <div className="service-price-info">

        <div className="service-icon">
          &lt;/&gt;
        </div>

        <div>
          <h3>Website ontwikkeling</h3>
          <p>
            Aanpassingen, uitbreidingen en maatwerk.
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

        <div className="service-icon">
          ◇
        </div>

        <div>
          <h3>Hosting & onderhoud</h3>
          <p>
            Hosting, beveiliging, updates en monitoring.
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

        <div className="service-icon">
          ↗
        </div>

        <div>
          <h3>SEO optimalisatie</h3>
          <p>
            Meer vindbaarheid in Google en lokale zoekresultaten.
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
        Persoonlijke service en kwaliteit staan centraal.
      </p>

    </div>


    <div className="why-row">

      <div className="why-icon">
        ⚡
      </div>

      <div>
        <h3>Snelle websites</h3>
        <p>
          Geoptimaliseerd voor snelheid en prestaties.
        </p>
      </div>

    </div>


    <div className="why-row">

      <div className="why-icon">
        📈
      </div>

      <div>
        <h3>SEO inbegrepen</h3>
        <p>
          Basis SEO-optimalisatie standaard bij iedere website.
        </p>
      </div>

    </div>


    <div className="why-row">

      <div className="why-icon">
        💬
      </div>

      <div>
        <h3>Persoonlijk contact</h3>
        <p>
          Korte lijnen en duidelijke communicatie.
        </p>
      </div>

    </div>


    <div className="why-row">

      <div className="why-icon">
        🔒
      </div>

      <div>
        <h3>Veilig & betrouwbaar</h3>
        <p>
          Veilige hosting, SSL en technisch onderhoud.
        </p>
      </div>

    </div>

  </div>

</section>

      {gekozen && (
        <div className="contact-modal">
          <div className="contact-box">
            <button className="close-modal" onClick={() => setGekozen(null)}>✕</button>
            <span>CONTACT OPNEMEN</span>
            <h2>{gekozen}</h2>
            <p>Kies hoe je contact wilt opnemen.</p>
            <button className="modal-primary" onClick={whatsapp}>WhatsApp</button>
            <button className="modal-secondary" onClick={mail}>E-mail</button>
          </div>
        </div>
      )}
    </main>
  );
}
