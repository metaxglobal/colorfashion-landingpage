import * as React from "react";
import { Container } from "@/components/ui/container";
import { AboutCard } from "@/components/features/about/about-card";
import { Clock, Zap, MessageSquare } from "lucide-react";

export function AboutDesktop() {
    return (
        <section className="hidden w-full bg-bg-alt py-16 lg:block">
            <Container className="flex flex-col items-center justify-center gap-16">
                {/* Header */}
                <div className="flex w-full flex-row items-center justify-between gap-16">
                    <div className="flex flex-col justify-center w-[526px]">
                        <h2 className="text-[60px] font-medium leading-[64px] text-text-heading">
                            About
                            <br />
                            <span className="text-primary">
                                Color Fashion <br className="inline" />
                                Industrial (Pvt) Ltd
                            </span>
                        </h2>
                    </div>
                    <div className="w-[590px] text-base leading-6 text-text-body">
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
                <div className="grid w-full grid-cols-3 gap-5">
                    <AboutCard
                        title="Fast Turnaround Times"
                        description="Stay ahead of your schedule with a built-in calendar that syncs across all your devices and reminds you what's next."
                        icon={<Clock className="h-8 w-8 text-primary" />}
                        className="h-full"
                    />
                    <AboutCard
                        title="Fast Turnaround Times"
                        description="Stay ahead of your schedule with a built-in calendar that syncs across all your devices and reminds you what's next."
                        icon={<Zap className="h-8 w-8 text-primary" />}
                        className="h-full"
                    />
                    <AboutCard
                        title="WhatsApp-First Service"
                        description="Eliminate distractions with a minimalist interface and time-blocking tools that help you get in deep work mode."
                        icon={<MessageSquare className="h-8 w-8 text-primary" />}
                        className="h-full"
                    />
                </div>
            </Container>
        </section>
    );
}
