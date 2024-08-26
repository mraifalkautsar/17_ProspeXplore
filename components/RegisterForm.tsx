"use client"

import React, { useState } from "react";
import Link from "next/link";

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
        <div className="relative w-full max-w-md px-8 pt-0.5 pb-8 space-y-6 bg-gray-200 shadow-lg rounded-lg">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
                <h1 className="text-2xl text-white font-bold font-sans">PROSPEXPLORE</h1>
            </div>

            <h2 className="text-2xl text-gray-950 text-center font-bold font-sans">DAFTAR</h2>

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
    );
}
