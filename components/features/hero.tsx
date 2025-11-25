import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-12 lg:py-16">
            <Container className="flex flex-col items-center justify-center gap-6 lg:gap-8">
                {/* Text Content */}
                <div className="flex w-full flex-col items-center justify-start gap-6 text-center lg:gap-8">
                    <div className="flex flex-col items-center justify-start gap-3 lg:gap-6">
                        <h1 className="text-[40px] font-semibold leading-10 tracking-tight lg:text-[72px] lg:leading-[72px]">
                            <span className="text-text-heading">Your Brand.</span>
                            <br className="lg:hidden" />
                            <span className="hidden lg:inline"> </span>
                            <span className="text-primary">Your Design.</span>
                            <br />
                            <span className="text-text-heading">Our Quality Printing.</span>
                        </h1>
                        <p className="max-w-[359px] text-base font-medium leading-5 text-text-body lg:max-w-none lg:text-2xl lg:leading-6">
                            Premium custom printing for your jerseys, <br className="lg:hidden" />
                            office wear, mugs, flags & more.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:gap-4">
                        <WhatsAppButton />
                        <Button variant="outline" className="h-10 rounded-xl border-[1.5px] px-5 lg:h-11 lg:px-6 lg:text-lg">
                            View Services
                            <ArrowRight className="ml-2 h-3 w-3 text-text-heading" />
                        </Button>
                    </div>
                </div>

                {/* Image/Decoration */}
                <div className="relative mt-6 flex w-full flex-col items-center justify-center lg:mt-8">
                    {/* Background Blur - Fixed for 1024px */}
                    <div className="absolute h-[174px] w-[361px] rounded-full bg-gradient-to-br from-[#FF8303] via-[#F9A902] to-[#FF6A01] opacity-60 blur-[64px] lg:h-[318px] lg:w-[80%] lg:max-w-[996px]" />

                    {/* Main Image */}
                    <div className="relative h-[149px] w-[345px] overflow-hidden rounded-3xl lg:h-[384px] lg:w-[770px]">
                        <img src="https://placehold.co/996x379" alt="Hero Banner" className="absolute -left-[22px] top-0 h-[149px] w-[390px] object-cover lg:-left-[112px] lg:h-[379px] lg:w-[996px]" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
