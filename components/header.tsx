"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
                    <Link href='/' className="mx-auto md:mx-0">
                        <Image 
                            src="/logooo.png"
                            alt="M.Acosta.Dev Logo"
                            width={160}
                            height={40}
                            priority={true}
                        />
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:text-secondary"
                                aria-label={`Link to ${id} social network`}
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;
