import { Link } from "react-router-dom";

function StartCBTI() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-100 to-indigo-300 font-sans px-4">
        <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-2xl w-full max-w-3xl text-center space-y-6">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug">
            어떤 차를 사야 할지<br className="sm:hidden" /> 고민되시나요?
          </h2>

          <img
            src="/image/sideImage/CBTI.png"
            alt="자동차 비교 CBTI 결과 예시"
            className="w-full max-w-md mx-auto mb-6 sm:mb-8 rounded-xl shadow-lg"
          />          

          <p className="text-base sm:text-2xl text-indigo-600 font-medium">
            CBTI 검사를 통해<br />당신에게 딱 맞는 자동차를 찾아보세요!
          </p>

          <Link to="/QuestionPage">
            <button className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
              CBTI 검사 시작하기
            </button>
          </Link>

        </div>
      </div>
  );
}

export default StartCBTI;