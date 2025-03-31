import React from 'react';
import Logo from '../Image/logo2.png';
import test from '../Image/sideImage/test.png';
import { useNavigate } from "react-router-dom";

const MainPage = () => {
<<<<<<< HEAD
=======

>>>>>>> 24a7423449e3c9d0566752583e23b2a911a6b31c
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
<<<<<<< HEAD
          <button onClick={goLogin} type="button"className="py-2  bg-slate-50 hover:bg-gray-300 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black w-20 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ml-130">
=======
          <button onClick={goLogin} type="button"className="py-2  bg-slate-50 hover:bg-gray-300 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black w-25 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ml-130">
>>>>>>> 24a7423449e3c9d0566752583e23b2a911a6b31c
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
              <div className="flex items-baseline ml-10 space-x-50">
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
    <div class="relative w-full">
        <img src={test} class="w-full h-160 rounded-lg" alt="Test"/>
        

        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button id="sButton1" onclick="sliderButton1()" class="bg-gray-800 rounded-full w-4 h-4"></button>
            <button id="sButton2" onclick="sliderButton2()" class="bg-gray-800 rounded-full w-4 h-4"></button>
        </div>
    </div>
</div>

  );
};

export default MainPage;