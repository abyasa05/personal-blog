import { colors } from "@/elements/color";
import { CSSProperties } from "react";

type CardProps = {
  logo: string;
  name: string;
  color: string;
}

const strToStyle = new Map<string, CSSProperties>([
    ['primary', { borderColor: '#00BF99' }],
    ['purple', { borderColor: '#8924F4' }],
]);

export default function TechCard( {logo, name, color}: CardProps ) {
    return (
        <div className="flex flex-col gap-6 items-center">
            <div className="w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem] rounded-xl border-2 flex p-7 md:p-10" style={strToStyle.get(color)}>
                <div 
                    style={{ backgroundImage: `url(/logo/${logo})` }}
                    className="bg-no-repeat bg-contain bg-center w-full h-full"
                ></div>
            </div>
        </div>
    )
}