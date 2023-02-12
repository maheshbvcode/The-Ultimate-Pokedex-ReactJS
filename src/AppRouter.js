import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { Navigation } from './components/Navigation';
import { FrontPage, MyPokemon, SearchPage } from './pages';

export const AppRouter = () => {
	return (<>
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<FrontPage />} />
				<Route path='pokemon/:id' element={<MyPokemon />} />
				<Route path='search' element={<SearchPage />} />
				
			</Route>

            <Route path='*' element={<Navigate to='/' />} />
		</Routes>
		<Footer/>
		</>
	);
};

