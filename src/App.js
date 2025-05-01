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
import Reno from './buy/reno';
import Chevo from './buy/chevo';
import Gen from './buy/genesis';
import BMW from './buy/BMW';
import Estimator from "./pages/Estimator";
import AccForCar from "./pages/AccForCar";
import { UserProvider } from './contexts/UserContext';
import LoginSessionVerify from "./buy/functions/LoginSessionVerify";

function App() {
  return (
        <UserProvider>
          <BrowserRouter>
            <LoginSessionVerify />
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
              <Route path="/reno" element={<Reno />} />
              <Route path="/Chevo" element={<Chevo />} />
              <Route path="/Gen" element={<Gen />} />

            </Routes>
          </BrowserRouter>
        </UserProvider>
  );
}

export default App;