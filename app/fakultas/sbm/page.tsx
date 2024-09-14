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
            Sekolah Bisnis dan Manajemen (SBM)
          </div>

          <div className="fakultas-article">
              <div className="fakultas-long-desc">
              Sekolah Bisnis dan Manajemen (SBM) Institut Teknologi Bandung didirikan pada tanggal 31 Desember 2003. SBM ITB terletak di Kampus Utama Institut Teknologi Bandung (ITB) yang merupakan salah satu perguruan tinggi terbaik di Indonesia.  SBM ITB berperan aktif sebagai pusat pengembangan teknopreneur di Indonesia. Pada tahun 2018 SBM ITB memperoleh akreditasi internasional ABEST, dan di tahun 2021 SBM ITB menjadi salah satu dari sedikit sekolah bisnis yang berhasil memperoleh akreditasi internasional dari AACSB. SBM ITB memiliki 2 Program Studi Sarjana yaitu Manajemen (MB) dan Kewirausahaan (MK).
              
              SBM ITB menawarkan dua program studi sarjana, yaitu Manajemen dan Kewirausahaan. Program Studi Manajemen berfokus pada pengembangan kemampuan analisis bisnis, manajemen strategi, keuangan, dan pemasaran. Sementara itu, Program Studi Kewirausahaan dirancang untuk membekali mahasiswa dengan keterampilan dalam menciptakan dan mengelola usaha, termasuk inovasi produk, pengelolaan sumber daya, dan pengembangan bisnis. Mahasiswa di SBM ITB juga didorong untuk mengembangkan keterampilan soft skill seperti kepemimpinan, komunikasi, dan kerjasama tim, yang penting dalam dunia bisnis yang dinamis dan kompetitif.
              </div>
              <div className="fakultas-foto-dan-get-to-know">
              <div className="fakultas-get-to-know">
                Get to know about SBM!
              </div>
              <div className="fakultas-foto">
                <Image src="/SBM.png" alt="Labtek" width={600} height={400}></Image>
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
