import React, {FC, useEffect} from "react";
import classes from "./WorkPage.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creators/user";
import Loader from "../../components/UI/Loader/Loader";
import { useParams } from "react-router-dom";
import WorkExperienceBlock from "../../components/Blocks/WorkExperienceBlock/WorkExperienceBlock";


type WorkPageParams = {
    id: string;
}

const WorkPage:FC = () => {
    const {user, error, loading} = useTypedSelector(state => state.user);
    const params = useParams<WorkPageParams>();
    const dispatch = useDispatch();
    const workIndex = user.works.findIndex( work => work.companyEn === params.id);

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
            <div>{error}</div>
        )
    };
    return (
        <div className={"container-internal " + classes.workPage}>
            <WorkExperienceBlock type="extended" work={user.works[workIndex]} /> 
        </div>
    );
};

export default WorkPage;