import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

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

                <Button variant="outline" size="default" onClick={onOrderClick} className="w-full justify-between sm:w-auto">
                    Order Now
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
