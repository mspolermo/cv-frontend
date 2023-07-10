import React, {FC} from "react";
import classes from "./SkillTag.module.scss";
import { SkillTagProps } from "../../../types/ui";
import { useNavigate } from "react-router-dom";

const SkillTag:FC<SkillTagProps> = ({tag}) => {
    const navigate = useNavigate();
    return(
        <p className={classes.skillTag}
            onClick={() => navigate('/cv-frontend/skills/' + tag)} 
        >
            {tag}
        </p>  
    )
}

export default SkillTag;