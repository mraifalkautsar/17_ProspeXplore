"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/authentication");
  };


  return (
      <div className="justify-center items-center">
        <Image
          src="/pfp.png"
          alt="pfp"
          width={180}
          height={180}
          className="mx-auto my-5"
        />

        <form className="mx-40 pb-16 px-32">
          <p className="font-bold font-poppins text-white mb-2">Email Address</p>
          <div className="mb-4 text-white">
            <span className="block w-full px-3 py-3 border-2 rounded-full">&nbsp;{session?.user?.email}</span>          
          </div>

          <p className="font-bold font-poppins text-white mb-2">Password</p>
          <div className="mb-4 text-white">
            <span className="block w-full px-3 py-3 border-2 rounded-full">*****</span>
          </div>
        </form>

        <button 
            onClick={() => signOut({ callbackUrl: "/authentication" })}
            className="w-40 rounded-full bg-gradient-to-r from-[#CAAACF] to-[#6B58B3] text-white font-poppins font-extrabold m-8 py-3 px-4 shadow-lg">
                Log Out
        </button>

        <div className="flex fixed bottom-0">
          <img src="Vector.png" alt="logo" className="h-8 my-6 ml-6 mr-2" />
          <img src="Frame 13.png" alt="name" className="h-8 mt-6" />
        </div>
      </div>
    );
}