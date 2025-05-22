import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import Header from "../functions/Header";

import { brands } from "../data/brands";
import { basePrices } from "../data/basePrices";
import { carImages } from "../data/carImages";
import { options } from "../data/options";

export default function Estimator() {
    const [MonthType, setMonthType] = useState(""); // 할부 개월 선택
    const [brand, setBrand] = useState("Hyundai");
    const [model, setModel] = useState("Avante");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [imageKey, setImageKey] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("현금");

    const optionsPrice = useMotionValue(0);
    const CarBasePrice = useMotionValue(basePrices[model]);
    const price = useMotionValue(0);

    const acquisitionTax = useTransform(price, value => Math.floor(value * 0.07));
    const registrationFee = useTransform(acquisitionTax, acqTax =>
        acqTax + 2600 + 25000 + 55000
    );

    const rawTotalPrice = useTransform([price, registrationFee], ([p, r]) => p + r);

    const totalPrice = useTransform(rawTotalPrice, value =>
        Math.floor(value).toLocaleString("ko-KR") + "원"
    );

    const displayedPrice = useTransform(price, value =>
        Math.floor(value).toLocaleString("ko-KR") + "원"
    );

    const displayedOptionsPrice = useTransform(optionsPrice, value =>
        Math.floor(value).toLocaleString("ko-KR") + "원"
    );

    const displayedAcqTax = useTransform(acquisitionTax, value =>
        value.toLocaleString("ko-KR") + "원"
    );

    const displayedRegFee = useTransform(registrationFee, value =>
        value.toLocaleString("ko-KR") + "원"
    );

    const displayedBasePrice = useTransform(CarBasePrice, value =>
        value.toLocaleString("ko-KR") + "원"
    );

    const displayedTotalPrice = useTransform(totalPrice, value =>
        value.toLocaleString("ko-KR")
    );

    // 월 납입금 계산
    const monthToNumber = (monthStr) => {
        if (monthStr === "일시불" || monthStr === "") return null;
        const match = monthStr.match(/(\d+)/);
        return match ? parseInt(match[1]) : null;
    };

    const monthlyPayment = useTransform(rawTotalPrice, value => {
        const months = monthToNumber(MonthType);
        if (!months) return value;
        return Math.floor(value / months);
    });

    const displayedMonthlyPayment = useTransform(monthlyPayment, value =>
        value.toLocaleString("ko-KR") + "원"
    );

    const handleOptionChange = (option) => {
        setSelectedOptions(prev =>
            prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
        );
        setImageKey(prev => prev + 1);
    };

    const calculatePrice = useCallback(() => {
        const basePrice = basePrices[model] || 0;
        const optionsTotal = selectedOptions.reduce(
            (sum, option) => sum + options.find(o => o.name === option)?.price,
            0
        );
        return basePrice + optionsTotal;
    }, [model, selectedOptions]);

    const registrationDetails = [
        { name: "취득세", value: displayedAcqTax, motion: true },
        { name: "증지대", value: "2,600 원" },
        { name: "차량번호판", value: "25,000 원" },
        { name: "등록 대행 수수료", value: "55,000 원" },
        { name: "단기의무보험료", value: "1,900 원" },
        { name: "계약금", value: "100,000 원" },
    ];

    const paymentConditions = [
        { name: "기본 차량 가격", value: displayedBasePrice, motion: true },
        { name: "옵션 가격", value: displayedOptionsPrice, motion: true }
    ];

    const totals = [
        { name: "총 차량 가격", value: displayedPrice, motion: true },
        { name: "부대 비용", value: displayedRegFee, motion: true }
    ];

    useEffect(() => {
        const newOptionsPrice = selectedOptions.reduce(
            (sum, option) => sum + options.find(o => o.name === option)?.price,
            0
        );
        optionsPrice.set(newOptionsPrice);
    }, [selectedOptions, optionsPrice]);

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

    useEffect(() => {
        CarBasePrice.set(basePrices[model] || 0);
    }, [model]);

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
                        {/* 브랜드/모델 선택 */}
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

                        {/* 옵션 선택 */}
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

                        {/* 차량 가격 테이블 */}
                        <div className="mt-6 border-t border-b border-gray-300">
                            <h2 className="text-lg font-semibold my-4">차량 가액</h2>
                            <table className="w-full text-sm">
                                <tbody>
                                {paymentConditions.map(item => (
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
                                    <td className="p-3 text-gray-800">총 차량가액</td>
                                    <td className="p-3 text-right text-black">
                                        <motion.span>{displayedPrice}</motion.span>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        {/* 부대 비용 테이블 */}
                        <div className="mt-6  border-b border-gray-300">
                            <h2 className="text-lg font-semibold my-4">부대 비용</h2>
                            <table className="w-full text-sm">
                                <tbody>
                                {registrationDetails.map(item => (
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
                                    <td className="p-3 text-gray-800">부대비용</td>
                                    <td className="p-3 text-right text-black">
                                        <motion.span>{displayedRegFee}</motion.span>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        {/* 총 금액 테이블 */}
                        <div className="mt-6  border-b border-gray-300">
                            <h2 className="text-lg font-semibold my-4">총 금액</h2>
                            <table className="w-full text-sm">
                                <tbody>
                                {totals.map(item => (
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
                                    <td className="p-3 text-gray-800">총 차량가액</td>
                                    <td className="p-3 text-right text-black">
                                        <motion.span>{displayedTotalPrice}</motion.span>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        {/* 결제 방법 */}
                        <div className="mt-6  border-b border-gray-300">
                            <h2 className="text-lg font-semibold my-4">결제 수단 선택</h2>
                            <table className="w-full text-sm">
                                <tbody>
                                <tr className="bg-gray-100">
                                    <td className="w-1/4 p-3 font-semibold text-gray-800">결제 수단</td>
                                    <td className="p-3">
                                        <div className="flex flex-col space-y-2">
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
                                            {paymentMethod === "카드" && (
                                                <div className="mt-2">
                                                    <label className="block mb-1 text-sm text-gray-700">할부 개월 선택</label>
                                                    <select
                                                        value={MonthType}
                                                        onChange={(e) => setMonthType(e.target.value)}
                                                        className="border border-gray-300 rounded px-3 py-2 text-sm w-48"
                                                    >
                                                        <option value="">-- 할부 개월 선택 --</option>
                                                        <option value="일시불">일시불</option>
                                                        <option value="2개월">2개월</option>
                                                        <option value="4개월">4개월</option>
                                                        <option value="6개월">6개월</option>
                                                        <option value="8개월">8개월</option>
                                                        <option value="10개월">10개월</option>
                                                        <option value="12개월">12개월</option>
                                                        <option value="24개월">24개월</option>
                                                        <option value="36개월">36개월</option>
                                                        <option value="48개월">48개월</option>
                                                        <option value="60개월">60개월</option>
                                                    </select>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr className="border-t">
                                    <td className="p-3 font-semibold text-gray-800">월 납입금</td>
                                    <motion.td className="p-3 text-right text-lg font-bold text-black">
                                        {displayedMonthlyPayment}
                                    </motion.td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}