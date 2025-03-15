import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>CBTI</h1>
      <Link to="/newpage">
        <button>나에게 딱 맞는 차 고르러 가기!</button>
      </Link>
    </div>
  );
}

export default Home;