import React, {FC} from "react";
import classes from "./ProjectBlock.module.scss"
import { ProjectsBlockProps } from "../../../types/block";
import { useNavigate } from "react-router-dom";
import ProjectDescriptionBlock from "../ProjectDescriptionBlock/ProjectDescriptionBlock";
import Icons from "../../Icons/Icons";

const ProjectBlock:FC<ProjectsBlockProps> = ({type, project}) => {
    const navigate = useNavigate();

    switch (type) {
        case 'short':
            return (
                <div className={classes.shortsProjectsBlock__item}
                        onClick={() => navigate('/cv-frontend/projects/' + project.name)} 
                >

                    <div className={classes.shortsProjectsBlock__left}>

                        <div className={"text " + classes.shortsProjectsBlock__text 
                                        + " " + classes.shortsProjectsBlock__text_id}
                        >
                            {project.id}
                        </div>

                        <div className={"text " + classes.shortsProjectsBlock__text}>
                            {project.name}
                        </div>

                    </div>

                    <div className={classes.shortsProjectsBlock__center}></div>

                    <div className={classes.shortsProjectsBlock__right}>

                        {project.tech.map( tech => 

                            <div key={tech} className={"text " 
                                            + classes.shortsProjectsBlock__text 
                                            + " "
                                            + classes.shortsProjectsBlock__tech}
                            >
                                    {tech}
                            </div>

                        )}  

                    </div>
                    
                </div>   
            )
        case 'full':
            return (
                <div className={classes.fullProjectsBlock}>
                    <h3 className={"heading-l3 " + classes.fullProjectsBlock__heading}
                        onClick={() => navigate('/cv-frontend/projects/' + project.name)} 
                    >
                        {project.name}
                    </h3>
                    <p className={"text " + classes.fullProjectsBlock__summary}>{project.summary}</p>
                    <div className={classes.fullProjectsBlock__techBlock}>
                        <p className={classes.fullProjectsBlock__techHead}>Используемые технологии:</p>
                        <div className={classes.fullProjectsBlock__techArray}>
                            {project.tech.map( tech => 
                                <div key={tech} className={classes.fullProjectsBlock__tech}>{tech}</div>
                            )}     
                        </div>
                    </div>
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
                            <a href={project.repo} target="_blank" className={classes.extendedProjectBlock__link + ' ' + classes.extendedProjectBlock__link_gHub}>
                                <p className={classes.extendedProjectBlock__gitHub}>GitHub</p>
                            </a>
                            <a href={project.ghPage} target="_blank" className={classes.extendedProjectBlock__link}>
                                <Icons name="gitHub" size="20" color="black" className={classes.extendedProjectBlock__icon} />
                                <p className={classes.extendedProjectBlock__ghPage}>
                                    <span className={classes.extendedProjectBlock__ghPage + ' ' + classes.extendedProjectBlock__ghPage_big}>GitHub</span>
                                    <span className={classes.extendedProjectBlock__ghPage + ' ' + classes.extendedProjectBlock__ghPage_small}>Pages</span>
                                </p>
                            </a>
                        </div>

                    </div>
                    <p className={"text " + classes.extendedProjectBlock__summary}>{project.summary}</p>
                    <ProjectDescriptionBlock description={project.description}/>
                    <div className={classes.extendedProjectBlock__techBlock}>
                        <p className={classes.extendedProjectBlock__techHead}>Используемые технологии:</p>
                        <div className={classes.extendedProjectBlock__techArray}>
                            {project.tech.map( tech => 
                                <div key={tech} className={classes.extendedProjectBlock__tech}>{tech}</div>
                            )}     
                        </div>
                    </div>
                    
                    
                </div>
            )
    }

}

export default ProjectBlock;