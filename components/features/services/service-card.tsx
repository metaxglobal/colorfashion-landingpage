import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LinkSquare02Icon } from "hugeicons-react";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    imageSrc: string;
    onOrderClick?: () => void;
}

export function ServiceCard({
    title,
    description,
    imageSrc,
    className,
    onOrderClick,
    ...props
}: ServiceCardProps) {
    return (
        <div
            className={cn(
                "flex w-full min-w-[300px] flex-col items-start rounded-md bg-white shadow-card transition-all hover:shadow-md",
                className
            )}
            {...props}
        >
            {/* Image Container */}
            <div className="relative h-72 w-full overflow-hidden rounded-t-md">
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Content Container */}
            <div className="flex w-full flex-col items-start gap-3 p-5">
                <div className="flex w-full flex-col gap-2">
                    <h3 className="text-xl font-medium leading-tight text-foreground">
                        {title}
                    </h3>
                    <p className="text-sm font-normal leading-4 text-text-body">
                        {description}
                    </p>
                </div>

                <Button
                    variant="outline"
                    size="default"
                    onClick={onOrderClick}
                    className="inline-flex w-157px items-center justify-center gap-x-2 rounded-xl border-1 border-primary px-5 py-2.5 text-base font-medium text-text-heading outline-offset-[-1.5px] sm:w-auto"
                >
                    Order Now
                    <LinkSquare02Icon className="h-6 w-6 stroke-[1.5px]" strokeWidth={1.5} />
                </Button>
            </div>
        </div>
    );
}
