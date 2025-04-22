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
            <Route path="/" element={<MainPage />} />
            <Route path="/startCBTI" element={<StartCBTI />} />
            <Route path="/QuestionPage" element={<QuestionPage />} />
            <Route path="/result" element={<CBTIResult />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/support" element={<Support />} />
            <Route path="/estimator" element={<Estimator />} />
            <Route path="/accForCar" element={<AccForCar />} />
            <Route path="/hyundai" element={<Hyundai />} />
            <Route path="/kia" element={<Kia />} />
            <Route path="/kgm" element={<Kgm />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;