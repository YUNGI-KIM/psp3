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
import CarInformation from "./pages/CarInformation";
import ReceviedSupport from "./Admin/ReceivedSupport";
import AdminMainPage from './Admin/AdminMain';
import { UserProvider } from './contexts/UserContext';
import LoginSessionVerify from "./functions/LoginSessionVerify";
import AnswerForQ from "./Admin/AnswerForQ"
import HyundaiCasper from "./CarDetail/HyundaiCasper";
import HyundaiAvante from "./CarDetail/HyundaiAvante";
import HyundaiGrandeur from "./CarDetail/HyundaiGrandeur";
import HyundaiIoniq from "./CarDetail/HyundaiIoniq";
import HyundaiPalisade from "./CarDetail/HyundaiPalisade";
import HyundaiPorter from "./CarDetail/HyundaiPorter";
import HyundaiSantafe from "./CarDetail/HyundaiSantafe";
import HyundaiSonata from "./CarDetail/HyundaiSonata";

import Buy from "./buy/buy";

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
              <Route path="/buy" element={<Buy />} />
              <Route path='/receviedSupport' element={<ReceviedSupport/>} />
              <Route path='/answerForQ' element={<AnswerForQ/>} />
              <Route path='/adminMain' element={<AdminMainPage/>} />
              <Route path="/accForCar" element={<AccForCar />} />
              <Route path="/CarInformation" element={<CarInformation />} />
              <Route path="/hyundai" element={<Hyundai />} />
              <Route path="/kia" element={<Kia />} />
              <Route path="/kgm" element={<Kgm />} />
              <Route path="/reno" element={<Reno />} />
              <Route path="/Chevo" element={<Chevo />} />
              <Route path="/Gen" element={<Gen />} />
              <Route path="/BMW" element={<BMW />} />
              <Route path="/CarDetail/HyundaiCasper" element={<HyundaiCasper />} />
              <Route path="/CarDetail/HyundaiAvante" element={<HyundaiAvante />} />
              <Route path="/CarDetail/HyundaiGrandeur" element={<HyundaiGrandeur />} />
              <Route path="/CarDetail/HyundaiIoniq" element={<HyundaiIoniq />} />
              <Route path="/CarDetail/HyundaiPalisade" element={<HyundaiPalisade />} />
              <Route path="/CarDetail/HyundaiPorter" element={<HyundaiPorter />} />
              <Route path="/CarDetail/HyundaiSantafe" element={<HyundaiSantafe />} />
              <Route path="/CarDetail/HyundaiSonata" element={<HyundaiSonata />} />

            </Routes>
          </BrowserRouter>
        </UserProvider>
  );
}

export default App;