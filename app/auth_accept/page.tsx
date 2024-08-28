import Link from "next/link";
import React from "react";
import AcceptedAuth from "../components/AcceptedAuth";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#1A3594] to-[#6B58B3] min-h-screen">
        <AcceptedAuth/>
      
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