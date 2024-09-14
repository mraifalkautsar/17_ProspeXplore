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
            Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan (SAPPK)
          </div>

          <div className="fakultas-article">
              <div className="fakultas-long-desc">
              Sekolah Arsitektur, Perencanaan, dan Pengembangan Kebijakan (SAPPK) ITB didirikan pada 29 Agustus 2005 berdasarkan SK Rektor ITB No. 222/2005 sebagai bagian dari reorganisasi unit akademik di ITB yang meningkatkan jumlah Fakultas/Sekolah dari 7 menjadi 11. Meskipun merupakan fakultas baru, SAPPK dibentuk dari penggabungan program akademik dan sumber daya yang sebelumnya berada di bawah Fakultas Teknik Sipil dan Perencanaan, yaitu Departemen Arsitektur dan Perencanaan Wilayah dan Kota, serta dua program studi dari Fakultas Teknik Industri, yaitu Studi Pembangunan dan Transportasi. Kini, SAPPK menaungi dua program studi untuk Sarjana, yakni Arsitektur (AR) dan Perencanaan Wilayah dan Kota (PWK).
              
              SAPPK memiliki program studi yang fokus pada pengembangan pengetahuan dan keterampilan dalam bidang perencanaan, desain, dan kebijakan yang terkait dengan lingkungan binaan. Mahasiswa di SAPPK mempelajari mata kuliah seperti Desain Arsitektur, Perencanaan Tata Ruang, Pengembangan Wilayah, dan Kebijakan Transportasi. Keterampilan yang ditekankan meliputi kemampuan analisis spasial, desain dan visualisasi, perencanaan strategis, serta pemahaman regulasi dan kebijakan publik. Selain itu, mahasiswa juga dilatih untuk berpikir kritis dan kreatif dalam menghadapi tantangan urbanisasi, pembangunan berkelanjutan, dan transportasi. Kemampuan komunikasi dan kolaborasi multidisiplin juga menjadi bagian penting dari kurikulum untuk memastikan lulusan SAPPK siap berkontribusi dalam menciptakan lingkungan yang lebih baik.
              </div>
              <div className="fakultas-foto-dan-get-to-know">
              <div className="fakultas-get-to-know">
                Get to know about SAPPK!
              </div>
              <div className="fakultas-foto">
                <Image src="/SAPPK.png" alt="Labtek" width={600} height={400}></Image>
              </div>
            </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/GrafikSAPPK1.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/GrafikSAPPK2.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/GrafikSAPPK3.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          
          <div className="fakultas-graph"> 
            <Image src="/GrafikSAPPK4.png" alt="Grafik naik turun" width={1000} height={1000}/>
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
