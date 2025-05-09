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
      <div className="inset-0 z-10 w-full h-screen overflow-y-auto">
        {/* 배경 오버레이 */}
        <div className="absolute inset-0 w-full h-full bg-gray-500 opacity-75"></div>

        {/* 모달 컨테이너 */}
        <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
          <div
            className="relative inline-block overflow-hidden transition-all transform sm:align-middle sm:max-w-2lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="rounded-3xl p-8 bg-white shadow-xl">
              <div className="text-center space-y-6">
                {/* 결과 헤더 */}
                <h2 className="text-xl font-semibold text-gray-600">결과</h2>

                {/* CBTI 알파벳 */}
                <div className="text-5xl font-extrabold tracking-widest text-indigo-600">
                  {top4Keys.join('')}
                </div>

                {/* 설명 문장 */}
                <div className="text-lg font-medium text-gray-700">
                  당신의 자동차를 4단어로 설명하면?
                </div>

                {/* 키워드 안내 */}
                <div className="flex justify-center flex-wrap gap-2 text-indigo-600 font-bold">
                  {Guide.map((text, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 px-4 py-2 rounded-full text-base"
                    >
                      {text}
                    </span>
                  ))}
                </div>

                {/* 버튼 영역 */}
                <div className="mt-10 flex justify-center space-x-4">
                  <Link to="/startCBTI">
                    <button
                      type="button"
                      className="py-2 px-4 flex justify-center items-center bg-red-500 hover:bg-red-700 text-white w-32 rounded-full font-semibold shadow-md transition"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="mr-2"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                      </svg>
                      다시하기
                    </button>
                  </Link>

                  <Link to="/startCBTI">
                    <button
                      type="button"
                      className="py-2 px-4 flex justify-center items-center bg-green-500 hover:bg-green-700 text-white w-32 rounded-full font-semibold shadow-md transition"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="mr-2"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
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