import React from 'react';
import { Link } from 'react-router-dom';
import TrendImage from '../Image/sideImage/gomin.png';

function TrendySection() {
  return (
    <section className="w-full bg-white py-16 px-4 mt-40">
      <div className="max-w-screen-xl mx-auto">
        {/* 제목 */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900">CBTI</h2>
          <p className="text-gray-500 mt-3">당신의 차량을 찾아드립니다!</p>
        </div>

        {/* 본문 레이아웃: 나란히 정렬 */}
        <div className="flex flex-row justify-center items-center space-x-0 gap-0">
          {/* 왼쪽 설명 박스 */}
          <div className="bg-gray-100 px-10 py-12 w-[380px] h-[300px] rounded-l-lg shadow-md flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3 text-gray-800">CBTI</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              무슨 차량을 사야할지<br />
              검사를 통해 확인해보세요.
            </p>
            <Link to="/startCBTI">
              <button className="bg-blue-900 text-white px-6 py-2 text-sm rounded hover:bg-blue-800 transition">
                자세히 보기
              </button>
            </Link>
          </div>

          {/* 오른쪽 이미지 */}
          <div className="w-[500px] h-[300px]">
            <img
              src={TrendImage}
              alt="CBTI 설명"
              className="w-full h-full object-contain rounded-r-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendySection;
