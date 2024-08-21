import Image from "next/image";
import Link from "next/link";

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
      <body>
        <Link href="/authentication">Auth</Link>
      </body>
      
    </main>
  );
}

