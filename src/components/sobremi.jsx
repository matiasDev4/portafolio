export const Sobremi  = () =>{
    return (
        <>
            <section className="w-full my-[4rem]">
                <div className="text-white flex flex-col-reverse lg:flex-row items-center lg:justify-center lg:gap-x-25">
                    <div className="w-80 text-left px-4 lg:w-100 lg:p-0">
                        <div className="my-5 ">
                            <h2 className="text-xl font-bold my-1 md:text-2xl">Hola!👋 me llamo</h2> 
                            <h1 
                            className="text-2xl font-bold my-2 md:text-3xl text-amber-400"
                            >Matias Ezequiel Alvarez</h1>
                        </div>
                        
                        <p 
                        className="text-md font-medium md:text-lg leading-relaxed"
                        >
                            Desarrollo soluciones full-stack modernas, combinando diseño y código. <br />
                            Mirá mis proyectos recientes y descubrí lo que puedo aportar. 👇
                        </p>
                    </div>
                    <div className="w-60 h-60 overflow-hidden rounded-full shadow-[0px_0px_20px_black]">
                        <img src="/images/yo.png" alt="profile" 
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}