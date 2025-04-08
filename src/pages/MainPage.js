import React from 'react';
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
import Header from '../buy/functions/Header';

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
      {/*헤더부분START*/}
      {Header()}
      {/*헤더부분END*/}
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