import React, {FC, useState} from "react";
import classes from './Slider.module.scss';
import { SliderProps } from "../../../types/ui";

import cn from 'classnames';

import Icons from "../../Icons/Icons";

const FADE_DURATION = 300;

const Slider:FC<SliderProps> = ({images, type}) => {
    const [slide, setSlide] = useState<number>(0);
    const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();

    //eslint-disable-next-line 
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');

    const handlerClick = (move: number) => {
        const timer = setTimeout(() => {
            setSlide( (s) => {

                if ( (s + move) === images.length ) {
                    return 0
                }; 

                if ( (s + move) < 0) {
                    return images.length - 1
                }; 

                return (s + move)
            });
            setFadeState('fade-in');
        }, FADE_DURATION);

        clearTimeout(currentTimer);
        setFadeState('fade-out');
        setCurrentTimer(timer);
    };

    return (
        <div className={ type === 'wide' 
                            ? cn(classes.slider, classes.slider__wide) 
                            : classes.slider}
        >

            <div className={ type === 'wide' 
                    ? cn(classes.slider__slide, classes.slider__slide_wide, classes.fadeState)
                    : cn(classes.slider__slide, classes.fadeState)} 
                    style={
                            {backgroundImage: `url(${images[slide]})`, 
                            transitionDuration: `${FADE_DURATION}ms`
            }}/>

            <button className={ type === 'wide' 
                    ? cn(classes.slider__arrow, classes.slider__arrow_wide, 
                                                classes.slider__arrow_left)
                    : cn(classes.slider__arrow, classes.slider__arrow_left)} 
                    onClick={() => handlerClick(-1)}
            >
                <Icons name="arrow" size="20" color="black" />
            </button>

            <button className={ type === 'wide' 
                    ? cn(classes.slider__arrow, classes.slider__arrow_wide, 
                                                classes.slider__arrow_right)
                    : cn(classes.slider__arrow, classes.slider__arrow_right)} 
                    onClick={() => handlerClick(+1)}
            >
                <Icons name="arrow" size="20" color="black" />
            </button>

        </div>
    );
};

export default Slider;


