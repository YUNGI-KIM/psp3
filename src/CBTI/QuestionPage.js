import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function highlightKeyword(text, keywords) {
  const parts = text.split(new RegExp(`(${keywords.join("|")})`, "g"));
  return parts.map((part, idx) =>
    keywords.includes(part) ? (
      <span key={idx} className="text-cyan-400 font-semibold">{part}</span>
    ) : (
      <span key={idx}>{part}</span>
    )
  );
}

function QuestionPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    { num: "", text: "운전 중 운전자 보조 시스템을 자주 사용하시나요?", progress: "7%", yes: "tech", no: "basic" },
    { num: "", text: "장거리 운행이 많으신가요?", progress: "14%", yes: "comfort", no: "athletic" },
    { num: "", text: "SUV를 선호하시나요?", progress: "21%", yes: "utility", no: "sedan" },
    { num: "", text: "유지보수가 쉬운 차량을 원하시나요?", progress: "28%", yes: "korean", no: "foreign" },
    { num: "", text: "고속도로 주행이 잦은 편인가요?", progress: "35%", yes: "comfort", no: "athletic" },
    { num: "", text: "터치스크린, 무선 업데이트 같은 최신 기능이 중요하신가요?", progress: "42%", yes: "tech", no: "basic" },
    { num: "", text: "오프로드 환경에서도 운전하는 일이 있나요?", progress: "49%", yes: "utility", no: "sedan" },
    { num: "", text: "차량 정비를 자주 하십니까?", progress: "56%", yes: "korean", no: "foreign" },
    { num: "", text: "주행 시 차량 소음에 민감하신가요?", progress: "63%", yes: "comfort", no: "athletic" },
    { num: "", text: "SUV가 도심 주행에도 적합하다고 생각하시나요?", progress: "70%", yes: "utility", no: "sedan" },
    { num: "", text: "가성비를 중요하게 생각하십니까?", progress: "77%", yes: "korean", no: "foreign" },
    { num: "", text: "스마트 크루즈 컨트롤 기능을 자주 사용하시나요?", progress: "84%", yes: "tech", no: "basic" },
    { num: "", text: "국산 브랜드 차량을 원하시나요?", progress: "91%", yes: "korean", no: "foreign" },
    { num: "", text: "승차감이 중요한 요소라고 생각하시나요?", progress: "100%", yes: "comfort", no: "athletic" },
  ];

  const current = questions[index];

  function handleAnswer(answerKey) {
    const selected = current[answerKey];
    setAnswers(prev => {
      const updated = [...prev, selected];
      if (index >= questions.length - 1) {
        navigate("/result", { state: { data: updated } });
      } else {
        setIndex(index + 1);
      }
      return updated;
    });
  }

  function prevQuestion() {
    if (index > 0) {
      setIndex(index - 1);
      setAnswers(prev => prev.slice(0, -1));
    } else {
      navigate("/startCBTI");
    }
  }

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/ImageSrc/sideImage/CBTI2.jpg')" }}
    >
      {/* 어두운 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>

      {/* 질문 카드 */}
      <div className="relative z-10 w-full max-w-xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-12 text-center text-white">

        {/* 질문 텍스트 */}
        <div className="flex items-center justify-center h-[120px] mb-6">
          <p className="text-2xl sm:text-3xl font-bold leading-snug break-keep text-white text-center">
            {highlightKeyword(current.text, [
              "보조 시스템",
              "장거리 운행",
              "SUV",
              "유지보수",
              "정비",
              "고속도로 주행",
              "터치스크린",
              "무선 업데이트",
              "최신 기능",
              "오프로드",
              "소음",
              "도심 주행",
              "가성비",
              "스마트 크루즈 컨트롤",
              "국산 브랜드",
              "승차감"
            ])}
          </p>
        </div>

        {/* 선택 버튼 */}
        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          <button
            onClick={() => handleAnswer("yes")}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            그렇다
          </button>
          <button
            onClick={() => handleAnswer("no")}
            className="bg-red-400 hover:bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            아니다
          </button>
        </div>

        {/* 프로그레스 바 */}
        <div className="w-full mt-8">
          <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
            <div
              className="bg-green-400 h-full text-xs text-center text-white font-semibold transition-all duration-300"
              style={{ width: current.progress }}
            >
              {current.progress}
            </div>
          </div>
        </div>

        {/* 이전 버튼 */}
        <div className="mt-6">
          <button
            onClick={prevQuestion}
            className="bg-gray-500 hover:bg-gray-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            이전
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
