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
import PurchasePage from './pages/PurchasePage';
import CartPage from './pages/CartPage';
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

import KiaBongo from  "./CarDetail/CarDetailKia/KiaBongo"
import KiaBongoEv from "./CarDetail/CarDetailKia/KiaBongoEv"
import KiaCarnival from "./CarDetail/CarDetailKia/KiaCarnival"
import KiaEv3 from "./CarDetail/CarDetailKia/KiaEv3"
import KiaEv4 from "./CarDetail/CarDetailKia/KiaEv4"
import KiaEv6 from  "./CarDetail/CarDetailKia/KiaEv6"
import KiaK8 from "./CarDetail/CarDetailKia/KiaK8"
import KiaK9 from "./CarDetail/CarDetailKia/KiaK9"
import KiaMorning from "./CarDetail/CarDetailKia/KiaMorning"
import KiaSeltos from "./CarDetail/CarDetailKia/KiaSeltos"
import KiaSorento from  "./CarDetail/CarDetailKia/KiaSorento"
import KiaSportage from "./CarDetail/CarDetailKia/KiaSportage"

import Buy from "./buy/buy";
import G70 from './CarDetail/CarDetialGenesis/G70';
import G80 from './CarDetail/CarDetialGenesis/G80';
import G90 from './CarDetail/CarDetialGenesis/G90';
import GV60 from './CarDetail/CarDetialGenesis/GV60';
import GV70 from './CarDetail/CarDetialGenesis/GV70';
import GV80 from './CarDetail/CarDetialGenesis/GV80';

import Arkana from './CarDetail/CarDetailRenault/Arkana';
import GrandKoleos from './CarDetail/CarDetailRenault/GrandKoleos';
import Qm6 from './CarDetail/CarDetailRenault/Qm6';
import Qm6Quest from './CarDetail/CarDetailRenault/Qm6Quest';
import Sm6 from './CarDetail/CarDetailRenault/Sm6';


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
              <Route path="/purchase" element={<PurchasePage />} />
              <Route path="/cart" element={<CartPage />} />
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

              <Route path="/CarDetail/CarDetailKia/KiaBongo" element={<KiaBongo />} />
              <Route path="/CarDetail/CarDetailKia/KiaBongoEv" element={<KiaBongoEv />} />
              <Route path="/CarDetail/CarDetailKia/KiaCarnival" element={<KiaCarnival />} />
              <Route path="/CarDetail/CarDetailKia/KiaEv3" element={<KiaEv3 />} />
              <Route path="/CarDetail/CarDetailKia/KiaEv4" element={<KiaEv4 />} />
              <Route path="/CarDetail/CarDetailKia/KiaEv6" element={<KiaEv6 />} />
              <Route path="/CarDetail/CarDetailKia/KiaK8" element={<KiaK8 />} />
              <Route path="/CarDetail/CarDetailKia/KiaK9" element={<KiaK9 />} />
              <Route path="/CarDetail/CarDetailKia/KiaMorning" element={<KiaMorning />} />
              <Route path="/CarDetail/CarDetailKia/KiaSeltos" element={<KiaSeltos />} />
              <Route path="/CarDetail/CarDetailKia/KiaSorento" element={<KiaSorento />} />
              <Route path="/CarDetail/CarDetailKia/KiaSportage" element={<KiaSportage />} />

              <Route path="/CarDetail/CarDetailGenesis/G70" element={<G70 />} />
              <Route path="/CarDetail/CarDetailGenesis/G80" element={<G80 />} />
              <Route path="/CarDetail/CarDetailGenesis/G90" element={<G90  />} />
              <Route path="/CarDetail/CarDetailGenesis/GV60" element={<GV60 />} />
              <Route path="/CarDetail/CarDetailGenesis/GV70" element={<GV70 />} />
              <Route path="/CarDetail/CarDetailGenesis/GV80" element={<GV80 />} />

              <Route path="/CarDetail/CarDetailRenault/Arkana" element={<Arkana />} />
              <Route path="/CarDetail/CarDetailRenault/GrandKoleos" element={<GrandKoleos />} />
              <Route path="/CarDetail/CarDetailRenault/Qm6" element={<Qm6 />} />
              <Route path="/CarDetail/CarDetailRenault/Qm6Quest" element={<Qm6Quest />} />
              <Route path="/CarDetail/CarDetailRenault/Sm6" element={<Sm6 />} />




            </Routes>
          </BrowserRouter>
        </UserProvider>
  );
}

export default App;