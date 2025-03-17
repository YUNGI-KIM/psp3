import { Link } from "react-router-dom";

function Q2Page() {
  return (
    <div>
      <h1>질문 2 : 난 집에 가고 싶다. </h1>
      <Link to="/Q3page">
        <button> 그렇다 </button>
        </Link>
        <Link to="/Q3page">
        <button>아니다</button>
      </Link>
    </div>
  );
}

export default Q2Page;