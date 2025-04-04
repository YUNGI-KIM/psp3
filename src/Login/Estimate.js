import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from '../Image/logo2.png';
import sonataInterior from '../Image/Estimate/Hyundai/Sonata/sonataInterior.png';


function Estimate() {
    const navigate = useNavigate();
    
    return (
    <>
      <div className="flex items-center justify-between p-4">
        <a href="/">
          <img className="w-40" src={Logo} alt="Logo" />
        </a>
        <div className="flex-1 flex justify-center">
          <input
            type="search"
            placeholder="Search"
            className="border rounded-full px-4 py-2 w-40 sm:w-140 ml-15.5 focus:outline-none text-base"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-400 text-black rounded-lg text-base"
          >
            로그인
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-4 py-2 bg-gray-900 hover:bg-gray-400 text-white rounded-lg text-base"
          >
            회원가입
          </button>
        </div>
      </div>
      <nav className="flex-1 bg-black text-gray-300 p-4 md:flex justify-center text-lg">
      <div className="flex justify-between w-full max-w-screen-xlg mx-auto px-4 md:px-10 lg:px-20 xl:px-32">
              <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량구매</a>
              <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">부속부품</a>
              <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Estimate">견적</a>
              <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량정보</a>
              <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Support">고객지원</a>
      </div>
      </nav>
      <div class= "py-3 text-left text-2xl font-black">쏘나타 디 엣지 - Premium</div>
      <div class= "text-gray-400 text-left ">쏘나타 디 엣지 자가용 가솔린 1.6T-GDi Premium</div>
      <div class= "text-left text-xl font-black">총 차량 가격 28,980,000 원</div>
      <img alt="blog photo" src={sonataInterior} className='hover:bg-indigo-800 w-70 h-40 mx-2' />

    </>

    );
}
export default Estimate;