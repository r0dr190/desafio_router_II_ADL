import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Pokemones = () => {

    const [personajes , setPersonajes] = useState([]);

    useEffect(() => {

        document.title= "PokeApi";
        getApi();
    }, []);

    const getApi = async() => {

        const url = "https://pokeapi.co/api/v2/pokemon/";

        const response = await fetch(url);

        const pokemon = await response.json();

        /* console.log(pokemon) */
        const dibujos = pokemon.results.map((dibujo) => {

            return {

                name: dibujo.name,
                url: dibujo.url
            };
        });

        setPersonajes(dibujos);

        /* console.log(personajes) */
    };

    const navigate = useNavigate()

    return(
        <div >
            <h1>Selecciona un Pokemón</h1>

            <form name="formulario"> 

            <label htmlFor="listado">pokemones: </label> 
                <p>     
                    <select name="pokemon">     
                {
                    personajes.map((personaje) => {

                        return(
                            <option 
                                value="" 
                                key={personaje.name}
                                onClick={() => navigate(`/PostItemPage/${personaje.name}`)}
                            >   
                                {personaje.name}
                            </option>      
                        )
                    })
                }
                    </select>   
                </p>
            </form>
        </div>
    )
}