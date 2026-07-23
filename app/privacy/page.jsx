"use client";

import Link from "next/link";
import "./privacy.css";

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <span className="hero-tag">PRIVACYVERKLARING</span>
        <h1>Privacy bij <span>DJ Digital</span></h1>
        <p>
          DJ Digital respecteert jouw privacy en verwerkt persoonsgegevens
          uitsluitend voor het leveren van onze diensten en het beantwoorden van
          contactaanvragen.
        </p>
      </section>

      <section className="privacy-content">

        <article className="privacy-card">
          <h2>1. Bedrijfsgegevens</h2>
          <p>
            DJ Digital ontwikkelt professionele websites en biedt diensten aan
            op het gebied van webdevelopment, hosting en SEO.
          </p>
        </article>

        <article className="privacy-card">
          <h2>2. Welke gegevens verzamelen wij?</h2>
          <ul>
            <li>Naam</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer (indien opgegeven)</li>
            <li>Bedrijfsnaam</li>
            <li>Bericht via het contactformulier</li>
          </ul>
        </article>

        <article className="privacy-card">
          <h2>3. Waarom verwerken wij deze gegevens?</h2>
          <ul>
            <li>Om contact op te nemen.</li>
            <li>Voor het opstellen van offertes.</li>
            <li>Voor het uitvoeren van onze diensten.</li>
            <li>Voor klantenservice en ondersteuning.</li>
          </ul>
        </article>

        <article className="privacy-card">
          <h2>4. Bewaartermijn</h2>
          <p>
            Persoonsgegevens worden niet langer bewaard dan noodzakelijk is voor
            het doel waarvoor zij zijn verzameld, tenzij een wettelijke
            bewaartermijn van toepassing is.
          </p>
        </article>

        <article className="privacy-card">
          <h2>5. Delen van gegevens</h2>
          <p>
            DJ Digital verkoopt geen persoonsgegevens aan derden. Gegevens
            worden uitsluitend gedeeld wanneer dit noodzakelijk is voor de
            uitvoering van onze dienstverlening of wanneer wij daartoe wettelijk
            verplicht zijn.
          </p>
        </article>

        <article className="privacy-card">
          <h2>6. Cookies</h2>
          <p>
            Deze website kan functionele cookies gebruiken om de website goed te
            laten werken. Indien analytische cookies worden gebruikt, gebeurt
            dit uitsluitend volgens de geldende privacywetgeving.
          </p>
        </article>

        <article className="privacy-card">
          <h2>7. Jouw rechten</h2>
          <p>
            Je hebt het recht om jouw persoonsgegevens in te zien, te wijzigen,
            te laten verwijderen of bezwaar te maken tegen de verwerking ervan.
          </p>
        </article>

        <article className="privacy-card">
          <h2>8. Contact</h2>
          <p>
            Heb je vragen over deze privacyverklaring? Neem gerust contact op
            via <a href="mailto:info@djdigital.nl">info@djdigital.nl</a>.
          </p>
        </article>

      </section>

      <section className="privacy-footer">
        <p>Laatst bijgewerkt: juli 2026</p>

        <Link href="/contact" className="primary-btn">
          Neem contact op
        </Link>
      </section>
    </main>
  );
}
