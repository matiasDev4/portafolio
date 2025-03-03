import logo from '../assets/logo.svg' 
export const Header = () => {
    return (
        <header 
        className="bg-black text-white w-full h-20 flex items-center justify-between px-5
        shadow-[0px_0px_15px_black]">
            <div className="flex gap-1 items-center">
                <img src={logo} alt="" 
                className="w-12 rounded-full md:w-12"/>
                <h1 className="font-mono text-[20px]"> - Matias Alvarez</h1>
            </div>
        </header>
    )
}