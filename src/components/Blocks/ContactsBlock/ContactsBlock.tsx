import React, {FC} from "react";
import classes from "./ContactsBlock.module.scss";
import { ContactsBlockProps } from "../../../types/block";
import cn from 'classnames';
import Icons from "../../Icons/Icons";
import { useNavigate } from "react-router-dom";

const ContactsBlock:FC<ContactsBlockProps> = ({type, contacts}) => {
    const navigate = useNavigate();
    return (
        <div className={classes.contacts}>
            <h3 className={ type==='full'
                    ? cn("heading-l2 heading-l2__passive", classes.contacts__heading)
                    : cn("heading-l2", classes.contacts__heading)}
                onClick={() => navigate(`/cv-frontend/contacts`)} 
            >
                Contacts
            </h3>
            <div className={classes.contacts__topBlock}>
                <ul className={classes.contacts__list}>
                    {contacts.map( (info) =>
                        <li key={info.title} className={classes.contacts__item}>

                            <Icons name={info.title} size="20" color='black' className={classes.contacts__icon}/>

                            <a href={`${info.title}:${info.value}`}>
                                <p className={cn("text", classes.contacts__text)}>
                                    {info.value}
                                </p>
                            </a>
                            
                        </li>
                    )}
                </ul>
            </div>
            { type==='full' && <div className={classes.contacts__bottomBlock}>
                <ul className={classes.contacts__iconsList}>
                    {contacts.map( (info) =>
                        <li key={info.title} className={classes.contacts__iconsItem}>

                            <a href={info.value} target="_blank" className={classes.contacts__link}>
                                <Icons name={info.title} size="" className={classes.contacts__bigIcon}/>    
                            </a>
                            
                        </li>
                    )}
                </ul>
            </div>}
        </div>
    )
}

export default ContactsBlock;