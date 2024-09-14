"use client";

import Link from 'next/link';
import Image from "next/image";
import globalStyles from "@/styles/Home.module.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };
  const router = useRouter();
  const handleNavClick = (id: string) => {
      router.push(`/#${id}`);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div id="page-fakultas" className="page-fakultas">
      <main>
          <div className="header-container">
            <div className="header">
              <Image className="logo" src="/logo.png" alt="ProspeXplore" width={190} height={53} />
              <div className="navbar">
                <Link href="/">Home Page</Link>
                <span className="navbar-link" onClick={() => handleNavClick('fakultas')}>Faculties</span>
                <span className="navbar-link" onClick={() => handleNavClick('tes-minat')}>Tes Minat</span>
                <div className="dropdown">
                <span className="dropdown-button" onClick={toggleDropdown}>
                  Hey, <span>&nbsp;{session?.user?.email}</span> ↓
                </span>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <Link href="/authentication">Sign In</Link>
                    <Link href="/settings">Settings</Link>
                    <button onClick={() => signOut({ callbackUrl: "/" })}>Log Out</button>
                  </div>
                )};
                  </div>
              </div>
            </div>
          </div>
          <div className="fakultas-nama">
            Sekolah Farmasi (SF)
          </div>

          <div className="fakultas-article">
              <div className="fakultas-long-desc">
              Sekolah Farmasi (SF) ITB didirikan sebagai Departemen Farmasi pada 6 Oktober 1947 di bawah Faculteit voor Wiskunde en Natuurwetenschapen, bagian dari Universitas Indonesia. Pada 1 Februari 1949, fakultas tersebut berganti nama menjadi Fakultas Ilmu Pengetahuan dan Ilmu Alam (FIPIA). Pada tahun 1959, fakultas ini menjadi bagian dari ITB, dan Departemen Farmasi bergabung dengan Departemen Kimia dan Biologi hingga tahun 1961. Pada tahun 1973, Departemen Farmasi bergabung dengan Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA). Seiring berjalannya waktu, kurikulum dan struktur organisasi terus berkembang. Pada tahun 2005, Departemen Farmasi resmi berubah status menjadi Sekolah Farmasi (SF) yang menyediakan program Sains dan Teknologi Farmasi (FA) serta Farmasi Klinik dan Komunitas (FKK). Mahasiswa SF harus memiliki dasar yang kuat dalam Kimia, Biologi, dan Matematika, karena ketiga bidang ini merupakan fondasi dalam memahami ilmu farmasi. Mata kuliah yang diajarkan mencakup Farmakologi, Kimia Farmasi, Formulasi, Farmasi Klinik, dan Biologi Farmasi, dengan kombinasi teori, praktik laboratorium, dan penelitian. Keterampilan yang harus dikuasai meliputi analisis laboratorium, penguasaan teknologi farmasi modern, pemahaman regulasi obat dan keamanan pangan, serta kemampuan komunikasi yang baik.
              </div>
              <div className="fakultas-foto-dan-get-to-know">
              <div className="fakultas-get-to-know">
                Get to know about SF!
              </div>
              <div className="fakultas-foto">
                <Image src="/SF.jpg" alt="Labtek" width={600} height={400}></Image>
              </div>
            </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/GrafikSF1.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/GrafikSF2.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/GrafikSF3.png" alt="Labtek" width={1000} height={1000}/>
          </div>

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
    </div>
  );
}
