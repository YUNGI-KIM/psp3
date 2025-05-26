import React from 'react';

function DropDown() {
  return (
    <div className="mt-4 mx-5 p-3 bg-white border rounded-lg shadow-sm">
      {/* 상단: 라벨 표시 */}
      <div className="grid grid-cols-5 gap-2">
        <div className="text-[10px] font-medium text-center text-gray-600">제조사</div>
        <div className="text-[10px] font-medium text-center text-gray-600">가격대</div>
        <div className="text-[10px] font-medium text-center text-gray-600">차종</div>
        <div className="text-[10px] font-medium text-center text-gray-600">연료</div>
        <div className="text-[10px] font-medium text-center text-gray-600">검색</div>
      </div>

      {/* 하단: 드롭다운 및 검색 입력 */}
      <div className="grid grid-cols-5 gap-2 mt-1">
        {/* 제조사 */}
        <select
          id="manufacturer"
          name="manufacturer"
          className="w-full text-[10px] py-1 px-1 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
        >
          <option value="">선택</option>
          <option value="hyundai">현대</option>
          <option value="kia">기아</option>
          <option value="genesis">제네시스</option>
          <option value="kgm">KGM</option>
          <option value="chevrolet">쉐보레</option>
          <option value="renault">르노</option>
          <option value="renault">BMW</option>
          <option value="renault">AUDI</option>
          <option value="renault">밴츠</option>
          <option value="renault">테슬라</option>

        </select>

        {/* 가격대 */}
        <select
          id="priceRange"
          name="priceRange"
          className="w-full text-[10px] py-1 px-1 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
        >
          <option value="">선택</option>
          <option value="0-20">~2천만</option>
          <option value="20-40">2~4천만</option>
          <option value="40-60">4~6천만</option>
          <option value="60-80">6~8천만</option>
          <option value="80-100">8~1억</option>
          <option value="100+">1억~</option>
        </select>

        {/* 차종 */}
        <select
          id="carType"
          name="carType"
          className="w-full text-[10px] py-1 px-1 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
        >
          <option value="">선택</option>
          <option value="sedan">세단</option>
          <option value="suv">SUV</option>
          <option value="mpv">MPV</option>
          <option value="cuv">CUV</option>
          <option value="compact">경차</option>
        </select>

        {/* 연료 */}
        <select
          id="fuelType"
          name="fuelType"
          className="w-full text-[10px] py-1 px-1 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
        >
          <option value="">선택</option>
          <option value="gasoline">휘발유</option>
          <option value="diesel">경유</option>
          <option value="lpg">LPG</option>
          <option value="electric">전기</option>
          <option value="hydrogen">수소</option>
        </select>

        {/* 검색 */}
        <div className="relative">
          <input
            type="text"
            placeholder="검색"
            className="w-full text-[10px] py-1 px-1 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 p-1"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.97 10.97L14 14M12 7c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5 5 2.239 5 5z"
                stroke="#999"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
