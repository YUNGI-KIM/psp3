import { Link } from "react-router-dom";

function Q4page() {
  return (
    <div className="relative">
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
            <div className="rounded-lg p-8 bg-white shadow">
              <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                {/* 질문 텍스트 */}
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                  <span className="block">질문 4번</span>
                  <span className="block text-indigo-500">집에 가고 싶으신가요?</span>
                </h2>

                {/* 버튼 영역 */}
                <div className="mt-12 flex justify-center space-x-4">
                  <Link to="/Q5page">
                    <button
                      type="button"
                      className="py-2 px-4 flex justify-center items-center bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-32 transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="mr-2"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
                      </svg>
                      아니다
                    </button>
                  </Link>

                  <Link to="/Q5page">
                    <button
                      type="button"
                      className="py-2 px-4 flex justify-center items-center bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-32 transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="mr-2"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
                      </svg>
                      그렇다
                    </button>
                  </Link>
                </div>

                {/* 진행률 바 */}
                <div className="mt-8 mx-auto w-72">
                  <div className="w-full h-4 bg-gray-400 rounded-full">
                    <div className="w-4/5 h-full text-center text-xs text-white bg-green-500 rounded-full">
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Q4page;