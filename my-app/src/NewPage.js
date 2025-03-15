import { Link } from "react-router-dom";

function NewPage() {
  return (
    <div>
      <h1>Q.1</h1>
      <Link to="/">
        <button>홈으로 이동</button>
      </Link>
    </div>
  );
}

export default NewPage;