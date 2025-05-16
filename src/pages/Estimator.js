import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import Header from "../functions/Header";

const brands = {
    Hyundai: ["Avante", "Sonata", "Grandeur", "Santafe", "Casper", "Porter", "Ioniq6", "Palisade"],
    Kia: ["Bongo", "BongoEv", "Carnival", "Ev3", "Ev4", "Ev6", "K5", "K8", "K9", "Morning", "Ray", "Seltos", "Sorento", "Sprotage"],
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
    Carnival: 33000000,
    Bongo: 20000000,
    BongoEv: 43000000,
    Ev3: 40000000,
    Ev4: 40400000,
    Ev6: 46600000,
    K8: 36800000,
    K9: 58700000,
    Morning: 13700000,
    Ray: 13400000,
    Seltos: 21600000,
    Sorento: 35500000,
    Sprotage: 27900000,
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
    K5: "/image/Estimate/Kia/K5/k5.png",
    Carnival: "/image/Estimate/Kia/Carnival/carnival.png",
    Bongo: "/image/Estimate/Kia/Bongo/bongo.png",
    BongoEv:"/image/Estimate/Kia/BongoEv/bongo-ev.png",
    Ev3:"/image/Estimate/Kia/Ev3/ev3.png",
    Ev4:"/image/Estimate/Kia/Ev4/ev4.png",
    Ev6:"/image/Estimate/Kia/Ev6/ev6.png",
    K8:"/image/Estimate/Kia/K8/k8.png",
    K9:"/image/Estimate/Kia/K9/k9.png",
    Morning:"/image/Estimate/Kia/Morning/morning.png",
    Ray:"/image/Estimate/Kia/Ray/ray.png",
    Seltos:"/image/Estimate/Kia/Seltos/seltos.png",
    Sorento:"/image/Estimate/Kia/Sorento/sorento.png",
    Sportage:"/image/Estimate/Kia/Sportage/sportage.png",
};

export default function Estimator() {
    const [brand, setBrand] = useState("Hyundai");
    const [model, setModel] = useState("Avante");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [imageKey, setImageKey] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("현금");

    const price = useMotionValue(0);

    const acquisitionTax = useTransform(price, (value) => Math.floor(value * 0.07));
    const registrationFee = useTransform(acquisitionTax, (acqTax) =>
        acqTax + 2600 + 25000 + 55000
    );

    const rawTotalPrice = useTransform([price, registrationFee], ([p, r]) => p + r);
    
    const totalPrice = useTransform(rawTotalPrice, (value) =>
        paymentMethod === "카드" ? Math.floor(value * 1.02) : value
    );

    const displayedPrice = useTransform(price, (value) =>
        Math.floor(value).toLocaleString("ko-KR") + "원"
    );

    const displayedAcqTax = useTransform(acquisitionTax, (value) =>
        value.toLocaleString("ko-KR") + "원"
    );

    const displayedRegFee = useTransform(registrationFee, (value) =>
        value.toLocaleString("ko-KR") + "원"
    );

    const displayedTotalPrice = useTransform(totalPrice, (value) =>
        value.toLocaleString("ko-KR") + "원"
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
    }, [model, selectedOptions]);

    const registrationDetails = [
        { name: "취득세", value: displayedAcqTax, motion: true },
        { name: "증지대", value: "2,600 원" },
        { name: "차량번호판", value: "25,000 원" },
        { name: "등록 대행 수수료", value: "55,000 원" },
    ];

    const paymentConditions = [
        { name: "계약금", value: "100,000 원" },
        { name: "단기의무보험료", value: "1,900 원" },
        { name: "인도금", value: displayedPrice, motion: true },
    ];

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

                        {/* 등록비 테이블 */}
                        <div className="mt-6 border-t border-b border-gray-300">
                            <h2 className="text-lg font-semibold my-4">등록비 내역</h2>
                            <table className="w-full text-sm">
                                <tbody>
                                    {registrationDetails.map((item) => (
                                        <tr key={item.name}>
                                            <td className="p-3 font-semibold text-gray-800">{item.name}</td>
                                            <td className="p-3 text-right text-black">
                                                {item.motion ? <motion.span>{item.value}</motion.span> : item.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr className="border-t font-semibold">
                                        <td className="p-3 text-gray-800">등록비용</td>
                                        <td className="p-3 text-right text-black"><motion.span>{displayedRegFee}</motion.span></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        {/* 결제 방법 */}
                        <div className="mt-6 border-t border-b border-gray-300">
                            <h2 className="text-lg font-semibold my-4">결제 방법</h2>
                            <table className="w-full text-sm">
                                <tbody>
                                    <tr className="bg-gray-100">
                                        <td className="w-1/4 p-3 font-semibold text-gray-800">결제 수단</td>
                                        <td className="p-3">
                                            <div className="flex space-x-4">
                                                <label className="flex items-center space-x-1">
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="현금"
                                                        checked={paymentMethod === "현금"}
                                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                                    />
                                                    <span>현금</span>
                                                </label>
                                                <label className="flex items-center space-x-1">
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="카드"
                                                        checked={paymentMethod === "카드"}
                                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                                    />
                                                    <span>신용카드</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold text-gray-800">지불 조건</td>
                                        <td className="p-3">
                                            <table className="w-full">
                                                <tbody>
                                                    {paymentConditions.map((item) => (
                                                        <tr key={item.name} className={item.name === "인도금" ? "bg-gray-100" : ""}>
                                                            <td className="p-2 text-gray-700">{item.name}</td>
                                                            <td className="p-2 text-right text-black">
                                                                {item.motion ? <motion.span>{item.value}</motion.span> : item.value}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="border-t">
                                        <td className="p-3 font-semibold text-gray-800">출고 전 납입 총액</td>
                                        <motion.td className="p-3 text-right text-lg font-bold text-black">{displayedPrice}</motion.td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        {/* 최종 견적 금액 */}
                        <div className="mt-6 text-center">
                            <motion.h2
                                className="text-xl sm:text-2xl font-bold"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                최종 견적: <motion.span>{displayedTotalPrice}</motion.span>
                            </motion.h2>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}