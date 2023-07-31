import React, {FC} from "react";
import classes from "./Breadcrumbs.module.scss";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Breadcrumbs:FC= () => {
    const {t} = useTranslation();
    const location = useLocation();

    let currentLink:string[] = [];

    function localesCrumbCheck (crumb: string) {
        if (crumb === 'cv-frontend') {
            return t('headers.occupation')
        }
        if (!t("headers." + crumb.split('%20').join(' ')).includes('.')) {
            return t("headers." + crumb.split('%20').join(' '))
        }
        if (!t("skills." + crumb.split('%20').join(' ')).includes('.')) {
            return t("skills." + crumb.split('%20').join(' '))
        }
        if (!t("jobs." + crumb.split('%20').join(' ')).includes('.')) {
            return t("jobs." + crumb.split('%20').join(' '))
        }
        return crumb.split('%20').join(' ')
    }
    
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map ( (crumb) => {
            currentLink.push(`${crumb}/`)
            return (
                <div key={crumb} className={classes.breadcrumbs__block}>
                    <Link to={currentLink.join('')}>
                        <div className={classes.breadcrumbs__crumb}>
                            {localesCrumbCheck(crumb)}
                        </div>
                    </Link>
                </div>
            );
        });

    return (
        <div className={classes.breadcrumbs}>
            {crumbs} 
        </div>
    );
};

export default Breadcrumbs;