import React, {FC} from "react";
import classes from "./WorkExperienceBlock.module.scss";
import {WorkExperienceBlockProps} from "../../../types/block";
import cn from 'classnames';
import { useNavigate } from "react-router-dom";

import {expirienceCount, getAllSkills} from "../../../hooks/utils";
import SkillTag from "../../UI/SkillTag/SkillTag";

const WorkExperienceBlock:FC<WorkExperienceBlockProps> = ({type, work}) => {
    const navigate = useNavigate();

   const elapsed = expirienceCount(work.start, work.finish);
   const tagsArray = getAllSkills(work, 'array');

    switch(type) {
        case 'extended':
            return (
                <div className={classes.workExpirience}>
                                        
                    <div className={classes.workExpirience__headingBlock}>
        
                        <h3 className={ classes.workExpirience__heading}
                            onClick={() => navigate('/cv-frontend/work-experience/' + work.companyEn)}
                        >
                            {work.title}    
                        </h3>
        
                        <h4 className={cn(classes.workExpirience__heading,
                                         classes.workExpirience__heading_additional)}>
                            {work.company}
                        </h4>   
        
                    </div>
        
                    <p className={classes.workExpirience__date}>
                        {work.start + ' - ' + work.finish + ' ( ' + elapsed + ' ) '}
                    </p>
                    <div className={cn(classes.workExpirience__description,
                                        classes.workExpirience__description_extended)}>

                        {work.descriptionFull.map(descript =>

                            <p key={descript} className={cn("text", classes.workExpirience__string)}>
                                {descript}
                            </p>)
                        }
                    </div>

                    <div className={classes.workExpirience__techBlock}>

                        {typeof tagsArray !== 'string' && tagsArray.map( (tech) => 
                            <SkillTag key={tech.toString()} tag={tech.toString()} />
                        )}     

                    </div>
                </div>
            )
        default:
            return (
                <li className={classes.workExpirience}>
                                        
                    <div className={classes.workExpirience__headingBlock}>

                        <h3 className={cn("heading-l3", classes.workExpirience__heading)}
                            onClick={() => navigate('/cv-frontend/work-experience/' + work.companyEn)}
                        >
                            {work.title}    
                        </h3>

                        <h4 className={cn(classes.workExpirience__heading,
                                            classes.workExpirience__heading_additional)}>
                            {work.company}
                        </h4>   

                    </div>

                    <p className={classes.workExpirience__date}>
                        {work.start + ' - ' + work.finish + ' ( ' + elapsed + ' ) '}
                    </p>
                    <div className={classes.workExpirience__description}>

                        {work.descriptionShort.map(descript =>

                            <p key={descript} className={cn("text", classes.workExpirience__string)}>
                                {descript}
                            </p>)
                        }
                    </div>
                </li>
            )    
    };
    
}

export default WorkExperienceBlock;