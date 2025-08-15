import { Body } from "../components/Body.jsx"
import { Header } from "../components/Header.jsx"
import { Footer } from "./footer.jsx"
import { Sobremi } from "./sobremi.jsx"
import { Sobremi2 } from "./Sobremi2.jsx"

export const  App = () => {

    return (
        <>
        <Header />
        <Sobremi />
        <div className="flex justify-center">
            <Body />
        </div>
        <Footer />
        </>
    )
}