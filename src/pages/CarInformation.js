import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../functions/Header";
import { AnimatePresence, motion } from "framer-motion";

const brandList = ["Hyundai", "Kia", "Genesis", "Renault"];

function CarInformation() {
  const navigate = useNavigate();
  const [brandIndex, setBrandIndex] = useState(0);
  const [brandModels, setBrandModels] = useState({});

  const currentBrand = brandList[brandIndex];
  const currentModels = brandModels[currentBrand] || [];

  const detailRoutes = Object.fromEntries(
      Object.values(brandModels).flat().map((model) => [model.name, `/CarDetail/${model.name}`])
  );

  useEffect(() => {
    fetch("https://clos21.kr/api/vehicle-products")
        .then((response) => {
          if (!response.ok) {
            throw new Error("🚨 네트워크 응답 실패");
          }
          return response.json();
        })
        .then((data) => {
          const grouped = data.reduce((acc, car) => {
            const brand = car.brand;
            if (!acc[brand]) acc[brand] = [];
            acc[brand].push({
              name: car.name,
              label: "",
              color: "정보 없음",
              interior: car.interiorOptions?.[0]?.name || "정보 없음",
              fuelEfficiency: car.efficiency,
              displacement: car.displacement,
              options: car.features || [],
              price: car.priceAfterTax,
              image: car.image,
            });
            return acc;
          }, {});
          setBrandModels(grouped);
        })
        .catch((error) => {
          console.error("🚨 차량 정보를 불러오는 데 실패했습니다:", error);
        });
  }, []);

  useEffect(() => {
    Object.values(brandModels).flat().forEach(model => {
      if (model.image) {
        const img = new window.Image();
        img.src = model.image;
      }
    });
  }, [brandModels]);

  const nextBrand = () => {
    setBrandIndex((prev) => (prev + 1) % brandList.length);
  };

  const prevBrand = () => {
    setBrandIndex((prev) => (prev === 0 ? brandList.length - 1 : prev - 1));
  };

  return (
      <div>
        <Header />
        <div className="bg-white py-10 px-4 sm:px-8">
          <div className="flex justify-center items-center mb-6 space-x-6">
            <button onClick={prevBrand} className="text-4xl font-bold">〈</button>
            <div>
              <h1 className="text-3xl font-bold text-center">{currentBrand} 차량 정보</h1>
              <p className="text-center text-sm text-gray-500">브랜드 간 비교</p>
            </div>
            <button onClick={nextBrand} className="text-4xl font-bold">〉</button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
                key={brandIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {currentModels.length > 0 ? currentModels.map((model, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden shadow-lg border">
                    <img src={model.image} alt={model.name} className="w-full h-80 object-contain bg-white" />
                    <div className="bg-[#1c1d3a] text-white p-4 relative">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-lg font-bold">{model.name}</h2>
                        {model.label && (
                            <span className="bg-indigo-600 text-xs px-2 py-1 rounded-full">{model.label}</span>
                        )}
                      </div>
                      <ul className="text-sm text-gray-300 mb-5 space-y-1">
                        <li>• 내장 컬러: {model.interior}</li>
                        <li>• 연비: {model.fuelEfficiency}</li>
                        <li>• 배기량: {model.displacement}</li>
                        {model.options.length > 0 ? model.options.map((opt, i) => (
                            <li key={i}>• {opt}</li>
                        )) : <li>• 옵션 없음</li>}
                      </ul>
                      <div className="text-lg font-bold text-center mb-3">{model.price}</div>
                      <button
                          onClick={() => {
                            const path = detailRoutes[model.name];
                            if (path) {
                              navigate(path);
                            } else {
                              alert("이 차량에 대한 상세 페이지는 아직 없습니다.");
                            }
                          }}
                          className="w-full py-2 rounded bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
                      >
                        차량 상세 정보
                      </button>
                    </div>
                  </div>
              )) : (
                  <p className="text-center col-span-3 text-gray-500">등록된 차량 정보가 없습니다.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
  );
}

export default CarInformation;