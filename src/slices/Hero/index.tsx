"use client";
import React, { useRef } from "react";
import { Button, buttonVariants } from "@/Components/Reusables/button";
import { Content } from "@prismicio/client";
import {
	PrismicImage,
	PrismicLink,
	PrismicRichText,
	SliceComponentProps,
} from "@prismicio/react";
import { HeroBounded } from "@/Components/Helpers/HeroBounded";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	const ref = useRef(null);
	return (
		<HeroBounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="bg-background"
		>
			<div className="min-h-[70vh] flex flex-col items-center w-full">
				<div className="col-start-1 md:row-start-1 w-full">
					<div className="flex items-start justify-start flex-col gap-7">
						<div className="">
							<Button
								ref={ref}
								size={"sm"}
								variant={"default"}
								className={
									"bg-accent/45 text-text rounded-full py-4 px-10 flex items-center gap-2"
								}
							>
								<span>{slice.primary.dev_cta_label}</span>
								<span>
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
											fill="currentColor"
											fillRule="evenodd"
											clipRule="evenodd"
										></path>
									</svg>
								</span>
							</Button>
						</div>
						<div className="w-[39rem] mb-8 ">
								<PrismicRichText
									components={{
										heading2: ({ children }) =>  (
											<h2 className="text-4xl md:text-3xl sm:text-xl font-bold">{children}</h2>
										),
										em: ({ children }) => (
											<div className="lg:text-8xl md:text-6xl text-5xl font-semibold font-heading leading-none tracking-normal text-accent antialiased">{children}</div>
										),
									}}
									field={slice.primary.headline} />
						</div>
					</div>

					<div className="grid lg:grid-cols-3 md:grid-cols-1 items-center md:gap-x-1 gap-x-0 gap-y-7">
						<div className="w-full col-span-2">
							<PrismicNextImage
								className="md:h-[200px] h-[100px] w-full aspect-video object-cover rounded-lg border border-accent/80"
								field={slice.primary.hero_photo}
								alt=""
								priority={true}
							/>
						</div>
						<div className="w-full h-full flex flex-col items-center justify-center gap-8">
							<div className="w-full flex justify-end">
								<p className="w-[350px] text-right font-body text-xl">
									{slice.primary.subheadline}
								</p>
							</div>
							<div className="w-full flex justify-end">
								<Button
									ref={ref}
									size={"lg"}
									variant={"default"}
									className={""}
								>
									{slice.primary.cta_label}
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</HeroBounded>
	);
};

export default Hero;
