import React, {FC} from "react";
import classes from "./SkillBlock.module.scss";
import cn from 'classnames';
import { ISkill, IUserProject, IUserWork, userInit } from "../../../types/IUser";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

interface SkillBlockProps {
    type: 'short' | 'full',
    skill : ISkill
}

const SkillBlock:FC<SkillBlockProps> = ({skill, type}) => {
    const {mainData} = useTypedSelector(state => state.main);
    const navigate = useNavigate();

    //Получение массива [место, ссылка, [масиив всех полученных скилов]], для отрисовки
    // в full блоке и переходов по тегам -- вынести в utils и объеденить с такой-же функцией
    // из блока projectBlock

    function getAllSkills (item: IUserProject | IUserWork) {
        const tagsArray = [];   

        for (let i=0; i<item.skills.length; i++) {

            if (typeof item.skills[i] === 'string') {

                tagsArray.push(item.skills[i]);

            } else {

                let innerObject = item.skills[i];
                type objectKeyType = keyof typeof innerObject; 


                Object.keys(innerObject).forEach((key) => {

                    if (typeof innerObject[key as objectKeyType] === 'string') {

                        tagsArray.push(innerObject[key as objectKeyType]);

                    } else {

                        let innerArray: string[] = innerObject[key as objectKeyType];

                        innerArray.forEach( item => tagsArray.push(item));

                    };
                });

            };
        };

        return tagsArray;
    };
    const projectsSkillsArray = mainData.projects.map( (project) => {
        return [project.name, `/cv-frontend/projects/${project.name}`, getAllSkills(project)]
    })
    const worksSkillsArray = mainData.works.map( (work) => {
        return [work.company, `/cv-frontend/work-experience/${work.companyEn}`, getAllSkills(work)]
    })
    const allSkillsArray = projectsSkillsArray.concat(worksSkillsArray);

    switch (type) {
        case 'short':
            return (
                <li className={classes.skillBlock}>
                    {(typeof skill == 'string') 
                    ?
                        <div className={classes.skillBlock__item}>
                            <p className={ cn( "text", 
                                            classes.skillBlock__text, 
                                            classes.skillBlock__text_mark)
                            }>
                                {skill}
                            </p>

                        </div>
                    : 

                        <div className={classes.skillBlock__item}>
                            <p className={cn("text", 
                                        classes.skillBlock__text, 
                                        classes.skillBlock__text_mark)
                            }>
                                {skill.title}
                            </p>
                            <div>
                                {skill.value.map( info => 
                                    <p  key={info}className={cn("text", 
                                                    classes.skillBlock__text, 
                                                    classes.skillBlock__text_markL2)
                                    }>
                                        {info}
                                    </p>
                                )}
                            </div>
                        </div>

                    }
                </li>    
            )
        case "full":
            return (
                <li className={classes.fullSkillBlock}>
                    {(typeof skill == 'string') 
                    ?
                        <div className={classes.fullSkillBlock__item}>
                            <p className={ cn( "text", classes.fullSkillBlock__text)}>
                                {skill}
                            </p>

                            {allSkillsArray.map( (project) => {
                                if (project[2].includes(skill))
                                return (
                                    <div onClick={() => navigate(`${project[1]}`)} >
                                        {project[0].toString()}
                                    </div>)
                            })}

                        </div>
                    : 

                        <div className={classes.fullSkillBlock__item}>
                            <p className={cn("text", classes.fullSkillBlock__text)}>
                                {skill.title}
                            </p>

                            {allSkillsArray.map( (project) => {
                                if (project[2].includes(skill.title))
                                    return (
                                        <div onClick={() => navigate(`${project[1]}`)}>
                                            {project[0].toString()}
                                        </div>)
                            })}
                           
                            {skill.value.map( info => 
                                <div>
                                    <p  key={info}className={cn("text",classes.skillBlock__text)}>
                                        {info}
                                    </p>

                                    {allSkillsArray.map( (project) => {
                                        if (project[2].includes(info))
                                            return (
                                                <div onClick={() => navigate(`${project[1]}`)}>
                                                    {project[0].toString()}
                                                </div>)
                                    })}

                                </div>
                            )}
                            
                        </div>

                    }
                </li> 
            )
    }

}

export default SkillBlock;