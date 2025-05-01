import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

import FindCar from '../Image/sideImage/FindCar.png';
import CBTIGO from '../Image/sideImage/CBTIGO.png';
import test3 from '../Image/sideImage/test3.png';
import hyundai from '../Image/companyLogo/hyundai.png';
import kia from '../Image/companyLogo/kia.svg';
import chevrolet from '../Image/companyLogo/chevrolet.svg';
import gen from '../Image/companyLogo/gen.png';
import kgm from '../Image/companyLogo/kgm.svg';
import Reno from '../Image/companyLogo/Renault.png';
import Header from '../buy/functions/Header';
import LoginSessionVerify from "../buy/functions/LoginSessionVerify";
import {useUser} from "../contexts/UserContext";



const MainPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    console.log("MainPage 감지: user 상태 변화", user);
  }, [user]);

  const slidSrc = [
    { src: FindCar, href: '/startCBTI' },
    { src: CBTIGO, href: '/startCBTI' },
    { src: test3, href: '/startCBTI' },
  ];

  const handleButtonClick = (num) => {
    if (num === "sButton1") {
      setIndex(0);
    } else if (num === "sButton2") {
      setIndex(1);
    } else if (num === "sButton3") {
      setIndex(2);
    }
  };

  return (
      <div className="flex flex-col w-full">
        {/*<LoginSessionVerify />*/}
        {/* 헤더 */}
        <Header key={user ? user.id : "guest"} />

        {/* 슬라이더 영역 */}
        <div className="relative w-full">
          <img
              src={slidSrc[index].src}
              onClick={() => navigate(slidSrc[index].href)}
              className="w-full h-150 rounded-lg cursor-pointer"
              alt={`Slide ${index + 1}`}
          />

          {/* 슬라이더 버튼 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button id="sButton1" onClick={() => handleButtonClick("sButton1")} className="hover:bg-gray-400 bg-gray-800 rounded-full w-4 h-4" />
            <button id="sButton2" onClick={() => handleButtonClick("sButton2")} className="hover:bg-gray-400 bg-gray-800 rounded-full w-4 h-4" />
            <button id="sButton3" onClick={() => handleButtonClick("sButton3")} className="hover:bg-gray-400 bg-gray-800 rounded-full w-4 h-4" />
          </div>
        </div>

        {/* 브랜드 로고 리스트 */}
        <div className="w-full flex justify-center items-center space-x-4 mt-12">
          {/* 왼쪽 화살표 */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-10 h-10 cursor-pointer hover:bg-yellow-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

          {/* 브랜드 로고 */}
          <div className="flex justify-between items-center w-full px-6">
            <img alt="Hyundai" src={hyundai} onClick={() => navigate("/hyundai")} className="w-35 h-20 hover:bg-yellow-100 mx-2 cursor-pointer" />
            <img alt="Kia" src={kia} onClick={() => navigate("/kia")} className="w-30 h-20 hover:bg-yellow-100 mx-2 cursor-pointer" />
            <img alt="Chevrolet" src={chevrolet} onClick={() => navigate("/Chevo")} className="w-30 h-25 hover:bg-yellow-100 mx-2 cursor-pointer" />
            <img alt="Renault" src={Reno} onClick={() => navigate("/Reno")} className="w-20 h-25 hover:bg-yellow-100 mx-2 cursor-pointer" />
            <img alt="KGM" src={kgm} onClick={() => navigate("/kgm")} className="w-35 h-20 hover:bg-yellow-100 mx-2 cursor-pointer" />
            <img alt="Genesis" src={gen} onClick={() => navigate("/Genesis")} className="w-40 h-20 hover:bg-yellow-100 mx-2 cursor-pointer" />
          </div>

          {/* 오른쪽 화살표 */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-10 h-10 cursor-pointer hover:bg-yellow-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
  );
};

export default MainPage;
