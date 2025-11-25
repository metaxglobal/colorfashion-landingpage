import * as React from "react";
import { Container } from "@/components/ui/container";
import { IconContainer } from "@/components/ui/icon-container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactDesktop() {
    return (
        <section className="hidden w-full bg-bg-alt py-16 lg:block">
            <Container className="flex flex-col items-center justify-center gap-16">
                {/* Header */}
                <div className="flex w-full flex-col items-center justify-start gap-3 text-center">
                    <h2 className="text-[60px] font-medium leading-[64px] text-text-heading">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-lg leading-7 text-text-body">
                        Ready to start your order? Reach out and we'll get back to you shortly.
                    </p>
                </div>

                {/* Content */}
                <div className="flex w-full flex-row items-center justify-between gap-12">
                    {/* Map Image Placeholder */}
                    <div className="relative h-[446px] w-[496px] overflow-hidden rounded-[22px]">
                        <img
                            src="https://placehold.co/496x446"
                            alt="Map"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="flex w-[452px] flex-col items-start justify-start gap-[50px]">
                        {/* Address */}
                        <div className="flex items-center justify-start gap-3">
                            <IconContainer className="h-12 w-12">
                                <MapPin className="h-6 w-6 text-primary" />
                            </IconContainer>
                            <div className="flex flex-col items-start justify-center gap-2">
                                <span className="text-base font-medium leading-4 text-text-heading">
                                    Address
                                </span>
                                <span className="text-base font-normal leading-4 text-text-body">
                                    301 C/ Kandy Road, Kadugannawa
                                </span>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center justify-start gap-3">
                            <IconContainer className="h-12 w-12">
                                <Phone className="h-6 w-6 text-primary" />
                            </IconContainer>
                            <div className="flex flex-col items-start justify-start gap-2">
                                <span className="text-base font-medium leading-4 text-text-heading">
                                    Phone
                                </span>
                                <span className="text-base font-normal leading-4 text-text-body">
                                    +94 76 089 2411
                                </span>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-start gap-3">
                            <IconContainer className="h-12 w-12">
                                <Mail className="h-6 w-6 text-primary" />
                            </IconContainer>
                            <div className="flex flex-col items-start justify-start gap-2">
                                <span className="text-base font-medium leading-4 text-text-heading">
                                    Email
                                </span>
                                <span className="text-base font-normal leading-4 text-text-body">
                                    colorfashion7@gmail.com
                                </span>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="flex items-start justify-start gap-3">
                            <IconContainer className="h-12 w-12">
                                <Clock className="h-6 w-6 text-primary" />
                            </IconContainer>
                            <div className="flex flex-col items-start justify-start gap-2">
                                <span className="text-base font-medium leading-4 text-text-heading">
                                    Opening Hours
                                </span>
                                <div className="flex flex-col gap-2 text-base font-normal leading-4 text-text-body">
                                    <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                                    <span>Saturday: 9:00 AM - 2:00 PM</span>
                                    <span>Sunday: Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
