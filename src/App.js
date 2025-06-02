import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StartCBTI from "./CBTI/StartCBTI";
import QuestionPage from "./CBTI/QuestionPage";
import CBTIResult from "./CBTI/CBTIResult";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Support from "./pages/Support";
import Estimator from "./pages/Estimator";
import CarInformation from "./pages/CarInformation";
import ReceviedSupport from "./Admin/ReceivedSupport";
import AdminMainPage from './Admin/AdminMain';
import { UserProvider } from './contexts/UserContext';
import LoginSessionVerify from "./functions/LoginSessionVerify";
import AnswerForQ from "./Admin/AnswerForQ"
import VehicleDetail from "./CarDetail/VehicleDetail";
import Buy from "./buy/buy";
import {useEffect} from "react";
import PurchasePage from "./buy/PurchasePage";
import Cart from  "./buy/CartPage"

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
              {/* 자동차 전체 보기 */}
              <Route path="/buy/car" element={<Buy pageType="자동차" />} />
              {/* 특정 브랜드 자동차 검색 */}
              <Route path="/buy/car/:brand" element={<Buy pageType="자동차" />} />
              {/* 악세서리 전체 보기 */}
              <Route path="/buy/acc" element={<Buy pageType="차량 악세서리" />} />
              {/* 특정 이름의 악세서리 검색 */}
              <Route path="/buy/acc/:name" element={<Buy pageType="차량 악세서리" />} />
              <Route path="/buy/cbti/:cbti" element={<Buy pageType="나에게 맞는 차량" />} />
              {/* 통합 검색 (자동차+악세서리) */}
              <Route path="/buy" element={<Buy pageType="all" />} />
              <Route path="/buy/:keyword" element={<Buy pageType="all" />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/purchase/" element={<PurchasePage />} />
              <Route path='/receviedSupport' element={<ReceviedSupport/>} />
              <Route path='/answerForQ' element={<AnswerForQ/>} />
              <Route path='/adminMain' element={<AdminMainPage/>} />
              <Route path="/CarInformation" element={<CarInformation />} />
              <Route path="/CarDetail/:name" element={<VehicleDetail />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
  );
}

export default App;