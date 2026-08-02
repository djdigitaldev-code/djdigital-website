"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="hero">

        <div className="hero-background-glow" />

        <div className="hero-inner">

          {/* =========================
              LOGO LINKS
          ========================= */}
          <div className="hero-visual">

            <div className="hero-logo-glow" />

            <Image
              src="/logo.png"
              alt="DJ Digital Web Development"
              width={637}
              height={392}
              className="hero-logo"
              priority
            />

          </div>


          {/* =========================
              CONTENT RECHTS
          ========================= */}
          <div className="hero-content">

            <div className="hero-tag">
              WEBDESIGN • HOSTING • SEO
            </div>

            <h1>
              Websites die
              <span>
                ondernemers
                <br />
                laten groeien.
              </span>
            </h1>

            <p className="hero-description">
              Professionele websites die niet alleen mooi zijn, maar ook
              razendsnel laden, goed gevonden worden in Google en bezoekers
              omzetten in klanten.
            </p>


            {/* BUTTONS */}
            <div className="hero-actions">

              <Link href="/contact" className="button primary-button">
                <span>Gratis kennismaking</span>
                <span className="button-arrow">›</span>
              </Link>

              <Link href="/tarieven" className="button secondary-button">
                <span>Bekijk tarieven</span>
                <span className="button-arrow">›</span>
              </Link>

            </div>


            {/* =========================
                USP'S
            ========================= */}
            <div className="hero-usps">

              <div className="hero-usp">

                <div className="usp-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M13 2L4.5 13H11L10 22L19.5 10H13L13 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="usp-text">
                  <strong>Razendsnel</strong>
                  <span>Optimale prestaties</span>
                </div>

              </div>


              <div className="hero-usp">

                <div className="usp-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 18L9 13L13 16L20 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M15 8H20V13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="usp-text">
                  <strong>Goed vindbaar</strong>
                  <span>Hogere posities</span>
                </div>

              </div>


              <div className="hero-usp">

                <div className="usp-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect
                      x="6"
                      y="2"
                      width="12"
                      height="20"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <path
                      d="M10 18H14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="usp-text">
                  <strong>Mobielvriendelijk</strong>
                  <span>Perfect op elk scherm</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          DIENSTEN
      ========================= */}
      <section className="home-services">

        {/* WEBSITE */}
        <Link href="/diensten" className="home-service-card">

          <div className="service-icon">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M3 12H21M12 3C15 6 16 9 16 12C16 15 15 18 12 21M12 3C9 6 8 9 8 12C8 15 9 18 12 21"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          <div className="service-content">
            <h2>Website Ontwikkeling</h2>

            <p>
              Moderne websites volledig
              <br />
              op maat gebouwd.
            </p>
          </div>

          <span className="service-arrow">›</span>

        </Link>


        {/* HOSTING */}
        <Link href="/diensten" className="home-service-card">

          <div className="service-icon">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="4"
                y="4"
                width="16"
                height="6"
                rx="1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <rect
                x="4"
                y="14"
                width="16"
                height="6"
                rx="1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <circle cx="8" cy="7" r="1" fill="currentColor" />
              <circle cx="8" cy="17" r="1" fill="currentColor" />
            </svg>
          </div>

          <div className="service-content">
            <h2>Hosting &amp; Onderhoud</h2>

            <p>
              Snel, veilig en
              <br />
              altijd online.
            </p>
          </div>

          <span className="service-arrow">›</span>

        </Link>


        {/* SEO */}
        <Link href="/diensten" className="home-service-card">

          <div className="service-icon">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4 19V15M9 19V11M14 19V13M19 19V7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M4 10L9 6L13 9L20 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M16 3H20V7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="service-content">
            <h2>SEO Optimalisatie</h2>

            <p>
              Meer bezoekers en
              <br />
              hogere posities.
            </p>
          </div>

          <span className="service-arrow">›</span>

        </Link>

      </section>


      {/* =========================
          STATS
      ========================= */}
      <section className="home-stats">

        {/* MAATWERK */}
        <div className="home-stat">

          <div className="stat-icon">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M3 8L7 3H17L21 8L12 21L3 8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <path
                d="M3 8H21M7 3L9 8L12 21M17 3L15 8L12 21"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="stat-text">
            <strong>100%</strong>
            <span>Maatwerk</span>
          </div>

        </div>


        {/* SNELHEID */}
        <div className="home-stat">

          <div className="stat-icon">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 18A8 8 0 1 1 19 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M12 12L17 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <circle
                cx="12"
                cy="12"
                r="1.5"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="stat-text">
            <strong>&lt;2s</strong>
            <span>Snelle websites</span>
          </div>

        </div>


        {/* SEO */}
        <div className="home-stat home-stat-seo">

          <div className="stat-text">
            <strong>SEO</strong>
            <span>Geoptimaliseerd</span>
          </div>

        </div>

      </section>

    </main>
  );
}