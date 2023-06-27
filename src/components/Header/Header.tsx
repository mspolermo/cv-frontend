import React, {FC} from "react";
import classes from "./Header.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const Header:FC = () => {
    const {mainData} = useTypedSelector(state => state.main);
    const navigate = useNavigate();

    return (
        <div className={classes.header}>
            
            <div className="container-internal">
                <p className={classes.header__profession}>Front-End Developer</p>
                <h1 className={classes.header__heading}
                    onClick={() => navigate('/cv-frontend/')}
                >{mainData.name}</h1>
            </div>
        </div>
    );
};

export default Header;