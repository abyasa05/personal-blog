import Link from "next/link"
import { colors } from "@/elements/color"
import DarkModeToggle from "./darkModeToggle"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between sticky top-0 z-50 title text-xl sidePadding py-[1.2rem] bgToggleLight text-primary">
            <div className="font-bold">Abyasa's Website</div>
            <DarkModeToggle/>
        </nav>
    )
}