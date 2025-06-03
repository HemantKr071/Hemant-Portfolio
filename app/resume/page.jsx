"use client";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaHtml5,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiSocketdotio,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiPrisma,
  SiExpress,
  SiHono
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

const about = {
    title:"About me",
    description : "Hello! I'm Hemant Kumar, a third-year B.Tech student in Information Technology at NSUT, New Delhi. I'm passionate about technology and problem-solving, with hands-on experience in full-stack development. I enjoy building real-world applications and am always eager to learn and grow.",
    info: [
        {
            fieldName : "Name",
            fieldValue: "Hemant Kumar"
        },
        {
            fieldName : "Email",
            fieldValue: "hemant.dev.071@gmail.com"
        },
        {
            fieldName : "Location",
            fieldValue: "New Delhi,India"
        },
        {
            fieldName : "Freelance",
            fieldValue: "Available"
        },
    ]
}
const experience = {
    icon:'',
    title:'My experience',
    description:'As part of the GirlScript Summer of Code 2024, I had the opportunity to revamp and update the official website, significantly enhancing both its functionality and user experience. I utilized technologies such as HTML, CSS, JavaScript, React.js, and Node.js to resolve technical issues and implement performance improvements. My work ensured smooth operation of web features, streamlined the content management system, and applied best practices in web development to deliver a seamless, user-friendly experience for all visitors.',
    items:[
        {
            company:'GirlScript Summer of Code',
            position:'Full Stack Developer Intern',
            duration:'April-2024 to August-2024'
        }
    ]
};
const education = {
    icon:'',
    title:'My education',
    description:'I am a third-year B.Tech student in Information Technology at Netaji Subhas University of Technology (NSUT), New Delhi. ',
    items:[
        {
            institution:'Netaji Subhas University of Technology',
            degree:'B.Tech in Information Technology',
            duration:'2022 - 2026'
        }
    ]
};

const skills = {
  title: "My Skills",
  description:
    "Here are some of the technologies and tools I have worked with:",
  skillList: [
    // Programming Languages
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },

    // Frameworks & Libraries <RiNextjsFill />
    {
      icon: <RiNextjsFill />,
      name: "Next.js",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiSocketdotio />,
      name: "Socket.IO",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <TbBrandFramerMotion />,
      name: "Framer Motion",
    },

    // Databases
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma ORM",
    },
    {
      icon: <SiHono />,
      name: "Hono",
    },
    

    // Tools
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
  ],
};

import { TabsContent,Tabs,TabsList,TabsTrigger } from "/components/ui/tabs";
import { Tooltip, TooltipContent,TooltipProvider,TooltipTrigger} from "/components/ui/tooltip";
import { ScrollArea } from "/components/ui/scroll-area"; 
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay:2.4,duration:0.4,ease:"easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue= "skills"
        className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 '>
            
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>

          </TabsList>
          <div className='min-h-[70vh] w-full'>
            {/* experince */}
            <TabsContent value="experience" className="w-full"> 
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                
                <ScrollArea>
                  
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index) => {
                      
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent-hover">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          
                          <div className="flex items-center gap-3">
                             <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                             <p className="text-white/60">{item.company}</p>
                          </div>

                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
             
             {/* skills */}
            <TabsContent value="skills" className="w-full h-full"> 
               <div className="flex flex-col gap-[30px]">
                 <div className="flex flex-col gap-[30px] text-center xl:text-left">
                   <h3 className="text-4xl font-bold">{skills.title}</h3>
                   <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                   <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                    {skills.skillList.map((skill,index) => {
                      return(
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                             <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                               <div className="text-5xl group-hover:text-accent-hover group-hover:scale-110 transition-all duration-300">
                                {skill.icon}
                               </div>
                             </TooltipTrigger>
                             <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                             </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                   </ul>
                 </div>
               </div>
             </TabsContent>
             
             {/* education */}
             <TabsContent value="education" className="w-full"> 
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                
                <ScrollArea>
                  
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index) => {
                      
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent-hover">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          
                          <div className="flex items-center gap-3">
                             <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                             <p className="text-white/60">{item.institution}</p>
                          </div>

                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* about */}
            <TabsContent value="about" className="text-center xl:text-left">
               <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item,index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
               </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;