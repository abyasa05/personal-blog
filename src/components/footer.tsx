import Link from "next/link"

export default function Footer() {
    const links = [
        { ref: "https://www.instagram.com/m.aby.07", logo: "fa-brands fa-instagram" },
        { ref: "https://x.com/MabyasaP", logo: "fa-brands fa-x-twitter" },
        { ref: "https://www.linkedin.com/in/muhammad-abyasa-pratama-86956328a", logo: "fa-brands fa-linkedin" },
        { ref: "https://github.com/abyasa05", logo: "fa-brands fa-github" },
    ]

    return (
        <div>
            <div className="hidden md:grid grid-rows-[3rem_6rem_3rem] grid-cols-[1fr_1fr] title text-[1rem]">
                <div className="row-span-1 col-span-1 flex px-8 items-center font-semibold bg-tosca text-baseLight">
                    Social Media
                </div>
                <div className="row-span-1 col-span-1 flex px-8 items-center justify-end font-semibold bg-blue text-baseLight">
                    Built Using
                </div>
                <div className="row-span-1 col-span-1 flex items-center px-8 gap-3 text-4xl bg-primary text-baseLight">
                    { links.map((link) => (
                        <Link key={link.ref} href={link.ref} target="_blank" className="socialLinks">
                            <i className={link.logo}></i>
                        </Link>
                    )) }
                </div>
                <div className="row-span-1 col-span-1 flex items-center gap-8 px-8 justify-end bg-primary">
                        <div className="bg-[url('/logo/next_wordmark.svg')] bg-right bg-no-repeat bg-contain h-[2rem] w-1/2"></div>
                        <div className="bg-[url('/logo/tailwind-wordmark.svg')] bg-right bg-no-repeat bg-contain h-[2rem] w-1/2"></div>
                </div>
                <div className="row-span-1 col-span-2 flex px-8 items-center justify-center bg-baseDark text-baseLight">
                    © 2025. All rights reserved.
                </div>
            </div>
            {/* Smaller width */}
            <div className="grid md:hidden grid-rows-[2.5rem_5rem_2.5rem_5rem_2.5rem] title text-[1rem]">
                <div className="row-span-1 col-span-1 flex sidePadding items-center font-semibold bg-tosca text-baseLight">
                    Social Media
                </div>
                <div className="row-span-1 col-span-1 flex justify-center items-center px-8 gap-3 text-4xl bg-primary text-baseLight">
                    { links.map((link) => (
                        <Link key={link.ref} href={link.ref} target="_blank" className="socialLinks">
                            <i className={link.logo}></i>
                        </Link>
                    )) }
                </div>
                <div className="row-span-1 col-span-1 flex sidePadding items-center justify-end font-semibold bg-blue text-baseLight">
                    Built Using
                </div>
                <div className="row-span-1 col-span-1 flex items-center gap-8 px-8 bg-primary">
                        <div className="bg-[url('/logo/next_wordmark.svg')] bg-center bg-no-repeat bg-contain h-[1.5rem] w-1/2"></div>
                        <div className="bg-[url('/logo/tailwind-wordmark.svg')] bg-center bg-no-repeat bg-contain h-[1.5rem] w-1/2"></div>
                </div>
                <div className="row-span-1 col-span-1 flex px-8 items-center justify-center bg-baseDark text-baseLight">
                    © 2025. All rights reserved.
                </div>
            </div>
        </div>
    )
}