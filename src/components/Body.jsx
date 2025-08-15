import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export const Body = () => {

    return (
        <section className="w-full my-5 flex flex-col items-center">
            <h1 className="text-5xl text-center text-white font-bold">Mis proyectos</h1>
            <div className="my-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-5 lg:mx-10 md:mx-16 xl:mx-28 place-items-center
        md:max-w-[1200px] ">
            {
                cards.map(index =>
                <div className="bg-[#272727] m-2 h-auto rounded-xl shadow-[0px_0px_20px_black]/5 lg:max-w-[400px]
                hover:scale-[1.02] hover:cursor-pointer hover:shadow-[0px_8px_10px_black]/2 transition-all duration-300
                border-1 hover:border-[#4b4b4b] text-white border-black
                " key={index.name}> 
                    <div className="p-2 relative hover:[&>div]">
                        <img src={index.img} alt="" className="rounded-xl" />
                        <div className="bg-[#141414] text-white font-bold h-12 lg:h-15 px-2 py-2
                        text-sm lg:text-sm rounded-t-xl my-2 flex items-center">
                            <h1>{index.name}</h1>
                        </div>
                        <span className={`absolute top-5 left-4 ${index.active ? "bg-green-500/60" : ""} rounded-lg px-2 py-1
                        text-[14px] font-semibold`}>{index.active ? "Online ✔️ " : ""}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 justify-between gap-y-5">
                        <p className="px-2 text-center text-lg lg:text-lg text-white/90">{index.description}</p>
                        <div className="flex flex-col gap-y-4">
                            <h2 className="font-semibold text-center">Lenguajes que utilize 👇</h2>
                            <div className="grid grid-cols-2 gap-2 place-items-center lg:grid-cols-4">
                                {index.lenguajes.map(lenguaje => 
                                    <span
                                    className="bg-gray-300/80 px-3 py-1 rounded-lg flex items-center text-[0.9rem] mb-2 break-inside-avoid 
                                    text-black font-semibold">{lenguaje}</span>
                                )}
                            </div>
                        </div>
                        <div className="my-2 flex flex-row gap-x-2 lg:gap-x-4 text-sm lg:text-md font-semibold">
                            <a href={index.link} target="_blank" rel="noreferrer"
                            className={`flex flex-row items-center gap-x-2
                            text-white py-2 px-5 rounded-[10px] hover:cursor-pointer
                            hover:bg-black/50 transition-all duration-300 ${index.active ? "bg-black" : "hidden"}`}>
                                {index.type === 'app' ? "Descargar" : "Visitar web"} 
                            <span><RiExternalLinkFill /></span></a>

                            <a href={index.link_repo} target="_blank" rel="noreferrer"
                            className={`flex flex-row items-center gap-x-2
                            text-white py-2 px-5 rounded-[10px] hover:cursor-pointer
                            hover:bg-black/50 transition-all duration-300 bg-black`}>
                                Repositorio
                            <span><FaGithub /></span></a>
                        </div>
                    </div>
                </div>
                )
            }
            </div>
        </section>
    )
}
