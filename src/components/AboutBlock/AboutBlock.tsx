import React, { FC } from "react";
import classes from "./AboutBlock.module.scss"
import Icons from "../Icons/Icons";
import { AboutBlockProps } from "../../types/block";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const AboutBlock:FC<AboutBlockProps> =({type}) => {

    const {user} = useTypedSelector(state => state.user);
    const navigate = useNavigate();

    return (
        <div className={classes.aboutBlock}>
            <h2 className={"heading-l2 " + classes.aboutBlock__heading}
                onClick={() => navigate('/cv-frontend/about')}
            >
                About me
            </h2>
            
            {user.about.map( (point, i) =>
            <div key={i} className={ (type === 'short') 
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