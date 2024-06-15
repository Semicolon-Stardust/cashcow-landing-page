import { Bounded } from "@/Components/Helpers/Bounded";
import { Button } from "@/Components/Reusables/button";
import { Card } from "@/Components/Reusables/card";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicTextProps, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center justify-center md:gap-x-5 gap-x-0 md:gap-y-5 sm:gap-y-0 gap-y-7">
				{slice.primary.features.map((feature, index) => {
					return (
						<div key={index}>
              <Card
                className=""
                heading={feature.feature_title}
                description={feature.feature_description}
                buttonLabel={feature.button_label}
                buttonLink={feature.button_link}
              />
						</div>
					);
				})}
			</div>
		</Bounded>
	);
};

export default Features;
