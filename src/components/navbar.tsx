"use client"

import DarkModeToggle from "./darkModeToggle"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        if (isMobileOpen){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        }
    }, [isMobileOpen])

    const toggleMobileNav = () => {
        setIsMobileOpen(!isMobileOpen);
    }
 
    return (
        <>
            <nav className="fixed w-full top-0 z-50 bgToggleLight flex flex-col">
                <div className="flex items-center justify-between sidePadding py-[1rem]">
                    <button
                        className="sm:hidden size-[2.5rem] text-primary"
                        onClick={toggleMobileNav}
                    >
                        { isMobileOpen ? <XMarkIcon/> : <Bars3Icon/> }
                    </button>
                    <ul className="hidden sm:flex gap-4 sm:gap-6 content sm:text-[1.1rem] font-semibold text-primary">
                        <li><a href="#interest">Interest</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#proficiency">Proficiency</a></li>
                    </ul>
                    <DarkModeToggle/>
                </div>
                { isMobileOpen && (
                    <div className="mobileNav sm:hidden flex flex-col items-center content text-primary">
                        <a
                            href="#interest" 
                            onClick={toggleMobileNav}
                        >
                            Interest
                        </a>
                        <a
                            href="#education" 
                            onClick={toggleMobileNav}
                        >
                            Education
                        </a>
                        <a
                            href="#proficiency" 
                            onClick={toggleMobileNav}
                        >
                            Proficiency
                        </a>
                    </div>
                )}
            </nav>
            { isMobileOpen && (
                <div 
                    className="sm:hidden fixed w-screen h-screen bg-baseDark/50 dark:bg-baseLight/20 z-40"
                    onClick={toggleMobileNav}
                ></div>
            ) }
        </>
    )
}