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

        <div className="w-full items-center justify-center px-20 pt-20">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white to-[#6B58B3] 
            font-poppins text-transparent bg-clip-text text-center">Sign Up</h2>

            <form onSubmit={handleSubmit} className="mx-40 mt-6 px-32">
                <p className="font-bold font-poppins text-white mb-2">Email Address</p>
                <div className="mb-4 text-gray-950">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="Enter Email Address"
                        className="block w-full px-3 py-3 border-2 rounded-full"
                    />
                </div>

                <p className="font-bold font-poppins text-white mb-2">Password</p>
                <div className="mb-10 text-gray-950">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        className="block w-full px-3 py-3 border-2 rounded-full"
                    />
                </div>
                <button
                type="submit"
                className="w-full px-30 py-3 text-base font-bold text-white bg-gradient-to-r from-[#CAAACF] to-[#6B58B3] rounded-full"
                >Sign Up
                </button>
            </form>
            

            
            

            {error && (
                <div className="w-full px-4 py-2 rounded-md text-red-600">
                    {error}
                </div>
            )}

                <p className="my-6 text-center text-white font-poppins">
                    Already have an account? <Link href="/authentication_login" className="font-extrabold bg-gradient-to-r from-[#CAAACF] to-[#6B58B3] inline-block text-transparent bg-clip-text">Sign In</Link>
                </p>

            {error && (
                <div className="w-full px-4 py-2 rounded-md text-red-600">
                    {error}
                </div>
            )}
        </div>
    );
}
