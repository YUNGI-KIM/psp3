import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StartCBTI from "./CBTI/StartCBTI";
import QuestionPage from "./CBTI/QuestionPage";
import CBTIResult from "./CBTI/CBTIResult";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Support from "./pages/Support";
import Hyundai from './buy/hyundai';
import Kia from './buy/kia';
import Kgm from './buy/kgm';
import Estimator from "./pages/Estimator";
import AccForCar from "./pages/AccForCar";

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
        <Route path="/Estimator" element={<Estimator/>} />
        <Route path="/AccForCar" element={<AccForCar/>} />
    </Routes>
    <Routes>
        <Route path="/hyundai" element={<Hyundai/>} /> 
        <Route path="/kia" element={<Kia/>} /> 
        <Route path="/kgm" element={<Kgm/>} /> 
        <Route path="/kgm" element={<Genesis/>} /> 
        <Route path="/kgm" element={<Reno/>} /> 
        <Route path="/kgm" element={<Chevo/>} />     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
