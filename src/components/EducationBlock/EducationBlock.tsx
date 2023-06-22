import React, {FC} from "react";
import classes from "./EducationBlock.module.scss"
import about from '../../static/about.json'

interface EducationBlockProps {
    type: 'short' | 'full';
}
const EducationBlock:FC<EducationBlockProps> = ({type}) => {
    return (
        <div className={classes.educationBlock}>

            <h2 className={"heading-l2 " + classes.educationBlock__heading}>Education</h2>

            { about.education.map( educate =>

                <div key={educate.start + educate.finish} className={classes.educationBlock__block}>
                    
                    <h4 className={classes.educationBlock__title}>{educate.title}</h4>

                    {(type == 'full') && <p className={"text " + classes.educationBlock__info}>
                        {educate.info}
                    </p>}
                    
                    <div className={classes.educationBlock__description}>
                        <p className={classes.educationBlock__date}>{educate.start + " - " + educate.finish }</p>
                        <p className={classes.educationBlock__rank} >{educate.rank}</p>
                    </div>

                </div>
                
            )}
        </div>
    )
}

export default EducationBlock;