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
    { CBTI: 'T', Guide: '최신기술\n' },
    { CBTI: 'C', Guide: '편안함\n' },
    { CBTI: 'U', Guide: 'SUV\n' },
    { CBTI: 'K', Guide: '국산\n' },
    { CBTI: 'B', Guide: '기본\n' },
    { CBTI: 'A', Guide: '스포츠성\n' },
    { CBTI: 'S', Guide: '세단\n' },
    { CBTI: 'F', Guide: '수입\n' }
  ];

  {/* ----------------------CBTI 판별 로직------------------------ */ }
  for (let j = 0; j < receivedArray.length; j++) {
    if (receivedArray[j] in results) {
      results[receivedArray[j]]++;
    }
  }
  const top4 = Object.entries(results)
    .sort((a, b) => b[1] - a[1]) // 값 기준 내림차순
    .slice(0, 4);                // 상위 4개
  const top4Keys = top4.map(([key, _]) => key);


  for (let i = 0; i < top4Keys.length; i++) {
    top4Keys[i] = top4Keys[i].slice(0, 1).toUpperCase();

  }

  const Guide = top4Keys.map(letter => {
    const item = CBTIGuide.find(obj => obj.CBTI === letter);
    return item ? item.Guide : '';
  });

  console.log("Top 4 Keys:", top4Keys);
  console.log(" Guide :", Guide);


  {/*_______________________________________________________________*/ }



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
            <div className="rounded-3xl p-4 bg-white shadow">
              <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                {/* 질문 텍스트 */}
                <h1 className="text-3xl font-extrabold  dark:text-white sm:text-4xl">
                  <span className="text-4xl font-extrabold  text-indigo-500">결과</span>
                  <span className="block text-indigo-500">{top4Keys}</span>
                  <span className="block text-indigo-500">당신의 자동차를 4단어로 설명하면?</span>
                  <span className="block text-indigo-500">{Guide}</span>
                </h1>

                {/* 버튼 영역 */}
                <div className="mt-12 flex justify-center space-x-4">
                  <Link to="/startCBTI">
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
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                      </svg>
                      다시하기
                    </button>
                  </Link>

                  <Link to="/startCBTI">
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