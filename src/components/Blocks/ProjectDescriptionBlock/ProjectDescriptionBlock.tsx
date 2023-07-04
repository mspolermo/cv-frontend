import React, { FC } from 'react';
import classes from "./ProjectDescriptionBlock.module.scss"

interface ProjectDescriptionBlockProps {
    description: { "title": string, "info": string } | {
        "title": string, 
        "info": string | ( string | {
            "titleL2": string,
            "infoL2": ( string | { 
                "titleL3": string,
                "infoL3": string[] 
            })[]
        })[]   
    }[]
}

const ProjectDescriptionBlock:FC<ProjectDescriptionBlockProps> = ({description}) => {

    return (
        <div>
            { Array.isArray(description) && <div className={classes.projectDescBlock}>
                {description.map(item => <div className={classes.projectDescBlock__block}>
                    <div className={classes.projectDescBlock__mainHead}>{item.title}</div>
                    { (!Array.isArray(item.info)) && <div className={"text " + classes.projectDescBlock__body}>{item.info}</div> }
                    { (Array.isArray(item.info)) && <div>
                        {item.info.map( itemL2 => <div>
                            { (typeof itemL2 === 'string') 
                            ? <div className={"text " + classes.projectDescBlock__titleL2}>{itemL2}</div>
                            : <div>
                                <div className={"text " + classes.projectDescBlock__titleL2}>{itemL2.titleL2}</div>
                                <div>{itemL2.infoL2.map(itemL3 => <div>
                                    { (typeof itemL3 === 'string') 
                                        ? <div className={"text " + classes.projectDescBlock__titleL3}>{itemL3}</div>
                                        : <div>
                                            <div className={"text " + classes.projectDescBlock__titleL3}>{itemL3.titleL3}</div>
                                            <div>
                                                {itemL3.infoL3.map(itemL4 => <div className={"text " + classes.projectDescBlock__titleL4}>
                                                    {itemL4}
                                                </div>)}
                                            </div>
                                        </div>}
                                    </div>)}
                                </div>
                            </div>
                        }
                        </div>)}
                    </div>}
                </div>)}
            </div>}
        </div>
    )
};

export default ProjectDescriptionBlock;