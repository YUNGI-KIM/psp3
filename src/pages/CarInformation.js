import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../buy/functions/Header";
import Avante from "../Image/Estimate/Hyundai/Avante/Avante.png";
import Casper from "../Image/Estimate/Hyundai/Casper/casper.png"
import Grandeur from "../Image/Estimate/Hyundai/Grandeur/Grandeur.png"
import Ioniq from "../Image/Estimate/Hyundai/Ioniq/ioniq.png"
import Palisade from "../Image/Estimate/Hyundai/Palisade/Palisade.png"

const models = [
  {
    title: "그랜져",
    label: "최고가 모델",
    color: "트랜스미션블루펄",
    interior: "블랙모노톤(캘리그라피)",
    options: ["하이테크 패키지","파노라마 선루프","프리뷰 전자제어 서스펜션 II"],
    price: "44,090,000",
    image: Grandeur
  },
  {
    title: "아반떼",
    label: "베스트셀러",
    color: "미라지 그린",
    interior: "세이지 그린",
    options: ["드라이브 와이즈 II", "하이패스 자동결제 시스템","파킹 어시스트 플러스"],
    price: "28,300,000",
    image: Avante
  },
  {
    title: "캐스퍼",
    label: "최저가 모델",
    color: "언블리치드 아이보리",
    interior: "블랙",
    options: ["인포테인먼트 내비 플러스I", "선루프", "17인치 알로이 휠 패키지"],
    price: "14,600,000",
    image: Casper
  },
  {
    title: "아이오닉",
    label: "최저가 모델",
    color: "밀키 베이지",
    interior: "블랙",
    options: [],
    price: "27,350,000",
    image: Ioniq
  },
  {
    title: "팰리세이드",
    label: "최저가 모델",
    color: "밀키 베이지",
    interior: "블랙",
    options: [],
    price: "27,350,000",
    image: Palisade
  },
  {
    title: "팰리세이드",
    label: "최저가 모델",
    color: "밀키 베이지",
    interior: "블랙",
    options: [],
    price: "27,350,000",
    image: Palisade
  },
];

function Support() {
  const navigate = useNavigate();

  return (
    <div>
      <div>{Header()}</div>
      <div className="bg-white py-10 px-4 sm:px-8">
        <h1 className="text-3xl font-bold text-center mb-2">현대 추천 모델</h1>
        <p className="text-center text-sm text-gray-500 mb-8">경쟁 모델 비교</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow hover:shadow-md transition duration-300"
            >
              <div className="relative">
                <img src={model.image} alt={model.title} className="mx-auto mb-4 h-85" />
                {model.label && (
                  <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                    {model.label}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">{model.title}</h2>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>
                  <span className="font-medium">외장 컬러:</span> {model.color}
                </li>
                <li>
                  <span className="font-medium">내장 컬러:</span> {model.interior}
                </li>
                <li>
                  <span className="font-medium">옵션:</span>{" "}
                  {model.options.length > 0 ? (
                    <ul className="list-disc ml-5">
                      {model.options.map((opt, i) => (
                        <li key={i}>{opt}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-500">없음</span>
                  )}
                </li>
              </ul>
              <div className="text-center font-bold text-lg mb-4">
                {model.price} 원
              </div>
              <div className="flex justify-center space-x-3">
                <button className="border border-black px-4 py-1 rounded hover:bg-gray-100">
                  구매 상담 신청
                </button>
                <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800">
                  견적 내기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Support;