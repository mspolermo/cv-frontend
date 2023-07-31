import React, {FC, useEffect, useState} from "react";
import classes from "./MainPage.module.scss";
import { blockNames } from "../../types/list";

import cn from 'classnames';
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUser } from "../../store/action-creators/user";
import Loader from "../../components/UI/Loader/Loader";
import Modal from "../../components/UI/Modal/Modal";
import ListMapper from "../../components/ListMapper/ListMapper";
import { changeLanguage } from "../../hooks/utils";
import { useTranslation } from "react-i18next";

const MainPage:FC = () => {
    // eslint-disable-next-line
    const {t, i18n} = useTranslation();
    
    const {user, error, loading} = useTypedSelector(state => state.user);
    const dispatch = useDispatch();

    const blocksArrayRu: Array<blockNames> = ['projects', 'works', 'education', 'about'];
    const blocksArrayEn: Array<blockNames> = ['projectsEn', 'worksEn', 'educationEn', 'aboutEn'];
    const [blocksArray, setBlockArray] = useState(blocksArrayRu)
    //const [blocksArray, setbBocksArray] = useState(['projects', 'works', 'education', 'about']);

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        dispatch(fetchUser());
    },[dispatch]);

    useEffect(() => {
        if (i18n.language === 'en') {
            setBlockArray(blocksArrayEn)
        } else {
            setBlockArray(blocksArrayRu)
        }
    },[i18n.language])

    if (loading) {
        return (
            <div className='cleanPage'>
                <Loader />
            </div>
        )
    };
    if (error) {
        return (
            <div className='cleanPage'>
                <Modal type='error' error={error}/>
            </div>
        )
    };
    return (
        <div className={cn("container-internal", classes.itemPage)}>

            <p className={"text " + classes.mainPage__summary}>{changeLanguage(user.summary.ru, user.summary.en, i18n.language)}</p>

            {blocksArray.map ( blockName => 
                <ListMapper key={blockName} type='short' name={blockName} />   
            )}
            
        </div>
    );
};

export default MainPage;