import * as React from "react";
import { Container } from "@/components/ui/container";
import { AboutCard } from "@/components/features/about/about-card";
import { Award02Icon, FlashIcon, Message01Icon } from "hugeicons-react";

export function AboutSection() {
    return (
        <section className="w-full bg-bg-alt py-12 lg:py-16" id="about">
            <Container className="flex flex-col items-center justify-center gap-12 lg:gap-16">
                {/* Header */}
                <div className="flex w-full flex-col items-start justify-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                    <div className="flex flex-col justify-center lg:w-[526px]">
                        <h2 className="text-[32px] font-medium leading-8 tracking-[-0.1rem] text-text-heading lg:text-[60px] lg:leading-[64px]">
                            About
                            <br />
                            <span className="text-primary">
                                Color Fashion <br className="lg:inline" />
                                Industrial (Pvt) Ltd
                            </span>
                        </h2>
                    </div>
                    <div className="text-sm leading-[14px] text-text-body lg:w-[590px] lg:text-base lg:leading-6">
                        <span className="font-medium">Color Fashion Industrial (Pvt) Ltd</span>
                        <span className="font-normal">
                            {" "}
                            is a leading custom printing and apparel solutions provider in Sri
                            Lanka. We specialize in manufacturing high-quality jerseys, office
                            wear, promotional products, and corporate merchandise tailored to
                            meet the unique needs of our clients.
                            <br />
                            <br />
                            With years of industry experience, our team combines modern printing
                            technology with skilled craftsmanship to ensure vibrant colors,
                            durable finishes, and exceptional product quality. We take pride in
                            delivering reliable service, competitive pricing, and on-time
                            production for businesses, events, sports teams, and organizations
                            across the country.
                            <br />
                            <br />
                            Every order is handled with care—from design to final
                            delivery—ensuring your brand is represented with professionalism and
                            precision.
                        </span>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-5">
                    <AboutCard
                        title="Fast Delivery"
                        description="We prioritize efficiency and speed, ensuring your orders are processed and delivered promptly without compromising on quality."
                        icon={<FlashIcon className="h-6 w-6 text-primary lg:h-8 lg:w-8" />}
                        className="h-full"
                    />
                    <AboutCard
                        title="Quality Assurance"
                        description="Our commitment to excellence means every product undergoes rigorous quality checks, guaranteeing superior craftsmanship and durability."
                        icon={<Award02Icon className="h-6 w-6 text-primary lg:h-8 lg:w-8" />}
                        className="h-full"
                    />
                    <AboutCard
                        title="WhatsApp-First Service"
                        description="Eliminate distractions with a minimalist interface and time-blocking tools that help you get in deep work mode."
                        icon={<Message01Icon className="h-6 w-6 text-primary lg:h-8 lg:w-8" />}
                        className="h-full"
                    />
                </div>
            </Container>
        </section>
    );
}
