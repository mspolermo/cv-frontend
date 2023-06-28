import React, {FC} from "react";
import classes from "./EducationList.module.scss"
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import EducationBlock from "../../Blocks/EducationBlock/EducationBlock";
import { EducationListProps } from "../../../types/list";


const EducationList:FC<EducationListProps> = ({type}) => {

    const {user} = useTypedSelector(state => state.user);
    const navigate = useNavigate();

    switch (type) {
        case 'short':
            return (
                <div className={classes.educationList}>

                    <h2 className={"heading-l2 " + classes.educationList__heading}
                        onClick={() => navigate('/cv-frontend/education')}
                    >
                        Education
                    </h2>

                    { user.education.map( educate =>
                        <div key={educate.title + educate.year} >
                            {(educate.important) && <EducationBlock educate={educate} type={type}/>}
                        </div>
                        
                    )}
                </div>
            )
        case "full":
            return (
                <div className={classes.educationList}>

                    <h2 className={"heading-l2 heading-l2__passive " + classes.educationList__heading}
                        onClick={() => navigate('/cv-frontend/education')}
                    >
                        Education
                    </h2>

                    { user.education.map( educate =>

                        <div key={educate.title + educate.year}>
                            
                            <EducationBlock educate={educate} type={type} />

                        </div>
                        
                    )}
                </div>
            )
    }
}

export default EducationList;