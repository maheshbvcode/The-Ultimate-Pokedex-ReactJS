import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { firstCapital } from '../context/firstCapital'
import { PokeContext } from '../context/PokeContext'

export const MyPokemon = () => {

const {getPokemonByID}=useContext(PokeContext)

const [loading,setLoading] = useState(true)
const [pokemon, setPokemon] = useState({})

const {id}=useParams();

const fetchPokemon = async id => {
  const data = await getPokemonByID(id);
  setPokemon(data);
  setLoading(false);
};

useEffect(()=>{
  fetchPokemon(id)
},[])


  return (
    <main className='container main-pokemon'>
			{loading ? (
				<Loading/>
			) : (
				<>
					<div className='header-main-pokemon'>
						<span className='number-pokemon'>#{pokemon.id}</span>
						<div className='container-img-pokemon'>
							<img
								src={pokemon.id<10 ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${pokemon.id}.png`
								:pokemon.id<100 ?`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${pokemon.id}.png`
								:`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`
								}
									alt={`Pokemon ${pokemon.name}`}
							/>
						</div>

						<div className='container-info-pokemon'>
							<h1>{firstCapital(pokemon.name)}</h1>
							<div className='card-types info-pokemon-type'>
								{pokemon.types.map(type => (
									<span key={type.type.name} className={`${type.type.name}`}>
										{type.type.name}
									</span>
								))}
							</div>
							<div className='info-pokemon'>
								<div className='group-info'>
									<p>Height</p>
									<span>{pokemon.height}</span>
								</div>
								<div className='group-info'>
									<p>Weight</p>
									<span>{pokemon.weight}Kg</span>
								</div>
							</div>
						</div>
					</div>

					<div className='container-stats'>
						<h1>Battle-Stats</h1>
						<div className='stats'>
							<div className='stat-group'>
								<span>Hp</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[0].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Attack</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[1].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Defense</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[2].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Attack</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[3].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Defense</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[4].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Speed</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[5].base_stat}
								</span>
							</div>
						</div>
					</div>
				</>
			)}
		</main>
  )
}
