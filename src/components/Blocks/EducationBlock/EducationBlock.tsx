import React, {FC} from "react";
import classes from "./EducationBlock.module.scss"
import { EducationBlockProps } from "../../../types/block";

const EducationBlock:FC<EducationBlockProps> = ({educate, type}) => {
    return (
        <li className={ (type === 'short')
                        ? classes.educationBlock__block
                        : classes.educationBlock__block + " " + classes.educationBlock__block_full
        }>
                                
            <h4 className={classes.educationBlock__title}>{educate.title}</h4>
            
            <div className={classes.educationBlock__description}>
                <p className={classes.educationBlock__date}>{educate.year}</p>
                <p className={classes.educationBlock__rank} >{educate.rank}</p>
            </div>

            {(type === 'full') && <p className={"text " + classes.educationBlock__info}>
                {educate.info}
            </p>}

        </li>
    )
}

export default EducationBlock;