"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

import "./over.css";

export default function Over(){

return(

<>

<Navbar/>

<div className="over-page">

<section className="over-hero">

<span>

OVER DJ DIGITAL

</span>

<h1>

Websites die
ondernemers
laten groeien.

</h1>

<p>

Geen standaard templates.
Wel snelle, premium websites
die vertrouwen uitstralen
en klanten opleveren.

</p>

</section>

<section className="story">

<div className="story-card">

<h2>

Wie zijn wij?

</h2>

<p>

DJ Digital bouwt moderne websites
voor ondernemers die online serieus
willen groeien.

Design, snelheid en conversie
staan centraal.

</p>

</div>

</section>

<section className="values">

<div className="value-card">

⚡

<h3>

Snelheid

</h3>

<p>

Supersnelle websites
zonder onnodige rommel.

</p>

</div>

<div className="value-card">

🎨

<h3>

Premium design

</h3>

<p>

Moderne uitstraling
die vertrouwen geeft.

</p>

</div>

<div className="value-card">

📈

<h3>

Groei

</h3>

<p>

Focus op resultaat
en nieuwe klanten.

</p>

</div>

</section>

<section className="stats">

<div className="stat">

10+

<span>

Projecten

</span>

</div>

<div className="stat">

100%

<span>

Maatwerk

</span>

</div>

<div className="stat">

24/7

<span>

Support

</span>

</div>

</section>

<section className="over-cta">

<h2>

Klaar om samen
iets moois te bouwen?

</h2>

<Link
href="/contact"
className="button"
>

Gratis gesprek

</Link>

</section>

</div>

</>

);

}