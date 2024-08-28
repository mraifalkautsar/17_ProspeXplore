import Link from "next/link";
import Image from "next/image";
import React from "react";


export default async function Home() {

  return (
    <main className="bg-gradient-to-b from-[#1A3594] to-[#6B58B3] min-h-screen"> 
        <div className="">
            <div className="header-container">
                <div className="header">
                    <Image className="logo" src="/logo.png" alt="ProspeXplore" width={190} height={53} />
                    <div className="navbar">
                        <Link href="/">Beranda</Link>
                        <Link href="#fakultas">Fakultas</Link>
                        <Link href="#tes-minat">Tes Minat</Link>
                        <Link href="/authentication"><span className="sign-in-button">Sign In</span></Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-4">
                <div className="font-poppins font-extrabold text-4xl inline-flex text-center">
                    <h2 className="text-white">Test Your</h2><span className="bg-gradient-to-r from-white to-[#6B58B3] text-transparent bg-clip-text">&nbsp;Minat</span>
                </div>
                
                <div className="max-w-md bg-white py-10 px-20 mt-5 rounded-lg flex flex-col ">

                    <form className="flex flex-col space-y-4">
                        <label htmlFor="Pelajaran Favorit" className="text-[#1A3594] font-bold font-poppins">Pelajaran Favorit</label>
                        <select name="Pelajaran Favorit" className="bg-[#1A3594] text-white p-3 rounded-lg">
                            <option value="Kimia">Kimia</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Fisika">Fisika</option>
                            <option value="Biologi">Biologi</option>
                            <option value="Seni Budaya">Seni Budaya</option>
                        </select>

                        <label htmlFor="Minat Utama" className="mt-4 text-[#1A3594] font-bold font-poppins">Minat Utama</label>
                        <select name="Minat Utama" className="bg-[#1A3594] text-white p-3 rounded-lg">
                            <option value="Bisnis">Bisnis</option>
                            <option value="Kesehatan" >Kesehatan</option>
                            <option value="Sains">Sains</option>
                            <option value="Seni">Seni</option>
                            <option value="Teknologi">Teknologi</option>
                            <option value="Teknik">Teknik</option>
                        </select>
                        
                        <label htmlFor="Keterampilan Unggulan" className="mt-4 text-[#1A3594] font-bold font-poppins">Keterampilan Unggulan</label>
                        <select name="Keterampilan Unggulan" className="bg-[#1A3594] text-white p-3 rounded-lg">
                            <option value="Kreativitas">Kreativitas</option>
                            <option value="Teknis">Teknis</option>
                            <option value="Komunikasi">Komunikasi</option>
                            <option value="Pemecahan Masalah">Pemecahan Masalah</option>
                            <option value="Analitis">Analitis</option>
                        </select>

                        <label htmlFor="Lingkungan Kerja" className="mt-4 text-[#1A3594] font-bold font-poppins">Lingkungan Kerja</label>
                        <select name="Lingkungan Kerja" className="bg-[#1A3594] text-white p-3 rounded-lg">
                            <option value="Remote">Remote</option>
                            <option value="Lapangan">Lapangan</option>
                            <option value="Kantor">Kantor</option>
                        </select>

                        <label htmlFor="Tipe Kepribadian" className="mt-4 text-[#1A3594] font-bold font-poppins">Tipe Kepribadian</label>
                        <select name="Tipe Kepribadian" className="bg-[#1A3594] text-white p-3 rounded-lg">
                            <option value="Ekstrovert">Ekstrovert</option>
                            <option value="Introvert">Introvert</option>
                        </select>
                        
                        <label htmlFor="Gaya Belajar" className="mt-4 text-[#1A3594] font-bold font-poppins">Gaya Belajar</label>
                        <select name="Gaya Belajar" className="bg-[#1A3594] text-white p-3 rounded-lg">
                            <option value="Visual">Visual</option>
                            <option value="Auditori">Auditori</option>
                            <option value="Kinestetik">Kinestetik</option>
                        </select>
                        

                    </form>

                    <button className="bg-[#6B58B3] rounded-full mt-6 py-3 px-6 text-white font-poppins font-bold shadow-lg">
                        Submit
                    </button>
                </div>
            </div>
            <div className="flex fixed bottom-0">
                <img 
                    src="Vector.png"
                    alt="logo"
                    className="h-8 my-6 ml-6 mr-2"
                />
                <img
                    src="Frame 13.png"
                    alt="name"
                    className="h-8 mt-6"
                />
            </div>
            
        </div>
        
        
    </main>
  );
}