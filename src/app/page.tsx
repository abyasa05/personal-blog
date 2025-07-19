import Image from "next/image";
import { colors } from "@/elements/color"
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="relative">
        <Image
          src='/image/home_image.jpg' 
          alt='Home Image of Aby' 
          width={1376} 
          height={785} 
          className="max-w-[86rem]"
        />
        <span className="title font-extrabold text-[12rem]" style={{ color: colors.baseLight }}>
          <span className="absolute top-95 -left-3.5">Hello</span>
          <span className="absolute top-142.5 left-15">There</span>
        </span>
      </div>
    </div>
  );
}
