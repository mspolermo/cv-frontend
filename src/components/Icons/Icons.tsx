import React, { FC } from 'react';
import IconsSVG from './icons.svg';

interface IconsProps {
    name: string;
    color?: string;
    size: string;
    className?: string;
    strokeWidth?: string;
}

const Icons:FC<IconsProps> = ({name, color='#fff', size='20', className, strokeWidth='1'}) => {
    return(
        <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size} strokeWidth={strokeWidth}>
            <use xlinkHref={`${IconsSVG}#icon-${name}`} />
        </svg>
    );
};
  
export default Icons;