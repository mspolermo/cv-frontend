import React, {FC} from "react";
import classes from "./SkillBlock.module.scss";
import { SkillBlockProps } from "../../../types/block";
import cn from 'classnames';
import { useNavigate } from "react-router-dom";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getAllSkills } from "../../../hooks/utils";
import { useTranslation } from "react-i18next";

const SkillBlock:FC<SkillBlockProps> = ({skill, type}) => {
    // eslint-disable-next-line
    const {t, i18n} = useTranslation();
    const {mainData} = useTypedSelector(state => state.main);
    const navigate = useNavigate();

    let projectsSkillsArray = mainData.projects.ru.map( (project) => {
        return [project.name, `/cv-frontend/projects/${project.name}`, getAllSkills(project)]
    });
    let worksSkillsArray = mainData.works.ru.map( (work) => {
        return [work.company, `/cv-frontend/work-experience/${work.companyEn}`, getAllSkills(work)]
    });
    if (i18n.language === 'en') {
        projectsSkillsArray = mainData.projects.en.map( (project) => {
            return [project.name, `/cv-frontend/projects/${project.name}`, getAllSkills(project)]
        });
        worksSkillsArray = mainData.works.en.map( (work) => {
            return [work.company, `/cv-frontend/work-experience/${work.companyEn}`, getAllSkills(work)]
        });
    }
    const allSkillsArray = projectsSkillsArray.concat(worksSkillsArray);

    

    if (type === 'full' || type === 'fullSolo') {
        return (
            <li className={classes.fullSkillBlock}>
                {(typeof skill == 'string') 
                ?
                    <div className={type === 'full' 
                        ?
                            classes.fullSkillBlock__item
                        :
                            cn(classes.fullSkillBlock__item, classes.fullSkillBlock__item_solo)}
                    >
                        <p className={ type === 'full'
                            ?
                                cn("text", classes.fullSkillBlock__skillName)
                            :
                            cn("text", classes.fullSkillBlock__skillName, classes.fullSkillBlock__skillName_solo)
                            }
                            onClick={() => navigate('/cv-frontend/skills/' + skill)} 
                        >
                            {t(`skills.${skill}`).includes('.') 
                                ? (skill)
                                : t(`skills.${skill}`)
                            }
                        </p>

                        <div className={classes.fullSkillBlock__aproveBlock}>
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
                    </div>
                : 

                    <div>

                        <div className={classes.fullSkillBlock__item}>
                            <p className={cn("text", classes.fullSkillBlock__skillName)}
                                onClick={() => navigate('/cv-frontend/skills/' + skill.title)} 
                            >
                                {t(`skills.${skill.title}`).includes('.') 
                                    ? (skill.title)
                                    : t(`skills.${skill.title}`)
                                }
                            </p>
                            <div className={classes.fullSkillBlock__aproveBlock}>
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
                        </div>
                       
                        {skill.value.map( info => 
                            <div key={info} className={classes.fullSkillBlock__item}>
                                <p key={info} onClick={() => navigate('/cv-frontend/skills/' + info)} 
                                    className={cn("text", classes.fullSkillBlock__skillName)}>
                                    {t(`skills.${info}`).includes('.') 
                                        ? (info)
                                        : t(`skills.${info}`)
                                    }
                                </p>

                                <div className={classes.fullSkillBlock__aproveBlock}>
                                    {allSkillsArray.map( (project, i) => {
                                        if (project[2].includes(info)){
                                            return (
                                                <div key={i} onClick={() => navigate(`${project[1]}`)}
                                                        className={cn("text", classes.fullSkillBlock__skillAprove)}
                                                >
                                                    {project[0].toString()}
                                                </div>)}
                                        return null;
                                    })}
                                </div>

                            </div>
                        )}
                        
                    </div>

                }
            </li> 
        )
    };
    return (
        <li className={ type ==='short' 
                        ? cn(classes.skillBlock, classes.skillBlock__short)
                        : classes.skillBlock}>
            {(typeof skill == 'string') 
            ?
                <div className={classes.skillBlock__item}>
                    <p className={ cn( "text", 
                                    classes.skillBlock__text, 
                                    classes.skillBlock__text_mark)}
                        onClick={() => navigate('/cv-frontend/skills/' + skill)} 
                    >
                        {t(`skills.${skill}`).includes('.') 
                            ? (skill)
                            : t(`skills.${skill}`)
                        }
                    </p>

                </div>
            : 

                <div className={classes.skillBlock__item}>
                    <p className={ type ==='short' 
                                ?
                                    cn("text", 
                                    classes.skillBlock__text, 
                                    classes.skillBlock__text_mark,
                                    classes.skillBlock__text_short)
                                :
                                    cn("text", 
                                    classes.skillBlock__text, 
                                    classes.skillBlock__text_mark)}
                        onClick={() => navigate('/cv-frontend/skills/' + skill.title)}               
                    >
                        {t(`skills.${skill.title}`).includes('.') 
                            ? (skill.title)
                            : t(`skills.${skill.title}`)
                        }
                    </p>
                    <div>
                        {skill.value.map( info => 
                            <p key={info} className={type ==='short' 
                                            ?
                                                cn("text", 
                                                classes.skillBlock__text, 
                                                classes.skillBlock__text_markL2,
                                                classes.skillBlock__text_short)
                                            :
                                                cn("text", 
                                                classes.skillBlock__text, 
                                                classes.skillBlock__text_markL2)}
                                onClick={() => navigate('/cv-frontend/skills/' + info)}  
                            >
                                {t(`skills.${info}`).includes('.') 
                                    ? (info)
                                    : t(`skills.${info}`)
                                }
                            </p>
                        )}
                    </div>
                </div>

            }
        </li>    
    )


};

export default SkillBlock;