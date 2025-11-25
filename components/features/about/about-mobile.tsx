import * as React from "react";
import { Container } from "@/components/ui/container";
import { AboutCard } from "@/components/features/about/about-card";
import { Clock, Zap, MessageSquare } from "lucide-react";

export function AboutMobile() {
    return (
        <section className="w-full bg-bg-alt py-12 lg:hidden">
            <Container className="flex flex-col items-center justify-center gap-12">
                {/* Header */}
                <div className="flex w-full flex-col items-start justify-start gap-6">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-[32px] font-medium leading-8 text-text-heading">
                            About
                            <br />
                            <span className="text-primary">
                                Color Fashion <br />
                                Industrial (Pvt) Ltd
                            </span>
                        </h2>
                    </div>
                    <div className="text-sm leading-[14px] text-text-body">
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
                <div className="grid w-full grid-cols-1 gap-8">
                    <AboutCard
                        title="Fast Turnaround Times"
                        description="Stay ahead of your schedule with a built-in calendar that syncs across all your devices and reminds you what's next."
                        icon={<Clock className="h-6 w-6 text-primary" />}
                        className="h-full"
                    />
                    <AboutCard
                        title="Fast Turnaround Times"
                        description="Stay ahead of your schedule with a built-in calendar that syncs across all your devices and reminds you what's next."
                        icon={<Zap className="h-6 w-6 text-primary" />}
                        className="h-full"
                    />
                    <AboutCard
                        title="WhatsApp-First Service"
                        description="Eliminate distractions with a minimalist interface and time-blocking tools that help you get in deep work mode."
                        icon={<MessageSquare className="h-6 w-6 text-primary" />}
                        className="h-full"
                    />
                </div>
            </Container>
        </section>
    );
}
