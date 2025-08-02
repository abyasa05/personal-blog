import Link from "next/link"
import { colors } from "@/elements/color"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between sticky top-0 z-50 title text-xl px-10 py-[1.5rem]" style={{ backgroundColor: colors.baseLight, color: colors.primary }}>
            <div className="font-bold">Abyasa's Website</div>
        </nav>
    )
}