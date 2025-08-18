import { lenguagesImages } from "../utils/proyects"

export const Sobremi = () => {
    return (
        <>
            <section className="w-full h-auto my-8 max-w-screen-xl mx-auto
            flex flex-col-reverse lg:flex-row lg:justify-around items-center lg:items-start gap-y-5">
                <div className="w-full px-4 ">
                    <div className="text-white md:w-100">
                        <h4 className="text-lg font-bold">Hola, soy</h4>
                        <h1 className="text-3xl py-1 font-extrabold
                        text-amber-400
                        whitespace-nowrap inline-block">Matias Alvarez 👋</h1>
                        <p className="leading-relaxed text-md lg:text-lg pt-2 text-[#e0e0e0] font-semibold w-full "
                        >Soy desarrollador de software con experiencia en aplicaciones de escritorio y desarrollo web. Me especializo en crear soluciones eficientes e
                        interfaces modernas.</p>
                    </div>
                    <h1 className="text-amber-300 font-semibold text-lg py-4 px-1 whitespace-nowrap inline-flex">Stack Tecnológico</h1>
                    <div className="grid grid-cols-3 lg:grid-cols-5 lg:place-items-left lg:mx-0 mx-auto w-[300px] items-start gap-5 lg:w-[600px] my-2">
                        {lenguagesImages.map(item=>
                            <div
                            className="bg-white/10 backdrop-blur-3xl flex flex-col gap-y-1 items-center justify-center py-2
                            rounded-lg w-20 ring-2 ring-white/20 shadow-[0px_0px_10px_black]/40 hover:bg-white/20 transition-colors duration-300"
                            key={item.name}
                            >
                                <img src={item.image} alt={item.name} 
                                className="w-8 h-8"
                                />
                                <span className="whitespace-nowrap text-sm font-semibold text-[#c4c4c4]">{item.name}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-50 h-50 lg:w-90 lg:h-100 overflow-hidden rounded-2xl">
                    <img src="images/yo.png" alt="yo" 
                    className="w-full h-full"
                    />
                </div>
            </section>
        </>
    )
}
