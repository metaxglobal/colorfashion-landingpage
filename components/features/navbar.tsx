import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-bg-default shadow-header">
            <Container className="flex h-[78px] items-center justify-between lg:h-[88px]">
                {/* Logo */}
                <div className="relative h-11 w-11 overflow-hidden lg:h-[52px] lg:w-[52px]">
                    <img
                        src="https://placehold.co/52x52"
                        alt="Logo"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Desktop Navigation */}
                <DesktopNav />

                {/* Mobile Action (Visible on Mobile Only) */}
                <div className="flex items-center gap-2 lg:hidden">
                    <ContactButton />
                </div>

                {/* Desktop Action (Visible on Desktop Only) */}
                <div className="hidden lg:flex items-center gap-2">
                    <ContactButton />
                </div>
            </Container>
        </nav>
    );
}

function DesktopNav() {
    return (
        <div className="hidden items-center gap-10 lg:flex">
            <a
                href="#"
                className="border-b border-primary text-base font-medium text-primary"
            >
                Home
            </a>
            <a
                href="#"
                className="text-base font-normal text-text-heading hover:text-primary"
            >
                About
            </a>
            <a
                href="#"
                className="text-base font-normal text-text-heading hover:text-primary"
            >
                Services
            </a>
        </div>
    );
}

function ContactButton() {
    return (
        <Button
            variant="outline"
            size="default"
            className="h-10 rounded-xl border-[1.5px] px-5 py-2.5 lg:h-11 lg:text-lg"
        >
            Contact
            <ArrowUpRight className="ml-2 h-3 w-3 text-text-heading lg:h-4 lg:w-4" />
        </Button>
    )
}
