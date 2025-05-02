import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuestionPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  function nextQuestion() {
    if (index >= questions.length - 1) {
      navigate("/result");
    } else {
      setIndex(index + 1);
    }
  }

  function prevQuestion() {
    if (index > 0) {
      setIndex(index - 1);
    }else{
      navigate("/startCBTI")
    }
  }
  const questions = [
    { num: "질문 "+[index+1]+"번", text: "국산 브랜드 차량을 원하시나요?", progress: "10%" ,yes: "korean" , no: "notkorean" },
    { num: "질문 "+[index+1]+"번", text: "가족 구성원이 2명 초과 즉, 3명 이상인가요?", progress: "20%",yes:"sports",no:"notsports" },
    { num: "질문 "+[index+1]+"번", text: "장거리 운행이 많은가요?", progress: "40%" ,yes:"comfort",no:"notcomfort" },
    { num: "질문 "+[index+1]+"번", text: "출퇴근 용도 이외 차량을 자주 운행하는가 ?", progress: "50%",yes:"play",no:"noplay" },
    { num: "질문 "+[index+1]+"번", text: "차박 ( 차량을 텐트 삼아 캠핑을 가는 것 ) 을 선호하는가 ?", progress: "60%",yes:"play",no:"noplay" },
    { num: "질문 "+[index+1]+"번", text: "속도감 있는 운전을 좋아하는가 ?", progress: "70%",yes:"sports",no:"nosports" },
    { num: "질문 "+[index+1]+"번", text: "주행시 차량 소음이 중요한가 ? ", progress: "85%",yes:"comfort",no:"nocomfort" },
    { num: "질문 "+[index+1]+"번", text: "유지 관리가 쉬운 차량을 선호하십니까? ", progress: "100%",yes:"korean",no:"notkorean" },
  ];



  function CBTILogic(){
    
  }

  return (
    <div className="relative ">
      <div className="inset-0 z-10 w-full h-screen overflow-y-auto">
        {/* 배경 오버레이 */}
        <div className="absolute inset-0 w-full h-full bg-gray-500 opacity-75"></div>

        {/* 모달 컨테이너 */}
        <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
          <div
            className="relative inline-block overflow-hidden transition-all transform sm:align-middle w-full sm:max-w-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="rounded-3xl p-8 bg-white shadow">
              <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                {/* 질문 텍스트 */}
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                  <span className="block">{questions[index].num}</span>
                  <span className="block text-indigo-500">{questions[index].text}</span>
                </h2>

                <div className="flex justify-center my-5 space-x-4">

                  <button
                    onClick={() => { nextQuestion(); CBTILogic("yes"); }}
                    type="button"
                    className="py-2 px-4 flex justify-center items-center bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-32 transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                  >
                    <svg
                      width="20"
                      height="20"
                      className="mr-2"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                    </svg>
                    그렇다
                  </button>

                  <button
                    onClick={() => { nextQuestion(); CBTILogic("no"); }}
                    type="button"
                    className="py-2 px-4 flex justify-center items-center bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-32 transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                  >
                    <svg
                      width="20"
                      height="20"
                      className="mr-2"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                    </svg>
                    아니다
                  </button>
                </div>

                {/* 진행률 바 */}
                <div className="mt-8 mx-auto w-72">
                  <div className="w-full h-4 bg-gray-400 rounded-full">
                    <div
                      className="h-full text-center text-xs text-white bg-green-500 rounded-full"
                      style={{ width: questions[index].progress }}
                    >
                      {questions[index].progress}
                    </div>
                  </div>
                </div>

                {/*이전 버튼*/}
                <div className="flex justify-center my-5 space-x-4">

                  <button
                    onClick={prevQuestion}
                    type="button"
                    className="py-2 px-4 flex justify-center items-center bg-gray-400 hover:bg-gray-900 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                  </button>

                  <button
                    onClick={nextQuestion}
                    type="button"
                    className="py-2 px-4 flex justify-center items-center bg-gray-400 hover:bg-gray-900 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
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