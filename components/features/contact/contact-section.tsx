import * as React from "react";
import { Container } from "@/components/ui/container";
import { IconContainer } from "@/components/ui/icon-container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
    return (
        <section className="w-full bg-bg-alt py-12 lg:py-16">
            <Container className="flex flex-col items-center justify-center gap-8 lg:gap-16">
                {/* Header */}
                <div className="flex w-full flex-col items-center justify-start gap-3 text-center">
                    <h2 className="text-[32px] font-medium leading-8 text-text-heading lg:text-[60px] lg:leading-[64px]">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-sm font-normal leading-[14px] text-text-body lg:text-lg lg:leading-7">
                        Ready to start your order? Reach out and we'll get back to you shortly.
                    </p>
                </div>

                {/* Content */}
                <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                    {/* Map Image Placeholder */}
                    <div className="relative h-[230px] w-full max-w-[361px] overflow-hidden rounded-[22px] lg:h-[446px] lg:max-w-[496px]">
                        <img
                            src="https://placehold.co/496x446"
                            alt="Map"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="flex w-full flex-col items-start justify-start gap-8 py-6 lg:w-[452px] lg:gap-[50px] lg:py-0">
                        {/* Address */}
                        <div className="flex items-center justify-start gap-3 lg:gap-3">
                            <IconContainer className="lg:h-12 lg:w-12">
                                <MapPin className="h-6 w-6 text-primary lg:h-6 lg:w-6" />
                            </IconContainer>
                            <div className="flex flex-col items-start justify-center gap-2">
                                <span className="text-base font-medium leading-4 text-text-heading lg:text-base lg:leading-4">
                                    Address
                                </span>
                                <span className="text-base font-normal leading-4 text-text-body lg:text-base lg:leading-4">
                                    301 C/ Kandy Road, Kadugannawa
                                </span>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center justify-start gap-3 lg:gap-3">
                            <IconContainer className="lg:h-12 lg:w-12">
                                <Phone className="h-6 w-6 text-primary lg:h-6 lg:w-6" />
                            </IconContainer>
                            <div className="flex flex-col items-start justify-start gap-2">
                                <span className="text-base font-medium leading-4 text-text-heading lg:text-base lg:leading-4">
                                    Phone
                                </span>
                                <span className="text-base font-normal leading-4 text-text-body lg:text-base lg:leading-4">
                                    +94 76 089 2411
                                </span>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-start gap-3 lg:gap-3">
                            <IconContainer className="lg:h-12 lg:w-12">
                                <Mail className="h-6 w-6 text-primary lg:h-6 lg:w-6" />
                            </IconContainer>
                            <div className="flex flex-col items-start justify-start gap-2">
                                <span className="text-base font-medium leading-4 text-text-heading lg:text-base lg:leading-4">
                                    Email
                                </span>
                                <span className="text-base font-normal leading-4 text-text-body lg:text-base lg:leading-4">
                                    colorfashion7@gmail.com
                                </span>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="flex items-start justify-start gap-3 lg:gap-3">
                            <IconContainer className="lg:h-12 lg:w-12">
                                <Clock className="h-6 w-6 text-primary lg:h-6 lg:w-6" />
                            </IconContainer>
                            <div className="flex flex-col items-start justify-start gap-2">
                                <span className="text-base font-medium leading-4 text-text-heading lg:text-base lg:leading-4">
                                    Opening Hours
                                </span>
                                <div className="flex flex-col gap-2 text-base font-normal leading-4 text-text-body lg:text-base lg:leading-4">
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
