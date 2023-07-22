import React, {FC} from "react";
import classes from "./ControlPanel.module.scss";

import cn from 'classnames';
import { useLocation, useNavigate } from "react-router-dom";

import Icons from "../../Icons/Icons";


const ControlPanel:FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    async function printCv () {
        if (location.pathname === '/cv-frontend/') {
            window.print();
        } else {
            navigate('/cv-frontend/');
            
            setTimeout ( () => {
                printCv()
            }, 500);
        };
        
    }

    return (
        <div className={classes.controlPanel}>
            <div className={cn(classes.controlPanel__btn, classes.controlPanel__btn_print)}
                    onClick={printCv}
            >
                <Icons name="print" size="40px" color="black" />
            </div>
        </div>
    )
}

export default ControlPanel;