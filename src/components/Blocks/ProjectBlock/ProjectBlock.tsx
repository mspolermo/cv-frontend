import React, {FC} from "react";
import classes from "./ProjectBlock.module.scss"
import { ProjectsBlockProps } from "../../../types/block";
import { useNavigate } from "react-router-dom";
import ProjectDescriptionBlock from "../ProjectDescriptionBlock/ProjectDescriptionBlock";
import Icons from "../../Icons/Icons";
import cn from 'classnames';
import SkillTag from "../../UI/SkillTag/SkillTag";
import Slider from "../../UI/Slider/Slider";

const ProjectBlock:FC<ProjectsBlockProps> = ({type, index, project}) => {
    const navigate = useNavigate();
    
    //Распаковка массива строк и объектов в строку и массив тегов, для отрисовки
    const allTechArray = [];
    const tagsArray = [];
    for (let i=0; i<project.skills.length; i++) {

        if (typeof project.skills[i] === 'string') {

            allTechArray.push(project.skills[i]);
            tagsArray.push(project.skills[i]);

        } else {

            let innerObject = project.skills[i];
            type objectKeyType = keyof typeof innerObject; 

            let objectValue = "";

            Object.keys(innerObject).forEach((key) => {

                if (typeof innerObject[key as objectKeyType] === 'string') {

                    objectValue += innerObject[key as objectKeyType];
                    tagsArray.push(innerObject[key as objectKeyType]);

                } else {

                    let innerArray: string[] = innerObject[key as objectKeyType];
                    objectValue += ` (${innerArray.join(', ')})`;

                    innerArray.forEach( item => tagsArray.push(item));

                };
            });

            allTechArray.push(objectValue);
        };
    };
    const allTechString = allTechArray.join(', ');

    switch (type) {
        case 'short':
            return (
                <li className={classes.shortsProjectsBlock__item}
                        onClick={() => navigate('/cv-frontend/projects/' + project.name)} 
                >

                    <div className={classes.shortsProjectsBlock__left}>

                        <p className={cn (classes.shortsProjectsBlock__text, 
                                            classes.shortsProjectsBlock__text_id)}
                        >
                            {index}
                        </p>

                        <p className={cn("text", classes.shortsProjectsBlock__text)}>
                            {project.name}
                        </p>

                    </div>

                    <div className={classes.shortsProjectsBlock__center}></div>

                    <div className={classes.shortsProjectsBlock__right}>

                        {project.skills.map( (skill, i) =>

                            <div key={project.name + i} 
                                            className={classes.shortsProjectsBlock__techBlock}
                            >

                                { (typeof skill === 'string')
                                    ? <p>{skill}</p>
                                    : <p>{skill.title}</p>
                                }

                            </div>

                        )}  

                    </div>
                    
                </li>   
            )
        case 'full':
            return (
                <div className={classes.fullProjectsBlock}
                        onClick={() => navigate('/cv-frontend/projects/' + project.name)} 
                >

                    <h3 className={cn("heading-l3", classes.fullProjectsBlock__heading)}>
                        {project.name}
                    </h3>

                    <p className={cn("text", classes.fullProjectsBlock__summary)}>
                        {project.summary}
                    </p>

                    <p className={classes.fullProjectsBlock__tech}>
                        Используемые технологии: {allTechString}
                    </p>

                </div>
            )
        case 'extended':
            return (
                <div className={classes.extendedProjectBlock}>

                    <div className={classes.extendedProjectBlock__headBlock}>
                        <h3 className={"heading-l2 heading-l2__passive " + classes.extendedProjectBlock__heading}
                        >
                            {project.name}
                        </h3>

                        <div className={classes.extendedProjectBlock__linkBlock}>
                            {project.repo && <a href={project.repo} target="_blank" className={classes.extendedProjectBlock__link + ' ' + classes.extendedProjectBlock__link_gHub}>
                                <p className={classes.extendedProjectBlock__gitHub}>GitHub</p>
                            </a>}
                            {project.ghPage && <a href={project.ghPage} target="_blank" className={classes.extendedProjectBlock__link}>
                                <Icons name="gitHub" size="20" color="black" className={classes.extendedProjectBlock__icon} />
                                <p className={classes.extendedProjectBlock__ghPage}>
                                    <span className={classes.extendedProjectBlock__ghPage + ' ' + classes.extendedProjectBlock__ghPage_big}>GitHub</span>
                                    <span className={classes.extendedProjectBlock__ghPage + ' ' + classes.extendedProjectBlock__ghPage_small}>Pages</span>
                                </p>
                            </a>}
                        </div>

                    </div>

                    <p className={"text " + classes.extendedProjectBlock__summary}>{project.summary}</p>
                    
                    <ProjectDescriptionBlock project={project}/>

                    <Slider images={project.screenshots} type="wide"/>

                    <div className={classes.extendedProjectBlock__techBlock}>

                        {tagsArray.map( (tech) => 
                            <SkillTag key={tech.toString()} tag={tech.toString()} />
                        )}     

                    </div>
                    
                </div>
            )
    }

}

export default ProjectBlock;