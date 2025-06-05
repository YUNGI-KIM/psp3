import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { CreditCard, Receipt, BadgeCheck } from "lucide-react";
import Header from "../functions/Header";
import { brands } from "../data/brands";
import { basePrices } from "../data/basePrices";
import { carImages } from "../data/carImages";
import { options } from "../data/options";
import Car360Viewer from "../functions/Car360Viewer";
import { ImgSrcVr360 } from "../functions/ImgSrcVr360";

export default function Estimator() {
    const [MonthType, setMonthType] = useState("");
    const [brand, setBrand] = useState("Hyundai");
    const [model, setModel] = useState("Avante");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("현금");

    const optionsPrice = useMotionValue(0);
    const CarBasePrice = useMotionValue(basePrices[model]);
    const price = useMotionValue(0);

    const acquisitionTax = useTransform(price, v => Math.floor(v * 0.07));
    const registrationFee = useTransform(acquisitionTax, t => t + 82600);
    const rawTotalPrice = useTransform([price, registrationFee], ([p, r]) => p + r);

    const monthToNumber = (str) => {
        if (!str || str === "일시불") return null;
        const match = str.match(/(\d+)/);
        return match ? parseInt(match[1], 10) : null;
    };

    const monthlyPaymentRaw = useTransform(rawTotalPrice, v => {
        const months = monthToNumber(MonthType);
        return months ? Math.floor(v / months) : v;
    });
    const monthlyPayment = useMotionValue(monthlyPaymentRaw.get());

    useEffect(() => {
        const unsub = monthlyPaymentRaw.on("change", v => {
            animate(monthlyPayment, v, { duration: 0.5, ease: "easeInOut" });
        });
        return unsub;
    }, [monthlyPaymentRaw]);

    const toKR = v => Math.floor(v).toLocaleString("ko-KR") + "원";
    const displayed = {
        basePrice: useTransform(CarBasePrice, toKR),
        optionsPrice: useTransform(optionsPrice, toKR),
        price: useTransform(price, toKR),
        acqTax: useTransform(acquisitionTax, v => v.toLocaleString("ko-KR") + "원"),
        regFee: useTransform(registrationFee, v => v.toLocaleString("ko-KR") + "원"),
        total: useTransform(rawTotalPrice, toKR),
        monthly: useTransform(monthlyPayment, toKR),
    };

    const handleOptionChange = (option) => {
        setSelectedOptions(prev =>
            prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
        );
    };

    const calculatePrice = useCallback(() => {
        const base = basePrices[model] || 0;
        const optionSum = selectedOptions.reduce(
            (sum, option) => sum + (options.find(o => o.name === option)?.price || 0),
            0
        );
        return base + optionSum;
    }, [model, selectedOptions]);

    useEffect(() => {
        optionsPrice.set(
            selectedOptions.reduce(
                (sum, option) => sum + (options.find(o => o.name === option)?.price || 0),
                0
            )
        );
    }, [selectedOptions, optionsPrice]);

    useEffect(() => {
        const controls = animate(price, calculatePrice(), { duration: 1, ease: "easeInOut" });
        return controls.stop;
    }, [model, selectedOptions, price, calculatePrice]);

    useEffect(() => {
        if (brands[brand]?.length) setModel(brands[brand][0]);
    }, [brand]);

    useEffect(() => {
        CarBasePrice.set(basePrices[model] || 0);
    }, [model]);

    const car360Info = ImgSrcVr360[brand + model] || {};
    const carCode = car360Info.carCode || "CN22";
    const colorCode = car360Info.colorCodes?.[0] || "PM2";

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-10">
                <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-blue-100 px-6 py-8">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <Receipt className="text-blue-500 w-7 h-7" />
                            <h1 className="text-2xl font-bold text-blue-900">견적서</h1>
                        </div>
                        <span className="text-gray-400 font-mono text-sm">
                            NO.{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
                        </span>
                    </div>

                    <div className="flex justify-center mb-6">
                        <Car360Viewer carCode={carCode} colorCode={colorCode} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-blue-700 font-semibold mb-1">브랜드 / 모델</label>
                        <div className="flex gap-3 mb-2">
                            <select value={brand} onChange={e => setBrand(e.target.value)} className="border px-3 py-2 rounded">
                                {Object.keys(brands).map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                            <select value={model} onChange={e => setModel(e.target.value)} className="border px-3 py-2 rounded">
                                {brands[brand]?.map(m => <option key={m} value={m}>{m}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {options.map((opt) => (
                                <label key={opt.name} className="flex items-center gap-1 text-sm">
                                    <input type="checkbox" checked={selectedOptions.includes(opt.name)} onChange={() => handleOptionChange(opt.name)} />
                                    {opt.name} (+{opt.price.toLocaleString()}원)
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-blue-700 font-semibold mb-1">결제 방법</label>
                        <div className="flex gap-4">
                            <Radio name="pay" value="현금" checked={paymentMethod === "현금"} onChange={setPaymentMethod} />
                            <Radio name="pay" value="카드" checked={paymentMethod === "카드"} onChange={setPaymentMethod} />
                            {paymentMethod === "카드" && (
                                <select value={MonthType} onChange={e => setMonthType(e.target.value)} className="border px-3 py-1 rounded">
                                    {["일시불", "6개월", "12개월", "24개월", "36개월", "60개월"].map(m => <option key={m}>{m}</option>)}
                                </select>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PriceCard title="가격 상세" list={[
                            { k: "기본 차량가", v: displayed.basePrice },
                            { k: "옵션 합계", v: displayed.optionsPrice },
                            { k: "차량가 합계", v: displayed.price, bold: true, border: true },
                        ]} />

                        <PriceCard title={<><CreditCard className="w-5 h-5" /> 납부 정보</>} list={[
                            { k: "취득세", v: displayed.acqTax },
                            { k: "등록비", v: displayed.regFee },
                            { k: "총 결제금액", v: displayed.total, bold: true, blue: true },
                            paymentMethod === "카드" && { k: "월 납입금", v: displayed.monthly, blue: true },
                        ].filter(Boolean)} />
                    </div>

                    <div className="flex justify-center mt-6 text-gray-500 text-sm">
                        <BadgeCheck className="w-5 h-5 text-blue-400 mr-2" />
                        본 견적서는 실제 결제와 다를 수 있습니다.
                    </div>
                </div>
            </div>
        </>
    );
}

function Radio({ name, value, checked, onChange }) {
    return (
        <label className="flex items-center gap-2">
            <input type="radio" name={name} value={value} checked={checked} onChange={() => onChange(value)} /> {value}
        </label>
    );
}

function PriceCard({ title, list }) {
    return (
        <div className="bg-blue-50 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-700 mb-2 flex gap-2 items-center">{title}</div>
            {list.map(({ k, v, bold, blue, border }) => (
                <div
                    key={k}
                    className={
                        "flex justify-between text-sm mb-1 " +
                        (bold ? "font-bold " : "") +
                        (blue ? "text-blue-900 " : "") +
                        (border ? "border-b border-blue-100 pb-1 mb-2 " : "")
                    }
                >
                    <span>{k}</span>
                    <motion.span>{v}</motion.span>
                </div>
            ))}
        </div>
    );
}