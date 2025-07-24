import Link from "next/link"
import { colors } from "@/elements/color"

export default function Footer() {
    return (
        <div className="grid grid-rows-[3rem_6rem_3rem] grid-cols-[1fr_1fr] title text-[1rem]">
            <div className="row-span-1 col-span-1 flex px-8 items-center font-semibold" style={{ backgroundColor: colors.tosca, color: colors.baseLight }}>
                Social Media
            </div>
            <div className="row-span-1 col-span-1 flex px-8 items-center justify-end font-semibold" style={{ backgroundColor: colors.secondary, color: colors.baseLight }}>
                Built Using
            </div>
            <div className="row-span-1 col-span-1 flex items-center px-8 gap-3 text-4xl" style={{ backgroundColor: colors.primary, color: colors.baseLight }}>
                <Link href="https://www.instagram.com/m.aby.07" target="_blank" className="socialLinks">
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link href="https://x.com/MabyasaP" target="_blank" className="socialLinks">
                    <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link href="https://www.linkedin.com/in/muhammad-abyasa-pratama-86956328a" target="_blank" className="socialLinks">
                    <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link href="https://github.com/abyasa05" target="_blank" className="socialLinks">
                    <i className="fa-brands fa-github"></i>
                </Link>
            </div>
            <div className="row-span-1 col-span-1 flex items-center gap-8 px-8 justify-end" style={{ backgroundColor: colors.primary }}>
                    <div className="bg-[url('/logo/next_wordmark.svg')] bg-right bg-no-repeat bg-contain h-[2rem] w-1/2"></div>
                    <div className="bg-[url('/logo/tailwind-wordmark.svg')] bg-right bg-no-repeat bg-contain h-[2rem] w-1/2"></div>
            </div>
            <div className="row-span-1 col-span-2 flex px-8 items-center justify-center" style={{ backgroundColor: colors.baseDark, color: colors.baseLight }}>
                © 2025. All rights reserved.
            </div>
        </div>
    )
}