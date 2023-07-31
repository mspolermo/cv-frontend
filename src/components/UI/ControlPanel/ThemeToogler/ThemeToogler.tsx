import React, {FC} from 'react';
import styles from './ThemeToogler.module.scss';

import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { themeReducerDarkFalse, themeReducerDarkTrue } from '../../../../store/reducers/themeReducer';

const ThemeToogler:FC = () => {
    const {themeDark} = useTypedSelector(state => state.themeStyle);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        if (themeDark) {
            dispatch(themeReducerDarkFalse());
        } else {
            dispatch(themeReducerDarkTrue());
        }
    };

    return (
        <label className={styles.themeToogler} htmlFor="toggler">
            <input
                id="toggler"
                type="checkbox"
                defaultChecked={themeDark}
                onClick={toggleTheme}
            />
            <span className={styles.themeToogler__slider} />
            <span className={styles.themeToogler__wave} />
        </label>
    )
}

export default ThemeToogler