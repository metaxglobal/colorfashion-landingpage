"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight01Icon } from "hugeicons-react";

interface WhatsAppButtonProps extends React.HTMLAttributes<HTMLDivElement> { }

export function WhatsAppButton({ className, ...props }: WhatsAppButtonProps) {
    const handleWhatsAppClick = () => {
        window.open("https://wa.me/94705220000", "_blank");
    };

    return (
        <div
            className={cn(
                "flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 transition-colors hover:bg-whatsapp/90 lg:h-11 lg:px-6",
                className
            )}
            onClick={handleWhatsAppClick}
            {...props}
        >
            {/* WhatsApp Icon */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-5 w-5"
            />

            {/* Text */}
            <div className="text-base font-medium text-white lg:text-18px">
                Start Order on WhatsApp
            </div>
        </div>
    );
}
