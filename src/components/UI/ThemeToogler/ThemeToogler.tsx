import React, {FC} from 'react';
import styles from './ThemeToogler.module.scss';


const ThemeToogler = ({ }) => (
  <label className={styles.themeToogler} htmlFor="toggler">
    <input
      id="toggler"
      type="checkbox"
      readOnly
    />
    <span className={styles.themeToogler__slider} />
    <span className={styles.themeToogler__wave} />
  </label>
)

export default ThemeToogler