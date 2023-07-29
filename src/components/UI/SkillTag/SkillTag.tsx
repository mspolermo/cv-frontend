import React, {FC} from "react";
import classes from "./SkillTag.module.scss";
import cn from 'classnames';

import { SkillTagProps } from "../../../types/ui";
import { useNavigate } from "react-router-dom";

const SkillTag:FC<SkillTagProps> = ({tag}) => {
    const navigate = useNavigate();
    return(
        <p className={cn(classes.skillTag, 'text')}
            onClick={() => navigate('/cv-frontend/skills/' + tag)} 
        >
            {tag}
        </p>  
    );
};

export default SkillTag;