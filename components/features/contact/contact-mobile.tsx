import * as React from "react";
import { Container } from "@/components/ui/container";
import { IconContainer } from "@/components/ui/icon-container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactMobile() {
    return (
        <section className="w-full bg-bg-alt py-12 lg:hidden">
            <Container className="flex flex-col items-center justify-center gap-8">
                {/* Header */}
                <div className="flex w-full flex-col items-center justify-start gap-3 text-center">
                    <h2 className="text-[32px] font-medium leading-8 text-text-heading">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-sm font-normal leading-[14px] text-text-body">
                        Ready to start your order? Reach out and we'll get back to you shortly.
                    </p>
                </div>

                {/* Content */}
                <div className="flex w-full flex-col items-center justify-center gap-6">
                    {/* Map Image Placeholder */}
                    <div className="relative h-[230px] w-full max-w-[361px] overflow-hidden rounded-[22px]">
                        <img
                            src="https://placehold.co/496x446"
                            alt="Map"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="flex w-full flex-col items-start justify-start gap-8 py-6">
                        {/* Address */}
                        <div className="flex items-center justify-start gap-3">
                            <IconContainer>
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
                            <IconContainer>
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
                            <IconContainer>
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
                            <IconContainer>
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
