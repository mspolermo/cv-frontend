import React, {FC} from "react";
import classes from "./Header.module.scss";
import cn from 'classnames';

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import ControlPanel from "../UI/ControlPanel/ControlPanel";

const Header:FC = () => {
    const {mainData} = useTypedSelector(state => state.main);
    const navigate = useNavigate();

    return (
        <div className={cn(classes.header, "container-internal")}>
            
            <div className={classes.header__controlPanel}>
                <ControlPanel />    
            </div>
            <Breadcrumbs />
            <h1 className={classes.header__heading}
                onClick={() => navigate('/cv-frontend/')}
            >
                {mainData.name}
            </h1>
        </div>
    );
};

export default Header;