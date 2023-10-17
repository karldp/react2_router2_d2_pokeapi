import { createContext, useState, useEffect } from "react";

export const PokemonesContext = createContext();

const PokemonesProvider = ({ children }) => {
    const [pokemones, setPokemones] = useState([]);
    const [pokemonesSelected, setPokemonesSelected] = useState("");

    const url = "https://pokeapi.co/api/v2/pokemon";

    const getPokemons = async () => {
        const rest = await fetch(url);
        const { results } = await rest.json();
        setPokemones(results);
    };

    const pokemonesDetails = async (name) => {
        const response = await fetch(`${url}/${name}`);
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        getPokemons();
    }, []);

    return (
        <PokemonesContext.Provider
            value={{
                pokemones,
                setPokemones,
                pokemonesSelected,
                setPokemonesSelected,
                pokemonesDetails
            }}>
            {children}
        </PokemonesContext.Provider>
    );
};

export default PokemonesProvider;