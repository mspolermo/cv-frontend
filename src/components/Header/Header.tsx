import React, {FC} from "react";
import classes from "./Header.module.scss"
import about from '../../static/about.json'
import Icons from "../Icons/Icons";

const Header:FC = () => {
    return (
        <div className={classes.header}>
            <div>
                <Icons size="40" color="black" name="burger" />
            </div>
            <div className="container-internal">
                <p className={classes.header__profession}>Front-End Developer</p>
                <h1 className={classes.header__heading}>{about.name}</h1>
            </div>
        </div>
    )
}

export default Header;