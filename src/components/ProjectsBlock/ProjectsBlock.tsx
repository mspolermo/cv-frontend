import React, {FC} from "react";
import classes from "./ProjectsBlock.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ProjectsBlockProps } from "../../types/block";
import { useNavigate } from "react-router-dom";

const ProjectsBlock:FC<ProjectsBlockProps> = ({type}) => {

    const {user} = useTypedSelector(state => state.user);
    const navigate = useNavigate();

    switch (type) {
        case 'short':
            return (
                <div className={classes.shortsProjectsBlock}>

                    <h2 className={"heading-l2 " + classes.shortsProjectsBlock__heading}
                        onClick={() => navigate('/cv-frontend/projects')}
                    >
                        Projects
                    </h2>
                    
                    <ul className={classes.shortsProjectsBlock__list}>
                        {user.projects.map( project => 
                            <li key={project.id} className={classes.shortsProjectsBlock__item}>

                                <div className={classes.shortsProjectsBlock__left}>

                                    <div className={"text " + classes.shortsProjectsBlock__text 
                                                    + " " + classes.shortsProjectsBlock__text_id}
                                    >
                                        {project.id}
                                    </div>

                                    <div className={"text " 
                                                    + classes.shortsProjectsBlock__text 
                                                    + " "}
                                    >
                                            {project.link}
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
                                
                            </li>    
                        )}
                    </ul>

                </div>
            );
        case 'full':
            return (
                <div className={classes.projectsBlock}>
                    <h2>BIG PROJECTS BLOCK</h2>
                </div>
            );
    }
    
}

export default ProjectsBlock;