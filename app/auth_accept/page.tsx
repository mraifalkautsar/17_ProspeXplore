import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";
import React from "react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#1A3594] to-[#6B58B3] min-h-screen">
        <div className="w-full mx-auto items-center justify-center text-center pt-40">
            <div className="font-poppins font-extrabold text-4xl inline-flex">
                <h2 className="text-white">Hey,</h2><h2 className="bg-gradient-to-r from-white to-[#6B58B3] text-transparent bg-clip-text">&nbsp;Username</h2>
            </div>
            <p className="font-poppins text-white text-xl mt-4 font-semibold">Your account has been successfully registered!</p>

            <button 
            className="w-40 rounded-full bg-gradient-to-r from-[#CAAACF] to-[#6B58B3] text-white font-poppins font-extrabold m-8 py-3 px-4 shadow-lg">
                Get Started
            </button>
        </div>

      
        <div className="flex absolute bottom-0">
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
    </main>
  );
}
