"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";
import {sidebarLinks} from "@/constants";
import {Sheet, SheetClose, SheetContent, SheetTrigger,} from "@/components/ui/sheet"
import Footer from "@/components/Footer";

// ----------------------------------------------------------------------

const MobileNavbar = ({user}: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        alt="Menu"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
                        <Image
                            src="/icons/logo.svg"
                            alt="Horizon Logo"
                            width={34}
                            height={34}
                        />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                    </Link>

                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex flex-col h-full gap-6 pt-8 text-white">
                                {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link
                                                className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}
                                                href={item.route}
                                                key={item.label}
                                            >
                                                <Image
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                    className={cn({
                                                        'brightness-[3] invert-0': isActive
                                                    })}
                                                />

                                                <p className={cn('text-16 font-semibold text-black-2', {
                                                    "text-white": isActive
                                                })}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}

                                User
                            </nav>
                        </SheetClose>

                        <Footer user={user} type="mobile"/>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNavbar;