"use client";

import Link from "next/link";
import "./diensten.css";

export default function Diensten() {

return(

<div className="diensten-page">

<section className="diensten-hero">

<span>

DIENSTEN

</span>

<h1>

Digitale oplossingen
voor ondernemers.

</h1>

<p>

Van websites tot SEO —
alles om online
professioneel te groeien.

</p>

</section>

<section className="diensten-grid">

<div className="dienst-card">

<div className="dienst-icon">

🌐

</div>

<h2>

Website Ontwikkeling

</h2>

<p>

Volledig maatwerk.
Snelle websites gebouwd
voor conversie.

</p>

<ul>

<li>✓ Next.js</li>

<li>✓ Responsive</li>

<li>✓ Premium design</li>

<li>✓ Snel laden</li>

</ul>

</div>

<div className="dienst-card">

<div className="dienst-icon">

🖥

</div>

<h2>

Hosting & Onderhoud

</h2>

<p>

Veilige hosting,
updates en monitoring.

</p>

<ul>

<li>✓ SSL</li>

<li>✓ Backups</li>

<li>✓ Monitoring</li>

<li>✓ Onderhoud</li>

</ul>

</div>

<div className="dienst-card">

<div className="dienst-icon">

📈

</div>

<h2>

SEO Optimalisatie

</h2>

<p>

Meer bezoekers
en beter vindbaar.

</p>

<ul>

<li>✓ Zoekwoorden</li>

<li>✓ Google</li>

<li>✓ Lokale SEO</li>

<li>✓ Rapportages</li>

</ul>

</div>

</section>

<section className="process">

<h2>

Hoe we werken

</h2>

<div className="steps">

<div className="step">

01
<span>
Kennismaking
</span>

</div>

<div className="step">

02
<span>
Ontwikkeling
</span>

</div>

<div className="step">

03
<span>
Livegang
</span>

</div>

</div>

</section>

<section className="diensten-cta">

<h2>

Klaar om te starten?

</h2>

<p>

Laten we samen iets
professioneels bouwen.

</p>

<Link
href="/tarieven"
className="button"
>

Bekijk tarieven

</Link>

</section>

</div>

);

}