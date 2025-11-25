import * as React from "react";
import { cn } from "@/lib/utils";

interface AboutCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export function AboutCard({
    title,
    description,
    icon,
    className,
    ...props
}: AboutCardProps) {
    return (
        <div
            className={cn(
                "flex w-full min-w-[280px] flex-col items-start gap-4 text-left",
                className
            )}
            {...props}
        >
            {icon && <div className="h-8 w-8 shrink-0 text-primary">{icon}</div>}

            <div className="flex w-full flex-col gap-3">
                <h3 className="text-lg font-medium leading-[1.1] text-foreground">
                    {title}
                </h3>
                <p className="text-sm font-normal leading-4 text-text-body">
                    {description}
                </p>
            </div>
        </div>
    );
}
