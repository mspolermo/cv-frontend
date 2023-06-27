import React, { FC } from "react";
import classes from "./AsideBlock.module.scss"
import AsideList from "../AsideList/AsideList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { menuStatusFalse, menuStatusTrue } from "../../store/reducers/menuStatusReducer";
import Icons from "../Icons/Icons";

const AsideBlock:FC = () => {
    const {mainData} = useTypedSelector(state => state.main);
    const {menuStatus} = useTypedSelector(state => state.menuStatus);

    const dispatch = useDispatch();

    function openMenu (){
        console.log(menuStatus)
        switch (menuStatus) {
            case true:
                dispatch(menuStatusFalse());
                break;
            case false:
                dispatch(menuStatusTrue())
        }
    }

    return (
        <div className={(!menuStatus) ? classes.asideBlock : classes.asideBlock + " " + classes.asideBlock__active}>
            <div className={(!menuStatus) ? classes.asideBlock__left : classes.asideBlock__left + " " + classes.asideBlock__left_active}>
                <div className={classes.asideBlock__imgContainer}>
                    <img className={classes.asideBlock__img} src={require('../../static/photo.jpg')}  alt="" />
                </div>

                <div className={classes.asideBlock__body}>
                    <AsideList name='Contacts' array={mainData.contacts} />
                    <AsideList name='Tech Skills' array={mainData.skills.hard} />
                    <AsideList name='Soft Skills' array={mainData.skills.soft} />
                </div>
            </div>
            <div className={(!menuStatus) ? classes.asideBlock__right : classes.asideBlock__right + " " + classes.asideBlock__right_active} onClick={openMenu}>
                <Icons name="open" size="20" color="black"/>
            </div>
        </div>
    )
}

export default AsideBlock;