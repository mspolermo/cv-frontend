import React, {FC, useEffect} from "react";
import classes from "./MainPage.module.scss";
import WorkExperienceList from "../../components/Lists/WorkExperienceList/WorkExperienceList";
import EducationList from "../../components/Lists/EducationList/EducationList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creators/user";
import Loader from "../../components/UI/Loader/Loader";
import AboutList from "../../components/Lists/AboutList/AboutList";
import ProjectsList from "../../components/Lists/ProjectsList/ProjectsList";
import Modal from "../../components/UI/Modal/Modal";

const MainPage:FC = () => {
    const {user, error, loading} = useTypedSelector(state => state.user)
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
            <div>
                <Modal type='error' error={error}/>
            </div>
        )
    };
    return (
        <div className={"container-internal " + classes.mainPage}>
            <p className={"text " + classes.mainPage__summary}>{user.summary}</p>
            <ProjectsList type="short"/>
            <WorkExperienceList type="short"/>
            <EducationList type="short"/>
            <AboutList type="short"/>
        </div>
    );
};

export default MainPage;