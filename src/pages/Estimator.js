import React, {useState, useEffect, useCallback} from "react";
import {motion, useMotionValue, animate, useTransform} from "framer-motion";
import {CreditCard, Receipt, BadgeCheck} from "lucide-react";
import Header from "../functions/Header";
import {brands} from "../data/brands";
import {basePrices} from "../data/basePrices";
import {carImages} from "../data/carImages";
import {options} from "../data/options";
import Car360Viewer from "../functions/Car360Viewer";

export default function Estimator() {
    // 상태 관리
    const [MonthType, setMonthType] = useState("");
    const [brand, setBrand] = useState("Hyundai");
    const [model, setModel] = useState("Avante");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [imageKey, setImageKey] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("현금");

    // carImages preload
    useEffect(() => {
        Object.values(carImages).forEach(src => {
            const img = new window.Image();
            img.src = src;
        });
    }, []);

    // 가격 관련 MotionValue 및 계산
    const optionsPrice = useMotionValue(0);
    const CarBasePrice = useMotionValue(basePrices[model]);
    const price = useMotionValue(0);

    const acquisitionTax = useTransform(price, v => Math.floor(v * 0.07));
    const registrationFee = useTransform(acquisitionTax, t => t + 82600); // 2600+25000+55000
    const rawTotalPrice = useTransform([price, registrationFee], ([p, r]) => p + r);

    // 할부 개월수 계산
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
            animate(monthlyPayment, v, {duration: 0.5, ease: "easeInOut"});
        });
        return unsub;
    }, [monthlyPaymentRaw]);

    // 표시용 값
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

    // 옵션 체크
    const handleOptionChange = (option) => {
        setSelectedOptions(prev =>
            prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
        );
        setImageKey(k => k + 1);
    };

    // 가격 계산
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
        const controls = animate(price, calculatePrice(), {duration: 1, ease: "easeInOut"});
        return controls.stop;
    }, [model, selectedOptions, price, calculatePrice]);

    useEffect(() => {
        if (brands[brand]?.length) setModel(brands[brand][0]);
    }, [brand]);

    useEffect(() => {
        CarBasePrice.set(basePrices[model] || 0);
    }, [model]);

    // 반응형 컴포넌트 구조 (영수증 스타일)
    return (
        <>
            <Header/>
            <div
                className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-10">
                <div
                    className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white rounded-3xl shadow-2xl border border-blue-100 px-4 sm:px-8 py-6 sm:py-7">
                    {/* 영수증 헤더 */}
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2">
                            <Receipt className="text-blue-500 w-8 h-8"/>
                            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-900">견적서</span>
                        </div>
                        <span className="text-sm text-gray-400 font-mono">
                        NO.{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
                    </span>
                    </div>

                    {/* 차량 이미지 */}
                    <div className="flex justify-center mb-4">
                        <Car360Viewer carCode="CN22" colorCode="PM2" />
                    </div>

                    {/* 브랜드/모델/옵션 변경 */}
                    <div className="flex flex-col gap-2 mb-4">
                        <label className="text-sm font-semibold text-blue-700">브랜드/모델/옵션 변경</label>
                        <div className="flex gap-3 flex-wrap">
                            <select value={brand} onChange={e => setBrand(e.target.value)}
                                    className="border border-blue-200 rounded-md px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-400 min-w-[110px]">
                                {Object.keys(brands).map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                            <select value={model} onChange={e => setModel(e.target.value)}
                                    className="border border-blue-200 rounded-md px-3 py-2 text-sm font-medium min-w-[110px]">
                                {brands[brand].map(m => <option key={m} value={m}>{m}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {options.map((option) => (
                                <label key={option.name}
                                       className="flex items-center gap-2 text-sm font-medium border rounded px-3 py-2 bg-white border-blue-100">
                                    <input
                                        type="checkbox"
                                        checked={selectedOptions.includes(option.name)}
                                        onChange={() => handleOptionChange(option.name)}
                                    />
                                    {option.name} (+{option.price.toLocaleString("ko-KR")}원)
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* 차량 정보 요약 */}
                    <div className="mb-2">
                        <InfoRow label="브랜드" value={brand}/>
                        <InfoRow label="모델" value={model}/>
                        <InfoRow label="추가 옵션" value={selectedOptions.length ? selectedOptions.join(", ") :
                            <span className="text-gray-400">없음</span>}/>
                    </div>

                    {/* 결제 방법 */}
                    <div className="mb-3">
                        <label className="text-sm font-semibold text-blue-700 mb-1">결제 방법</label>
                        <div className="flex gap-5 flex-wrap items-center">
                            <Radio name="pay" value="현금" checked={paymentMethod === "현금"} onChange={setPaymentMethod}/>
                            <Radio name="pay" value="카드" checked={paymentMethod === "카드"} onChange={setPaymentMethod}/>
                            {paymentMethod === "카드" && (
                                <select value={MonthType} onChange={e => setMonthType(e.target.value)}
                                        className="border border-blue-200 rounded-md px-3 py-2 text-sm font-medium mt-2 sm:mt-0">
                                    {["일시불", "2개월", "4개월", "6개월", "8개월", "10개월", "12개월", "24개월", "36개월", "48개월", "60개월"].map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>

                    {/* 결제수단 요약 */}
                    <div className="bg-blue-50 rounded-xl px-4 py-3 mb-6">
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-semibold">결제수단</span>
                            <span
                                className="font-semibold">{paymentMethod}{paymentMethod === "카드" && MonthType && ` (${MonthType})`}</span>
                        </div>
                    </div>

                    {/* 가격 및 납부 정보 */}
                    <div className="mb-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <PriceCard
                            title="가격 상세"
                            list={[
                                {k: "기본 차량가", v: displayed.basePrice},
                                {k: "옵션 합계", v: displayed.optionsPrice},
                                {k: "차량가 합계", v: displayed.price, bold: true, border: true}
                            ]}
                        />
                        <PriceCard
                            title={<><CreditCard className="w-5 h-5"/>납부정보</>}
                            list={[
                                {k: "취득세", v: displayed.acqTax},
                                {k: "등록비", v: displayed.regFee},
                                {k: "총 결제금액", v: displayed.total, bold: true, blue: true},
                                paymentMethod === "카드" && {k: "월 납입금", v: displayed.monthly, blue: true}
                            ].filter(Boolean)}
                        />
                    </div>

                    {/* 안내문구 */}
                    <div className="flex items-center justify-center mt-6">
                        <BadgeCheck className="text-blue-400 w-6 h-6 mr-2"/>
                        <span className="text-sm text-gray-400">본 견적서는 실제 결제와 다를 수 있습니다</span>
                    </div>
                </div>
            </div>
        </>
    );
}

// 서브 컴포넌트들

function InfoRow({label, value}) {
    return (
        <div className="flex justify-between text-base mb-1">
            <span className="text-gray-500">{label}</span>
            <span className="font-semibold">{value}</span>
        </div>
    );
}

function Radio({name, value, checked, onChange}) {
    return (
        <label className="flex items-center gap-2 text-sm font-medium">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
            /> {value}
        </label>
    );
}

function PriceCard({title, list}) {
    return (
        <div className="bg-blue-50 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-700 mb-2 flex gap-2 items-center">{title}</div>
            {list.map(({k, v, bold, blue, border}, idx) => (
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