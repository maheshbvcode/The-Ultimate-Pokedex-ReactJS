import { PokeContext } from "./PokeContext"
import { useEffect,useState } from "react"
import { useMe } from "../hooks/useMe"

export const PokeProvider = ({children}) => {

    const [offset, setoffset] = useState(0)
    const [allPokemons,setAllPokemons]= useState([])
    const [globalPokemons,setGlobalPokemons] = useState([])

    // Creating Simple Application States
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState(false);

    // Utilizing CustomHook - useMe
	const { valueSearch, onInputChange, onResetForm } = useMe({
		valueSearch: '',
	});

    

    // Calling 50 Pokemons from PokeApi
	const getAllPokemons = async (limit = 50) => {
		const dataURL = 'https://pokeapi.co/api/v2/';

		const resp = await fetch(
			`${dataURL}pokemon?limit=${limit}&offset=${offset}`
		);
		const data = await resp.json();

		const promise = data.results.map(async pokemon => {
			const resp = await fetch(pokemon.url);
			const data = await resp.json();
			return data
		});
		const results = await Promise.all(promise);

        setAllPokemons([...allPokemons,...results])
        setLoading(false)
    }

    //Calling all Pokemons from PokeAPI
    const getGlobalPokemons = async() => {
		const dataURL = 'https://pokeapi.co/api/v2/';

		const resp = await fetch(
			`${dataURL}pokemon?limit=100000&offset=0`
		);
		const data = await resp.json();

		const promise = data.results.map(async pokemon => {
			const resp = await fetch(pokemon.url);
			const data = await resp.json();
			return data
		});
		const results = await Promise.all(promise);

        setGlobalPokemons(results)
        setLoading(false)
    }

    // Calling Pokemon By ID
	const getPokemonByID = async (id) => {
		const dataURL = 'https://pokeapi.co/api/v2/';

		const resp = await fetch(`${dataURL}pokemon/${id}`);
		const data = await resp.json();
		return data;
	};

    useEffect(() => {
      getAllPokemons()
    },
       [offset])

    useEffect(()=>{
        getGlobalPokemons()
    },[])

    //Clicking Load More Button

    const onClickLoadMore = ()=>{
    setoffset(offset + 50)
    }

    // Filter function

    const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

    const [filteredPokemons, setfilteredPokemons] = useState([]);

	const handleCheckbox = (e) => {
		setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked,
		});

        if (e.target.checked) {
			const filteredResults = globalPokemons.filter(pokemon =>
				pokemon.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);

			setfilteredPokemons([...filteredPokemons, ...filteredResults]);
		} else {
			const filteredResults = filteredPokemons.filter(
				pokemon =>
					!pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setfilteredPokemons([...filteredResults]);
		}

		};
    

    

  return (
    <PokeContext.Provider value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonByID,
        onClickLoadMore,
        //Loader
        loading,
        setLoading,

        //Button Fliter
        active,
        setActive,

        // Filter Container
			
				handleCheckbox,
				filteredPokemons,
                handleCheckbox,
				filteredPokemons,
    }}>
        {children}
    </PokeContext.Provider>
  )
}
