import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../functions/Header";
import ColorchipBeige from "../Image/Interior/ColorchipBeige.png";
import ColorchipBlack from "../Image/Interior/ColorchipBlack.png";
import ColorchipGreen from "../Image/Interior/ColorchipGreen.png";
import InteriorBlack from "../Image/Interior/Inside/InsideBlack.png";
import InteriorBeige from "../Image/Interior/Inside/InsideBeige.png";
import InteriorGreen from "../Image/Interior/Inside/InsideGreen.png";

const IoniqSpecs = {
  priceAfterTax: "6,715 만원~",
  priceBeforeTax: "7,073 만원~",
  efficiency: "~4.3 km/kWh",
  displacement: "5",
};

function HyundaiIoniq() {
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

      <div className="flex flex-col md:flex-row items-start justify-between mt-10 mb-0 bg-white px-12 py-6">
        {/* 왼쪽 텍스트 영역 */}
        <div className="flex-1 space-y-10">
          <span className="text-lg bg-blue-600 text-white px-4 py-1 rounded">NEW</span>
          <h1 className="text-6xl font-bold">아이오닉 6</h1>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-40 text-xl text-gray-700 mt-20 whitespace-nowrap">
            <div>
              <div className="font-bold text-4xl">{IoniqSpecs.priceAfterTax}</div>
              <div className="text-base">(세제 혜택 후 가격)</div>
            </div>
            <div>
              <div className="text-gray-500 text-4xl">({IoniqSpecs.priceBeforeTax})</div>
              <div className="text-base">(세제 혜택 전 가격)</div>
            </div>
            <div>
              <div className="font-bold text-4xl">{IoniqSpecs.efficiency}</div>
              <div className="text-base">연비</div>
            </div>
            <div>
              <div className="font-bold text-4xl">{IoniqSpecs.displacement}</div>
              <div className="text-base">배기량</div>
            </div>
          </div>
        </div>

        {/* 오른쪽 차량 이미지 */}
        <div className="flex-1 mt-12 md:mt-0 mb-0 flex justify-center">
          <img
            src="../Image/Estimate/Hyundai/Ioniq/ioniq.png"
            alt="아이오닉 9"
            className="max-w-[700px] w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mt-20 mb-0 bg-white px-12 py-6">
        {/* 왼쪽 내부 색상 선택 영역 */}
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-semibold text-gray-600">차량 내부 색상</h3>
          <p className="text-lg text-gray-700">
            다양한 감성의 인테리어 색상을 선택해보세요.
          </p>

          {/* 설명 카드 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-800">
            <div
              className={`border p-4 rounded shadow cursor-pointer transition transform hover:scale-105 ${
                selectedInterior === "black" ? "ring-2 ring-blue-600" : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedInterior("black")}
            >
              <div className="text-xl font-bold">블랙 원톤</div>
              <div className="text-sm text-gray-500">천연가죽 시트</div>
            </div>
            <div
              className={`border p-4 rounded shadow cursor-pointer transition transform hover:scale-105 ${
                selectedInterior === "beige" ? "ring-2 ring-blue-600" : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedInterior("beige")}
            >
              <div className="text-xl font-bold">캐쉬미어 베이지</div>
              <div className="text-sm text-gray-500">천연가죽 시트</div>
            </div>
            <div
              className={`border p-4 rounded shadow cursor-pointer transition transform hover:scale-105 ${
                selectedInterior === "green" ? "ring-2 ring-blue-600" : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedInterior("green")}
            >
              <div className="text-xl font-bold">세이지 그린</div>
              <div className="text-sm text-gray-500">Bio 천연가죽 시트</div>
            </div>
          </div>

          {/* 색상 칩 이미지 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4 text-center">
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
            className="max-w-[700px] w-full h-auto transition duration-500 ease-in-out rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default HyundaiIoniq;