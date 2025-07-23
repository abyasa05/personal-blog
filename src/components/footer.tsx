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
            <div className="row-span-1 col-span-1" style={{ backgroundColor: colors.primary }}></div>
            <div className="row-span-1 col-span-1" style={{ backgroundColor: colors.primary }}></div>
            <div className="row-span-1 col-span-2 flex px-8 items-center justify-center" style={{ backgroundColor: colors.baseDark, color: colors.baseLight }}>
                © 2025. All rights reserved.
            </div>
        </div>
    )
}