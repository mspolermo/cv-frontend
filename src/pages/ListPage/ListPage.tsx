import React, {FC, useEffect} from "react";
import classes from "./ListPage.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creators/user";
import WorkExperienceList from "../../components/Lists/WorkExperienceList/WorkExperienceList";
import EducationList from "../../components/Lists/EducationList/EducationList";
import Loader from "../../components/UI/Loader/Loader";
import AboutList from "../../components/Lists/AboutList/AboutList";
import ProjectsList from "../../components/Lists/ProjectsList/ProjectsList";
import { ListPageProps } from "../../types/page";
import AsideList from "../../components/Lists/AsideList/AsideList";

const ListPage:FC<ListPageProps> = ({type}) => {
    const {user, error, loading} = useTypedSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        dispatch(fetchUser());
    },[dispatch]);

    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        )
    };
    if (error) {
        return (
            <div>{error}</div>
        )
    };
    switch (type) {
        case 'projects':
            return (
                <div className={"container-internal " + classes.mainPage}>
                    <ProjectsList type="full"/>
                </div>
            )
        case 'works':
            return (
                <div className={"container-internal " + classes.mainPage}>
                    <WorkExperienceList type="full"/>    
                </div>
            )
        case 'education':
            return (
                <div className={"container-internal " + classes.mainPage}>
                    <EducationList type="full"/>
                </div>
            )
        case 'about':
            return (
                <div className={"container-internal " + classes.mainPage}>
                    <AboutList type="full"/>
                </div>
            )
    };
};

export default ListPage;