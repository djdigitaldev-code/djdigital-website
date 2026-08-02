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

{/* WEBSITEPAKKETTEN */}
<section className="packages-section">

  <div className="packages-header">
    <div>
      <span className="section-label">WEBSITEPAKKETTEN</span>
      <h2>Een website voor iedere onderneming.</h2>
      <p>
        Kies een pakket dat bij jouw bedrijf past. Alle websites worden
        responsive, snel en SEO-vriendelijk opgeleverd.
      </p>
    </div>
  </div>

  <div className="packages-list">

    {pakketten.map((p, index) => (
      <article className="package-item" key={p.titel}>

        <div className="package-icon">
          {index === 0 && "▣"}
          {index === 1 && "◇"}
          {index === 2 && "</>"}
        </div>

        <div className="package-main">

          <h3>{p.titel}</h3>

          <p>{p.tekst}</p>

          <ul className="package-features">
            {p.kenmerken.map((kenmerk) => (
              <li key={kenmerk}>
                <span>✓</span>
                {kenmerk}
              </li>
            ))}
          </ul>

        </div>

        <div className="package-action">

          <strong>{p.prijs}</strong>

          <button
            className="small-cta"
            onClick={() => setGekozen(p.titel)}
          >
            Kies pakket →
          </button>

        </div>

      </article>
    ))}

  </div>

  <div className="packages-note">
    <span>★</span>
    Alle websites zijn responsive, snel, veilig en SEO-vriendelijk.
  </div>

</section>

{/* LOSSE TARIEVEN */}
<section className="pricing-grid">

  <article className="price-card cyan">

    <h2>Website ontwikkeling</h2>

    <div className="price">
      €59 <span>per uur</span>
    </div>

    <ul>
      <li>✓ Maatwerk ontwikkeling</li>
      <li>✓ Nieuwe functies</li>
      <li>✓ Technische support</li>
      <li>✓ Flexibel uurtarief</li>
    </ul>
  </article>


  <article className="price-card purple">

    <h2>Hosting & onderhoud</h2>

    <div className="price">
      €75 <span>per maand</span>
    </div>

    <ul>
      <li>✓ SSL-certificaat</li>
      <li>✓ Back-ups</li>
      <li>✓ Updates</li>
      <li>✓ Monitoring</li>
    </ul>
  </article>


  <article className="price-card cyan">

    <h2>SEO optimalisatie</h2>

    <div className="price">
      €250 <span>per maand</span>
    </div>

    <ul>
      <li>✓ Zoekwoorden</li>
      <li>✓ Lokale SEO</li>
      <li>✓ Google optimalisatie</li>
      <li>✓ Rapportages</li>
    </ul>
  </article>

</section>


{/* WAAROM DJ DIGITAL */}
<section className="wide-grid single-wide">

  <div className="wide-card">

    <div className="wide-title">

      <div>
        <h2>Waarom DJ Digital?</h2>
        <p>Meer dan alleen een mooie website.</p>
      </div>
    </div>

    <div className="package-row">
      <div>
        <h3>Snelle websites</h3>
        <p>Geoptimaliseerd voor prestaties.</p>
      </div>
    </div>

    <div className="package-row">
      <div>
        <h3>SEO inbegrepen</h3>
        <p>Basisoptimalisatie standaard.</p>
      </div>
    </div>

    <div className="package-row">
      <div>
        <h3>Persoonlijk contact</h3>
        <p>Korte lijnen en duidelijke communicatie.</p>
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
