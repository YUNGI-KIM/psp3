import { Link } from "react-router-dom";

function StartCBTI() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-100 to-indigo-300">
        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-3xl flex flex-col sm:flex-row items-center gap-8">
          <img src="/car-illustration.png" alt="car" className="w-40 h-40" />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              어떤 차를 사야 할지 고민되시나요?
            </h2>
            <p className="text-indigo-600 mt-2 mb-6">
              CBTI 검사를 통해 <br /> 딱 맞는 자동차를 찾아보세요!
            </p>
            <Link to="/QuestionPage">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full">
                CBTI 검사 시작하기
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}
export default StartCBTI;