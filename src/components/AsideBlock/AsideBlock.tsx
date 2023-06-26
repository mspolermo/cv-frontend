import React, { FC, useEffect } from "react";
import classes from "./AsideBlock.module.scss"
import AsideList from "../AsideList/AsideList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creators/user";

const AsideBlock:FC = () => {
    const {user, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    },[])

    if (loading) {
        return (
            <div className={classes.asideBlock}></div>
        )
    }
    
    if (error) {
        return (
            <div className={classes.asideBlock}></div>
        )
    }

    return (
        <div className={classes.asideBlock}>

            <div className={classes.asideBlock__imgContainer}>
                <img className={classes.asideBlock__img} src={require('../../static/photo.jpg')}  alt="" />
            </div>

            <div className={classes.asideBlock__body}>
                <AsideList name='Contacts' array={user.contacts} />
                <AsideList name='Tech Skills' array={user.skills.hard} />
                <AsideList name='Soft Skills' array={user.skills.soft} />
            </div>
            
        </div>
    )
}

export default AsideBlock;