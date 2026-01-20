import Image from "next/image";
import TechCard from "@/components/techCard";
import Popup from "@/components/emailFormPopup";

export default function Home() {
  const techStack = [
    { logo: "python.svg", color: "primary"},
    { logo: "java.svg", color: "primary"},
    { logo: "html.svg", color: "primary"},
    { logo: "css.svg", color: "primary"},
    { logo: "javascript.svg", color: "primary"},
    { logo: "django.svg", color: "primary"},
    { logo: "nextjs.svg", color: "primary"},
    { logo: "tailwind.svg", color: "primary"},
    { logo: "canva.svg", color: "purple"},
    { logo: "figma.svg", color: "purple"},
  ]

  return (
    <div>
      <div className="relative overflow-hidden">
        <Image
          src='/image/home_image.jpeg' 
          alt='Home Image of Aby' 
          width={1376} 
          height={785} 
          className="w-full h-auto min-h-[785px] object-[80%_100%] object-cover"
        />
        <div className="absolute flex flex-col top-[73.5%] sm:top-[62%] md:top-[55%] -left-2 sm:-left-3 md:-left-3.5 title font-extrabold text-[7rem] sm:text-[10rem] md:text-[12rem] leading-none titleToggleLight">
          <p>Hello</p>
          <div className="flex">
            <div className="h-auto w-[3.5rem] sm:w-[5rem] md:w-[6rem]"></div>
            <p>There</p>
          </div>
        </div>
      </div>
      <div className="content text-[1rem] sm:text-[1.1rem] sidePadding py-12 sm:py-20 text-justify max-w-full contentToggleLight">
        My name is Muhammad Abyasa Pratama, people used to call me Aby (or Abyasa). I was born on 22 July 2005 in Jakarta, Indonesia. I'm currently enrolling as an undergraduate computer science student at the University of Indonesia. I'm a hard working and curious person who wishes to excel at my field of interests.
      </div>
      <div className="sectionWrapper">
        <div className="content text-[1rem] sidePadding py-10 text-justify relative linear-bg contentToggleLight">
          <div className="absolute title title-2 font-bold pl-5 sm:pl-4 -top-13 sm:-top-24 text-primary">Interest</div>
          <p>
            As of now, I'm mainly into the field of front-end development and UI/UX design, but this is subjected to change. Let me tell you, I used to be a person who has quite a fascination with design and aesthetics. Now, since I've decided to dive into the world of IT, I want to use this interest to get more understanding about what builds up a good user interface design. I know that the field of UI/UX design is way more complicated than just about aesthetics, but I'm sure interested to master every part of it. 
          </p>
          <p className="pt-4">
            Then, I also think, wouldn't it be great if I can build the interface design that I've created? That's when I also took interest in front-end development. Even though these two fields are separated in the industry (designer and engineer), I also think that by understanding these two fields, I could manage to see the "bridge" between the processes conducted by both of these field of work, seeing that they are related to each other.
          </p>
        </div>
      </div>
      <div className="sectionWrapper">
        <div className="relative titleBox ml-12 sm:ml-15.5 bg-primary titleToggleLight">
          <span className="absolute title title-2 font-bold -left-2.5 sm:-left-4.5 top-[0.2rem] sm:-top-0.5">Education</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 sidePadding pt-10 justify-center contentToggleLight">
          <div className="flex flex-col gap-8 items-center">
            <div className="h-40 sm:h-50 w-auto">
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
          <div id="connectLine" className="flex flex-col sm:flex-row gap-0 sm:h-50 items-center">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-0.5 h-12 sm:w-12 sm:h-0.5 bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="h-40 sm:h-50 w-auto">
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
        <div className="relative flex titleBox w-[18.5rem] sm:w-[32rem] bg-primary titleToggleLight">
          <span className= "absolute title title-2 font-bold -top-2 sm:-top-5">Proficiency</span>
        </div>
        <div className="scrollWrapper flex gap-6 md:gap-10 py-12 px-6 md:px-10 overflow-x-auto">
          {techStack.map((card) => (
            <TechCard key={card.logo} logo={card.logo} color={card.color}/>
          ))}
        </div>
        <div className="flex flex-col my-6 sidePadding text-[1rem]">
          <div className="flex gap-4 items-center">
            <div className="min-w-6 h-6 bg-primary"></div>
            <span className="content contentToggleLight">Programming-related (languages, frameworks, libraries)</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="min-w-6 h-6 bg-purple"></div>
            <span className="content contentToggleLight">Other tools</span>
          </div>
        </div>
      </div>
      {/* POP-UP BUTTON */}
      <div className="sectionWrapper flex justify-center">
        <Popup/>
      </div>
    </div>
  );
}
