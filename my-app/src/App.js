import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./CBTI/Home";
import Q1page from "./CBTI/Q1page";
import Q2page from "./CBTI/Q2page";
import Q3page from "./CBTI/Q3page";
import Q4page from "./CBTI/Q4page";
import Q5page from "./CBTI/Q5page";
import CBTIResult from "./CBTI/CBTIResult";
import Login from "./Login/Login";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  {/* 홈 페이지 */}
        <Route path="/Q1page" element={<Q1page />} />  {/* 질문페이지1*/}
        <Route path="/Q2page" element={<Q2page />} />  {/* 질문페이지2 */}
        <Route path="/Q3page" element={<Q3page />} />  {/* 질문페이지3 */}
        <Route path="/Q4page" element={<Q4page />} />  {/* 질문페이지4 */}
        <Route path="/Q5page" element={<Q5page />} />  {/* 질문페이지5 */}
        <Route path="/result" element={<CBTIResult />} />  {/* 질문페이지5 */}
        <Route path="/login" element={<Login/>} />  {/* 홈 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;