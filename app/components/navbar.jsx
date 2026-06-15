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
onClick={()=>setOpen(!open)}
>

☰

</button>

</div>

</nav>

);

}