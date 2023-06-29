import React, {FC} from "react";
import classes from "./WorkExperienceBlock.module.scss"
import Icons from "../../Icons/Icons";
import {WorkExperienceBlockProps} from "../../../types/block";
import { useNavigate } from "react-router-dom";

const WorkExperienceBlock:FC<WorkExperienceBlockProps> = ({type, work}) => {
    const navigate = useNavigate();

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
                        {work.start + ' - ' + work.finish}
                    </p>
                    <div className={classes.workExpirience__description}>

                        {work.descriptionFull.map(descript =>

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
    
}

export default WorkExperienceBlock;