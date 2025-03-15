import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NewPage from "./NewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* 홈 페이지 */}
        <Route path="/newpage" element={<NewPage />} />  {/* 새 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;