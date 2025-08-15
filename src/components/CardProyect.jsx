import { FaCheck } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

export const CardProyect = ({ name, description, lenguajes, image, download, github, active, type }) => {
    return (
        <article
            className="
        w-[400px] h-full md:w-[400px] bg-[#1f1f1f] rounded-lg shadow-[0px_0px_10px_black]/50
        px-2 py-2 hover:border-[#7a7a7a] border-1 transition-colors duration-200
        "
        >
            <div className="
            py-2 px-1 text-white font-semibold 
            ">
                <div className="flex justify-between items-center py-1">
                    <span
                        className="inline-flex items-center gap-x-2 border-1 border-green-100 px-2 rounded-md
                bg-green-400/20 text-sm py-1">
                        <span>{type}</span>
                    </span>
                    <div
                    className="flex items-center gap-x-4"
                    >
                        <a href={download}
                        className={`bg-[#141414] p-2 rounded-lg text-xl
                        border-1 border-transparent hover:border-[#3a3a3a] transition-all duration-200
                        ${active ? 'block' : 'hidden'}`}
                        >{type === 'Web' ? <FaLink /> : <FaDownload />} </a>
                        <a href={github}
                        className="bg-[#141414] p-2 rounded-lg text-xl
                        border-1 border-transparent hover:border-[#3a3a3a] transition-all duration-200"
                        ><FaGithub /></a>
                    </div>
                </div>
                <h1
                className="text-md py-4 md:text-lg"
                >{name}</h1>
            </div>
            <div className="px-2 py-2 bg-[#7c7a7a52] rounded-lg">
                <img src={image} alt={name}
                    className="rounded-lg object-cover"
                />
            </div>
            <div className="px-2 py-6 flex-1 text-left text-[#c4c4c4] font-semibold">
                <p>{description}</p>
            </div>
            <div className="p-2 flex flex-wrap gap-2">
                {lenguajes.map(item=>
                    <span 
                    className="border whitespace-nowrap text-sm border-[#747474] rounded-lg 
                    text-white px-3 py-1 bg-[#8383832a] font-semibold">
                        {item}
                    </span>
                )}
            </div>
        </article>
    )
}
