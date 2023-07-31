import React, {FC} from "react";
import classes from "./SkillTag.module.scss";
import cn from 'classnames';

import { SkillTagProps } from "../../../types/ui";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SkillTag:FC<SkillTagProps> = ({tag}) => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    return(
        <span className={cn(classes.skillTag, 'text')}
            onClick={() => navigate('/cv-frontend/skills/' + tag)} 
        >
            {t("skills." + tag).includes('.') 
                ? tag
                : t("skills." + tag)
            }
        </span>  
    );
};

export default SkillTag;