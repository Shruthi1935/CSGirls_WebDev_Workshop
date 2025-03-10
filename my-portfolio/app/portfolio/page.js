import { SiPython, SiCplusplus, SiR, SiRstudioide, SiJavascript, SiTypescript, SiSqlite, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiExpress, SiNodedotjs, SiNextdotjs, SiVite, SiMysql, SiFirebase, SiVercel, SiGit, SiGithub, SiNpm, SiFigma} from "react-icons/si";
import { FaGithub, FaLinkedin, FaFileAlt, FaFile} from "react-icons/fa";

export default function PortfolioPage() {
    return (
      <section id="PortfolioPage">  
      <div className="flex flex-col space-y-8"> 
        <div className="font-sugarmagic text-8xl text-black px-24 pt-20 pb-5"> Personal Portfolio</div>
        <div className="flex flex-row space-x-12 mx-24">
            <a href="https://shruthi1935.github.io/Personal-Portfolio/" target="_blank"> 
                <img src="/portfolio2.png" alt="Description" className="h-150 w-250 ml-auto rounded-md cursor-pointer hover:scale-101 duration-400"/>
            </a>
            <section className="space-y-8">
                <div className="font-chillax text-2xl text-black"> Description </div>
                <div className="flex flex-row space-x-5"> 
                    <SiMysql className="text-black text-4xl cursor-pointer hover:-translate-y-2 duration-300" />
                    <SiFirebase className="text-black text-4xl cursor-pointer hover:-translate-y-2 duration-300" />
                    <SiVercel className="text-black text-4xl cursor-pointer hover:-translate-y-2 duration-300" />
                    <SiGit className="text-black text-4xl cursor-pointer hover:-translate-y-2 duration-300" />
                    <SiGithub className="text-black text-4xl cursor-pointer hover:-translate-y-2 duration-300" />            
                </div>
            </section>
        </div>
      </div>
      </section>
    );
  }
  