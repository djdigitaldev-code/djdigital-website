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

      <section className="pricing-grid">
        <article className="price-card cyan">
          <div className="number">1</div>
          <h2>Website ontwikkeling</h2>
          <div className="price">€59 <span>per uur</span></div>
          <ul>
            <li>✓ Maatwerk ontwikkeling</li>
            <li>✓ Nieuwe functies</li>
            <li>✓ Technische support</li>
            <li>✓ Flexibel uurtarief</li>
          </ul>
        </article>

        <article className="price-card purple">
          <div className="number">2</div>
          <h2>Hosting & onderhoud</h2>
          <div className="price">€75 <span>per maand</span></div>
          <ul>
            <li>✓ SSL-certificaat</li>
            <li>✓ Back-ups</li>
            <li>✓ Updates</li>
            <li>✓ Monitoring</li>
          </ul>
        </article>

        <article className="price-card cyan">
          <div className="number">3</div>
          <h2>SEO optimalisatie</h2>
          <div className="price">€250 <span>per maand</span></div>
          <ul>
            <li>✓ Zoekwoorden</li>
            <li>✓ Lokale SEO</li>
            <li>✓ Google optimalisatie</li>
            <li>✓ Rapportages</li>
          </ul>
        </article>
      </section>

      <section className="wide-grid">
        <div className="wide-card">
          <div className="wide-title">
            <div className="number">4</div>
            <div>
              <h2>Websitepakketten</h2>
              <p>Kies het pakket dat bij je past.</p>
            </div>
          </div>

          {pakketten.map((p) => (
            <div className="package-row" key={p.titel}>
              <div>
                <h3>{p.titel}</h3>
                <p>{p.tekst}</p>
                <button
                  className="small-cta"
                  onClick={() => setGekozen(p.titel)}
                >
                  Kies dit pakket →
                </button>
              </div>
              <strong>{p.prijs}</strong>
            </div>
          ))}
        </div>

        <div className="wide-card">
          <div className="wide-title">
            <div className="number">5</div>
            <div>
              <h2>Waarom DJ Digital?</h2>
              <p>Meer dan alleen een mooie website.</p>
            </div>
          </div>

          <div className="package-row"><div><h3>Snelle websites</h3><p>Geoptimaliseerd voor prestaties.</p></div></div>
          <div className="package-row"><div><h3>SEO inbegrepen</h3><p>Basisoptimalisatie standaard.</p></div></div>
          <div className="package-row"><div><h3>Persoonlijk contact</h3><p>Korte lijnen en duidelijke communicatie.</p></div></div>
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
