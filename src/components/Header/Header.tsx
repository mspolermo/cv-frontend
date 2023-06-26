import React, {FC, useEffect} from "react";
import classes from "./Header.module.scss"
import Icons from "../Icons/Icons";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creators/user";


const Header:FC = () => {
    const {user, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    },[])

    if (loading) {
        return (
            <div>Идет загрузка</div>
        )
    }
    if (error) {
        return (
            <div></div>
        )
    }

    return (
        <div className={classes.header}>
            <div >
                <Icons size="40" color="black" name="burger" className={classes.header__burger}/>
            </div>
            <div className="container-internal">
                <p className={classes.header__profession}>Front-End Developer</p>
                <h1 className={classes.header__heading}>{user.name}</h1>
            </div>
        </div>
    )
}

export default Header;