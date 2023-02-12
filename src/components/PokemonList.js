import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import { Card } from './Card'
import { Loading } from './Loading'

export const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } =
  useContext(PokeContext);
  
return (
  <>
    {loading ? (
      <Loading />
    ) : (
      <div className='card-list-pokemon container'>
        {filteredPokemons.length ? (
          <>
            {filteredPokemons.map(pokemon => (
              <Card pokemon={pokemon} key={pokemon.id} />
            ))}
          </>
        ) : (
          <>
            {allPokemons.map(pokemon => (
              <Card pokemon={pokemon} key={pokemon.id} />
            ))}
          </>
        )}
      </div>
    )}
  </>
);
}
