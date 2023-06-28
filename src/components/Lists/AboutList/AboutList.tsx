import React, { FC } from "react";
import classes from "./AboutList.module.scss"
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { AboutListProps } from "../../../types/list";
import AboutBlock from "../../Blocks/AboutBlock/AboutBlock";

const AboutList:FC<AboutListProps> =({type}) => {

    const {user} = useTypedSelector(state => state.user);
    const navigate = useNavigate();

    return (
        <div className={classes.aboutList}>
            <h2 className={ (type === 'short') 
                ? "heading-l2 " + classes.aboutList__heading
                : "heading-l2 heading-l2__passive " + classes.aboutList__heading}
                onClick={() => navigate('/cv-frontend/about')}
            >
                About me
            </h2>
            
            {user.about.map( (point, i) =>
                <div key={i} className={ (type === 'short') 
                            ? classes.aboutList__block + " " + classes.aboutList__block_short
                            : classes.aboutList__block}
                >
                    <AboutBlock point={point}/>
                </div>
            )}

        </div>
    )
}

export default AboutList;