"use client";

import { useState } from "react";
import Link from "next/link";
import "./contact.css";
import TurnstileWidget from "@/app/components/TurnstileWidget";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

async function handleSubmit(event) {
  event.preventDefault();

  if (!turnstileToken) {
    setStatus("captcha");
    return;
  }

  const form = event.currentTarget;
  const formData = new FormData(form);

  formData.append("turnstileToken", turnstileToken);

  setSending(true);
  setStatus("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      form.reset();
      setTurnstileToken("");
      setStatus("success");
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  } finally {
    setSending(false);
  }
}

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
          <Link href="/projecten" className="button">
            Bekijk projecten
          </Link>

          <a href="#formulier" className="button secondary">
            Gratis kennismaking
          </a>
        </div>
      </section>

      <section className="contact-cards">
        <div className="contact-card">
          <h3>📧 E-mail</h3>
          <p>info@djdigitalworks.nl</p>
          <small>Je kunt altijd vrijblijvend contact opnemen.</small>
        </div>

        <div className="contact-card">
          <h3>💬 WhatsApp</h3>
          <p>Binnenkort beschikbaar</p>
          <small>WhatsApp wordt binnenkort toegevoegd.</small>
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

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="naam"
              placeholder="Naam"
              required
            />

            <input
              type="text"
              name="bedrijf"
              placeholder="Bedrijfsnaam"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mailadres"
              required
            />

            <input
              type="tel"
              name="telefoon"
              placeholder="Telefoon (optioneel)"
            />

            <input
              type="text"
              name="onderwerp"
              placeholder="Onderwerp"
              required
            />

            <textarea
              name="bericht"
              rows="6"
              placeholder="Vertel iets over je project..."
              required
            />

<TurnstileWidget
  onVerify={(token) => setTurnstileToken(token)}
/>

<label className="privacy-check">
  <input type="checkbox" required />
  <span>
    Ik ga akkoord met de{" "}
    <Link href="/privacy">privacyverklaring</Link>.
  </span>
</label>

            <button
              type="submit"
              className="button"
              disabled={sending}
            >
              {sending ? "Versturen..." : "Bericht versturen"}
            </button>

            {status === "success" && (
              <div className="form-success">
                ✓ Bedankt! Je bericht is succesvol verzonden.
                Ik neem zo snel mogelijk contact met je op.
              </div>
            )}

            {status === "error" && (
              <div className="form-error">
                Er ging iets mis bij het versturen. Probeer het opnieuw of
                stuur rechtstreeks een e-mail naar info@djdigitalworks.nl.
              </div>
            )}
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
          <p>
            Gemiddeld 2 tot 4 weken, afhankelijk van het project.
          </p>
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
        <p>
          Laten we samen een website bouwen waar je trots op bent.
        </p>

        <a href="#formulier" className="button">
          Neem contact op
        </a>
      </section>
    </main>
  );
}