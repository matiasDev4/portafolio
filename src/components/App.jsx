import { Header } from "../components/Header.jsx"
import { cards } from "../utils/proyects.js"
import { CardProyect } from "./CardProyect.jsx"
import { Footer } from "./footer.jsx"
import { Sobremi } from "./sobremi.jsx"


export const App = () => {

    return (
        <>
            <Header />
            <Sobremi />
            <div className="md:max-w-[750px] lg:max-w-[1100px] mx-auto">
                <h1 className="text-amber-300 font-semibold py-10 px-2 text-3xl">Proyectos</h1>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-2 md:gap-x-30 lg:gap-x-50 place-items-center items-start auto-rows-fr px-5">
                    {cards.map(item =>
                        <CardProyect
                            key={item.name}
                            name={item.name}
                            description={item.description}
                            lenguajes={item.lenguajes}
                            image={item.img}
                            download={item.link}
                            github={item.link_repo}
                            active={item.active}
                            type={item.type}
                        />
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}
