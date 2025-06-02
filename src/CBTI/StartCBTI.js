import React from 'react';
import { Link } from "react-router-dom";

function StartCBTI() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/ImageSrc/sideImage/CBTI2.jpg')" }}
    >
      {/* 어두운 배경 필터 오버레이 */}
      <div className="absolute inset-0 bg-black/30 backdrop-brightness-75"></div>

      {/* 텍스트 내용 (여백 조절) */}
      <div className="relative z-10 text-white text-center px-6 space-y-10 max-w-2xl">
        <h1 className="text-7xl font-extrabold">CBTI</h1>
        <h2 className="text-4xl font-bold text-cyan-300 leading-snug">
          어떤 차를 사야 할지 고민되시나요?
        </h2>
        <p className="text-xl text-gray-200 leading-relaxed">
          CBTI 검사를 통해 <br />
          당신에게 딱 맞는 자동차를 찾아보세요!
        </p>
        <Link to="/QuestionPage">
          <button className="w-48 h-14 rounded-full bg-blue-600 text-white text-lg font-bold hover:bg-blue-800 transition">
            시작하기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StartCBTI;
