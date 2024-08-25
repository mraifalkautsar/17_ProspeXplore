"use client"

import { signIn,useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
    const { data: session } = useSession();
    return (
        <>
            {session ? (
                <>
                    <div>
                        <p>{JSON.stringify (session)}</p>
                    </div>
                </>
            ):(
                <>
                    <div className="flex space-x-5">
                        <button onClick={() => signIn("google")}>Sign in with google</button>
                    </div>
                </>
            ) }
        </>
        
    );
};

export default Dashboard;