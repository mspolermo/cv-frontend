import React, { FC } from "react";
import classes from "./AsideList.module.scss"
import Icons from "../../Icons/Icons";
import { AsideListProps } from "../../../types/list";
import cn from 'classnames';

const AsideList:FC<AsideListProps> = ({name, array}) => {
    
    return (
        <div className={classes.asideList}>
            <h2 className={cn("heading-l2", classes.asideList__heading)}>{name}</h2>
            <div className={classes.asideList__list}>

                {array.map( (info) =>

                    <ul key={ (typeof info == 'string')
                        ? info
                        : info.title
                    }>
                        
                        { (typeof info == 'string') 

                        ?
                            <li className={classes.asideList__item}>
                                <p className={ cn( "text", 
                                                classes.asideList__text, 
                                                classes.asideList__text_mark)
                                }>
                                    {info}
                                </p>
                            </li>

                        : (typeof info.value == 'string')
                            ?
                                <li className={cn(classes.asideList__item, 
                                                classes.asideList__item_composite)
                                }>

                                    <Icons name={info.title} size="20" className={classes.asideList__icon}/>

                                    <a href={`${info.title}:${info.value}`}>
                                        <p className={cn("text", classes.asideList__text)}>
                                            {info.value}
                                        </p>
                                    </a>
                                    
                                </li>
                            :
                                <li className={classes.asideList__item}>
                                    <div>
                                        <p className={cn("text", 
                                                    classes.asideList__text, 
                                                    classes.asideList__text_mark)
                                        }>
                                            {info.title}
                                        </p>
                                        {info.value.map( info => 
                                            <p  key={info}className={cn("text", 
                                                            classes.asideList__text, 
                                                            classes.asideList__text_markL2)
                                            }>
                                                {info}
                                            </p>
                                        )}
                                    </div>
                                </li>
                        }

                    </ul>
                )}

            </div>
        </div>
    );
};

export default AsideList;