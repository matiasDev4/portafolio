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
            <div className="md:max-w-[750px] lg:max-w-[1100px] md:mx-auto w-full px-2">
                <h1 className="text-amber-300 font-semibold py-10 px-2 text-3xl text-center">Proyectos</h1>
                <div
                    className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] place-items-center gap-10 items-start">
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
