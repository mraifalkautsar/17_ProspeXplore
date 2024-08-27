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

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 flex flex-col gap-2 my-6 bg-slate-700">
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/authentication" })}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}