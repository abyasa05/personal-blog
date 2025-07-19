import Link from "next/link"
import { colors } from "@/elements/color"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between title text-xl px-10 py-[1.5rem]" style={{ color: colors.primary }}>
            <div className="font-bold">Abyasa's Website</div>
            <div className="flex items-center gap-8 font-light">
                <Link href=''>Home</Link>
            </div>
        </nav>
    )
}