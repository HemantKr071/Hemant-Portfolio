import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/AnimatedText";
import {FiDownload} from 'react-icons/fi';
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br/> <span className="text-accent-hover"> <AnimatedText text="Hemant Kumar" /> </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Bringing ideas to life with expertise, creativity, and the determination to turn challenges into opportunities and success stories.
            </p>
            {/* Button and Socials */}
            <div className="">
            <Link href={"https://drive.google.com/file/d/1seEGDehs6smIG_dgraFSlcNC1gTFFhfr/view?usp=sharing"}>
              <Button variant="outline" size="lg" className="uppercase flex  items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl"/>
              </Button>
              </Link>
              <div className="mt-8 ml-4 mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent-hover rounded-full flex justify-center items-center text-accent-hover
                text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home;