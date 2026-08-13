"use client";

import Link from "next/link";
import "./privacy.css";

export default function PrivacyPage() {
  return (
    <main className="privacy-page">

      {/* HERO */}
      <section className="privacy-hero">
        <span className="hero-tag">PRIVACYVERKLARING</span>

        <h1>
          Privacy bij <span>DJ Digital Works</span>
        </h1>

        <p>
          DJ Digital Works respecteert jouw privacy. Wij gaan zorgvuldig om
          met persoonsgegevens en verwerken deze alleen wanneer dat nodig is
          voor onze dienstverlening, communicatie en het goed functioneren
          van onze website.
        </p>
      </section>


      {/* CONTENT */}
      <section className="privacy-content">

        <article className="privacy-card">
          <h2>1. Wie zijn wij?</h2>

          <p>
            DJ Digital Works is verantwoordelijk voor de verwerking van
            persoonsgegevens zoals beschreven in deze privacyverklaring.
          </p>

          <p>
            <strong>Naam:</strong> DJ Digital Works
            <br />
            <strong>E-mail:</strong>{" "}
            <a href="mailto:info@djdigitalworks.nl">
              info@djdigitalworks.nl
            </a>
          </p>

          <p>
            DJ Digital Works ontwikkelt professionele websites en biedt
            diensten aan op het gebied van webdevelopment, hosting,
            onderhoud en SEO.
          </p>
        </article>


        <article className="privacy-card">
          <h2>2. Welke persoonsgegevens verwerken wij?</h2>

          <p>
            Wanneer je contact met ons opneemt of gebruikmaakt van onze
            diensten, kunnen wij de volgende persoonsgegevens verwerken:
          </p>

          <ul>
            <li>Naam</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer, indien opgegeven</li>
            <li>Bedrijfsnaam, indien opgegeven</li>
            <li>Inhoud van je bericht of aanvraag</li>
            <li>Gegevens die je zelf aan ons verstrekt in het kader van onze dienstverlening</li>
          </ul>
        </article>


        <article className="privacy-card">
          <h2>3. Waarvoor gebruiken wij deze gegevens?</h2>

          <p>
            Wij verwerken persoonsgegevens uitsluitend voor zover dit nodig
            is voor de volgende doeleinden:
          </p>

          <ul>
            <li>Het beantwoorden van contactaanvragen.</li>
            <li>Het opstellen en versturen van offertes.</li>
            <li>Het uitvoeren van overeenkomsten.</li>
            <li>Het leveren van webdevelopment-, hosting-, onderhouds- en SEO-diensten.</li>
            <li>Het bieden van klantenservice en ondersteuning.</li>
            <li>Het onderhouden en beveiligen van onze website en dienstverlening.</li>
            <li>Het voldoen aan wettelijke verplichtingen.</li>
          </ul>
        </article>


        <article className="privacy-card">
          <h2>4. Op basis waarvan verwerken wij persoonsgegevens?</h2>

          <p>
            Wij verwerken persoonsgegevens alleen wanneer daar een geldige
            grondslag voor bestaat. Afhankelijk van de situatie kan dit
            bijvoorbeeld zijn:
          </p>

          <ul>
            <li>
              Het uitvoeren van een overeenkomst of het nemen van maatregelen
              op verzoek voordat een overeenkomst wordt gesloten.
            </li>

            <li>
              Het voldoen aan een wettelijke verplichting.
            </li>

            <li>
              Een gerechtvaardigd belang, bijvoorbeeld voor het beantwoorden
              van zakelijke vragen of het beveiligen van onze dienstverlening.
            </li>

            <li>
              Toestemming, wanneer deze volgens de toepasselijke wetgeving
              vereist is.
            </li>
          </ul>
        </article>


        <article className="privacy-card">
          <h2>5. Hoe lang bewaren wij persoonsgegevens?</h2>

          <p>
            Wij bewaren persoonsgegevens niet langer dan noodzakelijk is voor
            het doel waarvoor deze zijn verzameld.
          </p>

          <p>
            Wanneer wettelijke bewaartermijnen van toepassing zijn, bewaren
            wij gegevens gedurende de wettelijke termijn. Gegevens die niet
            langer noodzakelijk zijn, worden verwijderd of geanonimiseerd.
          </p>
        </article>


        <article className="privacy-card">
          <h2>6. Delen wij persoonsgegevens met derden?</h2>

          <p>
            DJ Digital Works verkoopt jouw persoonsgegevens niet aan derden.
          </p>

          <p>
            In bepaalde situaties kunnen persoonsgegevens worden verwerkt door
            externe dienstverleners die ons ondersteunen bij bijvoorbeeld
            hosting, websitebeheer, communicatie, beveiliging of analyse.
            Wanneer dit noodzakelijk is, zorgen wij ervoor dat deze partijen
            persoonsgegevens alleen verwerken voor het betreffende doel en
            passende afspraken over gegevensbescherming worden gemaakt.
          </p>

          <p>
            Wij verstrekken persoonsgegevens daarnaast wanneer dit noodzakelijk
            is om een overeenkomst uit te voeren of wanneer wij daar wettelijk
            toe verplicht zijn.
          </p>
        </article>


        <article className="privacy-card">
          <h2>7. Cookies en Google Analytics</h2>

          <p>
            Onze website maakt gebruik van functionele cookies die noodzakelijk
            kunnen zijn voor het goed functioneren van de website.
          </p>

          <p>
            Wij kunnen daarnaast gebruikmaken van Google Analytics om inzicht
            te krijgen in het gebruik en de prestaties van onze website.
            Analytische of andere cookies die volgens de toepasselijke
            privacywetgeving toestemming vereisen, worden niet geplaatst
            voordat hiervoor toestemming is gegeven.
          </p>

          <p>
            Je kunt je cookievoorkeuren op ieder moment wijzigen of eerder
            gegeven toestemming intrekken via de cookie-instellingen op onze
            website.
          </p>
        </article>


        <article className="privacy-card">
          <h2>8. Hoe beveiligen wij persoonsgegevens?</h2>

          <p>
            Wij nemen passende technische en organisatorische maatregelen om
            persoonsgegevens te beschermen tegen verlies, misbruik, onbevoegde
            toegang en andere vormen van onrechtmatige verwerking.
          </p>

          <p>
            Ondanks deze maatregelen kan geen enkele internetverbinding of
            digitale opslag volledig gegarandeerd veilig zijn.
          </p>
        </article>


        <article className="privacy-card">
          <h2>9. Jouw privacyrechten</h2>

          <p>
            Je hebt volgens de AVG verschillende rechten met betrekking tot
            jouw persoonsgegevens.
          </p>

          <ul>
            <li>Het recht om jouw persoonsgegevens in te zien.</li>
            <li>Het recht om onjuiste gegevens te laten corrigeren.</li>
            <li>Het recht om jouw persoonsgegevens te laten verwijderen.</li>
            <li>Het recht om de verwerking van jouw gegevens te beperken.</li>
            <li>Het recht om bezwaar te maken tegen bepaalde verwerkingen.</li>
            <li>
              Het recht op dataportabiliteit wanneer dit volgens de AVG van
              toepassing is.
            </li>
            <li>
              Het recht om eerder gegeven toestemming weer in te trekken.
            </li>
          </ul>

          <p>
            Wil je gebruikmaken van een van deze rechten? Neem dan contact met
            ons op via{" "}
            <a href="mailto:info@djdigitalworks.nl">
              info@djdigitalworks.nl
            </a>
            .
          </p>
        </article>


        <article className="privacy-card">
          <h2>10. Klacht indienen</h2>

          <p>
            Heb je een klacht over de manier waarop wij met jouw
            persoonsgegevens omgaan? Neem dan eerst contact met ons op zodat
            we samen naar een oplossing kunnen zoeken.
          </p>

          <p>
            Je hebt daarnaast het recht om een klacht in te dienen bij de
            Autoriteit Persoonsgegevens wanneer je van mening bent dat wij jouw
            persoonsgegevens niet volgens de privacywetgeving verwerken.
          </p>
        </article>


        <article className="privacy-card">
          <h2>11. Wijzigingen in deze privacyverklaring</h2>

          <p>
            Wij kunnen deze privacyverklaring aanpassen wanneer onze
            dienstverlening, website of de toepasselijke wet- en regelgeving
            verandert.
          </p>

          <p>
            De meest actuele versie van deze privacyverklaring is altijd op
            deze pagina te vinden.
          </p>
        </article>


        <article className="privacy-card">
          <h2>12. Contact</h2>

          <p>
            Heb je vragen over deze privacyverklaring of over de verwerking van
            jouw persoonsgegevens? Neem dan gerust contact met ons op.
          </p>

          <p>
            <strong>DJ Digital Works</strong>
            <br />
            E-mail:{" "}
            <a href="mailto:info@djdigitalworks.nl">
              info@djdigitalworks.nl
            </a>
          </p>
        </article>

      </section>


      {/* FOOTER */}
      <section className="privacy-footer">

        <p>
          Laatst bijgewerkt: augustus 2026
        </p>

        <Link href="/contact" className="primary-btn">
          Neem contact op
        </Link>

      </section>

    </main>
  );
}