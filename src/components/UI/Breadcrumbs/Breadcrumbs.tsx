import React, {FC} from "react";
import classes from "./Breadcrumbs.module.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Breadcrumbs:FC= () => {
    // eslint-disable-next-line
    const {t, i18n} = useTranslation();
    const location = useLocation();

    let currentLink:string[] = [];
    
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map ( (crumb) => {
            currentLink.push(`${crumb}/`)
            return (
                <div key={crumb} className={classes.breadcrumbs__block}>
                    <Link to={currentLink.join('')}>
                        <div className={classes.breadcrumbs__crumb}>
                            {(crumb === 'cv-frontend')
                            ? (`${t('headers.occupation')}`)
                            : (`${t(
                                    "headers." + crumb.split('%20').join(' ')
                                )}`.includes('.') 
                                    ? crumb.split('%20').join(' ')
                                    : `${t(
                                        "headers." + crumb.split('%20').join(' ')
                                    )}`
                                )
                            }
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