import React, { FC } from "react";
import classes from "./AboutBlock.module.scss"
import Icons from "../../Icons/Icons";
import { AboutBlockProps } from "../../../types/block";

const AboutBlock:FC<AboutBlockProps> = ({point}) => {
    return (
        <div>

            { (typeof point == 'string') && <div className={classes.aboutBlock__stringL1}>
                <Icons name="circle" size="10" color="black" className={classes.aboutBlock__circle}/>
                <p className={"text " + classes.aboutBlock__text}>{point}</p>
            </div>}


            { (typeof point == 'object') && <div className={classes.aboutBlock__outBlock}>

                <div className={classes.aboutBlock__stringL1}>
                    <Icons name="circle" size="10" color="black" className={classes.aboutBlock__circle}/>
                    <p className={"text " + classes.aboutBlock__text}>{point.head}</p>
                </div>
                
                <div className={classes.aboutBlock__innerBlock}>
                    {point.value.map((point, i) =>
                        <p key={point + i} className={"text " + classes.aboutBlock__stringL2}>
                            {point}
                        </p>    
                    )}
                </div>

            </div>}

        </div>
    )
}

export default AboutBlock;