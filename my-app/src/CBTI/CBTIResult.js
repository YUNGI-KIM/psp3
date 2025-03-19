import { Link } from "react-router-dom";

function CBTIResult() {
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
                  <span className="block">결과</span>
                  <span className="block text-indigo-500">집에 가라</span>
                </h2>

               {/* 버튼 영역 */}
               <div className="mt-12 flex justify-center space-x-4">
                  <Link to="/">
                    <button
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
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                      </svg>
                      다시하기
                    </button>
                  </Link>

                  <Link to="/">
                    <button
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
                      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                      </svg>
                      내 차 보기
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBTIResult;