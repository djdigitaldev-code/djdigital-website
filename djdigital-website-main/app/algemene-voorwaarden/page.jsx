"use client";

import Link from "next/link";
import "./algemene-voorwaarden.css";

export default function AlgemeneVoorwaardenPage() {
  const voorwaarden = [
    [
      "1. Toepasselijkheid",
      "Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van DJ Digital Works, waaronder webdesign, websiteontwikkeling, hosting, onderhoud en SEO."
    ],
    [
      "2. Offertes en overeenkomsten",
      "Offertes van DJ Digital Works zijn vrijblijvend, tenzij in de offerte uitdrukkelijk anders is vermeld. Een overeenkomst komt tot stand zodra de klant de offerte of opdracht schriftelijk of digitaal heeft aanvaard. De inhoud van de offerte en de gemaakte afspraken bepalen welke werkzaamheden worden uitgevoerd."
    ],
    [
      "3. Uitvoering van de werkzaamheden",
      "DJ Digital Works voert de werkzaamheden zorgvuldig en naar beste inzicht en vermogen uit. Werkzaamheden die niet vooraf zijn afgesproken, vallen buiten de oorspronkelijke opdracht en kunnen afzonderlijk in rekening worden gebracht."
    ],
    [
      "4. Content en verantwoordelijkheid van de klant",
      "De klant is verantwoordelijk voor de juistheid, volledigheid en rechtmatigheid van alle informatie en materialen die aan DJ Digital Works worden aangeleverd of die namens de klant op de website worden geplaatst. Hieronder vallen onder andere teksten, foto's, video's, logo's, afbeeldingen, prijzen, contactgegevens en andere inhoud.",
      "De klant verklaart dat hij over de benodigde rechten en toestemming beschikt om deze materialen te gebruiken en openbaar te maken. De klant is verantwoordelijk voor eventuele aanspraken van derden die voortkomen uit door de klant aangeleverde of goedgekeurde content.",
      "DJ Digital Works is niet verantwoordelijk voor de inhoud van de website die door de klant is aangeleverd of door de klant is goedgekeurd."
    ],
    [
      "5. Controle en goedkeuring",
      "De klant krijgt, wanneer van toepassing, de mogelijkheid om aangeleverde of ontwikkelde pagina's en content te controleren. Na goedkeuring is de klant verantwoordelijk voor de juistheid van de goedgekeurde inhoud. Wijzigingen na goedkeuring kunnen als aanvullende werkzaamheden worden beschouwd."
    ],
    [
      "6. Betaling",
      "Facturen dienen binnen de op de factuur vermelde betalingstermijn te worden voldaan. Bij niet-tijdige betaling kan DJ Digital Works, voor zover wettelijk toegestaan, werkzaamheden opschorten totdat betaling heeft plaatsgevonden.",
      "Eventuele extra werkzaamheden buiten de oorspronkelijke opdracht kunnen afzonderlijk worden gefactureerd."
    ],
    [
      "7. Hosting en onderhoud",
      "Wanneer hosting en/of onderhoud onderdeel is van de overeenkomst, worden de daarvoor afgesproken werkzaamheden en tarieven in de offerte of overeenkomst vastgelegd.",
      "DJ Digital Works streeft naar een veilige en stabiele hostingomgeving, maar kan geen absolute garantie geven dat een website altijd zonder onderbreking beschikbaar is."
    ],
    [
      "8. Domeinnaam",
      "Wanneer DJ Digital Works een domeinnaam voor de klant registreert, worden de registratie en eventuele verlenging uitgevoerd volgens de afspraken in de overeenkomst. De klant blijft verantwoordelijk voor het tijdig verstrekken van juiste gegevens en het voldoen van verschuldigde kosten."
    ],
    [
      "9. SEO en zoekresultaten",
      "DJ Digital Works kan websites technisch en inhoudelijk optimaliseren voor zoekmachines. Er worden echter geen garanties gegeven voor specifieke posities, bezoekersaantallen of andere resultaten in zoekmachines. Zoekmachines bepalen zelfstandig de uiteindelijke ranking en kunnen hun algoritmes wijzigen."
    ],
    [
      "10. Intellectueel eigendom",
      "Door DJ Digital Works ontwikkelde ontwerpen, code, technische oplossingen en andere originele onderdelen blijven eigendom van DJ Digital Works totdat alle verschuldigde bedragen volledig zijn voldaan, voor zover de wet dit toestaat.",
      "Na volledige betaling verkrijgt de klant de gebruiksrechten die in de overeenkomst zijn afgesproken. Derde-partijsoftware, frameworks, lettertypen, stockmateriaal en andere externe componenten kunnen onder hun eigen licentievoorwaarden vallen."
    ],
    [
      "11. Gebruik van materiaal van derden",
      "De klant is verantwoordelijk voor het aanleveren van materiaal waarvoor hij de benodigde gebruiksrechten bezit. Indien DJ Digital Works op verzoek van de klant materiaal van derden gebruikt, kunnen eventuele licentie- of aanschafkosten aan de klant worden doorberekend."
    ],
    [
      "12. Aansprakelijkheid",
      "DJ Digital Works is, voor zover wettelijk toegestaan, niet aansprakelijk voor indirecte schade, gevolgschade, omzetverlies, winstderving, gemiste besparingen of schade als gevolg van bedrijfsstilstand.",
      "DJ Digital Works is niet aansprakelijk voor schade die ontstaat door onjuiste, onvolledige of onrechtmatige informatie of materialen die door de klant zijn aangeleverd of goedgekeurd.",
      "Deze bepalingen beperken geen aansprakelijkheid voor zover een dergelijke beperking volgens de wet niet is toegestaan."
    ],
    [
      "13. Back-ups en wijzigingen door derden",
      "DJ Digital Works kan, wanneer dit onderdeel is van de dienstverlening, back-ups en technisch onderhoud uitvoeren. De klant blijft verantwoordelijk voor wijzigingen die door de klant zelf of door derden aan de website, hostingomgeving of code worden aangebracht.",
      "Schade of storingen die ontstaan door wijzigingen door derden vallen niet onder regulier onderhoud, tenzij hierover vooraf andere afspraken zijn gemaakt."
    ],
    [
      "14. Annulering en beëindiging",
      "Bij annulering van een opdracht kunnen reeds uitgevoerde werkzaamheden, gemaakte uren en reeds gemaakte kosten in rekening worden gebracht.",
      "Voor doorlopende diensten zoals hosting en onderhoud gelden de op de overeenkomst van toepassing zijnde opzeg- en betalingstermijnen."
    ],
    [
      "15. Opschorting",
      "DJ Digital Works kan werkzaamheden tijdelijk opschorten wanneer de klant noodzakelijke informatie, materialen, goedkeuringen of betalingen niet tijdig aanlevert of voldoet, voor zover dit wettelijk is toegestaan."
    ],
    [
      "16. Overmacht",
      "DJ Digital Works is niet aansprakelijk voor vertragingen of tekortkomingen die het gevolg zijn van omstandigheden buiten haar redelijke controle, zoals storingen bij hostingproviders, internetstoringen, softwareleveranciers, stroomstoringen, cyberincidenten, overheidsmaatregelen of andere vormen van overmacht."
    ],
    [
      "17. Privacy en persoonsgegevens",
      "DJ Digital Works verwerkt persoonsgegevens volgens de geldende privacywetgeving. Meer informatie hierover staat in de privacyverklaring op deze website."
    ],
    [
      "18. Wijzigingen aan de dienstverlening",
      "DJ Digital Works kan onderdelen van haar dienstverlening aanpassen wanneer dit noodzakelijk is voor technische, beveiligings- of operationele redenen. Wijzigingen aan lopende overeenkomsten worden uitgevoerd met inachtneming van de toepasselijke wet- en regelgeving en de gemaakte contractuele afspraken."
    ],
    [
      "19. Klachten",
      "Klachten over de dienstverlening kunnen worden gemeld via info@djdigitalworks.nl. DJ Digital Works probeert klachten zo snel mogelijk en in overleg met de klant op te lossen."
    ],
    [
      "20. Toepasselijk recht",
      "Op overeenkomsten met DJ Digital Works is Nederlands recht van toepassing, voor zover wettelijk toegestaan. Geschillen worden bij voorkeur eerst in onderling overleg opgelost."
    ],
    [
      "21. Contact",
      "Voor vragen over deze algemene voorwaarden kan contact worden opgenomen via info@djdigitalworks.nl."
    ]
  ];

  return (
    <main className="terms-page">
      <section className="terms-hero">
        <span className="hero-tag">ALGEMENE VOORWAARDEN</span>

        <h1>
          Algemene <span>Voorwaarden</span>
        </h1>

        <p>
          Op deze pagina vind je de algemene voorwaarden die van toepassing zijn
          op de dienstverlening van DJ Digital Works.
        </p>
      </section>

      <section className="terms-content">
        {voorwaarden.map(([title, text, extraText]) => (
          <article className="terms-card" key={title}>
            <h2>{title}</h2>

            <p>{text}</p>

            {extraText && <p>{extraText}</p>}
          </article>
        ))}
      </section>

      <section className="terms-footer">
        <p>Laatst bijgewerkt: augustus 2026</p>

        <Link href="/contact" className="primary-btn">
          Neem contact op
        </Link>
      </section>
    </main>
  );
}