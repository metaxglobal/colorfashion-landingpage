import * as React from "react";
import { cn } from "@/lib/utils";

export interface IconContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

const IconContainer = React.forwardRef<HTMLDivElement, IconContainerProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border border-icon-stock bg-icon-bg",
                    className
                )}
                {...props}
            />
        );
    }
);
IconContainer.displayName = "IconContainer";

export { IconContainer };
