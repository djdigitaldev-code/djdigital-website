"use client";

import Link from "next/link";
import "./contact.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="hero-tag">CONTACT</span>

        <h1>
          Laten we jouw <span>online succes</span> bouwen.
        </h1>

        <p>
          Heb je een vraag of wil je een professionele website laten maken?
          Neem vrijblijvend contact op. Ik denk graag met je mee.
        </p>

        <div className="hero-buttons">
          <Link href="/projecten" className="primary-btn">
            Bekijk projecten
          </Link>

          <a href="#formulier" className="secondary-btn">
            Gratis kennismaking
          </a>
        </div>
      </section>

      <section className="contact-cards">
        <div className="contact-card">
          <h3>📧 E-mail</h3>
          <p>info@djdigital.nl</p>
          <small>Later aan te passen naar je echte e-mailadres.</small>
        </div>

        <div className="contact-card">
          <h3>💬 WhatsApp</h3>
          <p>Binnenkort beschikbaar</p>
          <small>Je eigen nummer voeg je later toe.</small>
        </div>

        <div className="contact-card">
          <h3>📍 Werkgebied</h3>
          <p>Heel Nederland</p>
          <small>Online én op locatie.</small>
        </div>
      </section>

      <section className="contact-content" id="formulier">
        <div className="contact-form">
          <h2>Stuur een bericht</h2>

          <form
            action="https://formspree.io/f/xxxxxxxx"
            method="POST"
          >
            <input type="text" name="naam" placeholder="Naam" required />
            <input type="text" name="bedrijf" placeholder="Bedrijfsnaam" />
            <input type="email" name="email" placeholder="E-mailadres" required />
            <input type="tel" name="telefoon" placeholder="Telefoon (optioneel)" />
            <input type="text" name="onderwerp" placeholder="Onderwerp" required />
            <textarea
              name="bericht"
              rows="6"
              placeholder="Vertel iets over je project..."
              required
            />
            <button type="submit" className="primary-btn">
              Bericht versturen
            </button>
          </form>
        </div>

        <aside className="contact-info">
          <h2>Waarom DJ Digital?</h2>

          <ul>
            <li>⚡ Snelle websites</li>
            <li>📱 Responsive design</li>
            <li>🔍 SEO geoptimaliseerd</li>
            <li>🚀 Moderne uitstraling</li>
            <li>🤝 Persoonlijk contact</li>
          </ul>

          <div className="info-box">
            <h3>Reactietijd</h3>
            <p>Meestal ontvang je binnen 24 uur een reactie.</p>
          </div>
        </aside>
      </section>

      <section className="faq">
        <h2>Veelgestelde vragen</h2>

        <div className="faq-item">
          <h3>Hoe lang duurt een website?</h3>
          <p>Gemiddeld 2 tot 4 weken, afhankelijk van het project.</p>
        </div>

        <div className="faq-item">
          <h3>Kan mijn website later uitgebreid worden?</h3>
          <p>Ja, alle websites worden modulair opgebouwd.</p>
        </div>

        <div className="faq-item">
          <h3>Bieden jullie onderhoud aan?</h3>
          <p>Ja, inclusief updates, beveiliging en ondersteuning.</p>
        </div>
      </section>

      <section className="contact-cta">
        <h2>Klaar om online te groeien?</h2>
        <p>Laten we samen een website bouwen waar je trots op bent.</p>

        <a href="#formulier" className="primary-btn">
          Neem contact op
        </a>
      </section>
    </main>
  );
}
