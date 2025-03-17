import { Link } from "react-router-dom";

function Q1page() {
  return (
    <div>
      <h1>질문 1 : 난 집에 가고 싶다. </h1>
      <Link to="/Q2page">
        <button> 그렇다 </button>
        </Link>
        <Link to="/Q2page">
        <button>아니다</button>
      </Link>
    </div>
  );
}

export default Q1page;