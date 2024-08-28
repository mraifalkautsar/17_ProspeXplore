"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/authentication");
  };

  const handleGetStarted = () => {
    router.push("/");
  }

  return (
      <div className="w-full mx-auto items-center justify-center text-center pt-40">
        <div className="font-poppins font-extrabold text-4xl inline-flex">
          <h2 className="text-white">Hey,</h2><span className="bg-gradient-to-r from-white to-[#6B58B3] text-transparent bg-clip-text">&nbsp;{session?.user?.email}</span>
        </div>
        <p className="font-poppins text-white text-xl mt-4 font-semibold">What can we do for you?</p>
        <button 
            onClick={() => signOut({ callbackUrl: "/authentication" })}
            className="w-40 rounded-full bg-gradient-to-r from-[#CAAACF] to-[#6B58B3] text-white font-poppins font-extrabold m-8 py-3 px-4 shadow-lg">
                Log Out
        </button>
        <button
          onClick={handleGetStarted}
          className="w-40 rounded-full bg-gradient-to-r from-[#CAAACF] to-[#6B58B3] text-white font-poppins font-extrabold m-8 py-3 px-4 shadow-lg">
          Get Started
        </button>
      </div>
    );
}