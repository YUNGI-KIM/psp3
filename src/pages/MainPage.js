import React, { useState } from 'react';
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

const MainPage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

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
        <LoginSessionVerify />

        {/* 헤더 */}
        <Header />

        {/* 슬라이더 */}
        <div className="relative w-full">
          <img
              src={slidSrc[index].src}
              onClick={() => navigate(slidSrc[index].href)}
              className="w-full h-140 rounded-lg cursor-pointer"
              alt={`Slide ${index + 1}`}
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button id="sButton1" onClick={() => handleButtonClick("sButton1")} className="hover:bg-gray-400 bg-gray-800 rounded-full w-4 h-4" />
            <button id="sButton2" onClick={() => handleButtonClick("sButton2")} className="hover:bg-gray-400 bg-gray-800 rounded-full w-4 h-4" />
            <button id="sButton3" onClick={() => handleButtonClick("sButton3")} className="hover:bg-gray-400 bg-gray-800 rounded-full w-4 h-4" />
          </div>
        </div>

        {/* 브랜드 로고 */}
        <div className="w-full flex justify-center items-center space-x-4 mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" ... />
          <div className="flex justify-between items-center w-full px-6">
            {/* 로고들 */}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" ... />
        </div>
      </div>
  );
};

export default MainPage;