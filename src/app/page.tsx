import Image from "next/image";
import { colors } from "@/elements/color"
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="relative overflow-hidden">
        <Image
          src='/image/home_image.jpg' 
          alt='Home Image of Aby' 
          width={1376} 
          height={785} 
          className="w-full h-auto min-h-[785px] object-[80%_100%] object-cover"
        />
        <span className="title font-extrabold text-[12rem]" style={{ color: colors.baseLight }}>
          <span className="absolute top-95 -left-3.5">Hello</span>
          <span className="absolute top-142.5 left-15">There</span>
        </span>
      </div>
      <div className="content text-[1rem] px-10 pt-20 pb-16 text-justify max-w-full">
        My name is Muhammad Abyasa Pratama, people used to call me Aby (or Abyasa). I was born on 22 July 2005 in Jakarta, Indonesia. I'm currently enrolling as an undergraduate computer science student at the University of Indonesia. I'm a hard working and curious person who wishes to excel at my field of interests.
      </div>
      <div className="sectionWrapper">
        <div className="content text-[1rem] px-10 py-10 text-justify relative border-t-24" style={{ backgroundColor: colors.primary, color: colors.baseLight }}>
          <div className="absolute title font-bold text-[5.5rem] pl-4 pb-[0.5rem] -top-24" style={{ color: colors.primary }}>Interest</div>
          <p>
            As of now, I'm mainly into the field of front-end development and UI/UX design, but this is subjected to change. Let me tell you, I used to be a person who has quite a fascination with design and aesthetics. Now, since I've decided to dive into the world of IT, I want to use this interest to get more understanding about what builds up a good user interface design. I know that the field of UI/UX design is way more complicated than just about aesthetics, but I'm sure interested to master every part of it. 
          </p>
          <p className="pt-4">
            Then, I also think, wouldn't it be great if I can build the interface design that I've created? That's when I also took interest in front-end development. Even though these two fields are separated in the industry (designer and engineer), I also think that by understanding these two fields, I could manage to see the "bridge" between the processes conducted by both of these field of work, seeing that they are related to each other.
          </p>
        </div>
      </div>
      <div className="sectionWrapper">
        <div className="flex gap-10">
          <div className="flex flex-col gap-8 h-[200px] items-center">
            <div className="h-50 w-auto relative">
              <Image 
                src='/logo/dupan.png'
                alt='Logo of SMAN 28 Jakarta'
                width={200}
                height={200}
                className="object-fill h-full w-auto"
              ></Image>
            </div>
            <div className="flex flex-col gap-2 content items-center">
              <span className="font-semibold text-center">SMAN 28 Jakarta</span>
              <span style={{ opacity: 0.7 }}>2020 - 2023</span>
            </div>
          </div>
          <div className="flex flex-col gap-8 h-[200px] items-center w-[200px]">
            <div className="h-50 w-auto relative">
              <Image 
                src='/logo/makaraUI.png'
                alt='Logo of University of Indonesia'
                width={1200}
                height={1300}
                className="object-fill h-full w-auto"
              ></Image>
            </div>
            <div className="flex flex-col gap-2 content items-center">
              <div className="font-semibold text-center">Fakultas Ilmu Komputer, Universitas Indonesia</div>
              <span style={{ opacity: 0.7 }}>2023 - ...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
