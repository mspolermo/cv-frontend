import React from "react";
import classes from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.loader__component}></div>
        </div>
    );
};

export default Loader;