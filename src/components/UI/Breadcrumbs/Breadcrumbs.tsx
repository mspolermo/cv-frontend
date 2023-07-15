import React, {FC} from "react";
import classes from "./Breadcrumbs.module.scss"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Breadcrumbs:FC= () => {

    const location = useLocation();

    let currentLink:string[] = [];
    
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map ( (crumb) => {
            currentLink.push(`${crumb}/`)
            return (
                <div key={crumb}>
                    <Link to={currentLink.join('')}>
                        <div className={classes.breadcrumbs__crumb}>
                            {(crumb === 'cv-frontend')
                            ? ('Front-End Developer')
                            : (crumb.split('%20').join(' '))}
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