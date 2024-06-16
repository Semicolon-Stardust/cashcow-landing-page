import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/libs/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
	{
		variants: {
			variant: {
				default:
					"default-button",
				destructive:
					"destructive-button",
				outline:
					"outline-button",
				subtle: "subtle-button",
				ghost: "ghost-button",
				link: "link-button",
			},
			size: {
				default: "h-10 py-2 px-4",
				sm: "h-9 px-2 rounded-md",
				lg: "h-11 px-8 rounded-md",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, variant, ...props }, ref) => {
        return (
            <button
                ref={ref}
                {...props}
                className={cn(buttonVariants({ variant, size, className }))}
            />
        );
    }
);

Button.displayName = 'Button';


export { Button, buttonVariants };
