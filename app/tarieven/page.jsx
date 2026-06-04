"use client";

import Link from "next/link";
import { useState } from "react";

import "./tarieven.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">

        <Link href="/" className="nav-logo">
          <img
            src="/logo.png"
            alt="DJ Digital"
            className="logo"
          />
        </Link>

        <div className={`nav-links ${open ? "open" : ""}`}>

          <Link href="/">Home</Link>
          <Link href="/diensten">Diensten</Link>
          <Link href="/tarieven">Tarieven</Link>
          <Link href="/over-ons">Over ons</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/contact"
            className="nav-cta"
          >
            Gratis gesprek
          </Link>

        </div>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

    </nav>
  );
}

export default function Tarieven() {

  const [selectedPackage, setSelectedPackage] =
    useState(null);

  const openContact = (pakket) => {
    setSelectedPackage(pakket);
  };

  const sendWhatsApp = () => {

    const tekst = `Hoi DJ Digital,

Ik heb interesse in het pakket "${selectedPackage}".

Kunnen we een afspraak maken om de mogelijkheden te bespreken?

Alvast bedankt.`;

    window.open(
      `https://wa.me/31612345678?text=${encodeURIComponent(tekst)}`,
      "_blank"
    );

    setSelectedPackage(null);
  };

  const sendMail = () => {

    const tekst = `Hoi DJ Digital,

Ik heb interesse in het pakket "${selectedPackage}".

Kunnen we een afspraak maken?

Alvast bedankt.`;

    window.location.href =
      `mailto:info@djdigital.nl?subject=Pakket aanvraag&body=${encodeURIComponent(tekst)}`;

    setSelectedPackage(null);
  };

  return (

<>
<Navbar />

<div className="pricing-page">

<section className="pricing-title">

<h1>Tarieven</h1>

<p>
Transparante prijzen.
Geen verrassingen.
</p>

</section>

<section className="wide-grid">

<div className="wide-card">

<h2>Website pakketten</h2>

<div className="package-row">

<div>

<h3>Kleine bedrijfswebsite</h3>

<p>Tot 5 pagina's</p>

<button
className="small-cta"
onClick={() =>
openContact(
"Kleine bedrijfswebsite"
)
}
>

Kies dit pakket →

</button>

</div>

<strong>
vanaf €899
</strong>

</div>

<div className="package-row">

<div>

<h3>Uitgebreide website</h3>

<p>
Meer pagina's +
functionaliteiten
</p>

<button
className="small-cta"
onClick={() =>
openContact(
"Uitgebreide website"
)
}
>

Kies dit pakket →

</button>

</div>

<strong>
vanaf €1399
</strong>

</div>

<div className="package-row">

<div>

<h3>Maatwerk website</h3>

<p>Volledig op maat</p>

<button
className="small-cta"
onClick={() =>
openContact(
"Maatwerk website"
)
}
>

Bespreek mogelijkheden →

</button>

</div>

<strong>
Op aanvraag
</strong>

</div>

</div>

</section>

<section className="icon-row">

<div className="icon-item">
🌐 WEBDESIGN
</div>

<div className="icon-item">
⚡ DEVELOPMENT
</div>

<div className="icon-item">
📈 SEO
</div>

<div className="icon-item">
🖥 HOSTING
</div>

<div className="icon-item">
💎 SUPPORT
</div>

</section>

{selectedPackage && (

<div className="contact-modal">

<div className="contact-box">

<button
className="close-modal"
onClick={() =>
setSelectedPackage(null)
}
>

✕

</button>

<span>

CONTACT OPNEMEN

</span>

<h2>

{selectedPackage}

</h2>

<p>

Kies hoe je contact
wil opnemen.

</p>

<button
className="modal-primary"
onClick={sendWhatsApp}
>

WhatsApp

</button>

<button
className="modal-secondary"
onClick={sendMail}
>

E-mail

</button>

</div>

</div>

)}

</div>

</>

);

}