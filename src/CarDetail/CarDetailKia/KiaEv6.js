import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../functions/Header";
import ColorchipBeige from "/ImageSrc/Interior/ColorchipBeige.png";
import ColorchipBlack from "/ImageSrc/Interior/ColorchipBlack.png";
import ColorchipGreen from "/ImageSrc/Interior/ColorchipGreen.png";
import InteriorBlack from "/ImageSrc/Interior/Inside/InsideBlack.png";
import InteriorBeige from "/ImageSrc/Interior/Inside/InsideBeige.png";
import InteriorGreen from "/ImageSrc/Interior/Inside/InsideGreen.png";

const IoniqSpecs = {
  priceAfterTax: "5,800 만원~",
  priceBeforeTax: "6,000 만원~",
  efficiency: "~5.4 km/kWh",
  displacement: " - ",
};

function KiaEv6() {
  const navigate = useNavigate();
  const [selectedInterior, setSelectedInterior] = useState("black");

  const interiorImages = {
    black: InteriorBlack,
    beige: InteriorBeige,
    green: InteriorGreen,
  };

  return (
    <div>
      <div>{Header()}</div>

      <div className="flex flex-col md:flex-row items-start justify-between mt-10 mb-0 bg-white px-6 md:px-12 py-6">
        {/* 왼쪽 텍스트 영역 */}
        <div className="flex-1 space-y-10">
          <span className="text-lg bg-blue-600 text-white px-4 py-1 rounded">NEW</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight break-keep">Ev6</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 text-xl text-gray-700 mt-10">
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-4xl">{IoniqSpecs.priceAfterTax}</span>
              <span className="text-base">(세제 혜택 후 가격)</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-2xl md:text-4xl">{IoniqSpecs.priceBeforeTax}</span>
              <span className="text-base">(세제 혜택 전 가격)</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-4xl">{IoniqSpecs.efficiency}</span>
              <span className="text-base">연비</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-4xl">{IoniqSpecs.displacement}</span>
              <span className="text-base">배기량</span>
            </div>
          </div>
        </div>

        {/* 오른쪽 차량 이미지 */}
        <div className="flex-1 mt-12 md:mt-0 mb-0 flex justify-center">
          <img
            src="/ImageSrc/Estimate/Kia/Ev6/ev6.png"
            alt="Ev6"
            className="max-w-full w-full md:max-w-[700px] h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mt-20 mb-0 bg-white px-6 md:px-12 py-6">
        {/* 왼쪽 내부 색상 선택 영역 */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-600">차량 내부 색상</h3>
          <p className="text-base md:text-lg text-gray-700">
            다양한 감성의 인테리어 색상을 선택해보세요.
          </p>

          {/* 설명 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-800">
            <div
              className={`border p-4 rounded shadow cursor-pointer transition transform hover:scale-105 ${
                selectedInterior === "black" ? "ring-2 ring-blue-600" : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedInterior("black")}
            >
              <div className="text-lg md:text-xl font-bold">블랙 원톤</div>
              <div className="text-sm text-gray-500">천연가죽 시트</div>
            </div>
            <div
              className={`border p-4 rounded shadow cursor-pointer transition transform hover:scale-105 ${
                selectedInterior === "beige" ? "ring-2 ring-blue-600" : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedInterior("beige")}
            >
              <div className="text-lg md:text-xl font-bold">캐쉬미어 베이지</div>
              <div className="text-sm text-gray-500">천연가죽 시트</div>
            </div>
            <div
              className={`border p-4 rounded shadow cursor-pointer transition transform hover:scale-105 ${
                selectedInterior === "green" ? "ring-2 ring-blue-600" : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedInterior("green")}
            >
              <div className="text-lg md:text-xl font-bold">세이지 그린</div>
              <div className="text-sm text-gray-500">Bio 천연가죽 시트</div>
            </div>
          </div>

          {/* 색상 칩 이미지 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 text-center">
            <div>
              <img src={ColorchipBlack} alt="블랙 원톤" className="w-full h-auto rounded shadow" />
              <p className="mt-2 text-sm text-gray-600">블랙 원톤</p>
            </div>
            <div>
              <img src={ColorchipBeige} alt="캐쉬미어 베이지" className="w-full h-auto rounded shadow" />
              <p className="mt-2 text-sm text-gray-600">캐쉬미어 베이지</p>
            </div>
            <div>
              <img src={ColorchipGreen} alt="세이지 그린" className="w-full h-auto rounded shadow" />
              <p className="mt-2 text-sm text-gray-600">세이지 그린</p>
            </div>
          </div>
        </div>

        {/* 오른쪽 내부 이미지 */}
        <div className="flex-1 mt-12 md:mt-0 mb-0 flex justify-center">
          <img
            src={interiorImages[selectedInterior]}
            alt="선택된 인테리어"
            className="max-w-full md:max-w-[700px] w-full h-auto transition duration-500 ease-in-out rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default KiaEv6;
