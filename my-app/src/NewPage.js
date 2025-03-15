import { Link } from "react-router-dom";

function NewPage() {
  return (
    <div>
      <h1>질문 1 : 난 집에 가고 싶다. </h1>
      <Link to="/">
        <button> 그렇다 </button>
        </Link>
        <Link>
        <button>아니다</button>
      </Link>
    </div>
  );
}

export default NewPage;