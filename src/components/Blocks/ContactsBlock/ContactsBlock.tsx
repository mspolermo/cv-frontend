import React, {FC} from "react";
import classes from "./ContactsBlock.module.scss";
import { ContactsBlockProps } from "../../../types/block";
import { useNavigate } from "react-router-dom";
import cn from 'classnames';

import Icons from "../../Icons/Icons";
import { useTranslation } from "react-i18next";

const ContactsBlock:FC<ContactsBlockProps> = ({type, contacts}) => {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const {t, i18n} = useTranslation();
    return (
        <div className={classes.contacts}>

            <h3 className={ type==='full'
                    ? cn("heading-l2 heading-l2__passive", classes.contacts__heading)
                    : cn("heading-l2", classes.contacts__heading)}
                onClick={() => navigate(`/cv-frontend/contacts`)} 
            >
                {t('headers.contacts')}
            </h3>

            <div className={classes.contacts__topBlock}>
                <ul className={classes.contacts__list}>

                    {contacts.map( (info) =>
                        <li key={info.title} 
                            className={classes.contacts__item}
                        >

                            <Icons name={info.title} 
                                    size="20" 
                                    color='black' 
                                    className={classes.contacts__icon}
                            />

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
                        <li key={info.title} 
                            className={classes.contacts__iconsItem}
                        >

                            <a href={info.value} 
                                target="_blank"
                                rel="noreferrer" 
                                className={classes.contacts__link}
                            >
                                <Icons name={info.title} 
                                        size="100%" 
                                        className={classes.contacts__bigIcon}
                                />    
                            </a>
                            
                        </li>
                    )}

                </ul>
            </div>}

        </div>
    );
};

export default ContactsBlock;