import React, {FC} from "react";
import classes from "./Modal.module.scss";
import { ModalProps } from "../../../types/ui";

import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Modal:FC<ModalProps> = ({type, error}) => {
    
    const navigate = useNavigate();

    function toMain () {
        navigate('/cv-frontend/');
        window.location.reload();
    };

    switch (type) {
        case 'load':
            return (
                <div className={classes.modal}>
                    <div className={classes.modal__textBlock}>
                      <p>Идет загрузка...</p>  
                    </div>
                    <Loader />
                </div>
            )
        case 'error':
            return (
                <div className={classes.modal}>

                    <div className={classes.modal__textBlock}>
                        <p>К сожалению, произошла ошибка: {error}</p>
                        <p>Попробуйте обновить страницу</p>    
                    </div>
                    
                    <p className={classes.modal__btn} onClick={toMain} > Обновить</p>
                </div>
            )
            
    };
};

export default Modal;