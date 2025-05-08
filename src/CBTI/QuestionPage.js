import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuestionPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    { num: "질문 1번", text: "운전 중 운전자 보조 시스템을 자주 사용하시나요?", progress: "7%", yes: "tech", no: "basic" },
    { num: "질문 2번", text: "장거리 운행이 많으신가요?", progress: "14%", yes: "comfort", no: "sports" },
    { num: "질문 3번", text: "SUV를 선호하시나요?", progress: "21%", yes: "suv", no: "sedan" },
    { num: "질문 4번", text: "유지보수가 쉬운 차량을 원하시나요?", progress: "28%", yes: "korean", no: "foreign" },
    { num: "질문 5번", text: "고속도로 주행이 잦은 편인가요?", progress: "35%", yes: "comfort", no: "sports" },
    { num: "질문 6번", text: "터치스크린, 무선 업데이트 같은 최신 기능이 중요하신가요?", progress: "42%", yes: "tech", no: "basic" },
    { num: "질문 7번", text: "오프로드 환경에서도 운전하는 일이 있나요?", progress: "49%", yes: "suv", no: "sedan" },
    { num: "질문 8번", text: "국산 차량 정비소를 자주 이용하십니까?", progress: "56%", yes: "korean", no: "foreign" },
    { num: "질문 9번", text: "주행 시 차량 소음에 민감하신가요?", progress: "63%", yes: "comfort", no: "sports" },
    { num: "질문 10번", text: "SUV가 도심 주행에도 적합하다고 생각하시나요?", progress: "70%", yes: "suv", no: "sedan" },
    { num: "질문 11번", text: "국산 브랜드의 가성비를 신뢰하십니까?", progress: "77%", yes: "korean", no: "foreign" },
    { num: "질문 12번", text: "스마트 크루즈 컨트롤 기능을 자주 사용하시나요?", progress: "84%", yes: "tech", no: "basic" },
    { num: "질문 13번", text: "국산 브랜드 차량을 원하시나요?", progress: "91%", yes: "korean", no: "foreign" },
    { num: "질문 14번", text: "승차감이 중요한 요소라고 생각하시나요?", progress: "100%", yes: "comfort", no: "sports" },
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
      <div className="inset-0 z-10 w-full h-screen overflow-y-auto">
        <div className="absolute inset-0 w-full h-full bg-gray-500 opacity-75"></div>

        <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>

          <div className="relative inline-block overflow-hidden transition-all transform sm:align-middle w-full sm:max-w-lg" role="dialog" aria-modal="true">
            <div className="rounded-3xl p-8 bg-white shadow">
              <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                  <span className="block">{current.num}</span>
                  <span className="block text-indigo-500">{current.text}</span>
                </h2>

                <div className="flex justify-center my-5 space-x-4">
                  <button
                    onClick={() => handleAnswer("yes")}
                    type="button"
                    className="py-2 px-4 flex justify-center items-center bg-green-500 hover:bg-green-700 text-white w-32 transition ease-in duration-200 text-base font-semibold shadow-md rounded-full"
                  >
                    그렇다
                  </button>

                  <button
                    onClick={() => handleAnswer("no")}
                    type="button"
                    className="py-2 px-4 flex justify-center items-center bg-red-500 hover:bg-red-700 text-white w-32 transition ease-in duration-200 text-base font-semibold shadow-md rounded-full"
                  >
                    아니다
                  </button>
                </div>

                <div className="mt-8 mx-auto w-72">
                  <div className="w-full h-4 bg-gray-400 rounded-full">
                    <div
                      className="h-full text-center text-xs text-white bg-green-500 rounded-full"
                      style={{ width: current.progress }}
                    >
                      {current.progress}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center my-5 space-x-4">
                  <button
                    onClick={prevQuestion}
                    type="button"
                    className="py-2 px-4 flex justify-center items-center bg-gray-400 hover:bg-gray-900 text-white rounded-full"
                  >
                    이전
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default QuestionPage;