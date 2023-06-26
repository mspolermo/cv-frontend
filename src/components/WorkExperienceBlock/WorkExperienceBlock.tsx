import React, {FC} from "react";
import classes from "./WorkExperienceBlock.module.scss"
import Icons from "../Icons/Icons";
import { WorkExperienceBlockProps } from "../../types/block";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const WorkExperienceBlock:FC<WorkExperienceBlockProps> = ({type}) => {

    const {user} = useTypedSelector(state => state.user)

    return (
        <div className={classes.workExpirience}>

            <h2 className={"heading-l2 " + classes.workExpirience__mainHead}>Work-experience</h2> 

            {user.works.map(work =>

                <div key={work.start + work.finish} className={classes.workExpirience__block}>
                    
                    <div className={classes.workExpirience__headingBlock}>

                        {(type == 'short') && <h3 className={ classes.workExpirience__heading 
                                                            + " "
                                                            + classes.workExpirience__heading_main}
                        >
                            {work.title}    
                        </h3>}

                        {(type == 'full') && <h3 className={ classes.workExpirience__heading}>
                            {work.title}    
                        </h3>}

                        <h4 className={classes.workExpirience__heading 
                                        + " "
                                        + classes.workExpirience__heading_additional}>
                            {work.company}
                        </h4>   

                    </div>

                    <p className={classes.workExpirience__date}>
                        {work.start + ' - ' + work.finish}
                    </p>

                    {(type == 'short') && <div className={classes.workExpirience__description}>

                        {work.descriptionShort.map(descript =>

                            <div key={descript} className={classes.workExpirience__string}>
                                <Icons name="circle" size="10" className={classes.workExpirience__circle}/>
                                <p className={"text " + classes.workExpirience__expirience}>
                                    {descript}
                                </p>
                            </div>)

                        }
                    </div>}

                    {(type == 'full') && <div className={classes.workExpirience__description}>

                        {work.descriptionFull.map(descript =>

                            <div key={descript} className={classes.workExpirience__string}>
                                <Icons name="circle" size="10" className={classes.workExpirience__circle}/>
                                <p className={"text " + classes.workExpirience__expirience}>
                                    {descript}
                                </p>
                            </div>)

                        }

                    </div>}

                </div>
                
            )}
        </div>
    );
};

export default WorkExperienceBlock;