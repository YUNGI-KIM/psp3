import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuestionPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    { num: "질문 1번", text: "운전 중 운전자 보조 시스템을 자주 사용하시나요?", progress: "7%", yes: "tech", no: "basic" },
    { num: "질문 2번", text: "장거리 운행이 많으신가요?", progress: "14%", yes: "comfort", no: "athletic" },
    { num: "질문 3번", text: "SUV를 선호하시나요?", progress: "21%", yes: "utility", no: "sedan" },
    { num: "질문 4번", text: "유지보수가 쉬운 차량을 원하시나요?", progress: "28%", yes: "korean", no: "foreign" },
    { num: "질문 5번", text: "고속도로 주행이 잦은 편인가요?", progress: "35%", yes: "comfort", no: "athletic" },
    { num: "질문 6번", text: "터치스크린, 무선 업데이트 같은 최신 기능이 중요하신가요?", progress: "42%", yes: "tech", no: "basic" },
    { num: "질문 7번", text: "오프로드 환경에서도 운전하는 일이 있나요?", progress: "49%", yes: "utility", no: "sedan" },
    { num: "질문 8번", text: "국산 차량 정비소를 자주 이용하십니까?", progress: "56%", yes: "korean", no: "foreign" },
    { num: "질문 9번", text: "주행 시 차량 소음에 민감하신가요?", progress: "63%", yes: "comfort", no: "athletic" },
    { num: "질문 10번", text: "SUV가 도심 주행에도 적합하다고 생각하시나요?", progress: "70%", yes: "utility", no: "sedan" },
    { num: "질문 11번", text: "국산 브랜드의 가성비를 신뢰하십니까?", progress: "77%", yes: "korean", no: "foreign" },
    { num: "질문 12번", text: "스마트 크루즈 컨트롤 기능을 자주 사용하시나요?", progress: "84%", yes: "tech", no: "basic" },
    { num: "질문 13번", text: "국산 브랜드 차량을 원하시나요?", progress: "91%", yes: "korean", no: "foreign" },
    { num: "질문 14번", text: "승차감이 중요한 요소라고 생각하시나요?", progress: "100%", yes: "comfort", no: "athletic" },
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
    <div className="relative">
      {/* 배경 */}
      <div className="fixed inset-0 bg-gray-500 opacity-75 z-0"></div>

      {/* 모달 */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:max-w-2xl px-4 z-10">
        <div className="rounded-3xl p-12 bg-white shadow-2xl h-[500px] flex flex-col">

          {/* 질문 영역 */}
          <div className="flex-1 flex items-center justify-center text-center">
            <h2 className="text-4xl font-extrabold text-black leading-snug">
              <span>{current.num}</span><br />
            </h2>
          </div>
          <div className="flex-1 flex items-center justify-center text-center">
            <h2 className="text-4xl font-extrabold text-black leading-snug">
              <span className="text-indigo-500">{current.text}</span>
            </h2>
          </div>

          {/* 버튼 영역 */}
          <div className="flex-1 flex items-center justify-center space-x-16">
            <button
              onClick={() => handleAnswer("yes")}
              className="py-2 px-9 bg-green-500 hover:bg-green-700 text-white  text-xl font-semibold rounded-full shadow-md transition"
            >
              그렇다
            </button>
            <button
              onClick={() => handleAnswer("no")}
              className="py-2 px-9 bg-red-500 hover:bg-red-700 text-white text-xl font-semibold rounded-full shadow-md transition"
            >
              아니다
            </button>
          </div>

          {/* 하단 영역 */}
          <div className="h-[80px] flex flex-col justify-end space-y-6">
            <div className="w-72 mx-auto">
              <div className="w-full h-5 bg-gray-300 rounded-full">
                <div
                  className="h-full text-center text-sm text-white bg-green-500 rounded-full"
                  style={{ width: current.progress }}
                >
                  {current.progress}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={prevQuestion}
                className="py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white font-semibold rounded-full transition"
              >
                이전
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default QuestionPage;