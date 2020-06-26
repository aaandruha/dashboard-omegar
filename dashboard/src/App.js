import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Content from './components/content/content'

function App() {
  return (
    <div className="App">
      <Header />
      <Content dateStart={'29.06.2020'}/>
    </div>
  );
}

export default App;
