import React, {FC, useEffect, useMemo, useState} from "react";
import classes from "./ItemPage.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creators/user";
import Loader from "../../components/UI/Loader/Loader";
import { useParams } from "react-router-dom";
import WorkExperienceBlock from "../../components/Blocks/WorkExperienceBlock/WorkExperienceBlock";
import ProjectBlock from "../../components/Blocks/ProjectBlock/ProjectBlock";
import { ItemPageProps, WorkPageParams } from "../../types/page";
import ContactsBlock from "../../components/Blocks/ContactsBlock/ContactsBlock";
import SkillBlock from "../../components/Blocks/SkillBlock/SkillBlock";

const ItemPage:FC<ItemPageProps> = ({type}) => {
    const {user, error, loading} = useTypedSelector(state => state.user);
    const params = useParams<WorkPageParams>();
    const dispatch = useDispatch();
    const [itemIndex, setItemIndex] = useState(0);
    const [skillsArray, setSkillsArray] = useState<'hard' | 'soft'>('hard')

    useEffect(() => {
        if (type === 'work') {
            setItemIndex(user.works.findIndex( work => work.companyEn === params.id))
            console.log(itemIndex)
        } else if (type === 'project') {
            setItemIndex(user.projects.findIndex( project => project.name === params.id))
        }
        
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        dispatch(fetchUser());
        
    },[dispatch, type]);

    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        )
    };
    if (error) {
        return (
            <div>{error}</div>
        )
    };

    switch(type) {
        case 'work':
            return (
                <div className={"container-internal " + classes.itemPage}>
                    <WorkExperienceBlock type="extended" work={user.works[itemIndex]} /> 
                </div>
            )
        case 'project':
            return (
                <div className={"container-internal " + classes.itemPage}>
                    <ProjectBlock type="extended" project={user.projects[itemIndex]}/>
                </div>
            )
        case 'skill' :
            return (
                <div className={"container-internal " + classes.itemPage}>
                    <ul>
                        {skillsArray === 'hard' && params.id && <SkillBlock type="full" skill={params.id} />}
                        {skillsArray === 'soft' && params.id && <SkillBlock type="full" skill={params.id} />}
                    </ul>
                </div>
            )
        case 'contacts':
            return (
                <div className={"container-internal " + classes.itemPage}>
                    <ContactsBlock type="full" contacts={user.contacts}/>
                </div>
            )

    }
    
};

export default ItemPage;