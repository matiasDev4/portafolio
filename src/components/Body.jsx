import { RiExternalLinkFill } from "react-icons/ri";


export const Body = () => {
    const cards = [{
        "name": "Proyecto 'Patitas'",
        "description": "Una aplicacion web para la adopcion de mascotas, con un panel administrativo y formulario de adopcion",
        "lenguajes": ["react.png", "tailwindcss.svg", "fastAPI.svg", "python.svg"],
        "img": "../assets/proyectos/patitas.png",
        "link": "https://www.google.com",
        "active": true
    },
    {
        "name": "Proyecto 'Lolinails'",
        "description": "Aplicacion web para venta de cursos / reservacion de turnos y panel de administracion moderno - actalemente en desarrollo",
        "lenguajes": ["react.png", "tailwindcss.svg", "fastAPI.svg", "python.svg"],
        "img": "../assets/proyectos/nails.png",
        "link": "",
        "active": false
    },
    {
        "name": "Proyecto 'KVMYM'",
        "description": "Apliacion de escritorio para la gestion de facturas tipo A, el cual guarda los datos en una base de datos local para tener un segumiento de las facturas",
        "lenguajes": ["python.svg"],
        "img": "../assets/proyectos/kiosco.jpg",
        "link": "",
        "active": false
    }]
    return (
        <section className="my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-5 lg:mx-10 md:mx-16 xl:mx-28 place-items-center">
            {
                cards.map(index =>
                <div className="bg-white m-2 h-auto rounded-xl shadow-[0px_0px_20px_black] lg:max-w-[400px]"> 
                    <div className="p-2 relative hover:[&>div]">
                        <img src={index.img} alt="" className="rounded-xl" />
                        <div className="bg-black/20 text-black font-bold h-12 lg:h-14 px-5 py-2
                        text-[20px] lg:text-[22px] rounded-t-xl my-2">
                            <h1>{index.name}</h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-2 justify-between gap-y-5">
                        <p className="px-2 text-center lg:text-[20px]">{index.description}</p>
                        <div className="[&>img]:w-6 flex flex-row gap-5 my-2 ">
                            {index.lenguajes.map(lenguaje => <img src={`../assets/lenguajes/${lenguaje}`} alt=""/>)}
                        </div>
                        <div className="my-2">
                            <a href="https://c19-57-n-python-react.vercel.app/" target="_blank" rel="noreferrer"
                            className={`flex flex-row items-center gap-x-2
                            text-white py-2 px-5 rounded-[10px] hover:cursor-pointer
                            hover:bg-gray-400/90 transition-all duration-300 ${index.active ? "bg-black" : "hidden"}`}>
                                {index.active ? "Visitar web" : ""} 
                            <span><RiExternalLinkFill /></span></a>
                        </div>
                    </div>
                </div>
                )
            }
        </section>
    )
}