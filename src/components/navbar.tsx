import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <div>Abyasa's Website</div>
            <div className="flex items-center gap-8">
                <Link href=''>Home</Link>
            </div>
        </nav>
    )
}