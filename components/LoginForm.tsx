"use client"

import { signIn,useSession,signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";

const Dashboard = () => {
    const { data: session } = useSession();
    return (
        <>
            {session ? (
                <>
                    <div>
                        <p>{JSON.stringify (session)}</p>
                        <button onClick={() => signOut({callbackUrl: "/Dashboard"})}
                            className="w-full px-4 py-2 text-base font-bold text-black bg-white rounded-md flex justify-center items-center"
                            >
                            <p>Sign Out</p>

                        </button>
                    </div>
                </>
            ):(
                <>
                    <div className="relative w-full max-w-md px-8 pt-0.5 pb-8 space-y-6 bg-gray-200 shadow-lg rounded-lg">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
                            <h1 className="text-2xl text-white font-bold font-sans">PROSPEXPLORE</h1>
                        </div>

                        <h2 className="text-2xl text-gray-950 text-center font-bold font-sans">MASUK AKUN</h2>

                        <div className="w-full px-4 py-2 text-base font-bold text-black bg-white rounded-md flex justify-center items-center">
                            <img className="w-4 h-4 mr-2" src="google-logo.png" alt="Google Logo" />
                            <button onClick={() => signIn("google")}>Sign in with google</button>
                        </div>

                        <h2 className="text-2xl text-gray-950 text-center font-bold font-sans">Or</h2>

                        <form className="mt-6 space-y-4">
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
                        </form>

                        <button type="submit" className="w-full px-4 py-2 text-base font-bold text-white bg-[#03254c] rounded-md">
                            MASUK AKUN
                        </button>

                        <p className="my-4 text-center text-gray-950">
                            Belum punya akun? <Link href="/authentication" className="font-medium text-blue-600 hover:text-blue-500">Daftar</Link>
                        </p>
                    </div>
                   
                </>
            ) }
        </>
        
    );
};

export default Dashboard;