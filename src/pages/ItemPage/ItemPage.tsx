import React, {FC, useEffect, useState} from "react";
import classes from "./ItemPage.module.scss";
import { ItemPageProps, WorkPageParams } from "../../types/page";

import cn from 'classnames';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUser } from "../../store/action-creators/user";
import { menuStatusFalse } from "../../store/reducers/menuStatusReducer";

import Loader from "../../components/UI/Loader/Loader";
import WorkExperienceBlock from "../../components/Blocks/WorkExperienceBlock/WorkExperienceBlock";
import ProjectBlock from "../../components/Blocks/ProjectBlock/ProjectBlock";
import ContactsBlock from "../../components/Blocks/ContactsBlock/ContactsBlock";
import SkillBlock from "../../components/Blocks/SkillBlock/SkillBlock";
import ListMapper from "../../components/ListMapper/ListMapper";
import Modal from "../../components/UI/Modal/Modal";

const ItemPage:FC<ItemPageProps> = ({type}) => {
    const {user, error, loading} = useTypedSelector(state => state.user);
    const params = useParams<WorkPageParams>();
    const dispatch = useDispatch();
    const [itemIndex, setItemIndex] = useState(0);

    useEffect(() => {
        if (type === 'work') {
            setItemIndex(user.works.ru.findIndex( work => work.companyEn === params.id));
        } else if (type === 'project') {
            setItemIndex(user.projects.ru.findIndex( project => project.name === params.id));
        };
        
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        dispatch(fetchUser());
        dispatch(menuStatusFalse())
        //eslint-disable-next-line
    },[dispatch, type]);

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

    switch(type) {
        case 'work':
            return (
                <div className={cn("container-internal", classes.itemPage)}>
                    <WorkExperienceBlock type="extended" work={user.works.ru[itemIndex]} /> 
                </div>
            )
        case 'workEn':
            return (
                <div className={cn("container-internal", classes.itemPage)}>
                    <WorkExperienceBlock type="extended" work={user.works.en[itemIndex]} /> 
                </div>
            )
        case 'project':
            return (
                <div className={cn("container-internal", classes.itemPage)}>
                    <ProjectBlock type="extended" project={user.projects.ru[itemIndex]}/>
                </div>
            )
        case 'projectEn':
            return (
                <div className={cn("container-internal", classes.itemPage)}>
                    <ProjectBlock type="extended" project={user.projects.en[itemIndex]}/>
                </div>
            )
        case 'skill' :
            return (
                <div className={cn("container-internal", classes.itemPage)}>
                    <ul>
                        {params.id && <SkillBlock type="fullSolo" skill={params.id}/>}
                    </ul>
                </div>
            )
        case 'contacts':
            return (
                <div className={cn("container-internal", classes.itemPage)}>
                    <ContactsBlock type="full" contacts={user.contacts}/>
                </div>
            )
        case 'skills' :
            return (
                <div className={cn("container-internal", classes.itemPage)}>
                    <div className={classes.itemPage__skillsPage}>
                        <ListMapper type='short' name='hard-skills-AllList' />
                        <ListMapper type='short' name='soft-skills-AllList' />    
                    </div>
                    
                </div>
            )

    };
    
};

export default ItemPage;