
import { useNavigate } from "react-router-dom";
import Logo from '../Image/logo2.png';



function Hyundai(){
    const navigate = useNavigate();      
 return(

    <div className="flex flex-col w-full">
    {/* 상단 헤더 */}
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


    {/* 내비게이션 바 */}
    <nav className="flex-1 bg-black text-gray-300 p-4 md:flex justify-center text-lg">
      <div className="flex justify-between w-full max-w-screen-xlg mx-auto px-4 md:px-10 lg:px-20 xl:px-32">
              <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량구매</a>
              <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">부속부품</a>
              <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">견적</a>
              <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량정보</a>
              <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Support">고객지원</a>
      </div>
    </nav>



<div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
    <div class="w-1/3 bg-cover bg-landscape">
    </div>
    <div class="w-2/3 p-4">
        <h1 class="text-2xl font-bold text-gray-900">
            Tomorow
        </h1>
        <p class="mt-2 text-sm text-gray-600">
            You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
        </p>
        <div class="flex mt-2 item-center">
            <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
        </div>
        <div class="flex justify-between mt-3 item-center">
            <h1 class="text-xl font-bold text-gray-700">
                $220
            </h1>
            <button class="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                Add to Card
            </button>
        </div>
    </div>
</div>
</div>
 );
}
export default Hyundai;