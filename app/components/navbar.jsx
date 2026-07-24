"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar(){

const [open,setOpen]=useState(false);

return(

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

<Link
  href="/"
  onClick={() => {
    setOpen(false);
  }}
>
  Home
</Link>

<Link
  href="/diensten"
  onClick={() => {
    setOpen(false);
  }}
>
  Diensten
</Link>

<Link
  href="/tarieven"
  onClick={() => {
    setOpen(false);
  }}
>
  Tarieven
</Link>

<Link
  href="/over-ons"
  onClick={() => {
    setOpen(false);
  }}
>
  Over ons
</Link>

<Link
  href="/contact"
  onClick={() => {
    setOpen(false);
  }}
>
  Contact
</Link>

<Link
  href="/contact"
  className="nav-cta"
  onClick={() => {
    setOpen(false);
  }}
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