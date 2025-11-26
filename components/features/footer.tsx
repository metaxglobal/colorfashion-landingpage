import * as React from "react";
import { Container } from "@/components/ui/container";
import { IconContainer } from "@/components/ui/icon-container";
import { Facebook02Icon, InstagramIcon, Mail01Icon } from "hugeicons-react";

export function Footer() {
    return (
        <footer className="w-full bg-bg-footer py-8 lg:py-6">
            <Container className="flex flex-col items-center justify-center gap-8 lg:gap-8">
                {/* Top Section: Logo & Socials */}
                <div className="flex w-full items-center justify-between">
                    <div className="relative h-11 w-11 lg:h-[52px] lg:w-[42px]">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <IconContainer className="h-11 w-11 lg:h-12 lg:w-12">
                            <a href="https://web.facebook.com/thiianhga/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
                                <Facebook02Icon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
                            </a>
                        </IconContainer>
                        <IconContainer className="h-11 w-11 lg:h-12 lg:w-12">
                            <a href="https://web.facebook.com/thiianhga/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
                            </a>
                        </IconContainer>
                        <IconContainer className="h-11 w-11 lg:h-12 lg:w-12">
                            <a href="mailto:colorfashion7@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Mail01Icon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
                            </a>
                        </IconContainer>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Credits */}
                <div className="flex w-full flex-col items-center gap-3 text-center text-xs font-normal leading-3 text-text-body lg:flex-row lg:justify-between lg:text-xs lg:leading-4">
                    <p className="lg:w-[339px] lg:text-left">
                        © 2025 Color Fashion Industrial (Pvt) Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <span>Design & Develop by</span>
                        <a href="https://nexgenlab.global" target="_blank" rel="noopener noreferrer">
                            <img
                                src="nexgen logo.png"
                                alt="NexGen Labs"
                                className="h-3 w-[86px]"
                            />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
