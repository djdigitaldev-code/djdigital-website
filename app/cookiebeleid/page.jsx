"use client";

import Link from "next/link";
import "./cookiebeleid.css";

export default function CookiebeleidPage() {
  return (
    <main className="cookies-page">

      <section className="cookies-hero">
        <span className="hero-tag">COOKIEBELEID</span>

        <h1>Cookiebeleid</h1>

        <p>
          Op deze pagina lees je welke cookies DJ Digital gebruikt,
          waarom deze worden gebruikt en hoe je jouw voorkeuren kunt beheren.
        </p>
      </section>

      <section className="cookies-content">

        <article className="cookies-card">
          <h2>1. Wat zijn cookies?</h2>

          <p>
            Cookies zijn kleine bestanden die via je browser op je apparaat
            kunnen worden opgeslagen. Ze kunnen bijvoorbeeld worden gebruikt
            om een website goed te laten functioneren of om inzicht te krijgen
            in het gebruik van de website.
          </p>
        </article>

        <article className="cookies-card">
          <h2>2. Noodzakelijke cookies</h2>

          <p>
            DJ Digital gebruikt noodzakelijke technieken om de website goed
            te laten functioneren en om jouw cookievoorkeuren te onthouden.
            Hiervoor is geen toestemming vereist.
          </p>
        </article>

        <article className="cookies-card">
          <h2>3. Analytische cookies</h2>

          <p>
            Met jouw toestemming kan DJ Digital Google Analytics gebruiken
            om inzicht te krijgen in het gebruik van de website, zoals welke
            pagina's worden bezocht. Deze informatie helpt ons de website
            te analyseren en te verbeteren.
          </p>

          <p>
            Google Analytics wordt pas geactiveerd wanneer je toestemming
            geeft voor analytische cookies. Wanneer je deze cookies weigert,
            wordt Google Analytics niet geladen.
          </p>
        </article>

        <article className="cookies-card">
          <h2>4. Marketingcookies</h2>

          <p>
            Marketingcookies kunnen worden gebruikt om de prestaties van
            advertenties en marketingcampagnes te meten en te verbeteren.
            Deze cookies worden alleen gebruikt wanneer je hiervoor
            toestemming hebt gegeven.
          </p>
        </article>

        <article className="cookies-card">
          <h2>5. Jouw cookievoorkeuren</h2>

          <p>
            Bij je eerste bezoek kun je alle aanvullende cookies accepteren,
            weigeren of per categorie een keuze maken.
          </p>

          <p>
            Je kunt jouw keuze later altijd wijzigen of je toestemming
            intrekken via 'Cookievoorkeuren' onderaan de website.
          </p>
        </article>

        <article className="cookies-card">
          <h2>6. Cookies verwijderen</h2>

          <p>
            Je kunt opgeslagen cookies ook verwijderen via de instellingen
            van je browser. Houd er rekening mee dat het verwijderen van
            opgeslagen gegevens ertoe kan leiden dat je opnieuw naar je
            cookievoorkeuren wordt gevraagd.
          </p>
        </article>

        <article className="cookies-card">
          <h2>7. Wijzigingen</h2>

          <p>
            DJ Digital kan dit cookiebeleid aanpassen wanneer de gebruikte
            diensten, cookies of toepasselijke regelgeving veranderen.
            De meest recente versie wordt altijd op deze pagina gepubliceerd.
          </p>
        </article>

      </section>

      <section className="cookies-footer">
        <p>Laatst bijgewerkt: augustus 2026</p>

        <Link href="/contact" className="primary-btn">
          Neem contact op
        </Link>
      </section>

    </main>
  );
}