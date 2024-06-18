"use client";

import { useRef, useState } from "react";
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";
import gsap from "gsap";
import  { useGSAP } from '@gsap/react'

export default function Navbar({
	settings,
}: {
	settings: Content.SettingsDocument;
}) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useGSAP(() => {
        let tl = gsap.timeline();
        tl.fromTo('.animated-navbar', {
            y: -100,
            duration: 2,
            ease: 'power4.out',
            opacity: 0,
        },
        {
            y: 0,
            duration: 2,
            ease: 'power4.out',
            opacity: 1,
        }
    );

    
    })



    return (
        <nav
            className="animated-navbar">
                <div>
                    <NameLogo name={settings.data.logo_text} />
                </div>
                <div>
                    <DesktopMenu settings={settings} pathname={pathname} />
                </div>
            </nav>
    );
    
}

function NameLogo({name} : {name: KeyTextField}) {
    return (
        <Link href="/">
            <h2 className="font-logo text-4xl">
                {name}
            </h2>
        </Link>
    )
};


function DesktopMenu({
    settings,
    pathname,
} : {
    settings: Content.SettingsDocument;
    pathname: string;
}) {
    return (
        <ul className="flex justify-between items-center w-full gap-5 font-subtitle">
            {settings.data.nav_items.map((item, index) => {
                return (
                    <li key={index}>
                        <PrismicNextLink 
                            className={
                                cn(
                                    'hover:bg-text hover:font-subtitle hover:font-bold py-3 px-5 rounded-full hover:text-secondary',
                                )}
                                field={item.nav_link}>
                            {item.nav_link_label}
                        </PrismicNextLink>
                    </li>
                )
            })
            
            }
        </ul>
    )
};