"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const router = useRouter();
  const handleRedirect = () => {
      router.push("/fakultas/stei");
    };

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
      alert("Pesan Anda berhasil terkirim! Silakan tunggu respons kami.");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("Yah, ada masalah ketika mengirimkan pesan.");
    }
  };

  return (
    <main>
      <div className="landing-page-top">
        <div className="header-container">
          <div className="header">
            <Image className="logo" src="/logo.png" alt="ProspeXplore" width={190} height={53} />
            <div className="navbar">
              <Link href="#fakultas">Fakultas</Link>
              <Link href="#tes-minat">Tes Minat</Link>
              <Link href="#"><span className="sign-in-button">Sign In</span></Link>
            </div>
          </div>
        </div>
        
        <div className="tagline-container">
          <div className="tagline-text">
            <div>
              <p className="welcome-text ">Welcome to,</p>
            </div>
            <div>
              <p className="app-name">ProspeXplore</p>
            </div>
            <div>
              <p className="app-description">
                Welcome to Prospexplore, your gateway to meaningful career insights through our comprehensive tracer study platform. Discover the paths of our graduates and explore endless possibilities for your own professional journey!</p>
            </div>
            <div>
              <button className="explore-button">Explore Here</button>
            </div>
          </div>
          <div className="tagline-pic">
            <Image src="/mascot.png" alt="mascot" width={493} height={635}/>
          </div>
        </div>
      </div>

      <div id="fakultas" className="fakultas">
      <div style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Full viewport height
        textAlign: "center", // Center text in the div
      }} >
        <h1>Welcome to the Home Page</h1>
        <button
          onClick={handleRedirect}
          style={{
            backgroundColor: "black", // Black background
            color: "white", // White text
            padding: "10px 20px", // Padding for the button
            border: "none", // Remove border
            cursor: "pointer", // Pointer cursor on hover
            fontSize: "16px", // Font size
            borderRadius: "5px", // Rounded corners
          }}>
          Tombol placeholder buat ke page fakultas.
        </button>
      </div>
      </div>
      
      <div id="tes-minat" className="tes-minat">
        <div className="tes-minat-judul">
          <p className="text-white mr-3">Test your</p>
          <p className="text-violet-500">Minat</p>
        </div>
        <div className="tes-minat-desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus, vel tincidunt nisi malesuada. Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus, vel tincidunt nisi malesuada. Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. </p>
        </div>
        <div className="tes-minat-fakta">
          <div className="tes-minat-fakta-desc">
            <div className="tes-minat-fakta-desc-judul">
              <p>What Model do We Use?</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus, vel tincidunt nisi malesuada. Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus, vel tincidunt nisi malesuada. Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. </p>
            <div className="tes-minat-fakta-desc-desc"></div>
          </div>
          <div className="tes-minat-fakta-data">
            <Image className="tes-minat-fakta-data-pic" src="/target-full.png" alt="accuracy rate" width={590} height={298}/>
          </div>
        </div>
        <div className="tes-minat-button-container"><button className="tes-minat-button">Test Here!</button></div>
      </div>
      <form className="kontak" onSubmit={handleSubmit}>
        <div className="kontak-pic">
          <Image src="/contact-man.png" alt="contact" width={730} height={768}/>
        </div>
        <div className="kontak-komplain">
          <div className="kontak-komplain-judul">
            <p>Let's Stay In Touch!</p>
          </div>
          <div className="komplain-container">
            <div className="email">
              <Image className="komplain-logo-email" src="/email1.png" alt="email-logo" width={20} height={16} />
              <input
                className="email-input"
                type="text"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="no-telp">
              <Image className="komplain-logo" src="/phone1.png" alt="phone-logo" width={20} height={20} />
              <input
                className="no-telp-input"
                type="text"
                placeholder="+62XXX-XXXX-XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="komplain-text">
              <textarea
                placeholder="Type your message here..."
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
      <div className="footer">
        <div className="footer-logo">
          <Image className="mr-3" src="/logo-half1.png" alt="half-1" width={45} height={40}/>
          <Image src="/logo-half2.png" alt="half-2" width={185} height={37}/>
        </div>
        <div className="footer-media">
          <div className="footer-media-icon">
            <Image src="/social.png" alt="socmed-logo" width={121} height={26} />
          </div>
        </div>
      </div>
    </main>
  );
}
