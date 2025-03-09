import { FaGithub, FaLinkedin, FaFileAlt} from "react-icons/fa";

export default function Home() {
  return (
    <section id="Landing Page" className="w-screen h-screen bg-white">

      <div className="flex flex-col space-y-28"> 
        <div id="Navbar" className="w-screen top-0 py-5 px-18 border-black border-b-2"> 
          <div id="SectionLinks" className="flex flex-row space-x-32 justify-between">
            <div className="flex flex-row space-x-16"> 
              <a href="#Skills" target="_blank" className="text-lg font-chillax"> SKILLS </a>
              <a href="#Projects" target="_blank" className="text-lg font-chillax"> PROJECTS </a>
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
  );
}
