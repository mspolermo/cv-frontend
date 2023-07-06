import React, {FC} from "react";
import classes from "./ProjectsList.module.scss"
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { ProjectsListProps } from "../../../types/list";
import ProjectBlock from "../../Blocks/ProjectBlock/ProjectBlock";

const ProjectsList:FC<ProjectsListProps> = ({type}) => {

    const {user} = useTypedSelector(state => state.user);
    const navigate = useNavigate();
    const importantProjects = user.projects.filter(project => project.important === true);

    switch (type) {
        case 'short':
            return (
                <div className={classes.projectsList}>

                    <h2 className={"heading-l2 " + classes.projectsList__heading}
                        onClick={() => navigate('/cv-frontend/projects')}
                    >
                        Projects
                    </h2>
                    
                    <ul className={classes.projectsList__list}>
                        {importantProjects.map( (project, i) => 
                            <li key={project.name} className={classes.projectsList__item}>
                                {(project.important) && 
                                    <ProjectBlock type={type} index={i + 1} project={project}/>
                                }
                            </li>    
                        )}
                    </ul>

                </div>
            );
        case 'full':
            return (
                <div className={classes.projectsList}>

                    <h2 className={"heading-l2 heading-l2__passive " + classes.projectsList__heading}
                        onClick={() => navigate('/cv-frontend/projects')}
                    >
                        Projects
                    </h2>
                    
                    <ul className={classes.projectsList__list}>
                        {user.projects.map( project => 
                            <li key={project.name} className={classes.projectsList__item}>
                                <ProjectBlock type={type} project={project}/>
                            </li>    
                        )}
                    </ul>

                </div>
            );
    }
    
}

export default ProjectsList;