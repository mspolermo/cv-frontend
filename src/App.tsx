import React from 'react';
import './styles/App.scss';
import AsideBlock from './components/AsideBlock/AsideBlock';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <div className="container">
        <AsideBlock />
        <div>
          <Header />
          <MainPage /> 
        </div>
      </div>  
    </div>

  );
}

export default App;
