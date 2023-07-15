import React, { FC } from "react";
import classes from "./AsideMenu.module.scss";
import { useDispatch } from "react-redux";
import cn from 'classnames';

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { menuStatusFalse, menuStatusTrue } from "../../store/reducers/menuStatusReducer";
import ContactsBlock from "../Blocks/ContactsBlock/ContactsBlock";
import ListMapper from "../ListMapper/ListMapper";

import Icons from "../Icons/Icons";
import Slider from "../UI/Slider/Slider";

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
    };

    return (
        <div className={(!menuStatus) 
                        ? classes.asideMenu 
                        : cn(classes.asideMenu, classes.asideMenu__active)
        }>

            <div className={(!menuStatus) 
                        ? classes.asideMenu__left 
                        : cn(classes.asideMenu__left, classes.asideMenu__left_active)
            }>
                
                <Slider images={mainData.photos} type="small"/>

                <div className={classes.asideMenu__body}>
                    <ContactsBlock type='short' contacts={mainData.contacts} />
                    <ListMapper type='short' name='hard-skills' />
                    <ListMapper type='short' name='soft-skills' />
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