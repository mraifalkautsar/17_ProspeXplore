import LoginForm from "@/components/LoginForm";
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
    
      <div>
      <Link href="/authentication">Auth</Link>
      </div>
      <div>
      <Link href="/auth_accept">welcome</Link>
      </div>
    </main>
  );
}

