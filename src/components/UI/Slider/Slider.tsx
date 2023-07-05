import React, {FC, useState} from "react";
import classes from './Slider.module.scss';
import cn from 'classnames';
import Icons from "../../Icons/Icons";

interface SliderProps {
    images: string []
}

const FADE_DURATION = 300;

const Slider:FC<SliderProps> = ({images}) => {
    const [slide, setSlide] = useState<number>(0);
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');
    const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();

    const handlerClick = (move: number) => {
        const timer = setTimeout(() => {
            setSlide( (s) => {

                if ( (s + move) == images.length ) {
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
        <div className={classes.slider}>

            <div className={cn(classes.slider__slide, classes.fadeState)} 
                    style={
                            {backgroundImage: `url(${images[slide]})`, 
                            transitionDuration: `${FADE_DURATION}ms`
            }}/>

            <button className={cn(classes.slider__arrow, classes.slider__arrow_left)} 
                    onClick={() => handlerClick(-1)}
            >
                <Icons name="arrow" size="20" color="black" />
            </button>

            <button className={cn(classes.slider__arrow, classes.slider__arrow_right)} 
                    onClick={() => handlerClick(+1)}
            >
                <Icons name="arrow" size="20" color="black" />
            </button>

        </div>
    )
}

export default Slider;


