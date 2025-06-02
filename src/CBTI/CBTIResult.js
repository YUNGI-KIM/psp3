import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function CBTIResult() {
  const location = useLocation();
  const receivedArray = location.state?.data;

  const results = {
    tech: 0, comfort: 0, utility: 0, korean: 0,
    basic: 0, athletic: 0, sedan: 0, foreign: 0,
  };

  const CBTIGuide = [
    { CBTI: "T", Guide: "최신기술" },
    { CBTI: "C", Guide: "편안함" },
    { CBTI: "U", Guide: "SUV" },
    { CBTI: "K", Guide: "국산" },
    { CBTI: "B", Guide: "기본" },
    { CBTI: "A", Guide: "스포츠성" },
    { CBTI: "S", Guide: "세단" },
    { CBTI: "F", Guide: "외제차" },
  ];

  // 결과 집계
  for (let j = 0; j < receivedArray?.length; j++) {
    if (receivedArray[j] in results) {
      results[receivedArray[j]]++;
    }
  }

  // 그룹별 비교 함수
  const getHigher = (a, b) => (results[a] >= results[b] ? a : b);

  // ✅ 그룹별로 정해진 순서대로 CBTI 코드 구성
  const CBTICode = [
    getHigher("tech", "basic"),       // T vs B
    getHigher("comfort", "athletic"), // C vs A
    getHigher("utility", "sedan"),    // U vs S
    getHigher("foreign", "korean"),   // F vs K
  ].map(code => code[0].toUpperCase());

  // CBTI 코드에 맞는 설명 태그 생성
  const Guide = CBTICode.map(letter => {
    const item = CBTIGuide.find(obj => obj.CBTI === letter);
    return item ? item.Guide : "";
  });

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/ImageSrc/sideImage/CBTI2.jpg')" }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />

      {/* 결과 카드 */}
      <div className="relative z-10 w-full max-w-xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-14 text-center space-y-10 text-white">

        <h2 className="text-3xl sm:text-4xl font-bold drop-shadow">
          나의 자동차 CBTI 결과
        </h2>

        {/* ✅ 톤 통일: 메인페이지와 같은 text-cyan-300 적용 */}
        <div className="text-6xl sm:text-7xl font-extrabold tracking-widest text-cyan-300 drop-shadow-sm">
          {CBTICode.join("")}
        </div>

        <p className="text-xl sm:text-2xl font-medium text-gray-100">
          당신의 차량을 한마디로 설명하면?
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 font-semibold">
          {Guide.map((text, idx) => (
            <span
              key={idx}
             className="bg-indigo-300/30 px-5 py-2 rounded-full text-base sm:text-xl"
            >
              {text}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4 pt-2 flex-wrap">
          <Link to="/startCBTI">
            <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
              다시하기
            </button>
          </Link>
          <Link to={`/buy/cbti/${CBTICode.join("")}`}>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
              내 차 보기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CBTIResult;