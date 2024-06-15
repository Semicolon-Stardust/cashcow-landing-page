'use client'
import React, { useRef } from "react";
import { Button, buttonVariants } from "@/Components/Reusables/button";
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const ref = useRef(null)
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div>
				<h1>{slice.primary.headline}</h1>
				<h3>{slice.primary.subheadline}</h3>
				<Button ref={ref} size={"lg"} variant={"default"} className={""}>
					{slice.primary.cta_label}
				</Button>
			</div>
		</section>
	);
};

export default Hero;
