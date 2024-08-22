import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className='header'>
        <img className='logo' src="Logo.png" alt="ProspeXplore" />
        <nav className='navbar'>
          <a href="#profile">Profile</a>
          <a href="#Referral">Log In</a>
        </nav>
      </header>
      <div className="tagline-container">
        <div className="tagline-head">
          <img className="logo-tagline" src="Logo.png" alt="ProspeXplore" />
        </div>
        <div className="tagline">
          <p>Discover Your Future, Trace Your Success</p>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-title">
          <p>EKSPLORASI MENU</p>
        </div>
        <div className="menu-content">
          <div className="pekerjaan-button">
            <div className="pekerjaan-pic">
              <button className="menu-button"><img src="working.png" alt="working-logo" /></button>
            </div>
            <div className="pekerjaan-text">
              <p>Pekerjaan</p>
            </div>
          </div>
          <div className="perusahaan-button">
            <div className="perusahaan-pic">
              <button className="menu-button"><img src="office.png" alt="office-logo" /></button>
            </div>
            <div className="perusahaan-text">
              <p>Perusahaan</p>
            </div>
          </div>
          <div className="prodi-button">
            <div className="prodi-pic">
              <button className="menu-button"><img src="school.png" alt="school-logo" /></button>
            </div>
            <div className="prodi-text">
              <p>Prodi</p>
            </div>
          </div>
          <div className="kontak-button">
            <div className="kontak-pic">
              <button className="menu-button"><img src="robot-assistant.png" alt="contact-logo" /></button>
            </div>
            <div className="kontak-text">
              <p>Kontak</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pekerjaan-container">
        <div className="pekerjaan-title">
          <p>PEKERJAAN</p>
        </div>
        <div className="pekerjaan-link">
          <a href="">Lihat Semua</a>
        </div>
      </div>
      <div className="perusahaan-container">
        <div className="perusahaan-title">
          <p>PERUSAHAAN</p>
        </div>
        <div className="perusahaan-link">
          <a href="">Lihat Semua</a>
        </div>
      </div>
      <div className="prodi-container">
        <div className="prodi-title">
          <p>PRODI</p>
        </div>
        <div className="prodi-link">
          <a href="">Lihat Semua</a>
        </div>
      </div>
      <div className="kontak">
        <div className="kontak-informasi">
          <p className="hubungi-kami">Hubungi Kami</p>
          <p className="jangan-ragu">Jangan ragu untuk menghubungi kami untuk informasi dan berita terbaru!</p>
          <p className="nomor-kontak">email & telp</p>
        </div> 
        <div className="kontak-komplain">
          <div className="komplain-container">
            <div className="email">
              <img className="komplain-logo"  src="email.png" alt="email-logo" />
              <input className="email-input" type="text" placeholder="Email"/>
            </div>
            <div className="no-telp">
              <img className="komplain-logo" src="phone.png" alt="phone-logo" />
              <input className="no-telp-input" type="text" placeholder="No.Telepon"/>
            </div>
            <div className="komplain-text">
              <textarea name="" id="" placeholder="Bagaimana kami dapat membantu?"></textarea>
            </div>
            <div className="komplain-button">
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

