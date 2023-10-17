import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PokeCard from '../components/Pokecard';
import { PokemonesContext } from '../context/PokemonesContext';

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const { pokemonesDetails } = useContext(PokemonesContext);

  useEffect(() => {

    pokemonesDetails(name).then(data => {
      const src = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat,
      }));

      const type = data.types.map(({ type }) => type.name).join('');
      setPokemon({ name, stats, src, type });
      
    });
  }, [name, pokemonesDetails]);

  return <PokeCard pokemon={pokemon} />;
};

export default Details;