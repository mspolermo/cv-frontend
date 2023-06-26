import React from 'react';
import { Route, Routes } from "react-router-dom";
import AsideBlock from '../AsideBlock/AsideBlock';
import Header from '../Header/Header';
import MainPage from '../../pages/MainPage/MainPage';

const Routing = () => {
	return (
		<div className="container">
			<AsideBlock />
			<div className='rightPart'>
				<Header/>
				<Routes>
					{/* <Route path={'/movies-website/person/:id'} element={<PersonPage />} /> */}
					<Route path={'/movies-website'} element={<MainPage />} />
					<Route path={'*'} element={<MainPage />} />
				</Routes>
			</div>
		</div>
	);
};

export default Routing;