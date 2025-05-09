import { Link } from "react-router-dom";

function StartCBTI() {
  return (
    <div className="relative">
      {/* 배경 오버레이 */}
      <div className="fixed inset-0 bg-gray-500 opacity-75 z-0"></div>

      {/* 모달 박스 */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:max-w-2xl px-4 z-10">
        <div className="rounded-3xl p-12 bg-white shadow-2xl h-[500px]">
          <div className="flex flex-col justify-center h-full text-center space-y-8">
            <h2 className="text-4xl font-extrabold text-black">
              <span className="block">
                어떤 차를 사야할지 고민되시나요?
              </span>
              <span className="block text-indigo-500">
                쉽고 빠른 CBTI검사를 통해
              </span>
              <span className="block text-indigo-500">
                추천 자동차를 만나보세요!!
              </span>
            </h2>

            <div className="mt-6">
              <Link to="/QuestionPage">
                <button
                  type="button"
                  className="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold rounded-3xl shadow-md transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  CBTI 검사 시작하기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartCBTI;