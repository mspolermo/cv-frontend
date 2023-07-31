import React, {FC} from "react";
import classes from "./Header.module.scss";
import cn from 'classnames';

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import ControlPanel from "../UI/ControlPanel/ControlPanel";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../hooks/utils";

const Header:FC = () => {
    const {i18n} = useTranslation();
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
                {changeLanguage(mainData.name.ru, mainData.name.en, i18n.language)}
            </h1>
        </div>
    );
};

export default Header;