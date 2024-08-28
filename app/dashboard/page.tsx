import React from "react";
import UserInfo from "../components/UserInfo";

export default function Dashboard() {
  return(
    <main className="bg-gradient-to-b from-[#1A3594] to-[#6B58B3] min-h-screen">
      <div className="header-container">
        <div className="header">
          <img 
            src="/logo.png"
            alt="ProspeXplore"
            className="logo"
          />
          <div className="navbar">
            <a href="/">Beranda</a>
            <a href="#fakultas">Fakultas</a>
            <a href="#tes-minat">Tes Minat</a>
            <a href="/authentication">
              <span className="sign-in-button">Sign In</span>
            </a>
          </div>
        </div>
      </div>
      <UserInfo/>
      
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