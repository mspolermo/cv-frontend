import React, { FC } from 'react';
import classes from "./ProjectDescriptionBlock.module.scss";
import { ProjectDescriptionBlockProps } from '../../../types/block';
import cn from 'classnames';


const ProjectDescriptionBlock:FC<ProjectDescriptionBlockProps> = ({project}) => {

    return (
        <div className={classes.projectDescBlock}>
            { Array.isArray(project.description) && <div>

                {project.description.map(item => <div key={item.title} 
                                                        className={classes.projectDescBlock__block}>

                    <h3 className={cn("heading-l3 heading-l3__passive", 
                                        classes.projectDescBlock__mainHead)}
                    >
                        {item.title}
                    </h3>

                    { (!Array.isArray(item.info)) && <p className={cn( "text", 
                                                            classes.projectDescBlock__body)}>
                        {item.info}
                    </p>}
                    
                    { (Array.isArray(item.info)) && <ul>

                        {item.info.map( (itemL2, i) => <li key={i}>
                            { (typeof itemL2 === 'string') 

                            ? <h4 className={cn("text", classes.projectDescBlock__titleL2)}>
                                {itemL2}
                            </h4>

                            : <div>

                                <h4 className={cn("text", classes.projectDescBlock__titleL2)}>
                                    {itemL2.titleL2}
                                </h4>

                                <ul>{itemL2.infoL2.map( (itemL3, i) => <li key={i}>

                                    { (typeof itemL3 === 'string') 

                                        ? <h5 className={cn("text", classes.projectDescBlock__titleL3)}>
                                            {itemL3}
                                        </h5>

                                        : <div>

                                            <h5 className={cn("text", classes.projectDescBlock__titleL3)}>
                                                {itemL3.titleL3}
                                            </h5>

                                            <ul>
                                                {itemL3.infoL3.map(itemL4 => <li key={itemL4} 
                                                                className={cn("text", classes.projectDescBlock__titleL4)}>
                                                    {itemL4}
                                                </li>)}
                                            </ul>

                                        </div>}

                                    </li>)}

                                </ul>

                            </div>}

                        </li>)}

                    </ul>}

                </div>)}
                
            </div>}
        </div>
    )
};

export default ProjectDescriptionBlock;