import React, {FC} from "react";
import classes from "./WorkExperienceBlock.module.scss"
import Icons from "../Icons/Icons";
import { WorkExperienceBlockProps } from "../../types/block";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const WorkExperienceBlock:FC<WorkExperienceBlockProps> = ({type}) => {

    const {user} = useTypedSelector(state => state.user);
    const navigate = useNavigate();

    switch (type) {
        case 'short':
            return (
                <div className={classes.workExpirience}>

                    <h2 className={"heading-l2 " + classes.workExpirience__mainHead}
                        onClick={() => navigate('/cv-frontend/work-experience')}
                    >
                        Work-experience
                    </h2> 

                    {user.works.map(work =>
                        <div key={work.start + work.finish} className={classes.workExpirience__block}>
                            
                            {(work.important) && <div>
                                
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

                            </div>}

                        </div>
                    )}

                </div>
            )
        case 'full':
            return (
                <div className={classes.workExpirience}>

                    <h2 className={"heading-l2 heading-l2__passive " 
                                + classes.workExpirience__mainHead}
                    >
                        Work-experience
                    </h2> 

                    {user.works.map(work =>

                        <div key={work.start + work.finish} className={classes.workExpirience__block}>
                            
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
                        
                    )}
                </div>
            )
    }
};

export default WorkExperienceBlock;