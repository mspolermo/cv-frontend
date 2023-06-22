import React, {FC} from "react";
import classes from "./ProjectsBlock.module.scss"
import about from '../../static/about.json'

interface ProjectsBlockProps {
    type: "full" | "short"
}

const ProjectsBlock:FC<ProjectsBlockProps> = ({type}) => {
    switch (type) {
        case 'short':
            return (
                <div className={classes.shortsProjectsBlock}>

                    <h2 className={"heading-l2 " + classes.shortsProjectsBlock__heading}>Projects</h2>
                    
                    <ul className={classes.shortsProjectsBlock__list}>
                        {about.projects.map( project => 
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