import { colors } from "@/elements/color";
import { CSSProperties } from "react";

type CardProps = {
  logo?: string;
  name?: string;
  color?: CSSProperties
}

export default function TechCard( {logo, name, color}: CardProps ) {
    return (
        <div className="flex flex-col gap-6 items-center">
            <div className="w-[12rem] h-[12rem] rounded-xl border-2 flex px-10 py-10" style={color}>
                <div 
                    style={{ backgroundImage: `url(/logo/${logo})` }}
                    className="bg-no-repeat bg-contain bg-center w-full h-full"
                ></div>
            </div>
            <section className="content text-xl" style={{ color: colors.baseDark, opacity: 0.8 }}>{name}</section>
        </div>
    )
}