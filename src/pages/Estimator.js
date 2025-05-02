import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import Header from "../buy/functions/Header";

const brands = {
    Hyundai: ["Avante", "Sonata", "Grandeur", "Santafe", "Casper", "Porter", "Ioniq6", "Palisade"],
    Kia: ["K5", "K7", "Carnival"],
};

const basePrices = {
    Avante: 21000000,
    Sonata: 27000000,
    Grandeur: 38000000,
    Santafe: 35000000,
    Casper: 14000000,
    Porter: 21000000,
    Ioniq6: 50000000,
    Palisade: 45000000,
    K5: 27000000,
    K7: 35000000,
    Carnival: 33000000,
};

const options = [
    { name: "Sunroof", price: 1000000 },
    { name: "Leather Seats", price: 1500000 },
    { name: "Navigation", price: 800000 },
];

const carImages = {
    Avante: "/image/Estimate/Hyundai/Avante/Avante.png",
    Sonata: "/image/Estimate/Hyundai/Sonata/Sonata.png",
    Grandeur: "/image/Estimate/Hyundai/Grandeur/Grandeur.png",
    Santafe: "/image/Estimate/Hyundai/Santafe/santafe2.png",
    Casper: "/image/Estimate/Hyundai/Casper/casper2.png",
    Porter: "/image/Estimate/Hyundai/Porter/porter2.png",
    Ioniq6: "/image/Estimate/Hyundai/Ioniq/ioniq.png",
    Palisade: "/image/Estimate/Hyundai/Palisade/palisade2.png",
    K5: "/image/Estimate/Kia/K5/K5.jpg",
    K7: "/image/Estimate/Kia/K7/K7.jpg",
    Carnival: "/image/Estimate/Kia/Carnival/Carnival.webp",
};

export default function Estimator() {
    const [brand, setBrand] = useState("Hyundai");
    const [model, setModel] = useState("Avante");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [imageKey, setImageKey] = useState(0);

    const price = useMotionValue(0);
    const displayedPrice = useTransform(price, (value) =>
        Math.floor(value).toLocaleString("ko-KR") + "원"
    );

    const handleOptionChange = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((o) => o !== option)
                : [...prev, option]
        );
        setImageKey((prev) => prev + 1);
    };

    const calculatePrice = useCallback(() => {
        const basePrice = basePrices[model] || 0;
        const optionsPrice = selectedOptions.reduce(
            (sum, option) => sum + options.find((o) => o.name === option)?.price,
            0
        );
        return basePrice + optionsPrice;
    }, [model, selectedOptions]); // ✅ basePrices, options 의존성 제거!

    useEffect(() => {
        const controls = animate(price, calculatePrice(), {
            duration: 1,
            ease: "easeInOut",
        });
        return controls.stop;
    }, [model, selectedOptions, price, calculatePrice]);

    useEffect(() => {
        if (brand && brands[brand] && brands[brand].length > 0) {
            setModel(brands[brand][0]);
        }
    }, [brand]);

    return (
        <div className="min-h-screen bg-white text-black">
            <Header />
            <div className="flex flex-col items-center justify-center p-4 sm:p-8">
                <motion.div
                    className="w-full max-w-md sm:max-w-2xl p-6 bg-gray-100 shadow-2xl rounded-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">차량 견적 페이지</h1>

                    {/* 차량 이미지 */}
                    <motion.img
                        src={carImages[model]}
                        alt={model}
                        className="w-full sm:w-[500px] h-48 sm:h-[300px] object-contain rounded-lg mx-auto mb-6"
                        key={model + imageKey}
                        initial={{ opacity: 0.7, scale: 1 }}
                        animate={{ opacity: 1, scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                    />

                    <div className="grid gap-6">
                        {/* 브랜드와 모델 선택 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold">브랜드 선택</label>
                                <select
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    {Object.keys(brands).map((b) => (
                                        <option key={b} value={b}>{b}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-semibold">모델 선택</label>
                                <select
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    {brands[brand].map((m) => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* 추가 옵션 선택 */}
                        <div>
                            <h2 className="text-lg font-semibold mb-2">추가 옵션</h2>
                            <div className="flex flex-wrap gap-2 sm:gap-4">
                                {options.map((option) => (
                                    <div key={option.name} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedOptions.includes(option.name)}
                                            onChange={() => handleOptionChange(option.name)}
                                            className="w-5 h-5"
                                        />
                                        <span className="text-sm sm:text-base">
                      {option.name} (+{option.price.toLocaleString("ko-KR")}원)
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 최종 견적 금액 */}
                        <div className="mt-6 text-center">
                            <motion.h2
                                className="text-xl sm:text-2xl font-bold"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                최종 견적: <motion.span>{displayedPrice}</motion.span>
                            </motion.h2>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
