import React, { FC } from "react";
import classes from "./AsideMenu.module.scss"
import AsideList from "../Lists/AsideList/AsideList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { menuStatusFalse, menuStatusTrue } from "../../store/reducers/menuStatusReducer";
import Icons from "../Icons/Icons";
import Slider from "../UI/Slider/Slider";
import cn from 'classnames';

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
        <div className={(!menuStatus) 
                        ? classes.asideMenu 
                        : cn(classes.asideMenu, classes.asideMenu__active)
        }>

            <div className={(!menuStatus) 
                        ? classes.asideMenu__left 
                        : cn(classes.asideMenu__left, classes.asideMenu__left_active)
            }>
                
                <Slider images={mainData.photos} />

                <div className={classes.asideMenu__body}>
                    <AsideList name='Contacts' array={mainData.contacts} />
                    <AsideList name='Tech Skills' array={mainData.skills.hard} />
                    <AsideList name='Soft Skills' array={mainData.skills.soft} />
                </div>
            </div>
            <div onClick={openMenu} className={(!menuStatus) 
                        ? classes.asideMenu__right 
                        : cn(classes.asideMenu__right, classes.asideMenu__right_active)} 
            >
                <Icons name="open" size="20" color="black"/>
            </div>
        </div>
    )
}

export default AsideMenu;