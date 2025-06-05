import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../functions/Header";
import { AnimatePresence, motion } from "framer-motion";
import { Car, Fuel, GaugeCircle, Info } from "lucide-react";

// 브랜드 리스트
const brandList = ["Hyundai", "Kia", "Genesis", "Renault"];

export default function CarInformation() {
  const navigate = useNavigate();
  const [brandIndex, setBrandIndex] = useState(0);
  const [brandModels, setBrandModels] = useState({});

  const currentBrand = brandList[brandIndex];
  const currentModels = brandModels[currentBrand] || [];

  const detailRoutes = Object.fromEntries(
      Object.values(brandModels).flat().map((model) => [
        model.name,
        `/CarDetail/${model.name}`,
      ])
  );

  useEffect(() => {
    fetch("https://clos21.kr/api/vehicle-products")
        .then((response) => {
          if (!response.ok) throw new Error("🚨 네트워크 오류");
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
          console.error("🚨 차량 정보를 불러오는 데 실패:", error);
        });
  }, []);

  useEffect(() => {
    Object.values(brandModels)
        .flat()
        .forEach((model) => {
          if (model.image) {
            const img = new Image();
            img.src = model.image;
          }
        });
  }, [brandModels]);

  const nextBrand = () =>
      setBrandIndex((prev) => (prev + 1) % brandList.length);
  const prevBrand = () =>
      setBrandIndex((prev) => (prev === 0 ? brandList.length - 1 : prev - 1));

  return (
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <Header />
        <div className="py-10 px-4 sm:px-10">
          <div className="flex justify-center items-center mb-6 space-x-6">
            <button
                onClick={prevBrand}
                className="text-4xl hover:scale-110 hover:text-gray-500 transition"
            >
              〈
            </button>
            <div>
              <h1 className="text-3xl font-bold text-center text-gray-800">
                {currentBrand} 차량 정보
              </h1>
              <p className="text-center text-sm text-gray-500">브랜드 간 비교</p>
            </div>
            <button
                onClick={nextBrand}
                className="text-4xl hover:scale-110 hover:text-gray-500 transition"
            >
              〉
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
                key={brandIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {currentModels.length > 0 ? (
                  currentModels.map((model, index) => (
                      <CarCard
                          key={index}
                          model={model}
                          detailRoutes={detailRoutes}
                          navigate={navigate}
                      />
                  ))
              ) : (
                  <p className="text-center col-span-3 text-gray-500">
                    등록된 차량 정보가 없습니다.
                  </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
  );
}

function CarCard({ model, detailRoutes, navigate }) {
  return (
      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col">
        <img
            src={model.image}
            alt={model.name}
            className="w-full h-64 object-contain bg-gray-50"
        />

        <div className="bg-[#1c1d3a] text-white p-5 flex flex-col justify-between flex-grow">
          <div className="mb-4 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Car className="w-5 h-5 text-indigo-300" />
                {model.name}
              </h2>
              {model.label && (
                  <span className="bg-indigo-600 text-xs px-2 py-1 rounded-full">
                {model.label}
              </span>
              )}
            </div>

            <ul className="text-sm text-gray-300 space-y-1">
              <li className="flex items-center gap-2">
                <GaugeCircle className="w-4 h-4 text-gray-400" />
                내장 컬러: {model.interior}
              </li>
              <li className="flex items-center gap-2">
                <Fuel className="w-4 h-4 text-gray-400" />
                연비: {model.fuelEfficiency}
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-gray-400" />
                배기량: {model.displacement}
              </li>
              {model.options.length > 0 ? (
                  model.options.map((opt, i) => (
                      <li key={i} className="ml-5 list-disc">
                        {opt}
                      </li>
                  ))
              ) : (
                  <li>옵션 없음</li>
              )}
            </ul>
          </div>

          <div className="text-lg font-bold text-center text-white mb-4">
            {model.price}
          </div>

          <button
              onClick={() => {
                const path = detailRoutes[model.name];
                if (path) {
                  navigate(path);
                } else {
                  alert("이 차량에 대한 상세 페이지는 아직 없습니다.");
                }
              }}
              className="w-full py-2 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors"
          >
            차량 상세 정보
          </button>
        </div>
      </div>
  );
}