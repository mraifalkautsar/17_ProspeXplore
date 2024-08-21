import Image from "next/image";

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
    </main>
  );
}
