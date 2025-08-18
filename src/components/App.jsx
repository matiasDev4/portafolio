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
            <div className="w-full max-w-screen-xl px-5 mx-auto">
                <h1 className="text-amber-300 font-semibold py-10 px-2 text-3xl text-center">Proyectos</h1>
                <div
                    className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center gap-8 items-start">
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
