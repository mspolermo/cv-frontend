import React, {FC, useEffect} from "react";
import classes from "./MainPage.module.scss"
import ProjectsBlock from "../../components/ProjectsBlock/ProjectsBlock";
import WorkExperienceBlock from "../../components/WorkExperienceBlock/WorkExperienceBlock";
import EducationBlock from "../../components/EducationBlock/EducationBlock";
import AboutBlock from "../../components/AboutBlock/AboutBlock";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creators/user";

const MainPage:FC = () => {
    const {user, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()
	console.log(loading)

    useEffect(() => {
        dispatch(fetchUser())
    },[])

    if (loading) {
        return (
            <div></div>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }
    return (
        <div className={"container-internal " + classes.mainPage}>
            <p className={"text " + classes.mainPage__summary}>{user.summary}</p>
            <ProjectsBlock type="short"/>
            <WorkExperienceBlock type="short"/>
            <EducationBlock type="short"/>
            <AboutBlock type="short"/>
        </div>
    )
}

export default MainPage;