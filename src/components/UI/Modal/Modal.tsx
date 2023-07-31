import React, {FC} from "react";
import classes from "./Modal.module.scss";
import { ModalProps } from "../../../types/ui";

import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";

const Modal:FC<ModalProps> = ({type, error}) => {
    const {t} = useTranslation();
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
                      <p>{t('modal.loading')}</p>  
                    </div>
                    <Loader />
                </div>
            )
        case 'error':
            return (
                <div className={classes.modal}>

                    <div className={classes.modal__textBlock}>
                        <p>{t('modal.error')} {error}</p>
                        <p>{t('modal.again')}</p>    
                    </div>
                    
                    <p className={classes.modal__btn} onClick={toMain}>{t('modal.refresh')}</p>
                </div>
            )
        default:
            return null;
            
    };
};

export default Modal;