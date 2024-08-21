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
        <a href="/authentication">Auth</a>
      </body>
      <div className="tagline-container">
        <div className="tagline-head">
          <h1>PROSPEXPLORE</h1>
        </div>
        <div className="tagline">
          <p>Discover Your Future, Trace Your Success</p>
        </div>
      </div>
      <div className="kesan-container">
        <div className="foto-alumni">
          <p>[Foto]</p>
        </div>
        <div className="kesan-pesan">
          <div className="kesan-alumni">
            <p>[Kesan Alumni yang Sudah Pakai Web Ini]</p>
          </div>
          <div className="nama-alumni">
            <p>[Nama Alumni]</p>
          </div>
          <div className="posisi-alumni">
            <p>[Alumni Kampus dan Posisi Saat Ini]</p>
          </div>
        </div>
      </div>
    </main>
  );
}

