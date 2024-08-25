import Dashboard from "@/components/Dashboard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <header className='header'>
        <a className='logo'>PROSPEXPLORE</a>
        <nav className='navbar'>
          <a href="#profile">Profile</a>
          <a href="#Referral">Log In</a>
        </nav>
      </header>
      
      <Dashboard/>

      <body>
        <Link href="/authentication">Auth</Link>
      </body>
      
    </main>
  );
}

