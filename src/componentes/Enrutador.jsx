import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Pokemones } from "./Pokemones"
import { PostItemPage } from "../PostItemPage"

export const Enrutador = () => {

    return(

        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Favoritos" element={<Pokemones />} />
                <Route path="/PostItemPage/:id" element={<PostItemPage />} />
            </Routes>
        </div>
    )
}