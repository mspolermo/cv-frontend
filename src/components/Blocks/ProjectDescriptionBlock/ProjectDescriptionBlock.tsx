import React, { FC } from 'react';
import classes from "./ProjectDescriptionBlock.module.scss"
import { ProjectDescriptionBlockProps } from '../../../types/block';
import cn from 'classnames';


const ProjectDescriptionBlock:FC<ProjectDescriptionBlockProps> = ({project}) => {

    return (
        <div>
            { Array.isArray(project.description) && <div className={classes.projectDescBlock}>

                {project.description.map(item => <div key={item.title} 
                                                    className={classes.projectDescBlock__block}>

                    <div className={classes.projectDescBlock__mainHead}>{item.title}</div>

                    { (!Array.isArray(item.info)) && <div className={cn( "text", 
                                                    classes.projectDescBlock__body)}>
                        {item.info}
                    </div>}
                    
                    { (Array.isArray(item.info)) && <div>

                        {item.info.map( (itemL2, i) => <div key={i}>
                            { (typeof itemL2 === 'string') 

                            ? <div className={cn("text", classes.projectDescBlock__titleL2)}>
                                {itemL2}
                            </div>

                            : <div>

                                <div className={cn("text", classes.projectDescBlock__titleL2)}>
                                    {itemL2.titleL2}
                                </div>

                                <div>{itemL2.infoL2.map( (itemL3, i) => <div key={i}>

                                    { (typeof itemL3 === 'string') 

                                        ? <div className={cn("text", classes.projectDescBlock__titleL3)}>
                                            {itemL3}
                                        </div>

                                        : <div>

                                            <div className={cn("text", classes.projectDescBlock__titleL3)}>
                                                {itemL3.titleL3}
                                            </div>

                                            <div>
                                                {itemL3.infoL3.map(itemL4 => <div key={itemL4} 
                                                                className={cn("text", classes.projectDescBlock__titleL4)}>
                                                    {itemL4}
                                                </div>)}
                                            </div>

                                        </div>}

                                    </div>)}

                                </div>

                            </div>}

                        </div>)}

                    </div>}

                </div>)}
                
            </div>}
        </div>
    )
};

export default ProjectDescriptionBlock;