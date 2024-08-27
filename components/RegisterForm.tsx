"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill all fields");
            return;
        }
        
        try{
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                const form = e.target as HTMLFormElement;
                form.reset();
                console.log("User Registration Succeeded");
                return;
            } else {
                console.log("User Registration Failed");
                setError("");
            }

        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (

        
        <div className="w-full max-w-md p-8 space-y-6">
            <img
                src="ProspeXplore.png"
                alt="logo"
                className="m-auto w-44"
            />
            <div className="bg-gradient-to-b from-[#143562] to-[#8FC4B4] rounded-lg py-8 px-6">
                <h2 className="text-3xl text-white text-center font-bold font-sans">DAFTAR</h2>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="mb-4 text-gray-950">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            placeholder="username@gmail.com"
                            className="block w-full px-3 py-2 border-2 rounded-md"
                        />
                    </div>
                    <div className="mb-4 text-gray-950">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            type="password"
                            placeholder="password"
                            className="block w-full px-3 py-2 border-2 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-base font-bold text-white bg-[#03254c] rounded-md"
                    >
                        DAFTAR
                    </button>
                </form>

                {error && (
                    <div className="w-full px-4 py-2 rounded-md text-red-600">
                        {error}
                    </div>
                )}

                <p className="my-4 text-center text-gray-950">
                    Sudah punya akun? <Link href="/authentication_login" className="font-medium text-blue-600 hover:text-blue-500">Masuk Akun</Link>
                </p>
            </div>

            
        </div>
    );
}
