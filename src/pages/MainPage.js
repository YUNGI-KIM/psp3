import React from 'react';
import Logo from './logo2.png';
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  function goLogin(){
      navigate("/login");
    }
    function goRegister(){
      navigate("/register");
    }
  return (
    <div className="flex flex-col h-screen">
      {/* 상단 헤더 */}
      <div className="flex items-center ml-10">
        <a className="flex-shrink-0" href="/">
          <img className="w-50 h-15" src={Logo} />
        </a>
        <div className="flex items-center justify-between w-full p-4 bg-white ml-75">
        <span className="flex h-10 w-130 text-sm border border-gray-300 rounded-full cursor-pointer">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="w-full px-4 text-sm rounded-full focus:outline-none"
          />
        </span>
          <button onClick={goLogin} type="button"className="py-2  bg-slate-50 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black w-20 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ml-70">
            로그인
          </button>
          <button onClick={goRegister} type="button" className="py-2  bg-gray-900 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-25 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mr-20">
            회원가입
          </button>
        </div>
      </div>

      {/* 내비게이션 바 */}
      <nav className="bg-black dark:bg-gray-800 shadow">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div>
              <div className="flex items-baseline ml-10 space-x-4">
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량구매</a>
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">부속부품</a>
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">견적</a>
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량정보</a>
                {/* <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">견적</a> */}
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">고객지원</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
        {/* 슬라이드 부분 */}
    <div class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div class="flex items-center gap-8 p-8 lg:p-24">
            <img src="/images/landscape/3.jpg" class="w-1/2 rounded-lg" alt="Tree"/>
        </div>
    </div>


      </div>

  );
};

export default MainPage;