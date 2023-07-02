import React, { FC } from "react";
import classes from "./AsideMenu.module.scss"
import AsideList from "../Lists/AsideList/AsideList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { menuStatusFalse, menuStatusTrue } from "../../store/reducers/menuStatusReducer";
import Icons from "../Icons/Icons";

const AsideMenu:FC = () => {
    const {mainData} = useTypedSelector(state => state.main);
    const {menuStatus} = useTypedSelector(state => state.menuStatus);

    const dispatch = useDispatch();

    function openMenu (){

        switch (menuStatus) {
            case true:
                dispatch(menuStatusFalse());
                break;
            case false:
                dispatch(menuStatusTrue())
        }
    }

    return (
        <div className={(!menuStatus) ? classes.asideMenu : classes.asideMenu + " " + classes.asideMenu__active}>
            <div className={(!menuStatus) ? classes.asideMenu__left : classes.asideMenu__left + " " + classes.asideMenu__left_active}>
                <div className={classes.asideMenu__imgContainer}>
                    <img className={classes.asideMenu__img} src={require('../../static/photo.jpg')}  alt="" />
                </div>

                <div className={classes.asideMenu__body}>
                    <AsideList name='Contacts' array={mainData.contacts} />
                    <AsideList name='Tech Skills' array={mainData.skills.hard} />
                    <AsideList name='Soft Skills' array={mainData.skills.soft} />
                </div>
            </div>
            <div className={(!menuStatus) ? classes.asideMenu__right : classes.asideMenu__right + " " + classes.asideMenu__right_active} onClick={openMenu}>
                <Icons name="open" size="20" color="black"/>
            </div>
        </div>
    )
}

export default AsideMenu;