import React, {FC, useEffect, useState} from "react";
import classes from "./ItemPage.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creators/user";
import Loader from "../../components/UI/Loader/Loader";
import { useParams } from "react-router-dom";
import WorkExperienceBlock from "../../components/Blocks/WorkExperienceBlock/WorkExperienceBlock";
import ProjectBlock from "../../components/Blocks/ProjectBlock/ProjectBlock";


type WorkPageParams = {
    id: string;
}
interface ItemPageProps {
    type: 'work' | 'project'
}

const ItemPage:FC<ItemPageProps> = ({type}) => {
    const {user, error, loading} = useTypedSelector(state => state.user);
    const params = useParams<WorkPageParams>();
    const dispatch = useDispatch();
    const [itemIndex, setItemIndex] = useState(0);

    useEffect(() => {

        if (type === 'work') {
            setItemIndex(user.works.findIndex( work => work.companyEn === params.id))
        } else if (type === 'project') {
            setItemIndex(user.projects.findIndex( project => project.name === params.id))
        };
        
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

    }
    
};

export default ItemPage;