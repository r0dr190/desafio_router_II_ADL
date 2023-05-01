import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextProvider } from "../context/ContextProvider"

export const NavBar = () => {

    const { checkIfIsActive } = useContext(ContextProvider)

    return(
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-white">Navbar</span>
                <NavLink to="/" className={checkIfIsActive} class="text-white ms-3 text-decoration-none">
                    <span>Home</span>
                </NavLink>
                <NavLink to="/Favoritos" className={checkIfIsActive} class="text-white ms-3 text-decoration-none">
                    <span>Pokemones</span>
                </NavLink>
            </div>
        </nav>
    )
}