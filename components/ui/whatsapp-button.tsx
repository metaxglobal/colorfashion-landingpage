import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface WhatsAppButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    onClick?: () => void;
}

export function WhatsAppButton({ className, onClick, ...props }: WhatsAppButtonProps) {
    return (
        <div
            className={cn(
                "flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 transition-colors hover:bg-whatsapp/90 lg:h-11 lg:px-6",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {/* WhatsApp Icon */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-5 w-5"
            />

            {/* Text */}
            <div className="text-base font-medium text-white lg:text-lg">
                Start Order on WhatsApp
            </div>

            {/* Arrow Icon (Custom or Lucide) */}
            <ArrowRight className="h-4 w-4 text-white lg:h-5 lg:w-5" />
        </div>
    );
}
