import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../functions/Header";
import Avante from "../Image/Estimate/Hyundai/Avante/Avante.png";
import Casper from "../Image/Estimate/Hyundai/Casper/casper.png";
import Grandeur from "../Image/Estimate/Hyundai/Grandeur/Grandeur.png";
import Ioniq from "../Image/Estimate/Hyundai/Ioniq/ioniq.png";
import Palisade from "../Image/Estimate/Hyundai/Palisade/Palisade.png";
import K5 from "../Image/Estimate/Kia/K9/K9.png";
import K9 from "../Image/Estimate/Kia/K9/K9.png";
import Ray from "../Image/Estimate/Kia/K9/K9.png";
import Morning from "../Image/Estimate/Kia/K9/K9.png";
import Sportage from "../Image/Estimate/Kia/K9/K9.png";
import Sorento from "../Image/Estimate/Kia/K9/K9.png";

import { AnimatePresence, motion } from "framer-motion";

const brandList = ["현대", "기아", "제네시스","르노","쉐보레","KGM","BMW","아우디","벤츠"];

const brandModels = {
  현대: [
    { title: "그랜져", label: "최고가 모델", color: "트랜스미션블루펄", interior: "블랙모노톤(캘리그라피)", fuelEfficiency: "12.4",displacement:"11.1",options: ["하이테크 패키지","파노라마 선루프","프리뷰 전자제어 서스펜션 II"], price: "44,090,000", image: Grandeur },
    { title: "아반떼", label: "베스트셀러", color: "미라지 그린", interior: "세이지 그린", fuelEfficiency: "12.4",displacement:"11.1",options: ["드라이브 와이즈 II", "하이패스 자동결제 시스템","파킹 어시스트 플러스"], price: "28,300,000", image: Avante },
    { title: "캐스퍼", label: "최저가 모델", color: "언블리치드 아이보리", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: ["인포테인먼트 내비 플러스I", "선루프", "17인치 알로이 휠 패키지"], price: "14,600,000", image: Casper },
    { title: "아이오닉", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: Ioniq },
    { title: "팰리세이드", label: "SUV", color: "밀키 베이지", interior: "블랙",fuelEfficiency: "12.4",displacement:"11.1", options: [], price: "27,350,000", image: Palisade }
  ],
  기아: [
    { title: "K5", label: "세단", color: "스노우 화이트 펄", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "31,200,000", image: K5 },
    { title: "K9", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: K9 },
    { title: "레이", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: K9 },
    { title: "모닝", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: K9 },
    { title: "스포티지", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: K9 },
    { title: "소", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: K9 }
  
  
  ],
};

const detailRoutes = {
  "아이오닉": "/CarDetail/HyundaiIoniq",

};

function CarInformation() {
  const navigate = useNavigate();
  const [brandIndex, setBrandIndex] = useState(0);

  const currentBrand = brandList[brandIndex];
  const currentModels = brandModels[currentBrand] || [];

  const nextBrand = () => {
    setBrandIndex((prev) => (prev + 1) % brandList.length);
  };

  const prevBrand = () => {
    setBrandIndex((prev) => (prev === 0 ? brandList.length - 1 : prev - 1));
  };

  return (
    <div>
      <div>{Header()}</div>
      <div className="bg-white py-10 px-4 sm:px-8">
        <div className="flex justify-center items-center mb-6 space-x-6">
          <button onClick={prevBrand} className="text-4xl font-bold">ᐊ</button>
          <div>
            <h1 className="text-3xl font-bold text-center">{currentBrand} 차량 정보</h1>
            <p className="text-center text-sm text-gray-500">브랜드 간 비교</p>
          </div>
          <button onClick={nextBrand} className="text-4xl font-bold">ᐅ</button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={brandIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {currentModels.length > 0 ? currentModels.map((model, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg border">
                <img src={model.image} alt={model.title} className="w-full h-80 object-contain bg-white" />
                <div className="bg-[#1c1d3a] text-white p-4 relative">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg font-bold">{model.title}</h2>
                    {model.label && (
                      <span className="bg-indigo-600 text-xs px-2 py-1 rounded-full">{model.label}</span>
                    )}
                  </div>
                  <ul className="text-sm text-gray-300 mb-5 space-y-1">
                    <li>• 외장 컬러: {model.color}</li>
                    <li>• 내장 컬러: {model.interior}</li>
                    <li>• 연비: {model.fuelEfficiency}</li>
                    <li>• 배기량: {model.displacement}</li>
                    {model.options.length > 0 ? model.options.map((opt, i) => (
                      <li key={i}>• {opt}</li>
                    )) : <li>• 옵션 없음</li>}
                  </ul>
                  <div className="text-lg font-bold text-center mb-3">{model.price}₩</div>
                  <button
                    onClick={() => {
                      const path = detailRoutes[model.title];
                      if (path) {
                        navigate(path);
                      } else {
                        alert("이 차량에 대한 상세 페이지는 아직 없습니다.");
                      }
                    }}
                    className="w-full py-2 rounded bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
                  >
                    차량 상세 정보
                  </button>
                </div>
              </div>
            )) : (
              <p className="text-center col-span-3 text-gray-500">등록된 차량 정보가 없습니다.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CarInformation;