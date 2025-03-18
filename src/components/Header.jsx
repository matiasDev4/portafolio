import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
    return (
        <header 
        className="bg-transparent text-white w-full h-20 flex items-center justify-between px-5
        shadow-[0px_0px_15px_black] sticky top-0 z-50 backdrop-blur-sm">
            <div className="flex gap-1 items-center">
                <img src="images/logo.jpg" alt="" 
                className="w-10 rounded-xl md:w-12 mx-2"/>
                <h1 className="font-mono text-[15px] md:text-[20px] mx-2 ">  Portfolio</h1>

            </div>
            <div className="flex flex-row gap-x-5 text-[25px]">
                <a href="https://github.com/matiasDev4"
                className="hover:bg-gray-700/60 p-2 hover:rounded-full transition-all duration-300
                hover:-translate-y-1"><FaGithub /></a>
                <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BQVBTrbRhQqu%2FwwbMyT4u%2FA%3D%3D"
                className="hover:bg-gray-700/60 p-2 hover:rounded-full transition-all duration-300
                hover:-translate-y-1"><FaLinkedin/></a>
            </div>
        </header>
    )
}