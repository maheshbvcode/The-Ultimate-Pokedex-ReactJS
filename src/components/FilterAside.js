import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext';
export const FilterAside = () => {
    const { active, handleCheckbox} = useContext(PokeContext);
  return (
    <div className={`container-filters ${active ? 'active':''}`}>
			<div className='filter-by-type'>
				<span>Type</span>
                <div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='fire'
						id='fire'
					/>
					<label htmlFor='fire'>Fire</label>
				</div>

                <div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='water'
						id='water'
					/>
					<label htmlFor='water'>Water</label>
				</div>

				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='grass'
						id='grass'
					/>
					<label htmlFor='grass'>Grass</label>
				</div>

                <div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='flying'
						id='flying'
					/>
					<label htmlFor='flying'>Flying</label>
				</div>
				
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='bug'
						id='bug'
					/>
					<label htmlFor='bug'>Bug</label>
				</div>
				

                    <div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='fighting'
						id='fighting'
					/>
					<label htmlFor='fighting'>Fighting</label>

				</div>
                <div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='fairy'
						id='fairy'
					/>

					<label htmlFor='fairy'>Fairy</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='dragon'
						id='dragon'
					/>
					<label htmlFor='dragon'>Dragon</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='shadow'
						id='shadow'
					/>
					<label htmlFor='shadow'>shadow</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='ground'
						id='ground'
					/>
					<label htmlFor='ground'>Ground</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='normal'
						id='normal'
					/>
					<label htmlFor='normal'>Normal</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='psychic'
						id='psychic'
					/>
					<label htmlFor='psychic'>Psychic</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='steel'
						id='steel'
					/>
					<label htmlFor='steel'>Steel</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='dark'
						id='dark'
					/>
					<label htmlFor='dark'>Dark</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='electric'
						id='electric'
					/>
					<label htmlFor='electric'>Electric</label>
				</div>
				
			
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='ice'
						id='ice'
					/>
					<label htmlFor='ice'>Ice</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='poison'
						id='poison'
					/>
					<label htmlFor='poison'>Poison</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='rock'
						id='rock'
					/>
					<label htmlFor='rock'>Rock</label>
				</div>
				
			</div>
		</div>
  )
}
