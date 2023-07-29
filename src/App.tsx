import React from 'react';
import './styles/App.scss';
import cn from 'classnames';

import Routing from './components/Routing/Routing';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
    const {themeDark} = useTypedSelector(state => state.themeStyle);

    return (
        <div className={themeDark === false ? 'app' :cn('app', 'app__dark')}>
            <Routing />  
        </div>
    );
}

export default App;
