import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const PostItemPage = () => {

    const { id } = useParams()

    const [ pokemon , setPokemon ] = useState([{}])

    useEffect(() => {

        document.title= 'Pokemon Selected'
        getPokemon()
    }, [])

    const getPokemon = async() => {

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`

        const response = await fetch(url);

        const pokemn = await response.json();

        console.log(pokemn)
        const dibujo = {
                
                img: pokemn.sprites.other.dream_world.front_default,
                id: pokemn.id,
                name: pokemn.name,
                height: pokemn.height,
                weight: pokemn.weight
        };

        setPokemon(dibujo)

        console.log(pokemon)
    }

    return(

        <div>
            <h1>{ id }</h1>
            {
                <div className="d-flex inline-block justify-content-center border border-secondary rounded rounder-3 mx-5">
                    <div className="align-items-center">
                        <img src={pokemon.img} alt="" />
                    </div>
                    <div className="d-flex align-items-center px-5">
                        <div className="">
                            <p><b>ID:</b> {pokemon.id}</p>
                            <p><b>NAME:</b> {pokemon.name}</p>
                            <p><b>HEIGHT:</b> {pokemon.height}</p>
                            <p><b>WEIHT:</b> {pokemon.weight}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}