import React from 'react';
import Logo from '../Image/logo2.png';
import FindCar from '../Image/sideImage/FindCar.png'
import CBTIGO from '../Image/sideImage/CBTIGO.png';
import test3 from '../Image/sideImage/test3.png';
import hyundai from '../Image/companyLogo/hyundai.png'
import kia from '../Image/companyLogo/kia.svg'
import chevrolet from '../Image/companyLogo/chevrolet.svg'
import gen from '../Image/companyLogo/gen.png'
import kgm from '../Image/companyLogo/kgm.svg'
import Reno from '../Image/companyLogo/Renault.png'
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
  const slidSrc = [
    {src:FindCar,href:'/startCBTI'}, 
    {src:CBTIGO,href:'/startCBTI'}, 
    {src:test3,href:'/startCBTI'}
  ]
  

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
          <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Estimate">견적</a>
          <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량정보</a>
          <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Support">고객지원</a>
        </div>
      </nav>
      {/* 슬라이드 부분 */}
      


      <div class="relative w-full">
        <img src={slidSrc[index].src} onClick={()=>navigate(slidSrc[index].href)} class="w-full h-140 rounded-lg" alt="Test" />

        <div className='slidButton' class="absolute justify-cneter bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button id="sButton1" onClick={sliderButton} class="hover:bg-gray-400 bg-gray-800 rounded-full w-4 h-4"></button>
          <button id="sButton2" onClick={sliderButton} class="hover:bg-gray-400 bg-gray-800 rounded-full w-4 h-4"></button>
          <button id="sButton3" onClick={sliderButton} class="hover:bg-gray-400 bg-gray-800 rounded-full w-4 h-4"></button>
        </div>
      </div>

      {/*로고 부분*/}


      <div className="w-full flex justify-center items-center space-x-4 mt-12">
  {/* 왼쪽 화살표 */}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-10 h-10 cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>

  {/* 로고 리스트 */}
  <div className="flex justify-between items-center w-full  px-6">
    <img alt="blog photo" src={hyundai} onClick={() => navigate("/hyundai")} className='w-35 h-20 hover:bg-yellow-100 mx-2' />
    <img alt="blog photo" src={kia} onClick={() => navigate("/kia")} className='hover:bg-yellow-100 w-30 h-20 mx-2' />
    <img alt="blog photo" src={chevrolet} className='hover:bg-yellow-100 w-30 h-25 mx-2' />
    <img alt="blog photo" src={Reno} className='hover:bg-yellow-100 w-20 h-25 mx-2' />
    <img alt="blog photo" src={kgm} onClick={() => navigate("/kgm")} className='hover:bg-yellow-100 w-35 h-20 mx-2' />
    <img alt="blog photo" src={gen} className='hover:bg-yellow-100 w-40 h-20 mx-2' />
  </div>

  {/* 오른쪽 화살표 */}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-10 h-10 cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
</div>




    </div>

  );
};

export default MainPage;