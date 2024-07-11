import React from "react";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNavbar from "@/components/MobileNavbar";
import {getLoggedInUser} from "@/lib/actions/user.actions";
import {redirect} from "next/navigation";

// ----------------------------------------------------------------------

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const loggedIn = await getLoggedInUser();

    if (!loggedIn) {
        redirect("/sign-in");
    }

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn}/>

            <div className="flex flex-col size-full">
                <div className="root-layout">
                    <Image
                        src="/icons/logo.svg"
                        alt="Menu icon"
                        width={30}
                        height={30}
                    />
                    <div>
                        <MobileNavbar user={loggedIn}/>
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
