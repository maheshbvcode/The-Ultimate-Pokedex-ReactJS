import React from 'react'
import { Link } from 'react-router-dom'
import { firstCapital } from '../context/firstCapital'

export const Card = ({pokemon}) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
			<div className='card-img'>
				<img 
					src={pokemon.id<10 ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${pokemon.id}.png`
				:pokemon.id<100 ?`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${pokemon.id}.png`
				:`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`
				}
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className='card-info'>
				<span className='pokemon-id'>#{pokemon.id}</span>
				<h3>{firstCapital(pokemon.name)}</h3>
				<div className='card-types'>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
					))}
				</div>
			</div>
		</Link>
  )
}
