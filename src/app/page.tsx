import Image from "next/image";
import { colors } from "@/elements/color"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TechCard from "@/components/techCard";

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
        <span className="title font-extrabold text-[8rem] md:text-[12rem]" style={{ color: colors.baseLight }}>
          <span className="absolute top-95 -left-3.5">Hello</span>
          <span className="absolute top-142.5 left-15">There</span>
        </span>
      </div>
      <div className="content text-[1rem] md:text-[1.1rem] sidePadding pt-20 pb-16 text-justify max-w-full">
        My name is Muhammad Abyasa Pratama, people used to call me Aby (or Abyasa). I was born on 22 July 2005 in Jakarta, Indonesia. I'm currently enrolling as an undergraduate computer science student at the University of Indonesia. I'm a hard working and curious person who wishes to excel at my field of interests.
      </div>
      <div className="sectionWrapper">
        <div className="content text-[1rem] sidePadding py-10 text-justify relative border-t-24 min-w-full" style={{ backgroundColor: colors.primary, color: colors.baseLight }}>
          <div className="absolute title title-2 font-bold pl-4 pb-[0.5rem] -top-24" style={{ color: colors.primary }}>Interest</div>
          <p>
            As of now, I'm mainly into the field of front-end development and UI/UX design, but this is subjected to change. Let me tell you, I used to be a person who has quite a fascination with design and aesthetics. Now, since I've decided to dive into the world of IT, I want to use this interest to get more understanding about what builds up a good user interface design. I know that the field of UI/UX design is way more complicated than just about aesthetics, but I'm sure interested to master every part of it. 
          </p>
          <p className="pt-4">
            Then, I also think, wouldn't it be great if I can build the interface design that I've created? That's when I also took interest in front-end development. Even though these two fields are separated in the industry (designer and engineer), I also think that by understanding these two fields, I could manage to see the "bridge" between the processes conducted by both of these field of work, seeing that they are related to each other.
          </p>
        </div>
      </div>
      <div className="sectionWrapper">
        <div className="relative titleBox ml-12 md:ml-15.5" style={{ backgroundColor: colors.primary, color: colors.baseLight }}>
          <span className="absolute title title-2 font-bold -left-2.5 md:-left-4.5 top-[0.2rem] md:-top-0.5">Education</span>
        </div>
        <div className="flex flex-col md:flex-row gap-10 sidePadding pt-10 justify-center">
          <div className="flex flex-col gap-8 items-center">
            <div className="h-40 md:h-50 w-auto">
              <Image 
                src='/logo/dupan.png'
                alt='Logo of SMAN 28 Jakarta'
                width={200}
                height={200}
                className="object-contain h-full w-auto"
              ></Image>
            </div>
            <div className="flex flex-col gap-2 w-[11rem] content text-center">
              <span className="font-semibold text-center">SMAN 28 Jakarta</span>
              <span style={{ opacity: 0.7 }}>2020 - 2023</span>
            </div>
          </div>
          <div id="connectLine" className="flex flex-col md:flex-row gap-0 md:h-50 items-center">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
            <div className="w-0.5 h-12 md:w-12 md:h-0.5" style={{ backgroundColor: colors.primary }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="h-40 md:h-50 w-auto">
              <Image 
                src='/logo/makaraUI.png'
                alt='Logo of University of Indonesia'
                width={1200}
                height={1300}
                className="object-contain h-full w-auto"
              ></Image>
            </div>
            <div className="flex flex-col gap-2 w-[11rem] content text-center">
              <div className="font-semibold text-center">Faculty of Computer Science, University of Indonesia</div>
              <span style={{ opacity: 0.7 }}>2023 - ...</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionWrapper">
        <div className="relative flex titleBox w-[18.5rem] md:w-[32rem]" style={{ backgroundColor: colors.primary, color: colors.baseLight }}>
          <span className= "absolute title title-2 font-bold -top-2 md:-top-5">Proficiency</span>
        </div>
        <div className="scrollWrapper flex gap-6 md:gap-10 py-12 sidePadding overflow-x-auto">
          <TechCard logo="python.svg" name="Python" color={{ borderColor: colors.primary }}/>
          <TechCard logo="java.svg" name="Java" color={{ borderColor: colors.primary }}/>
          <TechCard logo="html.svg" name="HTML" color={{ borderColor: colors.primary }}/>
          <TechCard logo="css.svg" name="CSS" color={{ borderColor: colors.primary }}/>
          <TechCard logo="javascript.svg" name="JavaScript" color={{ borderColor: colors.primary }}/>
          <TechCard logo="django.svg" name="Django" color={{ borderColor: colors.primary }}/>
          <TechCard logo="nextjs.svg" name="NextJS" color={{ borderColor: colors.primary }}/>
          <TechCard logo="tailwind.svg" name="Tailwind CSS" color={{ borderColor: colors.primary }}/>
          <TechCard logo="canva.svg" name="Canva" color={{ borderColor: colors.purple }}/>
          <TechCard logo="figma.svg" name="Figma" color={{ borderColor: colors.purple }}/>
        </div>
        <div className="flex flex-col my-6 sidePadding text-[1rem]">
          <div className="flex gap-4 items-center">
            <div className="min-w-6 h-6" style={{ backgroundColor: colors.primary }}></div>
            <span className="content">Programming-related (languages, frameworks, libraries)</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="min-w-6 h-6" style={{ backgroundColor: colors.purple }}></div>
            <span className="content">Other tools</span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
