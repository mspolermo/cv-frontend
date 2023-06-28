import React, {FC, useEffect} from "react";
import classes from "./ListPage.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creators/user";
import ProjectsBlock from "../../components/ProjectsBlock/ProjectsBlock";
import WorkExperienceList from "../../components/Lists/WorkExperienceList/WorkExperienceList";
import EducationList from "../../components/Lists/EducationList/EducationList";
import Loader from "../../components/UI/Loader/Loader";
import AboutList from "../../components/Lists/AboutList/AboutList";

interface ListPageProps {
    type: 'projects' | 'works' | 'education' | 'about' 
}

const ListPage:FC<ListPageProps> = ({type}) => {
    const {error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()
    
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [])

    useEffect(() => {
        dispatch(fetchUser())
    },[dispatch])

    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }
    switch (type) {
        case 'projects':
            return (
                <div className={"container-internal " + classes.mainPage}>
                    <ProjectsBlock type="full"/>
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
    }
} 

export default ListPage;