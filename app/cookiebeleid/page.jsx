"use client";

import Link from "next/link";
import "./cookiebeleid.css";

export default function CookiebeleidPage() {
  return (
    <main className="cookies-page">
      <section className="cookies-hero">
        <span className="hero-tag">COOKIEBELEID</span>
        <h1>Cookie<span>beleid</span></h1>
        <p>
          Op deze pagina lees je welke cookies DJ Digital gebruikt en waarom
          deze worden geplaatst.
        </p>
      </section>

      <section className="cookies-content">
        <article className="cookies-card">
          <h2>1. Wat zijn cookies?</h2>
          <p>Cookies zijn kleine tekstbestanden die door je browser worden opgeslagen om de website goed te laten functioneren en de gebruikerservaring te verbeteren.</p>
        </article>

        <article className="cookies-card">
          <h2>2. Functionele cookies</h2>
          <p>Functionele cookies zijn noodzakelijk voor een correcte werking van de website en vereisen geen toestemming.</p>
        </article>

        <article className="cookies-card">
          <h2>3. Analytische cookies</h2>
          <p>Wanneer analytische tools zoals Google Analytics worden gebruikt, worden deze privacyvriendelijk ingesteld en alleen toegepast volgens de geldende wetgeving.</p>
        </article>

        <article className="cookies-card">
          <h2>4. Marketingcookies</h2>
          <p>Marketing- of trackingcookies worden alleen geplaatst nadat je hiervoor toestemming hebt gegeven.</p>
        </article>

        <article className="cookies-card">
          <h2>5. Cookies beheren</h2>
          <p>Je kunt cookies verwijderen of blokkeren via de instellingen van je browser. Hierdoor kunnen sommige onderdelen van de website minder goed functioneren.</p>
        </article>

        <article className="cookies-card">
          <h2>6. Wijzigingen</h2>
          <p>DJ Digital behoudt zich het recht voor dit cookiebeleid aan te passen wanneer wetgeving of de website daarom vraagt.</p>
        </article>
      </section>

      <section className="cookies-footer">
        <p>Laatst bijgewerkt: juli 2026</p>
        <Link href="/contact" className="primary-btn">
          Neem contact op
        </Link>
      </section>
    </main>
  );
}
