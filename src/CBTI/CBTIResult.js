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
    foreign: 0
  };

  const CBTIGuide = [
    { CBTI: 'T', Guide: '최신기술' },
    { CBTI: 'C', Guide: '편안함' },
    { CBTI: 'U', Guide: 'SUV' },
    { CBTI: 'K', Guide: '국산' },
    { CBTI: 'B', Guide: '기본' },
    { CBTI: 'A', Guide: '스포츠성' },
    { CBTI: 'S', Guide: '세단' },
    { CBTI: 'F', Guide: '수입' }
  ];

  // CBTI 판별 로직
  for (let j = 0; j < receivedArray.length; j++) {
    if (receivedArray[j] in results) {
      results[receivedArray[j]]++;
    }
  }

  const top4 = Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);
  const top4Keys = top4.map(([key]) => key.slice(0, 1).toUpperCase());

  const Guide = top4Keys.map(letter => {
    const item = CBTIGuide.find(obj => obj.CBTI === letter);
    return item ? item.Guide : '';
  });

  return (
    <div className="relative">
      {/* 배경 오버레이 */}
      <div className="fixed inset-0 bg-gray-500 opacity-75 z-0"></div>

      {/* 모달 박스 */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:max-w-2xl px-4 z-10">
        <div className="rounded-3xl p-12 bg-white shadow-2xl h-[500px]">
          <div className="flex flex-col justify-center h-full text-center space-y-8">
            {/* 결과 헤더 */}
            <h2 className="text-3xl font-bold text-gray-600">결과</h2>

            {/* CBTI 코드 */}
            <div className="text-5xl font-extrabold tracking-widest text-indigo-600">
              {top4Keys.join('')}
            </div>

            {/* 설명 문장 */}
            <div className="text-2xl font-medium text-gray-700">
              당신의 자동차를 4단어로 설명하면?
            </div>

            {/* 키워드 안내 */}
            <div className="flex justify-center flex-wrap gap-2  text-indigo-600 font-bold">
              {Guide.map((text, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 px-4 py-2 rounded-full text-2xl"
                >
                  {text}
                </span>
              ))}
            </div>

            {/* 버튼 영역 */}
            <div className="mt-6 flex justify-center space-x-16">
              <Link to="/startCBTI">
                <button
                  type="button"
                  className="py-2 px-9 bg-red-500 hover:bg-red-700 text-white text-xl font-semibold rounded-full shadow-md transition"
                >
                  다시하기
                </button>
              </Link>

              <Link to="/startCBTI">
                <button
                  type="button"
                   className="py-2 px-9 bg-green-500 hover:bg-green-700 text-white  text-xl font-semibold rounded-full shadow-md transition">
                  내 차 보기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBTIResult;