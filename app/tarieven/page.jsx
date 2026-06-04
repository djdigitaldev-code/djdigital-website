const pakketten = [
{
nummer:"01",
titel:"Website Ontwikkeling",
prijs:"€55",
periode:"/ uur",
accent:"cyan",
items:[
"Maatwerk ontwikkeling",
"Nieuwe pagina's",
"Extra functionaliteiten",
"Technische uitbreidingen",
"Support"
]
},

{
nummer:"02",
titel:"Hosting & Onderhoud",
prijs:"€60",
periode:"/ maand",
accent:"purple",
items:[
"Hosting inbegrepen",
"SSL beveiliging",
"Back-ups",
"Updates",
"Monitoring"
]
},

{
nummer:"03",
titel:"SEO Optimalisatie",
prijs:"€150",
periode:"/ maand",
accent:"cyan",
items:[
"Zoekwoorden",
"SEO verbeteringen",
"Google indexering",
"Snelheidsoptimalisatie",
"Rapportage"
]
},

{
nummer:"04",
titel:"Website Pakketten",
prijs:"Vanaf €750",
periode:"",
accent:"purple",
items:[
"Volledig ontwerp",
"Responsive",
"SEO basis",
"Hosting mogelijk",
"Op maat"
]
}
];

export default function Tarieven() {

return (

<div>

<section className="hero">

<h1>
Tarieven
</h1>

<p>
Transparante prijzen.
Premium websites.
Geen verrassingen.
</p>

</section>

<section
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(330px,1fr))",
gap:"40px",
marginTop:"80px"
}}
>

{pakketten.map((pakket)=>(

<div
key={pakket.titel}
className={`prijskaart ${pakket.accent}`}
>

<div className="prijsnummer">
{pakket.nummer}
</div>

<h2>
{pakket.titel}
</h2>

<div className="prijs">
{pakket.prijs}

<span>
{pakket.periode}
</span>

</div>

<ul>

{pakket.items.map((item)=>(

<li key={item}>
✓ {item}
</li>

))}

</ul>

<a
href="/contact"
className="button"
>

Offerte aanvragen

</a>

</div>

))}

</section>



</div>

);

}