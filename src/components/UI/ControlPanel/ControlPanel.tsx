import React, {FC} from "react";
import classes from "./ControlPanel.module.scss";

import cn from 'classnames';
import { useLocation, useNavigate } from "react-router-dom";

import Icons from "../../Icons/Icons";
import ThemeToogler from "./ThemeToogler/ThemeToogler";
import { useDispatch } from "react-redux";
import { menuStatusFalse } from "../../../store/reducers/menuStatusReducer";
import LanguageChanger from "./LanguageChanger/LanguageChanger";

const ControlPanel:FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    async function printCv (currentLocation:string) {
        await dispatch(menuStatusFalse());

        if (currentLocation === '/cv-frontend/') {
            window.print();
        } else {
            await navigate('/cv-frontend/');
            setTimeout ( function (){
                window.print(); 
            }, 1000);
        };
    }

    return (
        <div className={classes.controlPanel}>
            <LanguageChanger />
            <div className={cn(classes.controlPanel__btn, classes.controlPanel__btn_print)}
                    onClick={() => printCv(location.pathname)}
            >
                <Icons name="print" size="20px" className={classes.controlPanel__icon} strokeWidth="0.6"/>
            </div>
            <ThemeToogler />
        </div>
    )
}

export default ControlPanel;