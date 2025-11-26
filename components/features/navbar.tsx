"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight01Icon } from "hugeicons-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [activeLink, setActiveLink] = React.useState("Home");

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "services"];
            const scrollPosition = window.scrollY + 100; // Offset for sticky header

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveLink(section.charAt(0).toUpperCase() + section.slice(1));
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full bg-bg-default shadow-header">
            <Container className="flex h-[78px] items-center justify-between lg:h-[88px]">
                {/* Logo */}
                {/* Logo */}
                <a href="#home">
                    <div className="relative h-11 w-9 overflow-hidden lg:h-[52px] lg:w-[42px]">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </a>

                {/* Right-aligned group for Desktop Navigation and Action */}
                <div className="hidden lg:flex items-center gap-10">
                    <DesktopNav activeLink={activeLink} setActiveLink={setActiveLink} />
                    <ContactButton />
                </div>

                {/* Mobile Action (Visible on Mobile Only) */}
                <div className="flex items-center gap-2 lg:hidden">
                    <ContactButton />
                </div>
            </Container>
        </nav>
    );
}

function DesktopNav({ activeLink, setActiveLink }: { activeLink: string, setActiveLink: (link: string) => void }) {
    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
    ];

    return (
        <div className="flex items-center justify-end gap-10">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={cn(
                        "text-base transition-colors",
                        activeLink === link.name
                            ? "border-b border-primary font-medium text-primary"
                            : "font-normal text-text-heading hover:text-primary"
                    )}
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
}

function ContactButton() {
    return (
        <a href="#contact">
            <Button
                variant="outline"
                size="default"
                className="h-10 rounded-xl border-[1.5px] px-5 py-2.5 lg:h-11 lg:text-18px"
            >
                Contact
                <ArrowUpRight01Icon
                    className="h-4 w-4 text-text-heading lg:h-9 lg:w-9"
                    strokeWidth={1.5}
                />
            </Button>
        </a>
    )
}
