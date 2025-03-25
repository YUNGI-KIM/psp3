import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./CBTI/Home";
import QuestionPage from "./CBTI/QuestionPage";
import CBTIResult from "./CBTI/CBTIResult";
import Login from "./Login/Login";
import Register from "./Login/Register";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* 홈 페이지 */}
        <Route path="/QuestionPage" element={<QuestionPage />} />  {/* 질문페이지1*/}
        <Route path="/login" element={<Login />} />  {/* 홈 페이지 */}
        <Route path="/register" element={<Register />} />  {/* 홈 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;