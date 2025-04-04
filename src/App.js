import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.css';
import StartCBTI from "./CBTI/StartCBTI";
import QuestionPage from "./CBTI/QuestionPage";
import CBTIResult from "./CBTI/CBTIResult";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Support from "./Login/Support";
import Hyundai from './buy/hyundai';
import Estimate from'./Login/Estimate';

function App() {

  
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<MainPage/>} />
      </Routes>
      <Routes>
      <Route path="/startCBTI" element={<StartCBTI/>} />  {/* 스타트 페이지 */}
        <Route path="/QuestionPage" element={<QuestionPage />} />  {/* 질문페이지들 */}
        <Route path="/result" element={<CBTIResult />} />  {/* 결과페이지 */}
        </Routes>
        <Routes>
        <Route path="/login" element={<Login/>} />  {/* 로그인 페이지 */}
        <Route path="/register" element={<Register/>} />  {/* 가입 페이지 */}
        <Route path="/Support" element={<Support/>} /> 
        <Route path="/Estimate" element={<Estimate/>} /> 
    </Routes>
    <Routes>
        <Route path="/hyundai" element={<Hyundai/>} /> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
