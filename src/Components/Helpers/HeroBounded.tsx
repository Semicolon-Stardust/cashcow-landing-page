import { cn } from "@/libs/utils";
import { forwardRef } from "react";

interface HeroBoundedProps {
	as?: React.ElementType;
	className?: string;
	children?: React.ReactNode;
	// [key: string]: any;
}

const HeroBounded = forwardRef<HTMLDivElement, HeroBoundedProps>(
	({ as: Comp = "section", className, children, ...props }, ref) => {
		return (
			<Comp
				ref={ref}
				className={cn(
					"px-4 py-10 md:px-20 md:py-14 lg:py-6",
					className
				)}
				{...props}
			>
				{children}
			</Comp>
		);
	}
);

HeroBounded.displayName = "HeroBounded";

export { HeroBounded };
