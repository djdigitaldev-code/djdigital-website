"use client";

import Link from "next/link";
import { useState } from "react";

import "./tarieven.css";

function Navbar() {

const [open,setOpen]=useState(false);

return(

<nav className="navbar">

<div className="nav-container">

<Link
href="/"
className="nav-logo"
>

<img
src="/logo.png"
alt="DJ Digital"
className="logo"
/>

</Link>

<div className={`nav-links ${open ? "open" : ""}`}>

<Link href="/">
Home
</Link>

<Link href="/diensten">
Diensten
</Link>

<Link href="/tarieven">
Tarieven
</Link>

<Link href="/over-ons">
Over ons
</Link>

<Link href="/contact">
Contact
</Link>

<Link
href="/contact"
className="nav-cta"
>

Gratis gesprek

</Link>

</div>

<button
className="hamburger"
onClick={()=>setOpen(!open)}
>

☰

</button>

</div>

</nav>

);

}

export default function Tarieven() {

return(

<>

<Navbar/>

<div className="pricing-page">

<section className="pricing-title">

<h1>
Tarieven
</h1>

<p>

Transparante prijzen.
Geen verrassingen.

</p>

</section>

<section className="pricing-grid">

<div className="price-card cyan">

<div className="number">
1
</div>

<h2>
Website Ontwikkeling
</h2>

<div className="price">

€59

<span>
per uur
</span>

</div>

<ul>

<li>✓ Maatwerk</li>

<li>✓ Functionaliteiten</li>

<li>✓ Technische uitbreidingen</li>

<li>✓ Support</li>

<li>✓ Flexibel uurtarief</li>

</ul>

</div>

<div className="price-card purple">

<div className="number">
2
</div>

<h2>
Hosting & Onderhoud
</h2>

<div className="price">

€75

<span>
per maand
</span>

</div>

<ul>

<li>✓ Hosting</li>

<li>✓ SSL</li>

<li>✓ Backups</li>

<li>✓ Monitoring</li>

<li>✓ Updates</li>

</ul>

</div>

<div className="price-card cyan">

<div className="number">
3
</div>

<h2>
SEO Optimalisatie
</h2>

<div className="price">

€250

<span>
per maand
</span>

</div>

<ul>

<li>✓ Zoekwoorden</li>

<li>✓ Meta titels</li>

<li>✓ Google indexering</li>

<li>✓ Lokale SEO</li>

<li>✓ Rapportage</li>

</ul>

</div>

</section>

<section className="wide-grid">

<div className="wide-card">

<div className="wide-title">

<span className="number">
4
</span>

<div>

<h2>
Website pakketten
</h2>

<p>
Professionele websites
voor elke behoefte
</p>

</div>

</div>

<div className="package-row">

<div>

<h3>
Kleine bedrijfswebsite
</h3>

<p>
Tot 5 pagina's
</p>

<Link
href="/contact"
className="small-cta"
>

Kies dit pakket →

</Link>

</div>

<strong>
vanaf €899
</strong>

</div>

<div className="package-row">

<div>

<h3>
Uitgebreide website
</h3>

<p>
Meer pagina's +
functionaliteiten
</p>

<Link
href="/contact"
className="small-cta"
>

Kies dit pakket →

</Link>

</div>

<strong>
vanaf €1399
</strong>

</div>

<div className="package-row">

<div>

<h3>
Maatwerk website
</h3>

<p>
Volledig op maat
</p>

<Link
href="/contact"
className="small-cta"
>

Bespreek mogelijkheden →

</Link>

</div>

<strong>
Op aanvraag
</strong>

</div>

</div>

<div className="wide-card">

<div className="wide-title">

<span className="number">
5
</span>

<div>

<h2>
Extra diensten
</h2>

<p>
Uitbreidingen &
aanvullingen
</p>

</div>

</div>

<div className="package-row">

<div>

<h3>
Extra pagina
</h3>

<p>
Simpel
</p>

</div>

<strong>
vanaf €75
</strong>

</div>

<div className="package-row">

<div>

<h3>
Complexe pagina
</h3>

<p>
Formulieren /
boekingen
</p>

</div>

<strong>
€200
</strong>

</div>

<div className="package-row">

<div>

<h3>
Spoedwerk
</h3>

<p>
Versnelde oplevering
</p>

</div>

<strong>
Meerprijs
</strong>

</div>

</div>

</section>

<section className="bottom-grid">

<div className="bottom-card">

<div className="mini-number">

6

</div>

<h3>

Domein &
E-mail

</h3>

<p>

Domeinnaam,
zakelijke e-mail
en installatie.

</p>

</div>

<div className="bottom-card">

<div className="mini-number">

7

</div>

<h3>

Hosting &
Beveiliging

</h3>

<p>

Hosting,
backups,
updates
en SSL.

</p>

</div>

</section>

<section className="icon-row">

<div className="icon-item">

<span>
🌐
</span>

WEBDESIGN

</div>

<div className="icon-item">

<span>
⚡
</span>

DEVELOPMENT

</div>

<div className="icon-item">

<span>
📈
</span>

SEO

</div>

<div className="icon-item">

<span>
🖥
</span>

HOSTING

</div>

<div className="icon-item">

<span>
💎
</span>

SUPPORT

</div>

</section>

</div>

</>

);

}