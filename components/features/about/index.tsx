import * as React from "react";
import { AboutMobile } from "./about-mobile";
import { AboutDesktop } from "./about-desktop";

export function AboutSection() {
    return (
        <>
            <AboutMobile />
            <AboutDesktop />
        </>
    );
}
