import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="fixed bottom-[calc(100vh-theme(spacing.16))] left-0 right-0 top-0">
            <nav className="header text-primary bg-bgColor shadow-md flex items-center justify-between px-8 py-3">
                <h1 className="text-base lg:text-2xl uppercase font-bold"><Link to={"/nbfc"}>CoLending</Link></h1>
                <div className="nav font-semibold text-lg"></div>
                <div className="w-3/12 flex justify-end"></div>
            </nav>
        </header>
    )
}

export default Header