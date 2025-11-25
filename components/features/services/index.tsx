import * as React from "react";
import { ServicesMobile } from "./services-mobile";
import { ServicesDesktop } from "./services-desktop";

export function ServicesSection() {
    return (
        <>
            <ServicesMobile />
            <ServicesDesktop />
        </>
    );
}
