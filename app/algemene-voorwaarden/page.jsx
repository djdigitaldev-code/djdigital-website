"use client";

import Link from "next/link";
import "./algemene-voorwaarden.css";

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="terms-page">
      <section className="terms-hero">
        <span className="hero-tag">ALGEMENE VOORWAARDEN</span>
        <h1>Algemene <span>Voorwaarden</span></h1>
        <p>
          Op deze pagina vind je de algemene voorwaarden die van toepassing zijn
          op de dienstverlening van DJ Digital.
        </p>
      </section>

      <section className="terms-content">
        {[
          ["1. Toepasselijkheid","Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van DJ Digital."],
          ["2. Offertes","Offertes zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld."],
          ["3. Betaling","Facturen dienen binnen de afgesproken betalingstermijn te worden voldaan."],
          ["4. Uitvoering van diensten","DJ Digital voert werkzaamheden zorgvuldig uit, maar kan geen garanties geven op resultaten zoals zoekmachineposities."],
          ["5. Aansprakelijkheid","DJ Digital is uitsluitend aansprakelijk voor directe schade voor zover wettelijk toegestaan."],
          ["6. Intellectueel eigendom","Ontwikkelde ontwerpen, code en content blijven eigendom van DJ Digital totdat volledige betaling heeft plaatsgevonden."],
          ["7. Annulering","Bij annulering van een opdracht kunnen reeds gemaakte uren en kosten in rekening worden gebracht."],
          ["8. Overmacht","DJ Digital is niet aansprakelijk voor vertragingen of tekortkomingen als gevolg van overmacht."],
          ["9. Contact","Vragen? Neem contact op via info@djdigital.nl."]
        ].map(([title,text])=>(
          <article className="terms-card" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="terms-footer">
        <p>Laatst bijgewerkt: juli 2026</p>
        <Link href="/contact" className="primary-btn">
          Neem contact op
        </Link>
      </section>
    </main>
  );
}
