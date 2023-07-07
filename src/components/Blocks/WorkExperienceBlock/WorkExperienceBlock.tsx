import React, {FC} from "react";
import classes from "./WorkExperienceBlock.module.scss"

import {WorkExperienceBlockProps} from "../../../types/block";
import { useNavigate } from "react-router-dom";
import expirienceCount from "../../../hooks/utils";

const WorkExperienceBlock:FC<WorkExperienceBlockProps> = ({type, work}) => {
    const navigate = useNavigate();

   let elapsed = expirienceCount(work.start, work.finish);

    switch(type) {
        case 'extended':
            return (
                <div>
                                        
                    <div className={classes.workExpirience__headingBlock}>
        
                        <h3 className={ classes.workExpirience__heading}
                            onClick={() => navigate('/cv-frontend/work-experience/' + work.companyEn)}
                        >
                            {work.title}    
                        </h3>
        
                        <h4 className={classes.workExpirience__heading 
                                        + " "
                                        + classes.workExpirience__heading_additional}>
                            {work.company}
                        </h4>   
        
                    </div>
        
                    <p className={classes.workExpirience__date}>
                        {work.start + ' - ' + work.finish + ' ( ' + elapsed + ' ) '}
                    </p>
                    <div className={classes.workExpirience__description}>

                        {work.descriptionFull.map(descript =>

                            <p key={descript} className={"text " + classes.workExpirience__string}>
                                {descript}
                            </p>)
                        }
                    </div>
                </div>
            )
        default:
            return (
                <div>
                                        
                    <div className={classes.workExpirience__headingBlock}>

                        <h3 className={ "heading-l3 " + classes.workExpirience__heading}
                            onClick={() => navigate('/cv-frontend/work-experience/' + work.companyEn)}
                        >
                            {work.title}    
                        </h3>

                        <h4 className={classes.workExpirience__heading 
                                        + " "
                                        + classes.workExpirience__heading_additional}>
                            {work.company}
                        </h4>   

                    </div>

                    <p className={classes.workExpirience__date}>
                        {work.start + ' - ' + work.finish + ' ( ' + elapsed + ' ) '}
                    </p>
                    <div className={classes.workExpirience__description}>

                        {work.descriptionShort.map(descript =>

                            <p key={descript} className={"text " + classes.workExpirience__string}>
                                {descript}
                            </p>)
                        }
                    </div>
                </div>
            )    
    }
    
}

export default WorkExperienceBlock;