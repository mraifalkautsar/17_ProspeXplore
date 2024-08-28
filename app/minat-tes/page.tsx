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
            <div className="justify-center items-center">
                <div className="text-white text-4xl text-center font-poppins font-extrabold">Username</div>
                    <Image
                        src="/pfp.png"
                        alt="pfp"
                        width={180}
                        height={180}
                        className="mx-auto my-5"
                    />
                
                <form className="mx-40 pb-16 px-32">
                    <p className="font-bold font-poppins text-white mb-2">Email Address</p>
                    <div className="mb-4 text-gray-950">
                        <input 
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className="block w-full px-3 py-3 border-2 rounded-full"
                        />
                    </div>

                    <p className="font-bold font-poppins text-white mb-2">Password</p>
                    <div className="mb-4 text-gray-950">
                        <input 
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="block w-full px-3 py-3 border-2 rounded-full"
                        />
                    </div>

                </form>

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

            
        </div>

        
    </main>
  );
}