import React from 'react'
import { PokeContext } from '../context/PokeContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../components/Card';
export const SearchPage = () => {

  const location = useLocation();

	const { globalPokemons } = useContext(PokeContext);

	const filteredPokemons = globalPokemons.filter(pokemon =>
		pokemon.name.includes(location.state.toLowerCase())
	);

  return (
    <div className='container'>
			<p className='p-search'>
				Founded <span>{filteredPokemons.length}</span>{' '}
				result:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<Card pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
  )
}
