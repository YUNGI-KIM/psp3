import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
//이미지 import <img src={logo} />
import './App.css';

function App() {

  
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<MainPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
