import Link from "next/link";
import Image from "next/image";
import React from "react";
<<<<<<< HEAD
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import UserInfo from "../components/UserInfo";
=======

>>>>>>> be7a7f23297f5b442cffc440c881b939d4f2186a

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
            <UserInfo/>

            
        </div>

        
    </main>
  );
}