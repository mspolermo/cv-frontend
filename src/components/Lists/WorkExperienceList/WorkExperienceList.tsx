import React, {FC} from "react";
import classes from "./WorkExperienceList.module.scss"
import { WorkExperienceListProps } from "../../../types/list";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import WorkExperienceBlock from "../../Blocks/WorkExperienceBlock/WorkExperienceBlock";

const WorkExperienceList:FC<WorkExperienceListProps> = ({type}) => {

    const {user} = useTypedSelector(state => state.user);
    const navigate = useNavigate();

    switch (type) {
        case 'short':
            return (
                <div className={classes.workExpirienceList}>

                    <h2 className={"heading-l2 " + classes.workExpirienceList__mainHead}
                        onClick={() => navigate('/cv-frontend/work-experience')}
                    >
                        Work-experience
                    </h2> 

                    {user.works.map(work =>

                        <div key={work.start + work.finish} className={classes.workExpirienceList__block}>
                            
                            {(work.important) && <WorkExperienceBlock work={work} type="short"/>}

                        </div>
                    )}

                </div>
            )
        case 'full':
            return (
                <div className={classes.workExpirienceList}>

                    <h2 className={"heading-l2 heading-l2__passive " 
                                + classes.workExpirienceList__mainHead}
                    >
                        Work-experience
                    </h2> 

                    {user.works.map(work =>

                        <div key={work.start + work.finish} className={classes.workExpirienceList__block}>
                            
                            <WorkExperienceBlock work={work} type="short"/>

                        </div>
                        
                    )}
                </div>
            )
    }
};

export default WorkExperienceList;