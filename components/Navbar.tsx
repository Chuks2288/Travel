"use client";
import { NAV_LINKS } from "@/constants"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "."


const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!sidebar);

    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image
                    src="/hilink-logo.svg"
                    alt="logo"
                    width={74}
                    height={29}
                    className="object-contain"
                />
            </Link>

            <ul className="hidden lg:flex h-full gap-12">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href}
                        className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transiton-all hover:font-bold"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>

            <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                onClick={handleSidebar}
            />

            {sidebar &&
                <div className="">
                    <div className="lg:hidden fixed inset-0 bg-black bg-opacity-20"
                        onClick={handleSidebar}
                    />
                    <div className="lg:hidden fixed top-0 right-0 h-screen w-72 z-20 bg-white shadow-md transiton-all">
                        <ul className="flex flex-col ">
                            {NAV_LINKS.map((link) => (
                                <Link href={link.href}
                                    onClick={handleSidebar}
                                    className="regular-16 mb-4 text-gray-50 py-3 px-4 
                                    cursor-pointer pb-1.5 transiton-all hover:bg-slate-600 hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Navbar