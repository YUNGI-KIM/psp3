import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StartCBTI from "./CBTI/StartCBTI";
import QuestionPage from "./CBTI/QuestionPage";
import CBTIResult from "./CBTI/CBTIResult";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Support from "./pages/Support";
import Estimator from "./pages/Estimator";
import AccForCar from "./pages/AccForCar";
import CarInformation from "./pages/CarInformation";
import ReceviedSupport from "./Admin/ReceivedSupport";
import AdminMainPage from './Admin/AdminMain';
import { UserProvider } from './contexts/UserContext';
import LoginSessionVerify from "./functions/LoginSessionVerify";
import AnswerForQ from "./Admin/AnswerForQ"
import VehicleDetail from "./CarDetail/VehicleDetail";

import Buy from "./buy/buy";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    document.title = "Vroom";
  }, []);
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
              <Route path="/buy" element={<Buy />} />
              <Route path="/buy/car/:brand" element={<Buy />} />
              <Route path="/buy/acc/:name" element={<Buy />} />
              <Route path='/receviedSupport' element={<ReceviedSupport/>} />
              <Route path='/answerForQ' element={<AnswerForQ/>} />
              <Route path='/adminMain' element={<AdminMainPage/>} />
              <Route path="/accForCar" element={<AccForCar />} />
              <Route path="/CarInformation" element={<CarInformation />} />
              <Route path="/CarDetail/:name" element={<VehicleDetail />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
  );
}

export default App;