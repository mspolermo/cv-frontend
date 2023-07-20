import React, {FC} from "react";
import classes from "./EducationBlock.module.scss";
import { EducationBlockProps } from "../../../types/block";
import cn from 'classnames';

const EducationBlock:FC<EducationBlockProps> = ({educate, type}) => {
    return (
        <li className={ (type === 'short')
                        ? classes.educationBlock
                        : cn(classes.educationBlock, 
                            classes.educationBlock__full)
        }>
                                
            <h4 className={cn('heading-l3', classes.educationBlock__title)}>{educate.title}</h4>
            
            <div className={cn("text", classes.educationBlock__description)}>
                <p className={classes.educationBlock__date}>{educate.year}</p>
                <p className={classes.educationBlock__rank} >{educate.rank}</p>
            </div>

            {(type === 'full') && <p className={cn("text", classes.educationBlock__info)}>
                {educate.info}
            </p>}

        </li>
    );
};

export default EducationBlock;