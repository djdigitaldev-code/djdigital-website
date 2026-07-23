import "./projecten.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Projecten | DJ Digital",
  description:
    "Bekijk een selectie van websites die DJ Digital heeft ontworpen en ontwikkeld voor ondernemers.",
};

const projecten = [
  {
    naam: "Petra Pedicure",
    image: "/images/projecten/petra-pedicure.webp",
    categorie: "Pedicure aan Huis",
    omschrijving:
      "Een elegante en rustige website ontwikkeld voor een ambulante pedicurepraktijk. De focus lag op vertrouwen, een warme uitstraling, duidelijke navigatie en een snelle gebruikservaring op mobiel én desktop.",
    diensten: [
      "Webdesign",
      "Next.js",
      "Responsive",
      "SEO",
      "Hosting",
    ],
    status: "Live",
    link: "https://www.petrapedicureaanhuis.nl/",
  },
  {
    naam: "DAAN Administraties",
    image: "/images/projecten/daan-administraties.webp",
    categorie: "Administratiekantoor",
    omschrijving:
      "Een professionele website met een zakelijke uitstraling en sterke focus op vindbaarheid.",
    diensten: ["Webdesign", "SEO"],
    status: "Live",
    link: "https://daan-administraties.nl/",
  },
  {
    naam: "Jouw bedrijf?",
    categorie: "Volgende project",
    omschrijving:
      "Misschien staat jouw bedrijf hier binnenkort ook tussen met een professionele website.",
    diensten: ["Webdesign", "Branding"],
    status: "Beschikbaar",
    link: "/contact",
  },
];

export default function ProjectenPage() {
  return (
    <main className="projecten-page">
      <section className="projecten-hero">
        <div className="hero-tag">PROJECTEN</div>

        <h1>
          Websites die <span>resultaat</span> opleveren.
        </h1>

        <p>
          Bekijk een selectie van websites die wij hebben ontwikkeld voor
          ondernemers. Iedere website is uniek, snel en ontworpen om bezoekers
          om te zetten in klanten.
        </p>

        <div className="hero-buttons">
          <Link href="/contact" className="primary-btn">
            Start jouw project
          </Link>

          <Link href="/diensten" className="secondary-btn">
            Bekijk diensten
          </Link>
        </div>
      </section>

      <section className="projecten-grid">
        {projecten.map((project) => (
          <article className="project-card" key={project.naam}>
<div className="project-image">
  {project.image ? (
    <Image
      src={project.image}
      alt={project.naam}
      width={1200}
      height={750}
      className="project-preview"
    />
  ) : (
    <div className="coming-soon">
      <span>Coming Soon</span>
    </div>
  )}
</div>

            <div className="project-content">
              <span className="project-status">{project.status}</span>

              <h2>{project.naam}</h2>

              <h3>{project.categorie}</h3>

              <p>{project.omschrijving}</p>

              <div className="badges">
                {project.diensten.map((dienst) => (
                  <span key={dienst}>{dienst}</span>
                ))}
              </div>

{project.link.startsWith("http") ? (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    Website bekijken →
  </a>
) : (
  <Link href={project.link} className="project-link">
    Start jouw project →
  </Link>
)}
            </div>
          </article>
        ))}
      </section>

      <section className="projecten-cta">
        <h2>Klaar voor jouw nieuwe website?</h2>

        <p>
          Wij bouwen moderne websites die snel laden, goed gevonden worden in
          Google en bezoekers overtuigen.
        </p>

        <div className="hero-buttons">
          <Link href="/contact" className="primary-btn">
            Gratis kennismaken
          </Link>
        </div>
      </section>
    </main>
  );
}