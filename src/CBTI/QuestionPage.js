import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuestionPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    { num: "질문 1", text: "운전 중 운전자 보조 시스템을 자주 사용하시나요?", progress: "7%", yes: "tech", no: "basic" },
    { num: "질문 2", text: "장거리 운행이 많으신가요?", progress: "14%", yes: "comfort", no: "athletic" },
    { num: "질문 3", text: "SUV를 선호하시나요?", progress: "21%", yes: "utility", no: "sedan" },
    { num: "질문 4", text: "유지보수가 쉬운 차량을 원하시나요?", progress: "28%", yes: "korean", no: "foreign" },
    { num: "질문 5", text: "고속도로 주행이 잦은 편인가요?", progress: "35%", yes: "comfort", no: "athletic" },
    { num: "질문 6", text: "터치스크린, 무선 업데이트 같은 최신 기능이 중요하신가요?", progress: "42%", yes: "tech", no: "basic" },
    { num: "질문 7", text: "오프로드 환경에서도 운전하는 일이 있나요?", progress: "49%", yes: "utility", no: "sedan" },
    { num: "질문 8", text: "차량 정비를 자주 하십니까?", progress: "56%", yes: "korean", no: "foreign" },
    { num: "질문 9", text: "주행 시 차량 소음에 민감하신가요?", progress: "63%", yes: "comfort", no: "athletic" },
    { num: "질문 10", text: "SUV가 도심 주행에도 적합하다고 생각하시나요?", progress: "70%", yes: "utility", no: "sedan" },
    { num: "질문 11", text: "가성비를 중요하게 생각하십니까?", progress: "77%", yes: "korean", no: "foreign" },
    { num: "질문 12", text: "스마트 크루즈 컨트롤 기능을 자주 사용하시나요?", progress: "84%", yes: "tech", no: "basic" },
    { num: "질문 13", text: "국산 브랜드 차량을 원하시나요?", progress: "91%", yes: "korean", no: "foreign" },
    { num: "질문 14", text: "승차감이 중요한 요소라고 생각하시나요?", progress: "100%", yes: "comfort", no: "athletic" },
  ];

  const current = questions[index];

  function handleAnswer(answerKey) {
    const selected = questions[index][answerKey];
    setAnswers(prev => {
      const newAnswers = [...prev, selected];
      if (index >= questions.length - 1) {
        navigate("/result", { state: { data: newAnswers } });
      } else {
        setIndex(index + 1);
      }
      return newAnswers;
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl px-10 py-12 flex flex-col justify-between min-h-[520px]">

          {/* 질문 번호 */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl text-gray-500 font-semibold tracking-wide">{current.num}</h2>
          </div>

          {/* 질문 텍스트 */}
          <div className="text-center flex-1 flex items-center justify-center">
            <p className="text-2xl sm:text-3xl text-indigo-600 font-bold leading-snug break-keep">
              {current.text}
            </p>
          </div>

          {/* 버튼 */}
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <button
                onClick={() => handleAnswer("yes")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-200"
            >
              그렇다
            </button>
            <button
                onClick={() => handleAnswer("no")}
                className="bg-gray-400 hover:bg-gray-600 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-200"
            >
              아니다
            </button>
          </div>

          {/* 프로그레스 바 */}
          <div className="w-full mt-6">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                  className="bg-green-500 h-4 rounded-full text-sm text-white text-center leading-4 transition-all duration-300"
                  style={{ width: current.progress }}
              >
                {current.progress}
              </div>
            </div>
          </div>

          {/* 이전 버튼 */}
          <div className="flex justify-center mt-4">
            <button
                onClick={prevQuestion}
                className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-full transition"
            >
              이전
            </button>
          </div>
        </div>
      </div>
  );
}

export default QuestionPage;