import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

export default async function Home() {
  const session = await getServerSession({ ...authOptions, session: { strategy: undefined } });
  
  if (session) {
    redirect("/dashboard")
  }
  

  return (
    <main className="bg-white min-h-screen flex items-center justify-center">
      <RegisterForm/>
    </main>
    // #d0efff
    // #03254c
  );
}
