import * as React from "react";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/features/services/service-card";

export function ServicesMobile() {
    return (
        <section className="w-full bg-bg-default py-12 lg:hidden">
            <Container className="flex flex-col items-center justify-center gap-8">
                {/* Header */}
                <div className="flex w-full flex-col items-center justify-start gap-3 text-center">
                    <h2 className="text-[32px] font-medium leading-8 text-text-heading">
                        Our <span className="text-primary">Services & Products</span>
                    </h2>
                    <p className="text-sm font-normal leading-[14px] text-text-body">
                        Explore our wide range of custom printing services designed to meet all
                        your branding and promotional needs
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="flex w-full flex-col items-center justify-center gap-5 md:grid md:grid-cols-2">
                    <ServiceCard
                        title="Customize T-Shirt Printing"
                        description="High-quality custom T-shirt printing with vibrant colours, durable materials, and fully personalised designs for events, teams, brands, and promotions."
                        imageSrc="https://placehold.co/387x288"
                    />
                    <ServiceCard
                        title="Wetlook Jerseys"
                        description="Premium wetlook jerseys made with breathable fabric and sharp printing, ideal for sports teams and activewear branding."
                        imageSrc="https://placehold.co/387x288"
                    />
                    <ServiceCard
                        title="Crocodile Office T-Shirts"
                        description="Professional-grade office T-shirts made from crocodile fabric, perfect for corporate uniforms and promotional branding."
                        imageSrc="https://placehold.co/387x288"
                    />
                    <ServiceCard
                        title="Bottoms, Shorts, Jackets & Flags"
                        description="Custom bottoms, shorts, jackets, and flags with strong stitching, durable materials, and personalized prints for teams and organisations."
                        imageSrc="https://placehold.co/387x288"
                    />
                    <ServiceCard
                        title="Wristbands & Mugs"
                        description="Custom-printed wristbands and mugs with high-quality finishes—ideal for gifting, promotions, and events."
                        imageSrc="https://placehold.co/387x288"
                    />
                </div>
            </Container>
        </section>
    );
}
