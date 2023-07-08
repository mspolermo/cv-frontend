import React, {FC, useEffect} from "react";
import classes from "./MainPage.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creators/user";
import Loader from "../../components/UI/Loader/Loader";
import Modal from "../../components/UI/Modal/Modal";
import ListMapper from "../../components/ListMapper/ListMapper";
import { blockNames } from "../../types/list";

const MainPage:FC = () => {
    const blocksArray: Array<blockNames> = ['projects', 'works', 'education', 'about'];
    const {user, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        dispatch(fetchUser());
    },[dispatch]);

    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        )
    };
    if (error) {
        return (
            <div>
                <Modal type='error' error={error}/>
            </div>
        )
    };
    return (
        <div className={"container-internal " + classes.mainPage}>

            <p className={"text " + classes.mainPage__summary}>{user.summary}</p>

            {blocksArray.map ( blockName => 
                <ListMapper key={blockName} type='short' name={blockName} />   
            )}
            
        </div>
    );
};

export default MainPage;