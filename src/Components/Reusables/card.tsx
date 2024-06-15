import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cn } from "@/libs/utils";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import { PrismicTextProps } from "@prismicio/react";
import { Button } from "./button";

interface CardProps {
    as?: React.ElementType;
    className?: string;
    children?: React.ReactNode;
    heading?: PrismicTextProps;
    description?: PrismicTextProps;
    icon?: SVGAElement;
    buttonLabel?: PrismicTextProps;
    buttonLink?: PrismicNextLinkProps;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={cn({ className, "bg-secondary px-4 py-12 rounded-lg": true})}
            >
                <div className="flex flex-col item-center gap-7">
                <h3 className={cn("font-heading text-2xl")}>
                    {props.heading}
                </h3>
                <div>
                    <p className="prose prose-sm text-text">
                        {props.description}
                    </p>
                </div>
                <div className="w-full flex justify-end">
                    <Button variant="outline">
                        <PrismicNextLink field={props.buttonLink}>{props.buttonLabel}</PrismicNextLink>
                    </Button>
                </div>
                </div>
            </div>
        );
    }
);

Card.displayName = 'Card';

export { Card };