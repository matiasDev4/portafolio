import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
    return (
        <header 
        className="bg-black text-white w-full h-20 flex items-center justify-between px-5
        shadow-[0px_0px_15px_black]">
            <div className="flex gap-1 items-center">
                <img src="images/logo.jpg" alt="" 
                className="w-12 rounded-full md:w-12"/>
                <h1 className="font-mono text-[20px]"> - Matias Alvarez</h1>

            </div>
            <div className="flex flex-row gap-x-5 text-[25px]">
                <a href=""
                className="hover:bg-green-600/60 p-2 hover:rounded-full transition-all duration-300
                hover:-translate-y-1"><FaGithub /></a>
                <a href=""
                className="hover:bg-green-600/60 p-2 hover:rounded-full transition-all duration-300
                hover:-translate-y-1"><FaLinkedin/></a>
            </div>
        </header>
    )
}