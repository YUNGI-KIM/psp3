import { useLocation, Link } from "react-router-dom";

function CBTIResult() {
  const location = useLocation();
  const receivedArray = location.state?.data;

  const results = {
    tech: 0,
    comfort: 0,
    utility: 0,
    korean: 0,
    basic: 0,
    athletic: 0,
    sedan: 0,
    foreign: 0,
  };

  const CBTIGuide = [
    { CBTI: "T", Guide: "최신기술" },
    { CBTI: "C", Guide: "편안함" },
    { CBTI: "U", Guide: "SUV" },
    { CBTI: "K", Guide: "국산" },
    { CBTI: "B", Guide: "기본" },
    { CBTI: "A", Guide: "스포츠성" },
    { CBTI: "S", Guide: "세단" },
    { CBTI: "F", Guide: "수입" },
  ];

  for (let j = 0; j < receivedArray?.length; j++) {
    if (receivedArray[j] in results) {
      results[receivedArray[j]]++;
    }
  }

  const top4 = Object.entries(results)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4);
  const top4Keys = top4.map(([key]) => key[0].toUpperCase());

  const cbti = top4Keys.join("");

  const Guide = top4Keys.map((letter) => {
    const item = CBTIGuide.find((obj) => obj.CBTI === letter);
    return item ? item.Guide : "";
  });

  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200 px-4 py-12 font-sans">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl px-10 py-14 text-center space-y-10">

          {/* 제목 */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-700">
            나의 자동차 CBTI 결과
          </h2>

          {/* CBTI 코드 */}
          <div className="text-6xl sm:text-7xl font-extrabold tracking-[0.25em] text-indigo-700">
            {cbti}
          </div>

          {/* 설명 */}
          <p className="text-xl sm:text-2xl font-medium text-slate-600">
            당신의 차량을 한마디로 설명하면?
          </p>

          {/* 키워드들 */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-indigo-800 font-semibold">
            {Guide.map((text, idx) => (
                <span
                    key={idx}
                    className="bg-indigo-200 px-5 py-2 rounded-full text-xl sm:text-2xl"
                >
                  {text}
                </span>
            ))}
          </div>

          {/* 버튼 영역 */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/startCBTI">
              <button className="px-6 py-3 bg-rose-500 hover:bg-rose-700 text-white text-lg sm:text-xl font-semibold rounded-full transition">
                다시하기
              </button>
            </Link>
            <Link to="/startCBTI">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-lg sm:text-xl font-semibold rounded-full transition">
                내 차 보기
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default CBTIResult;