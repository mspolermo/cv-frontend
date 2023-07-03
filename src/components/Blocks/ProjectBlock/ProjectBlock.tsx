import React, {FC} from "react";
import classes from "./ProjectBlock.module.scss"
import { ProjectsBlockProps } from "../../../types/block";
import { useNavigate } from "react-router-dom";
import CreateList from "../../CreateList/CreateList";

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
                    <CreateList items={project.description}/>
                </div>
            )
    }

}

export default ProjectBlock;