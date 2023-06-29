import React, {FC} from "react";
import classes from "./ProjectBlock.module.scss"
import { ProjectsBlockProps } from "../../../types/block";

const ProjectBlock:FC<ProjectsBlockProps> = ({type, project}) => {
    switch (type) {
        case 'short':
            return (
                <div className={classes.shortsProjectsBlock__item}>

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
                    <h3 className={classes.fullProjectsBlock__heading}>{project.name}</h3>
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
    }

}

export default ProjectBlock;