import React, { FC } from "react";
import classes from "./AboutBlock.module.scss"
import { AboutBlockProps } from "../../../types/block";

const AboutBlock:FC<AboutBlockProps> = ({point}) => {
    return (
        <li>

            { (typeof point == 'string') && <div className={classes.aboutBlock__stringL1}>
                <p className={"text " + classes.aboutBlock__text}>{point}</p>
            </div>}


            { (typeof point == 'object') && <div className={classes.aboutBlock__outBlock}>

                <div className={classes.aboutBlock__stringL1}>
                    <p className={"text " + classes.aboutBlock__text}>{point.title}</p>
                </div>
                
                <div className={classes.aboutBlock__innerBlock}>
                    {point.value.map((point, i) =>
                        <p key={point + i} className={"text " + classes.aboutBlock__stringL2}>
                            {point}
                        </p>    
                    )}
                </div>

            </div>}

        </li>
    )
}

export default AboutBlock;