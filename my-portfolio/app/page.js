import { FaGithub, FaLinkedin, FaFileAlt} from "react-icons/fa";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import "./globals.css";


export default function Home() {

  const data = [
    {
      title: "SKILLS & TECHNOLOGIES",
      content: (
        <section id="Skills" className="bg-blue-200">
          
        </section>
      ),
    },

    {
      title: "PROJECTS",
      content: (
        <section id="Projects" className="bg-purple-200">
          
        </section>
      ),
    },

    {
      title: "ABOUT ME",
      content: (
        <section id="AboutMe" className="bg-green-200">
          
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
