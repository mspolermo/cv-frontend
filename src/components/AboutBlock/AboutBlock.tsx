import React, { FC } from "react";
import classes from "./AboutBlock.module.scss"
import about from '../../static/about.json'
import Icons from "../Icons/Icons";

interface AboutBlockProps {
    type: "short" | 'full'
}

const AboutBlock:FC<AboutBlockProps> =({type}) => {

    return (
        <div className={classes.aboutBlock}>
            <h2 className={"heading-l2 " + classes.aboutBlock__heading}>About me</h2>
            
            {about.about.map( (point, i) =>
            <div key={i} className={ (type == 'short') 
                ?
                    classes.aboutBlock__block + " " + classes.aboutBlock__block_short
                :
                    classes.aboutBlock__block
                }>

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
            )}

        </div>
    )
}

export default AboutBlock;