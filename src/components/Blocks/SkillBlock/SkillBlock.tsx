import React, {FC} from "react";
import classes from "./SkillBlock.module.scss";
import { SkillBlockProps } from "../../../types/block";
import cn from 'classnames';
import { useNavigate } from "react-router-dom";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getAllSkills } from "../../../hooks/utils";

const SkillBlock:FC<SkillBlockProps> = ({skill, type}) => {
    const {mainData} = useTypedSelector(state => state.main);
    const navigate = useNavigate();

    const projectsSkillsArray = mainData.projects.map( (project) => {
        return [project.name, `/cv-frontend/projects/${project.name}`, getAllSkills(project, 'array')]
    });
    const worksSkillsArray = mainData.works.map( (work) => {
        return [work.company, `/cv-frontend/work-experience/${work.companyEn}`, getAllSkills(work, 'array')]
    });
    const allSkillsArray = projectsSkillsArray.concat(worksSkillsArray);

    switch (type) {
        case 'short':
            return (
                <li className={classes.skillBlock}>
                    {(typeof skill == 'string') 
                    ?
                        <div className={classes.skillBlock__item}>
                            <p className={ cn( "text", 
                                            classes.skillBlock__text, 
                                            classes.skillBlock__text_mark)
                            }>
                                {skill}
                            </p>

                        </div>
                    : 

                        <div className={classes.skillBlock__item}>
                            <p className={cn("text", 
                                        classes.skillBlock__text, 
                                        classes.skillBlock__text_mark)
                            }>
                                {skill.title}
                            </p>
                            <div>
                                {skill.value.map( info => 
                                    <p key={info} className={cn("text", 
                                                    classes.skillBlock__text, 
                                                    classes.skillBlock__text_markL2)
                                    }>
                                        {info}
                                    </p>
                                )}
                            </div>
                        </div>

                    }
                </li>    
            )
        case "full":
            return (
                <li className={classes.fullSkillBlock}>
                    {(typeof skill == 'string') 
                    ?
                        <div className={classes.fullSkillBlock__item}>
                            <p className={cn("text", classes.fullSkillBlock__skillName)}>
                                {skill}
                            </p>

                            {allSkillsArray.map( (project, i) => {
                                if (project[2].includes(skill)){
                                    return (
                                        <div key={i} onClick={() => navigate(`${project[1]}`)} 
                                                className={cn("text", 
                                                            classes.fullSkillBlock__skillAprove)}
                                        >
                                            {project[0].toString()}
                                        </div>)};
                                return null;
                            })}

                        </div>
                    : 

                        <div>

                            <div className={classes.fullSkillBlock__item}>
                                <p className={cn("text", classes.fullSkillBlock__skillName)}>
                                    {skill.title}
                                </p>

                                {allSkillsArray.map( (project, i) => {
                                    if (project[2].includes(skill.title)){
                                        return (
                                            <div key={i} onClick={() => navigate(`${project[1]}`)}
                                                    className={cn("text", classes.fullSkillBlock__skillAprove)}
                                            >
                                                {project[0].toString()}
                                            </div>)};
                                    return null;
                                })}
                            </div>
                           
                            {skill.value.map( info => 
                                <div key={info} className={classes.fullSkillBlock__item}>
                                    <p key={info} className={cn("text", classes.fullSkillBlock__skillName)}>
                                        {info}
                                    </p>

                                    {allSkillsArray.map( (project, i) => {
                                        if (project[2].includes(info)){
                                            return (
                                                <div key={i} onClick={() => navigate(`${project[1]}`)}
                                                        className={cn("text", classes.fullSkillBlock__skillAprove)}
                                                >
                                                    {project[0].toString()}
                                                </div>)};
                                        return null;
                                    })}

                                </div>
                            )}
                            
                        </div>

                    }
                </li> 
            )
    };

};

export default SkillBlock;