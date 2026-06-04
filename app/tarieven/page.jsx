import "./tarieven.css";

export default function Tarieven() {
  return (

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

{/* TOP */}

<section className="pricing-grid">

<div className="price-card cyan">

<div className="number">
1
</div>

<h2>
Website
Ontwikkeling
</h2>

<div className="price">

€55

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
Hosting &
Onderhoud
</h2>

<div className="price">

€60

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
SEO
Optimalisatie
</h2>

<div className="price">

€150

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

{/* MIDDEN */}

<section className="wide-grid">

<div className="wide-card">

<h2>
4 Website pakketten
</h2>

<div className="line">

<span>Kleine website</span>

<strong>
vanaf €750
</strong>

</div>

<div className="line">

<span>Uitgebreide website</span>

<strong>
vanaf €1250
</strong>

</div>

<div className="line">

<span>Maatwerk website</span>

<strong>
Op aanvraag
</strong>

</div>

</div>

<div className="wide-card">

<h2>
5 Extra diensten
</h2>

<div className="line">

<span>Extra pagina</span>

<strong>
vanaf €75
</strong>

</div>

<div className="line">

<span>Complexe pagina</span>

<strong>
€200
</strong>

</div>

<div className="line">

<span>Spoedwerk</span>

<strong>
meerprijs
</strong>

</div>

</div>

</section>

{/* ONDER */}

<section className="bottom-grid">

<div className="bottom-card">

🌐 Domeinregistratie

</div>

<div className="bottom-card">

🖥 Hosting

</div>

</section>

<section className="icon-row">

<div>WEBDESIGN</div>

<div>DEVELOPMENT</div>

<div>SEO</div>

<div>HOSTING</div>

<div>SUPPORT</div>

</section>

</div>

);
}