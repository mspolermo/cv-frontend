import React, {FC} from "react";
import classes from "./ListMapper.module.scss";
import { ListMapperProps } from "../../types/list";

import cn from 'classnames';
import { useNavigate } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import WorkExperienceBlock from "../Blocks/WorkExperienceBlock/WorkExperienceBlock";
import ProjectBlock from "../Blocks/ProjectBlock/ProjectBlock";
import EducationBlock from "../Blocks/EducationBlock/EducationBlock";
import AboutBlock from "../Blocks/AboutBlock/AboutBlock";
import SkillBlock from "../Blocks/SkillBlock/SkillBlock";

const ListMapper:FC<ListMapperProps> = ({type, name}) => {
    const navigate = useNavigate();
    const {user} = useTypedSelector(state => state.user);
    const {mainData} = useTypedSelector(state => state.main);

    const importantProjects = user.projects.filter(project => project.important === true);
    const importantWorks = user.works.filter(work => work.important === true);
    const importantEducation = user.education.filter(educate => educate.important === true);

    let routPath = '';
    let listHeading = '';
    switch (name) {
        case 'hard-skills':
            routPath = 'skills/hard-skills';
            listHeading = 'Tech Skills';
            break;
        case 'soft-skills':
            routPath = 'skills/soft-skills';
            listHeading = 'Soft Skills';
            break;
        case 'projects':
            routPath = 'projects';
            listHeading = "Projects";
            break
        case 'works':
            routPath = 'work-experience';
            listHeading = 'Work experience';
            break;
        case 'education':
            routPath = 'education';
            listHeading = 'Education';
            break;
        case 'about': 
            routPath = 'about';
            listHeading = 'About me';
            break;
    }

    switch (type) {
        case 'short':
            return (
                <div className={classes.list}>

                    <h3 className={cn("heading-l2", classes.list__heading)}
                        onClick={() => navigate(`/cv-frontend/${routPath}/`)} 
                    >
                        {listHeading}
                    </h3>

                    { (name === 'hard-skills') && <ul className={classes.list__list}>
                        {mainData.skills.hard.map( (skill) =>
                            <SkillBlock type={type} 
                                        skill={skill} 
                                        key={ (typeof skill == 'string')
                                                ? skill
                                                : skill.title} />
                        )}
                    </ul>}

                    { (name === 'soft-skills') && <ul className={classes.list__list}>
                        {mainData.skills.soft.map( (skill) =>
                            <SkillBlock type={type} 
                                        skill={skill} 
                                        key={ (typeof skill == 'string')
                                                ? skill
                                                : skill.title} />
                        )}
                    </ul>}

                    { (name === 'projects') && <ul className={classes.projectsList__list}>
                        {importantProjects.map( (project, i) => 
                            <ProjectBlock key={project.name} type={type} index={i + 1} project={project}/>  
                        )}
                    </ul>}

                    { (name === 'works') && <ul className={classes.list__list}>
                        {importantWorks.map( work => 
                            <WorkExperienceBlock key={work.start + work.finish} work={work} type={type}/>
                        )}
                    </ul>}

                    { (name === 'education') && <ul className={classes.list__list}>
                        {importantEducation.map( educate =>
                            <EducationBlock key={educate.title + educate.year} educate={educate} type={type}/>  
                        )}
                    </ul>}

                    { (name === 'about') && <ul className={classes.list__list}>
                        <AboutBlock point={user.about[0]}/>
                    </ul>}

                </div>
            )
        case "full":
            return (
                <div className={classes.list}>

                    <h3 className={cn("heading-l2 heading-l2__passive", classes.list__heading)}
                        onClick={() => navigate(`/cv-frontend/${routPath}/`)} 
                    >
                        {listHeading}
                    </h3>

                    { (name === 'hard-skills') && <ul className={classes.list__list}>
                        {user.skills.hard.map( (skill) =>
                            <SkillBlock type={type} 
                                        skill={skill} 
                                        key={ (typeof skill == 'string')
                                                ? skill
                                                : skill.title} />
                        )}
                    </ul>}

                    { (name === 'soft-skills') && <ul className={classes.list__list}>
                        {user.skills.soft.map( (skill) =>
                            <SkillBlock type={type} 
                                        skill={skill} 
                                        key={ (typeof skill == 'string')
                                                ? skill
                                                : skill.title} />
                        )}
                    </ul>}

                    { (name === 'projects') && <ul className={classes.projectsList__list}>
                        {user.projects.map( (project) => 
                            <ProjectBlock key={project.name} type={type} project={project}/>
                        )}
                    </ul>}

                    { (name === 'works') && <ul className={classes.list__list}>
                        {user.works.map( work => 
                            <WorkExperienceBlock key={work.start + work.finish} work={work} type={type}/>
                        )}
                    </ul>}

                    { (name === 'education') && <ul className={classes.list__list}>
                        {user.education.map( educate =>
                            <EducationBlock key={educate.title + educate.year} educate={educate} type={type}/>  
                        )}
                    </ul>}

                    { (name === 'about') && <ul className={classes.list__list}>
                        {user.about.map( (point, i) =>
                                <AboutBlock key={i} point={point}/>
                        )}
                    </ul>}

                </div>
            )
    };
};

export default ListMapper;