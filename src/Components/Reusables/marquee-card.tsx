import { forwardRef } from "react";
import { cn } from "@/libs/utils";
import { PrismicNextImage, PrismicNextImageProps } from "@prismicio/next";
import { PrismicTextProps } from "@prismicio/react";

interface MarqueeCardProps {
    as?: React.ElementType;
    className?: string;
    children?: React.ReactNode;
    heading?: PrismicTextProps;
    description?: PrismicTextProps;
    icon?: PrismicNextImageProps;
};



const MarqueeCard = forwardRef<HTMLDivElement, MarqueeCardProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={cn({
                    className,
                    "": true,
                })}
            >
                <div className="flex flex-col item-center gap-5">
                    <div>
                        <PrismicNextImage className="w-56" field={props.icon} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
);

MarqueeCard.displayName = "MarqueeCard";

export { MarqueeCard };