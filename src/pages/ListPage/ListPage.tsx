import React, {FC, useEffect} from "react";
import classes from "./ListPage.module.scss";
import { ListPageProps } from "../../types/page";

import cn from 'classnames';
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUser } from "../../store/action-creators/user";
import { menuStatusFalse } from "../../store/reducers/menuStatusReducer";

import Loader from "../../components/UI/Loader/Loader";
import ListMapper from "../../components/ListMapper/ListMapper";
import Modal from "../../components/UI/Modal/Modal";

const ListPage:FC<ListPageProps> = ({type}) => {
    const {error, loading} = useTypedSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        dispatch(fetchUser());
        dispatch(menuStatusFalse());
    },[dispatch]);

    if (loading) {
        return (
            <div className='cleanPage'>
                <Loader />
            </div>
        );
    };
    if (error) {
        return (
            <div className='cleanPage'>
                <Modal type='error' error={error}/>
            </div>
        );
    };
    return (
        <div className={cn("container-internal", classes.listPage)}>
            <ListMapper type='full' name={type} />
        </div>
    );
};

export default ListPage;