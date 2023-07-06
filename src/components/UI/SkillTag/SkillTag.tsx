import React, {FC} from "react";
import classes from "./SkillTag.module.scss";
import { SkillTagProps } from "../../../types/ui";

const SkillTag:FC<SkillTagProps> = ({tag}) => {
    return(
        <p className={classes.skillTag}>
            {tag}
        </p>  
    )
}

export default SkillTag;