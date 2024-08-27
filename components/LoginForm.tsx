"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signIn,useSession,signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
  
        try {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });
  
          if (res && res.error) {
            setError("Invalid Credentials");
            return;
          }
  
          router.replace("dashboard");
        } catch (error) {
          console.log(error);
        }
    };
    return(
        <div className="relative w-full max-w-md px-8 pt-0.5 pb-8 space-y-6 bg-gray-200 shadow-lg rounded-lg">
            <div>
                <div className="relative w-full max-w-md px-8 pt-0.5 pb-8 space-y-6 bg-gray-200 shadow-lg rounded-lg">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
                        <h1 className="text-2xl text-white font-bold font-sans">PROSPEXPLORE</h1>
                    </div>
                    <div className="bg-gradient-to-b from-[#143562] to-[#8FC4B4] rounded-lg py-8 px-6">
                        <h2 className="text-3xl text-white text-center font-bold font-sans pb-4">MASUK AKUN</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div className="mb-4 text-gray-950">
                            <input className="block w-full px-3 py-2 border-2 rounded-md"
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                            />
                        </div>
                        <div className="mb-4 text-gray-950">
                            <input
                            className="block w-full px-3 py-2 border-2 rounded-md"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 text-base font-bold text-white bg-[#03254c] rounded-md">
                            MASUK AKUN
                        </button>
                        {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                        )}

                        <p className="my-4 text-center text-gray-950">
                            Belum punya akun? <Link href="/authentication" className="font-medium text-blue-600 hover:text-blue-500">Daftar</Link>
                        </p> 
                    </form>
                </div>
            </div>
        </div>
    );
}