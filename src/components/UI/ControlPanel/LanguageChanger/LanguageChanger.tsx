import { useState } from 'react';
import classes from './LanguageChanger.module.scss';
import { useTranslation } from 'react-i18next';

const  LanguageChanger = () => {

    // eslint-disable-next-line
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language)
  
    const changeLanguage = (language:string) => {
        i18n.changeLanguage(language);
        setCurrentLanguage(i18n.language);
    }

    return (
        <div className={classes.languageChanger}>

            { currentLanguage==='ru' && <button 
                className={classes.languageChanger__btn}
                onClick={() => changeLanguage('en')}
            >RU</button>}

            {currentLanguage==='en' && <button
                className={classes.languageChanger__btn}
                onClick={() => changeLanguage('ru')}
            >EN</button>}

        </div>
    )
}

export default LanguageChanger;