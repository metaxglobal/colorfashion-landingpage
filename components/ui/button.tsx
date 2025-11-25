import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                    // Variants
                    variant === "default" &&
                    "bg-whatsapp text-on-whatsapp hover:bg-whatsapp/90 shadow-sm",
                    variant === "outline" &&
                    "border-[1.5px] border-primary bg-transparent text-foreground hover:bg-primary/10",
                    variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
                    // Sizes
                    size === "default" && "h-11 px-5 py-2.5",
                    size === "sm" && "h-9 px-3 text-xs",
                    size === "lg" && "h-12 px-8",
                    size === "icon" && "h-9 w-9",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
