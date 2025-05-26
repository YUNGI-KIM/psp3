import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../functions/Header";

function VehicleDetail() {
  const { name } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [selectedInterior, setSelectedInterior] = useState("black");

  useEffect(() => {
    fetch(`https://clos21.kr/api/vehicle-products/name/${name}`)
        .then((res) => {
          if (!res.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");
          return res.json();
        })
        .then((data) => {
          setVehicle(data);
        })
        .catch((err) => {
          console.error(err);
        });
  }, [name]);

  if (!vehicle) return <div>로딩 중...</div>;

  const interiorImages = vehicle.interiorOptions.reduce((map, opt) => {
    map[opt.optionKey] = opt.interiorImage;
    return map;
  }, {});

  return (
      <div>
        <div>{Header()}</div>

        {/* 차량 기본 정보 */}
        <div className="flex flex-col md:flex-row items-start justify-between mt-10 px-6 md:px-12 py-6">
          <div className="flex-1 space-y-10">
            <span className="text-lg bg-blue-600 text-white px-4 py-1 rounded">{vehicle.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold">{vehicle.name}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 text-xl text-gray-700 mt-10">
              <div className="flex flex-col">
                <span className="font-bold text-2xl md:text-4xl">{vehicle.priceAfterTax}</span>
                <span className="text-base">(세제 혜택 후 가격)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-2xl md:text-4xl">{vehicle.priceBeforeTax}</span>
                <span className="text-base">(세제 혜택 전 가격)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl md:text-4xl">{vehicle.efficiency}</span>
                <span className="text-base">연비</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl md:text-4xl">{vehicle.displacement}</span>
                <span className="text-base">배기량</span>
              </div>
            </div>
          </div>

          {/* 차량 이미지 */}
          <div className="flex-1 mt-12 md:mt-0 flex justify-center">
            <img
                src={vehicle.image}
                alt={vehicle.name}
                className="max-w-full w-full md:max-w-[700px] h-auto"
            />
          </div>
        </div>

        {/* 인테리어 옵션 */}
        <div className="flex flex-col md:flex-row items-start justify-between mt-20 px-6 md:px-12 py-6">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-600">차량 내부 색상</h3>
            <p className="text-base text-gray-700">다양한 감성의 인테리어 색상을 선택해보세요.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {vehicle.interiorOptions.map((opt) => (
                  <div
                      key={opt.optionKey}
                      className={`border p-4 rounded shadow cursor-pointer transition transform hover:scale-105 ${
                          selectedInterior === opt.optionKey ? "ring-2 ring-blue-600" : ""
                      }`}
                      onClick={() => setSelectedInterior(opt.optionKey)}
                  >
                    <div className="text-lg font-bold">{opt.name}</div>
                    <div className="text-sm text-gray-500">{opt.description ?? "천연가죽 시트"}</div>
                  </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 text-center">
              {vehicle.interiorOptions.map((opt) => (
                  <div key={opt.optionKey}>
                    <img src={opt.colorchip} alt={opt.name} className="w-full rounded shadow" />
                    <p className="mt-2 text-sm text-gray-600">{opt.name}</p>
                  </div>
              ))}
            </div>
          </div>

          {/* 인테리어 이미지 */}
          <div className="flex-1 mt-12 md:mt-0 flex justify-center">
            <img
                src={interiorImages[selectedInterior]}
                alt="선택된 인테리어"
                className="max-w-full md:max-w-[700px] w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
  );
}

export default VehicleDetail;