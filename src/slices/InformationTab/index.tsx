"use client";
import React, { useEffect, useState, useRef } from "react";
import { Bounded } from "@/Components/Helpers/Bounded";
import { Button } from "@/Components/Reusables/button";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/libs/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export type InformationTabProps =
	SliceComponentProps<Content.InformationTabSlice>;

const InformationTab = ({ slice }: InformationTabProps): JSX.Element => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (index: number) => {
		setActiveTab(index);
		console.log(index);
	};

	useGSAP(() => {
		let tl = gsap.timeline();
		

	});



	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="bg-background box-border"
		>
			<div className="grid md:grid-cols-2 grid-cols-1 justify-end gap-x-7 md:gap-y-0  gap-y-5">
				<div className="tabs-title-container flex md:flex-col flex-row gap-2">
					{slice.primary.tabs.map((tab, index) => {
						return (
							<div
								onClick={() => handleTabChange(index)}
								key={index}
								className={cn(
									"flex items-center gap-4 md:p-2 p-1 rounded-lg cursor-pointer",
									{
										"bg-accent/50": activeTab === index,
									}
								
								)}
							>
								<PrismicNextImage
									field={tab.icon}
									className="w-12 p-4 bg-accent rounded-lg shrink-0"
									alt=""
								/>
								<h3 className="sm:flex hidden">
									{tab.tab_title}
								</h3>
							</div>
						);
					})}
				</div>
				<div className="w-full">
					<div className={cn(
						"flex flex-col justify-center bg-accent/25 rounded-lg",
					)}>
						<div className="flex items-center gap-4 bg-accent/35 rounded-t-lg">
							<PrismicNextImage
								field={slice.primary.tabs[activeTab].icon}
								className="w-20 object-cover rounded-tl-lg p-4 bg-accent shrink-0"
								alt=""
							/>
							<h3 className="font-heading md:text-4xl text-2xl font-bold tracking-wider">
								{slice.primary.tabs[activeTab].tab_title}
							</h3>
						</div>
						<div className={cn("prose md:prose-lg prose-sm text-text", "p-4")}>
							<PrismicRichText
								field={
									slice.primary.tabs[activeTab]
										.tab_description
								}
								components={{
									list: ({ children }) => {
										return (
											<ul className="list-disc list-inside">
												{children}
											</ul>
										);
									},
								}}
							/>
						</div>
						<div className="grid justify-end p-10">
							<Button
								variant="default"
								size="lg"
								className="w-full"
							>
								{slice.primary.tabs[activeTab].button_label}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Bounded>
	);
};

export default InformationTab;
