import React, { FC } from "react";
import classes from "./AsideBlock.module.scss"
import about from '../../static/about.json'
// import photo from '../../static/photo.jpg'
import AsideList from "../AsideList/AsideList";

const AsideBlock:FC = () => {
    return (
        <div className={classes.asideBlock}>

            <div className={classes.asideBlock__imgContainer}>
                <img className={classes.asideBlock__img} src={require('../../static/photo.jpg')}  alt="" />
            </div>

            <div className={classes.asideBlock__body}>
                <AsideList name='Contacts' array={about.contacts} />
                <AsideList name='Tech Skills' array={about.skills.hard} />
                <AsideList name='Soft Skills' array={about.skills.soft} />
            </div>
            
        </div>
    )
}

export default AsideBlock;