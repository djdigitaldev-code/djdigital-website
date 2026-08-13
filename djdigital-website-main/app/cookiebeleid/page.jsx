"use client";

import Link from "next/link";
import "./cookiebeleid.css";

export default function CookiebeleidPage() {
  return (
    <main className="cookies-page">
      <section className="cookies-hero">
        <span className="hero-tag">COOKIEBELEID</span>

        <h1>
          Cookie<span>beleid</span>
        </h1>

        <p>
          Op deze pagina lees je welke cookies en vergelijkbare technieken
          DJ Digital Works gebruikt, waarvoor deze worden gebruikt en hoe je
          jouw cookievoorkeuren kunt beheren.
        </p>
      </section>

      <section className="cookies-content">
        <article className="cookies-card">
          <h2>1. Wat zijn cookies?</h2>

          <p>
            Cookies zijn kleine tekstbestanden die door een website op jouw
            computer, tablet of mobiele telefoon kunnen worden opgeslagen.
            Cookies kunnen bijvoorbeeld worden gebruikt om een website goed
            te laten functioneren, voorkeuren te onthouden of inzicht te
            krijgen in het gebruik van een website.
          </p>
        </article>

        <article className="cookies-card">
          <h2>2. Noodzakelijke cookies</h2>

          <p>
            DJ Digital Works gebruikt noodzakelijke cookies en vergelijkbare
            technieken die nodig zijn om de website goed en veilig te laten
            functioneren. Deze kunnen bijvoorbeeld worden gebruikt om jouw
            cookievoorkeuren te onthouden.
          </p>

          <p>
            Voor noodzakelijke cookies is geen toestemming vereist wanneer
            deze uitsluitend worden gebruikt voor het functioneren van de
            website.
          </p>
        </article>

        <article className="cookies-card">
          <h2>3. Analytische cookies</h2>

          <p>
            Wanneer je hiervoor toestemming geeft, kan DJ Digital Works
            Google Analytics gebruiken om inzicht te krijgen in het gebruik
            van de website. Hiermee kunnen bijvoorbeeld bezoekersaantallen,
            bezochte pagina's en algemene gebruiksgegevens worden geanalyseerd.
          </p>

          <p>
            Google Analytics wordt pas geactiveerd nadat je toestemming hebt
            gegeven voor analytische cookies. Wanneer je analytische cookies
            weigert, wordt Google Analytics niet geladen.
          </p>
        </article>

        <article className="cookies-card">
          <h2>4. Marketingcookies</h2>

          <p>
            Marketingcookies kunnen worden gebruikt voor het meten en
            optimaliseren van marketingactiviteiten en advertenties.
          </p>

          <p>
            DJ Digital Works gebruikt marketingcookies alleen wanneer deze
            daadwerkelijk op de website worden toegepast en je hiervoor
            vooraf toestemming hebt gegeven.
          </p>
        </article>

        <article className="cookies-card">
          <h2>5. Jouw cookievoorkeuren</h2>

          <p>
            Bij je eerste bezoek aan de website kun je jouw cookievoorkeuren
            instellen. Je kunt aanvullende cookies accepteren, weigeren of
            per categorie toestemming geven.
          </p>

          <p>
            Je kunt jouw toestemming op ieder moment wijzigen of intrekken
            via de knop <strong>Cookievoorkeuren</strong> onderaan de website.
          </p>
        </article>

        <article className="cookies-card">
          <h2>6. Cookies verwijderen</h2>

          <p>
            Je kunt cookies die al op jouw apparaat zijn opgeslagen ook
            verwijderen via de instellingen van jouw internetbrowser.
          </p>

          <p>
            Houd er rekening mee dat het verwijderen of blokkeren van cookies
            ervoor kan zorgen dat bepaalde onderdelen van de website minder
            goed functioneren of dat je opnieuw naar jouw cookievoorkeuren
            wordt gevraagd.
          </p>
        </article>

        <article className="cookies-card">
          <h2>7. Externe diensten</h2>

          <p>
            Voor bepaalde onderdelen van de website kan DJ Digital Works
            gebruikmaken van externe diensten. Wanneer deze diensten cookies
            of vergelijkbare technieken gebruiken die niet noodzakelijk zijn,
            worden deze alleen geactiveerd nadat daarvoor toestemming is
            verkregen, voor zover dit wettelijk vereist is.
          </p>
        </article>

        <article className="cookies-card">
          <h2>8. Wijzigingen in dit cookiebeleid</h2>

          <p>
            DJ Digital Works kan dit cookiebeleid aanpassen wanneer de
            gebruikte diensten, cookies of toepasselijke wet- en regelgeving
            veranderen.
          </p>

          <p>
            De meest recente versie van het cookiebeleid wordt altijd op deze
            pagina gepubliceerd.
          </p>
        </article>

        <article className="cookies-card">
          <h2>9. Contact</h2>

          <p>
            Heb je vragen over het gebruik van cookies of over dit
            cookiebeleid? Neem dan gerust contact op via{" "}
            <a href="mailto:info@djdigitalworks.nl">
              info@djdigitalworks.nl
            </a>
            .
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