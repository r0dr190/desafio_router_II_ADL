import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "../componentes/NavBar";
import { Enrutador } from "../componentes/Enrutador";

export const ContextProvider = createContext({})

export const CtxProvider = () => {

    const checkIfIsActive = (({ isActive }) => (isActive ? 'active-link' : 'inactive-link'))

    

    const contextValues = { checkIfIsActive }

    return(
        <ContextProvider.Provider value={contextValues}>
            <BrowserRouter>
                <NavBar/>
                <Enrutador/>
            </BrowserRouter>
        </ContextProvider.Provider>
    )
}