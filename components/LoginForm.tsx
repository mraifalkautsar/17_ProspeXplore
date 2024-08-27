"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signIn,useSession,signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
    const { data: session } = useSession();
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
    return (
        <>
            {session ? (
                <>
                    <div>
                        <p>{JSON.stringify (session)}</p>
                        <button onClick={() => signOut({callbackUrl: "/dashboard"})}
                            className="w-full px-4 py-2 text-base font-bold text-black bg-white rounded-md flex justify-center items-center">
                            <p>Sign Out</p>

                        </button>
                    </div>
                </>
            ):(
                <>
                    <div className="w-full max-w-md p-8 space-y-6">
                        <div>
                            <img
                                src="/ProspeXplore.png"
                                alt="logo"
                                className="m-auto w-40"
                            />
                        </div>
                        <div className="bg-gradient-to-b from-[#143562] to-[#8FC4B4] rounded-lg py-8 px-6">
                            <h2 className="text-3xl text-white text-center font-bold font-sans pb-4">MASUK AKUN</h2>

                            <div className="mx-auto w-full px-4 py-2 text-base font-bold text-black bg-white rounded-md flex justify-center items-center">
                                <img className="w-4 h-4 mr-2" src="google-logo.png" alt="Google Logo" />
                                <button onClick={() => signIn("google")}>Sign in with google</button>
                            </div>

                            <h2 className="text-lg text-white text-center font-bold font-sans pt-4">ATAU</h2>

                            <form className="mt-4 space-y-4">
                                <div className="mb-4 text-gray-950">
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="username@gmail.com"
                                        className="block w-full px-3 py-2 border-2 rounded-md"
                                    ></input>
                                </div>
                                <div className="mb-4 text-gray-950">
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        className="block w-full px-3 py-2 border-2 rounded-md"
                                    ></input>
                                </div>
                                <button type="submit" className="w-full px-4 py-2 text-base font-bold text-white bg-[#03254c] rounded-md">
                                MASUK AKUN
                                </button>
                            </form>

                            

                            <p className="mt-4 text-center text-gray-950">
                                Belum punya akun? <Link href="/authentication" className="font-medium text-blue-600 hover:text-blue-500">Daftar</Link>
                            </p>
                        </div>
                    </div>
                    
                </>
            ) }
        </>
        
    );
};

export default Dashboard;