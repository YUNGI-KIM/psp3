import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Q1page from "./Q1page";
import Q2page from "./Q2page";
import Q3page from "./Q3page";
import Q4page from "./Q4page";
import Q5page from "./Q5page";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* 홈 페이지 */}
        <Route path="/Q1page" element={<Q1page />} />  {/* 질문페이지1*/}
        <Route path="/Q2page" element={<Q2page />} />  {/* 질문페이지2 */}
        <Route path="/Q3page" element={<Q3page />} />  {/* 질문페이지3 */}
        <Route path="/Q4page" element={<Q4page />} />  {/* 질문페이지4 */}
        <Route path="/Q5page" element={<Q5page />} />  {/* 질문페이지5 */}
      </Routes>
    </Router>
  );
}

export default App;