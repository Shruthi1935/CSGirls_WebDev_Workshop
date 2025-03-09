import { FaGithub, FaLinkedin, FaFileAlt, FaGit} from "react-icons/fa";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import "./globals.css";

import { SiPython, SiCplusplus, SiR, SiRstudioide, SiJavascript, SiTypescript, SiSqlite, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiExpress, SiNodedotjs, SiNextdotjs, SiVite, SiMysql, SiFirebase, SiVercel, SiGit, SiGithub, SiNpm, SiFigma} from "react-icons/si";



export default function Home() {

  const data = [
    {
      title: "SKILLS & TECHNOLOGIES",
      content: (
        <section id="Skills" className="">
          <div className="flex flex-col space-y-16 py-24 pr-8 ml-auto w-max">
            <div className="flex flex-row space-x-20"> 
              <SiPython className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-400" />
              <SiCplusplus className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiR className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiRstudioide className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiJavascript className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />            
            </div>
            <div className="flex flex-row space-x-20"> 
              <SiTypescript className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiSqlite className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiHtml5 className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiCss3 className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiTailwindcss className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />            
            </div>
            <div className="flex flex-row space-x-20"> 
              <SiReact className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiExpress className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiNodedotjs className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiNextdotjs className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiVite className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />            
            </div>
            <div className="flex flex-row space-x-20"> 
              <SiMysql className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiFirebase className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiVercel className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiGit className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiGithub className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />            
            </div>
            <div className="flex flex-row space-x-20"> 
              <SiNpm className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />
              <SiFigma className="text-black text-5xl cursor-pointer hover:-translate-y-3 duration-300 hover:text-amber-500" />     
            </div>
          </div>
        </section>
      ),
    },

    {
      title: "PROJECTS",
      content: (
        <section id="Projects" className="">
          <div className="flex flex-col space-y-12 pr-8 ml-auto w-max"> 
            <div className="flex flex-row space-x-12"> 
              <div className="bg-gray-200 h-64 w-64 rounded-md cursor-pointer hover:scale-110 duration-500"> Hey </div>
              <div className="bg-gray-200 h-64 w-64 rounded-md cursor-pointer hover:scale-110 duration-500"> Hey </div>
              <div className="bg-gray-200 h-64 w-64 rounded-md cursor-pointer hover:scale-110 duration-500"> Hey </div>
            </div>
            <div className="flex flex-row space-x-12"> 
              <div className="bg-gray-200 h-64 w-64 rounded-md cursor-pointer hover:scale-110 duration-500"> Hey </div>
              <div className="bg-gray-200 h-64 w-64 rounded-md cursor-pointer hover:scale-110 duration-500"> Hey </div>
              <div className="bg-gray-200 h-64 w-64 rounded-md cursor-pointer hover:scale-110 duration-500"> Hey </div>
            </div>
            <div className="flex flex-row space-x-12"> 
              <div className="bg-gray-200 h-64 w-64 rounded-md cursor-pointer hover:scale-110 duration-500"> Hey </div>
              <div className="bg-gray-200 h-64 w-64 rounded-md cursor-pointer hover:scale-110 duration-500"> Hey </div>
              <div className="bg-gray-200 h-64 w-64 rounded-md cursor-pointer hover:scale-110 duration-500"> Hey </div>
            </div>
          </div>
        </section>
      ),
    },

    
  ];


  return (
    <>
      <section id="Landing Page" className="w-screen h-screen bg-white">
        <div className="flex flex-col space-y-28"> 
          <div id="Navbar" className="w-screen top-0 py-5 px-18 border-black border-b-2"> 
            <div id="SectionLinks" className="flex flex-row space-x-32 justify-between">
              <div className="flex flex-row space-x-16"> 
                <a href="#Skills" className="text-lg font-chillax"> SKILLS </a>
                <a href="#Projects" className="text-lg font-chillax"> PROJECTS </a>
                <a href="#AboutMe" className="text-lg font-chillax"> ABOUT ME </a>
                <a href="/resume.pdf" download className="text-lg font-chillax"> RESUME </a>
              </div>
              <div id="SocialLinks" className="flex flex-row space-x-6"> 
                <a href="https://www.linkedin.com/in/shruthi-yenamagandla-23883428b/" target="_blank"> 
                  <FaLinkedin className="text-black text-3xl" /> 
                </a>
                <a href="https://github.com/Shruthi1935" target="_blank"> 
                  <FaGithub className="text-black text-3xl" /> 
                </a>            
              </div>
            </div>
          </div>

          <div id="LandingPageContent">
            <div className="flex flex-col space-y-72 p-18"> 
              <div id="Greeting" className="font-camellia text-8xl self-end"> heyy </div>
              <div id="Name" className="font-sugarmagic text-8xl"> shruthi <br/> yenamagandla </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Timeline"> 
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </section>
    </>
  );
}
