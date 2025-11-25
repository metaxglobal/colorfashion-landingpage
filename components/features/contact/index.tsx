import * as React from "react";
import { ContactMobile } from "./contact-mobile";
import { ContactDesktop } from "./contact-desktop";

export function ContactSection() {
    return (
        <>
            <ContactMobile />
            <ContactDesktop />
        </>
    );
}
