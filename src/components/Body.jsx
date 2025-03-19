import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export const Body = () => {
    const cards = [{
        "name": "💡 Patitas - Plataforma de Adopción de Mascotas",
        "description": "Una aplicación web para la adopción de mascotas, con un panel administrativo y formulario de adopcion",
        "lenguajes": ["React JS", "Tailwind", "FastAPI", "Python"],
        "img": "proyectos/patitas.PNG",
        "link": "https://c19-57-n-python-react.vercel.app/",
        "link_repo":"https://github.com/matiasDev4/C23-65-WEBAPP",
        "active": true
    },
    {
        "name": "🛒 Lolinail - Cursos online",
        "description": "Una web enfocada en la venta de cursos, con un panel para el administrador.",
        "lenguajes": ["React JS", "Tailwind", "FastAPI", "Python"],
        "img": "proyectos/nails.PNG",
        "link":"",
        "link_repo": "https://github.com/matiasDev4/lolinails-web",
        "active": false,
    },
    {
        "name": "📄 KVMYM - Gestor de facturas ",
        "description": "Apliación de escritorio para la gestion de facturas tipo A, el cual mantiene un suguimiento de impuestos y totales.",
        "lenguajes": ["Python", "Flet"],
        "img": "proyectos/kiosco.JPG",
        "link": "",
        "link_repo": "https://github.com/matiasDev4/gestor_app",
        "active": false,
        
    }]
    return (
        <section className="my-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-5 lg:mx-10 md:mx-16 xl:mx-28 place-items-center
        md:max-w-[1200px]">
            {
                cards.map(index =>
                <div className="bg-white m-2 h-auto rounded-xl shadow-[0px_0px_20px_black] lg:max-w-[400px]
                hover:scale-[1.02] hover:cursor-pointer hover:shadow-[0px_20px_20px_black] transition-all duration-300" key={index.name}> 
                    <div className="p-2 relative hover:[&>div]">
                        <img src={index.img} alt="" className="rounded-xl" />
                        <div className="bg-black/20 text-black font-bold h-12 lg:h-14 px-2 py-2
                        text-[12px] lg:text-[15px] rounded-t-xl my-2 flex items-center">
                            <h1>{index.name}</h1>
                        </div>
                        <span className={`absolute top-5 left-4 ${index.active ? "bg-green-500/60" : ""} rounded-lg px-2 py-1
                        text-[14px] font-semibold`}>{index.active ? "Online ✔️ " : ""}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 justify-between gap-y-5">
                        <p className="px-2 text-center lg:text-[18px] text-gray-800">{index.description}</p>
                        <div className="flex flex-col gap-y-4">
                            <h2 className="font-semibold">Lenguajes que utilize 👇</h2>
                            <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 place-items-center">
                                {index.lenguajes.map(lenguaje => 
                                    <span
                                    className="bg-gray-300/80 px-3 py-1 rounded-lg flex items-center text-[13px] font-semibold">{lenguaje}</span>
                                )}
                            </div>
                        </div>
                        <div className="my-2 flex flex-row gap-x-2 lg:gap-x-4">
                            <a href={index.link} target="_blank" rel="noreferrer"
                            className={`flex flex-row items-center gap-x-2
                            text-white py-2 px-5 rounded-[10px] hover:cursor-pointer
                            hover:bg-gray-400/90 transition-all duration-300 ${index.active ? "bg-black" : "hidden"}`}>
                                {index.active ? "Visitar web" : ""} 
                            <span><RiExternalLinkFill /></span></a>

                            <a href={index.link_repo} target="_blank" rel="noreferrer"
                            className={`flex flex-row items-center gap-x-2
                            text-white py-2 px-5 rounded-[10px] hover:cursor-pointer
                            hover:bg-gray-400/90 transition-all duration-300 bg-black`}>
                                Repositorio
                            <span><FaGithub /></span></a>
                        </div>
                    </div>
                </div>
                )
            }
        </section>
    )
}