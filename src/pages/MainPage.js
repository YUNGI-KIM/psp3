import React from 'react';
import Logo from '../Image/logo2.png';
import test from '../Image/sideImage/test.png';
import test2 from '../Image/sideImage/test2.png';
import test3 from '../Image/sideImage/test3.png';
import hyundai from '../Image/companyLogo/hyundai.png'
import kia from '../Image/companyLogo/kia.svg'
import chevrolet from '../Image/companyLogo/chevrolet.png'
import gen from '../Image/companyLogo/gen.png'
import kgm from '../Image/companyLogo/kgm.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const MainPage = () => {

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  function sliderButton() {
    var num;
    document.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", function (event) {
        console.log("클릭된 버튼의 ID:", event.target.id);
        num = event.target.id;

        console.log(num);
        if (num == "sButton1") {
          setIndex(0);
        }
        else if (num == "sButton2") {
          setIndex(1);
        }
        else if (num == "sButton3") {
          setIndex(2);
        }
      });
    });

  }

  const slidSrc = [test, test2, test3]

  return (
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
            className="border rounded-full px-4 py-2 w-40 sm:w-100 focus:outline-none text-base"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-gray-50 hover:bg-slate-600 text-black rounded-lg text-base"
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
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">고객지원</a>
        </div>
      </nav>
      {/* 슬라이드 부분 */}

      <div class="relative w-full">
        <img src={slidSrc[index]} class="w-full h-160 rounded-lg" alt="Test" />

        <div className='slidButton' class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button id="sButton1" onClick={sliderButton} class="bg-gray-800 rounded-full w-4 h-4"></button>
          <button id="sButton2" onClick={sliderButton} class="bg-gray-800 rounded-full w-4 h-4"></button>
          <button id="sButton3" onClick={sliderButton} class="bg-gray-800 rounded-full w-4 h-4"></button>
        </div>
      </div>

      {/*로고 부분*/}

      <div className="flex justify-between w-full max-w-screen-xlg mx-auto pt-5" >
        <img alt="blog photo" src={hyundai} onClick={() => navigate("/hyundai")} className='w-25 pl-10 hover:bg-indigo-800'/>
        <img alt="blog photo" src={kia} className='hover:bg-indigo-800 w-25 ' />
        <img alt="blog photo" src={chevrolet} className='hover:bg-indigo-800 w-25'/>
        <img alt="blog photo" src={kgm} className='hover:bg-indigo-800'/>
        <img alt="blog photo" src={gen} className='pr-10 hover:bg-indigo-800 w-35' />

      </div>








    </div>

  );
};

export default MainPage;