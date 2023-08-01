import React, { useEffect } from 'react';
import classes from './LanguageChanger.module.scss';
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
    const { i18n } = useTranslation();

    useEffect( () => {
        i18n.changeLanguage('ru');
        // eslint-disable-next-line 
    }, []);

    const changeLanguage = (language:string) => {
        i18n.changeLanguage(language);
    };

    return (
            <div className={classes.languageChanger}>
                {i18n.language === 'ru' && (
                    <button
                        className={classes.languageChanger__btn}
                        onClick={() => changeLanguage('en')}
                    >
                        RU
                    </button>
                )}

                {i18n.language === 'en' && (
                    <button
                        className={classes.languageChanger__btn}
                        onClick={() => changeLanguage('ru')}
                    >
                        EN
                    </button>
                )}
        </div>
    );
};

export default LanguageChanger;