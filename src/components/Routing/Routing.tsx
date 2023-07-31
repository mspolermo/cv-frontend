import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchMain } from '../../store/action-creators/main';

import AsideMenu from '../AsideMenu/AsideMenu';
import Header from '../Header/Header';
import MainPage from '../../pages/MainPage/MainPage';
import ListPage from '../../pages/ListPage/ListPage';
import ItemPage from '../../pages/ItemPage/ItemPage';
import Modal from '../UI/Modal/Modal';

const Routing = () => {
	const { t, i18n } = useTranslation();
	const { mainLoading, mainError } = useTypedSelector(state => state.main);
	const { menuStatus } = useTypedSelector(state => state.menuStatus);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMain());
	}, [dispatch]);

	if (mainLoading) {
		return (
			<div className='cleanPage'>
				<Modal type='load' />
			</div>
		);
	}

	if (mainError) {
		return (
			<div className='cleanPage'>
				<Modal type='error' error={mainError} />
			</div>
		);
	}

	const isRussian = i18n.language === 'ru';

	return (
		<div className="container">
			<AsideMenu />
			<div className={!menuStatus ? "rightPart" : "rightPart rightPart__narrow"}>
				<Header />
				<Routes>
					<Route path={'/cv-frontend/'} element={<MainPage />} />

					<Route path={'/cv-frontend/projects'} element={<ListPage type={isRussian ? 'projects' : 'projectsEn'} />} />
					<Route path={'/cv-frontend/work-experience'} element={<ListPage type={isRussian ? 'works' : 'worksEn'} />} />
					<Route path={'/cv-frontend/education'} element={<ListPage type={isRussian ? 'education' : 'educationEn'} />} />
					<Route path={'/cv-frontend/about'} element={<ListPage type={isRussian ? 'about' : 'aboutEn'} />} />

					<Route path={'/cv-frontend/contacts'} element={<ItemPage type='contacts' />} />

					<Route path={'/cv-frontend/skills/'} element={<ItemPage type='skills' />} />
					<Route path={'/cv-frontend/skills/hard-skills'} element={<ListPage type='hard-skills' />} />
					<Route path={'/cv-frontend/skills/soft-skills'} element={<ListPage type='soft-skills' />} />

					<Route path={'/cv-frontend/work-experience/:id'} element={<ItemPage type={isRussian ? 'work' : 'workEn'} />} />
					<Route path={'/cv-frontend/projects/:id'} element={<ItemPage type={isRussian ? 'project' : 'projectEn'} />} />
					<Route path={'/cv-frontend/skills/:id'} element={<ItemPage type='skill' />} />

					<Route path={'*'} element={<MainPage />} />
				</Routes>
			</div>
		</div>
	);
};

export default Routing;
