import CBTIButton from "./CBTIButton";
import PreviousButton from "./previousButton";

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
                <div className="mt-12">
                  <CBTIButton noPath="/Q3page" yesPath="/Q3page" />
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