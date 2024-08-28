"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const slideData = [
  { title: "Sekolah Teknik Elektro Informatika (STEI)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus," },
  { title: "Fakultas Teknik Industri (FTI)", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit," },
  { title: "Fakultas Teknik Mesin dan Dirgantara (FTMD)", description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ," },
  { title: "Sekolah Ilmu Teknologi Hayati (SITH)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus," },
  { title: "Fakultas Ilmu dan Teknologi Kebumian (FITB)", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit," },
  { title: "Fakultas Matematika dan Ilmu Pengetahuan ALAM (FMIPA)", description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ," },
  { title: "Fakultas Seni Rupa dan Desain (FSRD)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus," },
  { title: "Fakultas Teknik Pertambangan dan Perminyakan (FTTM)", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit," },
  { title: "Fakultas Teknik Sipil dan Lingkungan (FTSL)", description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ," },
  { title: "Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan (SAPPK)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus," },
  { title: "Sekolah Bisnis dan Manajemen (SBM)", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit," },
  { title: "Sekolah Farmasi (SF)", description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ," },
];

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

  function slide(title: string, description: string) {
    return (
      <div className="bg-[#1A3594] shadow-lg rounded-lg p-4 text-white flex flex-col items-center 
                      w-full md:w-[250px] sm:w-[200px] h-[400px] md:h-[350px] sm:h-[300px]">
        <div className="w-full h-[200px] md:h-[175px] sm:h-[150px] mb-4 relative">
          <Image 
            src="/comp.png" 
            alt="Slide Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <p className="text-left text-lg font-semibold mb-2">{title}</p>
          <p className="text-sm overflow-hidden text-ellipsis">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="landing-page-top">
        <div className="header-container">
          <div className="header">
            <Image className="logo" src="/logo.png" alt="ProspeXplore" width={190} height={53} />
            <div className="navbar">
              <Link href="#fakultas">Fakultas</Link>
              <Link href="#tes-minat">Tes Minat</Link>
              <Link href="/authentication"><span className="sign-in-button">Sign In</span></Link>
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

      <div className="fakultas">
      <h1 className='font-semibold text-bold text-7xl pb-10 flex items-center justify-center text-[#1A3594]' style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.25)" }}>Faculties</h1>
        <div className="flex flex-wrap max-w-screen-lg mx-auto">
          <div className="w-full px-4 md:w-1/2 flex flex-col items-center">
            <p className="text-xs text-[#1A3594] mb-10 xl:text-md text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nullam euismod velit vel nunc faucibus, vel tincidunt <br />
              nisi malesuada. Sed eget lacus vel orci volutpat venenatis. <br />
              Phasellus eget eros non nisi lacinia bibendum. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nullam euismod velit vel nunc faucibus, vel tincidunt <br />
              nisi malesuada. Sed eget lacus vel orci volutpat venenatis. <br />
              Phasellus eget eros non nisi lacinia bibendum.
            </p>
          </div>
          <div className="w-full px-4 mb-4 md:w-1/2 flex items-center justify-center">
            <img src="faculty.png" alt="" className="max-w-full" />
          </div>
        </div>
        <div className="relative pb-10 flex items-center justify-center">
        <Swiper
          className="relative mt-10 mx-20 w-full max-w-screen-lg overflow-hidden"
          loop={true}
          spaceBetween={5}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
        >
          {slideData.map((data, index) => (
            <SwiperSlide key={index} className='text-black'>
              {slide(data.title, data.description)}
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10">
            <FaArrowLeft className="text-white" />
          </div>
          <div className="swiper-button-next absolute right-5 top-1/2 transform -translate-y-1/2 z-10">
            <FaArrowRight className="text-white" />
          </div>
        </Swiper>
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
