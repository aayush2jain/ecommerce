"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { FaChevronDown } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
            <p className="text-black dark:text-white">
                The Navbar will show on top of the page
            </p>
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className="flex flex-row gap-[3vw] mt-[5vh] pl-[1vw] w-0 md:w-[40vw] text-xl tracking-wide invisible md:visible">
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Men">
                    <div className="flex flex-col space-y-4 text-sm text-black">
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <FaChevronDown className="text-lg mt-[1vh]" />
            <MenuItem setActive={setActive} active={active} item="Women">
                <div className="flex flex-col space-y-4 text-sm text-black">
                    <HoveredLink href="/web-dev">Web Development</HoveredLink>
                    <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                    <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
            </MenuItem>
                <FaChevronDown className="text-lg mt-[1vh]" />
            <MenuItem setActive={setActive} active={active} item="KIDS">
                <div className="flex flex-col space-y-4 text-sm text-black">
                    <HoveredLink href="/web-dev">Web Development</HoveredLink>
                    <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                    <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
            </MenuItem>
                <FaChevronDown className="text-lg mt-[1vh]" />
            <MenuItem setActive={setActive} active={active} item="BRANDS">
                <div className="flex flex-col space-y-4 text-sm text-black">
                    <HoveredLink href="/web-dev">Web Development</HoveredLink>
                    <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                    <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
            </MenuItem>
                <FaChevronDown className="text-lg mt-[1vh]" />
            </Menu>
        </div>
    );
}
