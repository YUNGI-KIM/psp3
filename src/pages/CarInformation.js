import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../functions/Header";
import Avante from "../Image/Estimate/Hyundai/Avante/Avante.png";
import Casper from "../Image/Estimate/Hyundai/Casper/casper.png";
import Grandeur from "../Image/Estimate/Hyundai/Grandeur/Grandeur.png";
import Ioniq from "../Image/Estimate/Hyundai/Ioniq/ioniq.png";
import Palisade from "../Image/Estimate/Hyundai/Palisade/Palisade.png";
import Porter from "../Image/Estimate/Hyundai/Porter/porter.png";
import Santafe from "../Image/Estimate/Hyundai/Santafe/santafe2.png";
import Sonata from "../Image/Estimate/Hyundai/Sonata/Sonata.png";

import K5 from "../Image/Estimate/Kia/K5/k5.png";
import K9 from "../Image/Estimate/Kia/K9/K9.png";
import Bongo from "../Image/Estimate/Kia/Bongo/bongo.png";
import BongoEv from "../Image/Estimate/Kia/BongoEv/bongo-ev.png";
import Carnival from "../Image/Estimate/Kia/Carnival/carnival.png";
import Ev3 from "../Image/Estimate/Kia/Ev3/ev3.png";
import Ev4 from "../Image/Estimate/Kia/Ev4/ev4.png";
import Ev6 from "../Image/Estimate/Kia/Ev6/ev6.png";
import K8 from "../Image/Estimate/Kia/K8/k8.png";
import Morning from "../Image/Estimate/Kia/Morning/morning.png";
import Ray from "../Image/Estimate/Kia/Ray/ray.png";
import Seltos from "../Image/Estimate/Kia/Seltos/seltos.png";
import Sorento from "../Image/Estimate/Kia/Sorento/sorento.png";
import Sportage from "../Image/Estimate/Kia/Sportage/sportage.png";

import G70 from "../Image/Estimate/Genesis/G70/G70.png";
import G80 from "../Image/Estimate/Genesis/G80/G80.png";
import G90 from "../Image/Estimate/Genesis/G90/G90.png";
import GV60 from "../Image/Estimate/Genesis/GV60/GV60.png";
import GV70 from "../Image/Estimate/Genesis/GV70/GV70.png";
import GV80 from "../Image/Estimate/Genesis/GV80/GV80.png";





import { AnimatePresence, motion } from "framer-motion";

const brandList = ["현대", "기아", "제네시스","르노","쉐보레","KGM","BMW","아우디","벤츠"];

const brandModels = {
  현대: [
    { title: "Grandeur", label: "최고가 모델", color: "트랜스미션블루펄", interior: "블랙모노톤(캘리그라피)", fuelEfficiency: "12.4",displacement:"11.1",options: ["하이테크 패키지","파노라마 선루프","프리뷰 전자제어 서스펜션 II"], price: "44,090,000", image: Grandeur },
    { title: "Avante", label: "베스트셀러", color: "미라지 그린", interior: "세이지 그린", fuelEfficiency: "12.4",displacement:"11.1",options: ["드라이브 와이즈 II", "하이패스 자동결제 시스템","파킹 어시스트 플러스"], price: "28,300,000", image: Avante },
    { title: "Casper", label: "최저가 모델", color: "언블리치드 아이보리", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: ["인포테인먼트 내비 플러스I", "선루프", "17인치 알로이 휠 패키지"], price: "14,600,000", image: Casper },
    { title: "Ioniq6", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: Ioniq },
    { title: "Palisade", label: "SUV", color: "밀키 베이지", interior: "블랙",fuelEfficiency: "12.4",displacement:"11.1", options: [], price: "27,350,000", image: Palisade },
    { title: "Porter", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: Porter },
    { title: "Santafe", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: Santafe },
    { title: "Sonata", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: Sonata },

  ],
  기아: [
    { title: "K5", label: "세단", color: "스노우 화이트 펄", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "31,200,000", image: K5 },
    { title: "K9", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: K9 },
    { title: "Bongo", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: Bongo },
    { title: "BongoEv", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: BongoEv },
    { title: "Carnival", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: Carnival},
    { title: "Ev3", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: Ev3 },
    { title: "Ev4", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: Ev4 },
    { title: "Ev6", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: Ev6 },
    { title: "K8", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: K8 },
    { title: "Morning", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: Morning },
    { title: "Ray", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: Ray },
    { title: "Seltos", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: Seltos },
    { title: "Sorento", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: Sorento },
    { title: "Sportage", label: "프리미엄", color: "오로라 블랙펄", interior: "베이지", fuelEfficiency: "12.4",displacement:"11.1",options: ["HUD", "BOSE 오디오"], price: "54,000,000", image: Sportage },
  ],

  제네시스: [
    { title: "G70", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: G70 },
    { title: "G80", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: G80 },
    { title: "G90", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: G90 },
    { title: "GV60", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: GV60 },
    { title: "GV70", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: GV70 },
    { title: "GV80", label: "전기차", color: "밀키 베이지", interior: "블랙", fuelEfficiency: "12.4",displacement:"11.1",options: [], price: "27,350,000", image: GV80 },


  ]
};

const detailRoutes = {
  "Avante": "/CarDetail/HyundaiAvante",
  "Casper": "/CarDetail/HyundaiCasper",
  "Grandeur": "/CarDetail/HyundaiGrandeur",
  "Ioniq6": "/CarDetail/HyundaiIoniq",
  "Palisade": "/CarDetail/HyundaiPalisade",
  "Porter": "/CarDetail/HyundaiPorter",
  "Santafe": "/CarDetail/HyundaiSantafe",
  "Sonata": "/CarDetail/HyundaiSonata",

  "Bongo": "/CarDetail/CarDetailKia/KiaBongo",
  "BongoEv": "/CarDetail/CarDetailKia/KiaBongoEv",
  "Carnival": "/CarDetail/CarDetailKia/KiaCarnival",
  "Ev3": "/CarDetail/CarDetailKia/KiaEv3",
  "Ev4": "/CarDetail/CarDetailKia/KiaEv4",
  "Ev5": "/CarDetail/CarDetailKia/KiaEv5",
  "Ev6": "/CarDetail/CarDetailKia/KiaEv6",
  "K8": "/CarDetail/CarDetailKia/KiaK8",
  "K9": "/CarDetail/CarDetailKia/KiaK9",
  "Morning": "/CarDetail/CarDetailKia/KiaMorning",
  "Ray": "/CarDetail/CarDetailKia/KiaRay",
  "Seltos": "/CarDetail/CarDetailKia/KiaSeltos",
  "Sorento": "/CarDetail/CarDetailKia/KiaSorento",
  "Sportage": "/CarDetail/CarDetailKia/KiaSportage",

  "G70": "/CarDetail/CarDetailGenesis/G70",
  "G80": "/CarDetail/CarDetailGenesis/G80",
  "G90": "/CarDetail/CarDetailGenesis/G90",
  "GV60": "/CarDetail/CarDetailGenesis/GV60",
  "GV70": "/CarDetail/CarDetailGenesis/GV70",
  "GV80": "/CarDetail/CarDetailGenesis/GV80",


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
          <button onClick={prevBrand} className="text-4xl font-bold">
            <svg xmlns="http://www.w3.org/2000/svg"  fill="#808080" viewBox="0 0 256 512" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform">
              <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/>
            </svg>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-center">{currentBrand} 차량 정보</h1>
            <p className="text-center text-sm text-gray-500">브랜드 간 비교</p>
          </div>
          <button onClick={nextBrand} className="text-4xl font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#808080" viewBox="0 0 256 512"  className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform">
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
            </svg>
          </button>
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