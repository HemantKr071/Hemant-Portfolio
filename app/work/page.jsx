"use client";
import { motion } from "framer-motion";
import React,{useState} from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowUpRight,BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent,TooltipProvider,TooltipTrigger} from "/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi";

const projects = [
    {
        num:'01',
        category:"Full Stack - AI",
        title:"RepoRead.AI",
        description:"RepoRead.AI is an AI-powered tool that helps you generate professional, polished `README` files for your GitHub repositories in seconds. Simply connect your GitHub account, choose a repository, and let the AI do the rest. RepoRead.AI saves you hours of manual writing and improves your project documentation instantly.",
        stack:[{name:"TypeScript"},{name:"JavaScript"},{name:"React.Js"},{name:"Node.js"},{name:"Express.js"},{name:"MongoDB"},{name:"LangChain"},{name:"Framer Motion"},{name:"Tailwind CSS"},{name:"Git OAuth"}],
        image:"/assets/RepoRead.png",
        live:"https://reporead.ai.heyhemant.tech/",
        github:"https://github.com/HemantKr071/RepoRead.AI",
       
    },
    {
        num:'02',
        category:"Full Stack - AI",
        title:"LogoGenius",
        description:"Logo Genius is an AI-powered logo generation tool that helps you create stunning logos in seconds. Customize your design, save it, and bring your brand to life effortlessly!",
        stack:[{name:"TypeScript"},{name:"Next.Js"},{name:"Clerk"},{name:"Hugging Face"},{name:"FireBase"},{name:"Tailwind CSS"},],
        image:"/assets/LogoGenius.png",
        live:"https://logogenius.heyhemant.tech/",
        github:"https://github.com/HemantKr071/LogoGenius",
       
    },
    {
        num:'03',
        category:"Full Stack",
        title:"Blog it",
        description:" BlogIt is a blogging platform where users can create, upload, and read blogs written by others. It features user authentication, a rich text editor for writing blogs, and an intuitive interface for browsing and exploring diverse content. With BlogIt, users can share their ideas, discover stories, and connect with others through their writings.",
        stack:[{name:"TypeScript"},{name:"React.Js"},{name:"Hono"},{name:"Cloudfare"},{name:"Prisma ORM"},{name:"MongoDB"},{name:"Tailwind CSS"},],
        image:"/assets/Blogit.png",
        live:"https://www.blogit.heyhemant.tech/",
        github:"https://github.com/HemantKr071/Blog.it",
       
    },
     {
        num:'04',
        category:"Frontend",
        title:"Agency Portfolio",
        description:" A modern, responsive digital agency portfolio website built with React, Tailwind CSS and Framer Motion. This portfolio showcases agency services, projects, and team information with a clean, professional design and smooth user experience.",
        stack:[{name:"JavaScript"},{name:"React.Js"},{name:"Tailwind CSS"},{name:"Framer Motion"}],
        image:"/assets/AgencyPortfolio.png",
        live:"https://agency-portfolio-ruby.vercel.app/",
        github:"https://github.com/HemantKr071/Agency_Portfolio",
       
    },
    {
        num:'05',
        category:"Full Stack",
        title:"BookMyHotel",
        description:" BookMyHotel is a fully deployed hotel booking application built using the MERN stack, offering a secure and user-friendly experience with a modern and responsive design. ",
        stack:[{name:"JavaScript"},{name:"React.Js"},{name:"Node.Js"},{name:"Express.Js"},{name:"CSS"},{name:"MongoDB"},{name:"MaterialUI"},],
        image:"/assets/BookMyHotel_HomePage.png",
        live:"https://bookmyhotel071.vercel.app/",
        github:"https://github.com/HemantKr071/BookMyHotel-Frontend",
       
    },
    {
        num:'06',
        category:"Full Stack",
        title:"RealTime Spreadsheet Collaboration",
        description:" The Real-Time Spreadsheet App is an interactive web application designed to allow multiple users to collaborate on a spreadsheet in realtime.The project emphasizes the implementation of core features such as live updates, user presence tracking, and efficient data management. ",
        stack:[{name:"React.Js"},{name:"Node.Js"},{name:"Express.Js"},{name:"Socket.IO"},{name:"CSS"},{name:"HandsonTable.Js"},{name:"MongoDB"},],
        image:"/assets/spreadsheet.png",
        live:"https://social-calc.vercel.app/",
        github:"https://github.com/HemantKr071/SocialCalc",
       
    }

]
const Work = () => {
    const [project,setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 " 
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px]">
                            <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/*Project category*/}
                            <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/*Project Description*/}
                            <p className="text-white/60 text-sm">{project.description}</p>
                            {/*Tech Stack*/}
                              <h2 className="text-[25px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500 capitalize">Tech Stack:</h2>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-5">
                                {project.stack.map((item,index) => {
                                    return(
                                        <li key={index} className="text-sm text-accent-hover">
                                            {item.name} 
                                        </li>
                                    )
                                })}
                              </ul>
            
                            {/* Border */}
                            <div className="border border-white/20"></div>
                            {/* Buttons */}
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                   <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                                            <BsArrowUpRight className="text-white text-3xl"/>
                                         </TooltipTrigger>
                                         <TooltipContent>
                                            <p>Live Project link</p>
                                         </TooltipContent>
                                      </Tooltip>
                                   </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                   <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                                            <BsGithub className="text-white text-3xl"/>
                                         </TooltipTrigger>
                                         <TooltipContent>
                                            <p>Github Repo link</p>
                                         </TooltipContent>
                                      </Tooltip>
                                   </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[70%]">
                        <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={handleSlideChange}
                        className="xl:h-[520px] mb-12 ">
                            {projects.map((project,index) => {
                                return (
                                    
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl overflow-hidden ">
                        
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt=""/>
                            
                                            </div>

                                            
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* Slider Buttons */}
                            
                                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent-hover hover:bg-accent-hover text-primary text-[22px]  h-[44px] w-[44px] flex justify-center items-center transition-all"/>
                                
            
                        </Swiper>
                        
                    </div>
                </div>
            </div>

        </motion.section>

    )
}
export default Work;