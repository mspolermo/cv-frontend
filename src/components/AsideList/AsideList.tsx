import React, { FC } from "react";
import classes from "./AsideList.module.scss"
import Icons from "../Icons/Icons";
import { AsideListProps } from "../../types/block";

const AsideList:FC<AsideListProps> = ({name, array}) => {
    
    return (
        <div className={classes.asideList}>
            <h2 className={"heading-l2 " + classes.asideList__heading}>{name}</h2>
            <ul className={classes.asideList__list}>

                {array.map( (info) =>

                    <div key={ (typeof info == 'string')
                        ? info
                        : info.value
                    }>

                        { (typeof info == 'string') 
                        ?
                            <li className={classes.asideList__item}>
                                <Icons name="circle" size="10" className={classes.asideList__icon +" " + classes.asideList__icon_circle}/>
                                <p className={"text " + classes.asideList__text}>{info}</p>
                            </li>
                        :
                            <li className={classes.asideList__item + " " + classes.asideList__item_composite}>

                                <Icons name={info.type} size="20" className={classes.asideList__icon}/>

                                <a href={`${info.type}:${info.value}`}>
                                    <p className={"text " + classes.asideList__text}>
                                        {info.value}
                                    </p>
                                </a>
                                
                            </li>
                        }

                    </div>
                )}

            </ul>
        </div>
    );
};

export default AsideList;