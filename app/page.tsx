"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        phone,
        message,
      }),
    });

    if (response.ok) {
      alert("Your message has been sent!");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("There was an error sending your message.");
    }
  };

  return (
    <main>
      <header className="header">
        <Image className="logo" src="/Logo.png" alt="ProspeXplore" width={100} height={50} />
        <nav className="navbar">
          <Link href="#profile">Profile</Link>
          <Link href="#Referral">Log In</Link>
        </nav>
      </header>
      <div className="tagline-container">
        <div className="tagline-head">
          <Image className="logo-tagline" src="/Logo.png" alt="ProspeXplore" width={100} height={50} />
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
              <button className="menu-button">
                <Image src="/working.png" alt="working-logo" width={50} height={50} />
              </button>
            </div>
            <div className="pekerjaan-text">
              <p>Pekerjaan</p>
            </div>
          </div>
          <div className="perusahaan-button">
            <div className="perusahaan-pic">
              <button className="menu-button">
                <Image src="/office.png" alt="office-logo" width={50} height={50} />
              </button>
            </div>
            <div className="perusahaan-text">
              <p>Perusahaan</p>
            </div>
          </div>
          <div className="prodi-button">
            <div className="prodi-pic">
              <button className="menu-button">
                <Image src="/school.png" alt="school-logo" width={50} height={50} />
              </button>
            </div>
            <div className="prodi-text">
              <p>Prodi</p>
            </div>
          </div>
          <div className="kontak-button">
            <div className="kontak-pic">
              <button className="menu-button">
                <Image src="/robot-assistant.png" alt="contact-logo" width={50} height={50} />
              </button>
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
          <Link href="#">Lihat Semua</Link>
        </div>
      </div>
      <div className="perusahaan-container">
        <div className="perusahaan-title">
          <p>PERUSAHAAN</p>
        </div>
        <div className="perusahaan-link">
          <Link href="#">Lihat Semua</Link>
        </div>
      </div>
      <div className="prodi-container">
        <div className="prodi-title">
          <p>PRODI</p>
        </div>
        <div className="prodi-link">
          <Link href="#">Lihat Semua</Link>
        </div>
      </div>
      <form className="kontak" onSubmit={handleSubmit}>
        <div className="kontak-informasi">
          <p className="hubungi-kami">Hubungi Kami</p>
          <p className="jangan-ragu">
            Jangan ragu untuk menghubungi kami untuk informasi dan berita terbaru!
          </p>
          <p className="nomor-kontak">email & telp</p>
        </div>
        <div className="kontak-komplain">
          <div className="komplain-container">
            <div className="email">
              <Image className="komplain-logo" src="/email.png" alt="email-logo" width={20} height={20} />
              <input
                className="email-input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="no-telp">
              <Image className="komplain-logo" src="/phone.png" alt="phone-logo" width={20} height={20} />
              <input
                className="no-telp-input"
                type="text"
                placeholder="No.Telepon"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="komplain-text">
              <textarea
                placeholder="Bagaimana kami dapat membantu?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="komplain-button">
              <button type="submit">Send</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
