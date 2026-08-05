"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <nav className="navbar">

      <div className="nav-container">

        <Link
          href="/"
          className="nav-logo"
          onClick={handleNavClick}
        >
          <img
            src="/logo.png"
            alt="DJ Digital"
            className="logo"
          />
        </Link>

        <div className={`nav-links ${open ? "open" : ""}`}>

          <Link
            href="/"
            onClick={handleNavClick}
          >
            Home
          </Link>

          <Link
            href="/diensten"
            onClick={handleNavClick}
          >
            Diensten
          </Link>

          <Link
            href="/tarieven"
            onClick={handleNavClick}
          >
            Tarieven
          </Link>

          <Link
            href="/over-ons"
            onClick={handleNavClick}
          >
            Over ons
          </Link>

          <Link
            href="/contact"
            onClick={handleNavClick}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="nav-cta"
            onClick={handleNavClick}
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