import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { buttonVariants } from "../Reusables/button";
import { cn } from "@/libs/utils";
import { link } from "fs";

export default async function Header() {

    const client = createClient();
    const settings = await client.getSingle("settings");
    
    return (
        <header className="top-0 z-50 mx-auto w-full md:sticky md:top-4">
            <nav className="flex justify-between items-center w-full px-20 py-5">
                <div>
                    <Link href="/">
                        <h2 className="font-logo text-4xl">
                            {settings.data.logo_text}
                        </h2>
                    </Link>
                </div>
                <div className="hidden min-[580px]:flex">
                    <ul className="flex justify-between items-center w-full gap-5 font-subtitle">
                        {settings.data.nav_items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <PrismicNextLink className={"hover:text-accent hover:border-b border-accent"} field={item.nav_link}>
                                        {item.nav_link_label}
                                    </PrismicNextLink>
                                </li>
                            )
                        })
                        
                        }
                    </ul>
                </div>
            </nav>

        </header>
    )
}