import React, {FC} from "react";
import classes from "./WorkExperienceBlock.module.scss"
import Icons from "../../Icons/Icons";
import {WorkExperienceBlockProps} from "../../../types/block";

const WorkExperienceBlock:FC<WorkExperienceBlockProps> = ({work}) => {
    return (
        <div>
                                
            <div className={classes.workExpirience__headingBlock}>

                <h3 className={ classes.workExpirience__heading}>
                    {work.title}    
                </h3>

                <h4 className={classes.workExpirience__heading 
                                + " "
                                + classes.workExpirience__heading_additional}>
                    {work.company}
                </h4>   

            </div>

            <p className={classes.workExpirience__date}>
                {work.start + ' - ' + work.finish}
            </p>

            <div className={classes.workExpirience__description}>

                {work.descriptionShort.map(descript =>

                    <div key={descript} className={classes.workExpirience__string}>
                        <Icons name="circle" size="10" className={classes.workExpirience__circle}/>
                        <p className={"text " + classes.workExpirience__expirience}>
                            {descript}
                        </p>
                    </div>)

                }
            </div>

        </div>
    )
}

export default WorkExperienceBlock;