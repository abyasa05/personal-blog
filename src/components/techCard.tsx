import { CSSProperties } from "react";

type CardProps = {
  logo?: string;
  color?: CSSProperties
}

export default function TechCard( {logo, color}: CardProps ) {
    return (
        <div className="w-[12rem] h-[12rem] rounded-2xl border-2 flex px-10 py-10" style={color}>
            <div 
                style={{ backgroundImage: `url(/logo/${logo})` }}
                className="bg-no-repeat bg-contain bg-center w-full h-full"
            ></div>
        </div>
    )
}