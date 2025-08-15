import { Body } from "../components/Body.jsx"
import { Header } from "../components/Header.jsx"
import { cards } from "../utils/proyects.js"
import { CardProyect } from "./CardProyect.jsx"
import { Footer } from "./footer.jsx"
import { Sobremi } from "./sobremi.jsx"
import { Sobremi2 } from "./Sobremi2.jsx"

export const  App = () => {

    return (
        <>
        <Header />
        <Sobremi />
        <div 
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 place-items-center px-2 items-start auto-rows-fr">
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
        <Footer />
        </>
    )
}
