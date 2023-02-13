import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
import { useNavigate } from "react-router-dom";
import pokedex_logo from "../assets/pokedex_logo.png"

export const Navigation = () => {
	
  const { onInputChange, valueSearch, onResetForm } =
  useContext(PokeContext);

const navigate = useNavigate();

const onSearchSubmit = e => {
  e.preventDefault();
  navigate('/search', {
    state: valueSearch,
  });

  onResetForm();
};
	
	

	return (
		<>
			<header className='container'>
				<Link to='/' className='logo'>
					<img
						src={pokedex_logo}
						alt='Logo'
					/>
				</Link>

				<form onSubmit={onSearchSubmit}>
					<div className='form-group'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon-search'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
						<input
							type='search'
							name='valueSearch'
							id=''
              value={valueSearch}
							onChange={onInputChange}
							placeholder='Search Buddy'
						/>
					</div>

					<button className='btn-search'>Search</button>
				</form>
			</header>

			

			<Outlet />
		</>
	);
};
