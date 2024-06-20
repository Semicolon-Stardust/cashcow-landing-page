"use client";

import { useRef, useState } from "react";
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar({
	settings,
}: {
	settings: Content.SettingsDocument;
}) {
	const [open, setOpen] = useState(false);

	const pathname = usePathname();

	useGSAP(() => {
		gsap.set(".bg-navbar", {
			backgroundColor: "#1F2937",
			opacity: 0,
		});
		const scroll = gsap.timeline({
			scrollTrigger: {
				start: "top=+200",
				end: "bottom top",
				toggleActions: "play none none reverse",
				scrub: 1,
			},
		});

		const tl = gsap.timeline();

		tl.fromTo(
			".navbar",
			{
				y: -100,
				duration: 2,
				ease: "power4.out",
				opacity: 0,
			},
			{
				y: 0,
				duration: 2,
				ease: "power4.out",
				opacity: 1,
			}
		);
		scroll.to(".bg-navbar", {
			duration: 1,
			opacity: 1,
		});
	});

	return (
		<div className="navbar">
			<div className="wrapper">
				<div>
					<NameLogo name={settings.data.logo_text} />
				</div>
				<nav className="hidden md:flex">
					<DesktopMenu settings={settings} pathname={pathname} />
				</nav>
				<div className="md:hidden">
					<button className="text-2xl" onClick={() => setOpen(!open)}>
						{open ? (
							<svg
								width="20"
								height="20"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"
								></path>
							</svg>
						) : (
							<svg
								width="20"
								height="20"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"
								></path>
							</svg>
						)}
					</button>
				</div>
			</div>
			<div className="bg-navbar"></div>
		</div>
	);
}

function NameLogo({ name }: { name: KeyTextField }) {
	return (
		<Link href="/">
			<h2 className="font-logo text-4xl">{name}</h2>
		</Link>
	);
}

function DesktopMenu({
	settings,
	pathname,
}: {
	settings: Content.SettingsDocument;
	pathname: string;
}) {
	return (
		<ul className="flex justify-between items-center w-full gap-5 font-subtitle">
			{settings.data.nav_items.map((item, index) => {
				return (
					<li key={index}>
						<PrismicNextLink
							className={cn(
								"hover:bg-text hover:font-subtitle font-bold py-3 px-5 rounded-full hover:text-secondary"
							)}
							field={item.nav_link}
						>
							{item.nav_link_label}
						</PrismicNextLink>
					</li>
				);
			})}
		</ul>
	);
}
