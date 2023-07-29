import React, {FC} from 'react';
import styles from './ThemeToogler.module.scss';

import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { themeReducerDarkFalse, themeReducerDarkTrue } from '../../../store/reducers/themeReducer';

const ThemeToogler:FC = () => {
    const {themeDark} = useTypedSelector(state => state.themeStyle);
    const dispatch = useDispatch();

    function changeTheme (){
        switch (themeDark) {
            case true:
                dispatch(themeReducerDarkFalse());
                break;
            case false:
                dispatch(themeReducerDarkTrue());
        }
    };

    return (
        <label className={styles.themeToogler} htmlFor="toggler">
            <input
                id="toggler"
                type="checkbox"
                readOnly
                onClick={changeTheme}
            />
            <span className={styles.themeToogler__slider} />
            <span className={styles.themeToogler__wave} />
        </label>
    )
}

export default ThemeToogler