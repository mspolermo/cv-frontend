import React from 'react';
import './styles/App.scss';
import AsideBlock from './components/AsideBlock/AsideBlock';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import Routing from './components/Routing/Routing';

function App() {
  return (
    <div className="app">
      <Routing />  
    </div>
  );
}

export default App;
