"use client"

import { useState, useEffect } from "react"

export default function DarkModeToggle() {
    const [darkTheme, setDark] = useState(false);

    useEffect(() => {
        if ((!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) 
            || localStorage.getItem('theme') === 'dark'){
            toggleDark();
        }
    }, [])

    useEffect(() => {
        if (!darkTheme) {
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        } else {
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        }
    }, [darkTheme])

    const toggleDark = () => {
        setDark(!darkTheme);
    }

    return (
        <div className={`w-[2.5rem] h-[2.5rem] flex justify-center-safe items-center-safe border-2 border-primary 
            ${darkTheme ? 'bg-primary text-baseDark' : 'text-primary'}`} onClick={toggleDark}>
            <div className={`text-[1.5rem]`}>
                <i className={`${darkTheme ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}`}></i>
            </div>
        </div>
    )
}