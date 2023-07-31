import React, {FC, useEffect, useState} from "react";
import classes from "./WorkExperienceBlock.module.scss";
import {WorkExperienceBlockProps} from "../../../types/block";
import cn from 'classnames';
import { useNavigate } from "react-router-dom";

import {expirienceCount, getAllSkills} from "../../../hooks/utils";
import SkillTag from "../../UI/SkillTag/SkillTag";
import { useTranslation } from "react-i18next";

const WorkExperienceBlock:FC<WorkExperienceBlockProps> = ({type, work}) => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    const [elapsed, setElapsed] = useState( expirienceCount(work.start, work.finish, 'ru') );
    const tagsArray = getAllSkills(work);
    const translatedTagsArray = tagsArray.map(tag => 
        t(`skills.${tag}`).includes('.') 
            ? tag 
            : t(`skills.${tag}`));
    const allTagsString = translatedTagsArray.join(', ');

    useEffect( () => {
        setElapsed( expirienceCount(work.start, work.finish, i18n.language) )
    }, [i18n.language, work.start, work.finish])

    switch(type) {
        case 'extended':
            return (
                <div className={classes.workExpirience}>
                                        
                    <div className={classes.workExpirience__headingBlock}>
        
                        <h3 className={cn("heading-l3 heading-l3__passive", 
                                            classes.workExpirience__heading)}
                            onClick={() => navigate('/cv-frontend/work-experience/' + work.companyEn)}
                        >
                            {work.title}    
                        </h3>
        
                        <h4 className={cn("heading-l3",
                                        classes.workExpirience__heading,
                                        classes.workExpirience__heading_additional)}>
                            {work.company}
                        </h4>   
        
                    </div>
        
                    <p className={classes.workExpirience__additionalInfo}>
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

                        <h3 className={cn("heading-l3 heading-l3__passive",
                                            classes.workExpirience__heading,
                                            classes.workExpirience__heading_additional)}>
                            {work.company}
                        </h3>   

                    </div>

                    <p className={classes.workExpirience__additionalInfo}>
                        {work.start + ' - ' + work.finish + ' ( ' + elapsed + ' ) '}
                    </p>
                    <div className={classes.workExpirience__description}>

                        {work.descriptionShort.map(descript =>

                            <p key={descript} className={cn("text", classes.workExpirience__string)}>
                                {descript}
                            </p>)
                        }
                    </div>
                    {type ==='full' && <p className={classes.workExpirience__additionalInfo}>
                        {t('headers.skills')}: {allTagsString}
                    </p>
                    }     
                </li>
            )    
    };
    
}

export default WorkExperienceBlock;