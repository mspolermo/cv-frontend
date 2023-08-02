import React, {FC} from "react";
import classes from "./Breadcrumbs.module.scss";

import cn from 'classnames';
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
            console.log(crumb.split('%20').join(' '))
            return t("skills." + crumb.split('%20').join(' '))
        }
        if (!t("jobs." + crumb.split('%20').join(' ')).includes('.')) {
            return t("jobs." + crumb.split('%20').join(' '))
        }
        return crumb.split('%20').join(' ')
    }
    
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map ( (crumb, index, array) => {
            currentLink.push(`${crumb}/`);
            const isLastCrumb = index === array.length - 1;
            const crumbStyle = isLastCrumb
            ? cn(classes.breadcrumbs__crumb, classes.breadcrumbs__crumb_last)
            : classes.breadcrumbs__crumb;

            return (
                <div key={crumb} className={classes.breadcrumbs__block}>
                    <Link to={currentLink.join('')}>
                        <div className={crumbStyle}>
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