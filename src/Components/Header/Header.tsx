import React from "react";
import { createClient } from "@/prismicio";
import Navbar from "./Navbar";

export default async function Header() {

    const client = createClient();
    const settings = await client.getSingle("settings");
    
    return (
        <header className="top-0 z-50 mx-auto w-full md:sticky md:top-0">
            <Navbar settings={settings} />
        </header>
    )
}