import * as React from "react";
import { Container } from "@/components/ui/container";
import { IconContainer } from "@/components/ui/icon-container";
import { Location01Icon, CallingIcon, Mail01Icon, Clock01Icon } from "hugeicons-react";

export function ContactSection() {
    return (
        <section id="contact" className="w-full bg-bg-alt py-12 lg:py-16">
            <Container className="flex flex-col items-center justify-center gap-8 lg:gap-8 lg:px-[222px]">
                {/* Header */}
                <div className="flex w-full flex-col items-center justify-start gap-3 text-center">
                    <h2 className="text-[32px] font-medium leading-8 tracking-[-0.1rem] text-text-heading lg:text-[60px] lg:leading-[64px]">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-sm font-normal leading-[14px] text-text-body lg:text-lg lg:leading-7">
                        Ready to start your order? Reach out and we'll get back to you shortly.
                    </p>
                </div>

                {/* Content */}
                <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:items-center lg:justify-start lg:gap-12">
                    {/* Map */}
                    <div className="relative h-[230px] w-full max-w-[361px] overflow-hidden rounded-[22px] lg:h-[446px] lg:w-[496px] lg:max-w-none">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8207365690964!2d80.5294316!3d7.261232399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36b5e22cf1a87%3A0xf9d2c53bab57c11e!2zQ29sb3IgRmFzaGlvbiDgtprgtqngt5TgtpzgtrHgt4rgtrHgt4_gt4A!5e0!3m2!1sen!2slk!4v1764065459301!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    </div>

                    {/* Contact Info */}
                    <div className="flex w-full flex-col items-start justify-start gap-8 py-6 lg:w-[452px] lg:gap-[50px] lg:py-0">
                        {/* Address */}
                        <div className="flex items-center justify-start gap-3 lg:gap-3">
                            <IconContainer className="lg:h-12 lg:w-12">
                                <Location01Icon className="h-6 w-6 text-primary lg:h-6 lg:w-6" />
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
                                <CallingIcon className="h-6 w-6 text-primary lg:h-6 lg:w-6" />
                            </IconContainer>
                            <div className="flex flex-col items-start justify-start gap-2">
                                <span className="text-base font-medium leading-4 text-text-heading lg:text-base lg:leading-4">
                                    Phone
                                </span>
                                <span className="text-base font-normal leading-4 text-text-body lg:text-base lg:leading-4">
                                    071 527 2238
                                </span>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-start gap-3 lg:gap-3">
                            <IconContainer className="lg:h-12 lg:w-12">
                                <Mail01Icon className="h-6 w-6 text-primary lg:h-6 lg:w-6" />
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
                                <Clock01Icon className="h-6 w-6 text-primary lg:h-6 lg:w-6" />
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
