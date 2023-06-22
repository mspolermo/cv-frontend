import React, {FC} from "react";
import classes from "./MainPage.module.scss"
import about from '../../static/about.json'
import ProjectsBlock from "../../components/ProjectsBlock/ProjectsBlock";
import WorkExperienceBlock from "../../components/WorkExperienceBlock/WorkExperienceBlock";
import EducationBlock from "../../components/EducationBlock/EducationBlock";

const MainPage:FC = () => {
    return (
        <div className={"container-internal " + classes.mainPage}>
            <p className={"text " + classes.mainPage__summary}>{about.summary}</p>
            <ProjectsBlock type="short"/>
            <WorkExperienceBlock type="short"/>
            <EducationBlock type="short"/>
        </div>
    )
}

export default MainPage;