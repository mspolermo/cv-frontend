import React, { FC } from "react";
import classes from "./AboutBlock.module.scss";
import { AboutBlockProps } from "../../../types/block";
import cn from 'classnames';

const AboutBlock:FC<AboutBlockProps> = ({point}) => {
    return (
        <li className={classes.aboutBlock}>

            { (typeof point == 'string') && <div className={classes.aboutBlock__stringL1}>
                <p className={cn("text", classes.aboutBlock__text)}>{point}</p>
            </div>}


            { (typeof point == 'object') && <div className={classes.aboutBlock__outBlock}>

                <div className={classes.aboutBlock__stringL1}>
                    <p className={cn("text", classes.aboutBlock__text)}>{point.title}</p>
                </div>
                
                <div className={classes.aboutBlock__innerBlock}>
                    {point.value.map((point, i) =>
                        <p key={point + i} className={cn("text", classes.aboutBlock__stringL2)}>
                            {point}
                        </p>    
                    )}
                </div>

            </div>}

        </li>
    );
};

export default AboutBlock;