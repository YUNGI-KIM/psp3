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
    const [MonthType, setMonthType] = useState("");
    const [brand, setBrand] = useState("Hyundai");
    const [model, setModel] = useState("Avante");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [imageKey, setImageKey] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("현금");

    const [selectedColor, setSelectedColor] = useState("A2B");

    const modelToCarCode = {
        Avante: "CN22",
        Grandeur: "GN08",
        Ioniq6: "CE02",
        Palisade: "FX01",
        Santafe: "MX05",
        Sonata: "DN20",
    };

    const modelToColorCode = {
        Avante: ["A2B", "A5G", "C5G", "M6T", "PE2", "PM2", "R2P", "RRR", "SAW"],
        Grandeur: ["A2B", "A2B-K", "A2B-R", "NGM", "NY9", "T2G", "T4A", "T9M", "VAM", "W6H", "W6H-K", "W6H-R", "XB9"],
        Ioniq6: ["A2B", "A2B-4NB", "NY9", "R2P", "T2G", "T9M", "W3T", "W6H", "W6H-4NB", "XB9"],
        Palisade: ["A/A2B", "A/CBP", "A/CRP", "A/GMP", "A/PE2", "A/R2T", "A/WC9", "B/A2B", "B/CBP", "B/CRP", "B/GMP", "B/PE2", "B/R2T", "B/WC9", "C/A2B", "C/CBP", "C/CRP", "C/GMP", "C/PE2", "C/R2T", "C/R8N", "C/WC9"],
        Santafe: ["A2B", "A2B-4NB", "PB2", "PE2", "RN2", "RS2", "WW2", "WW2-4NB", "WWM-4NB", "YBM", "ZGE"],
        Sonata: ["A2B", "NY9", "R2P", "T2G", "T4M", "T9M", "W6H", "XB9"]
    };

    const hyundaiColorNames = {
        // 주요 공통 색상
        "A2B": "어비스 블랙 펄",
        "A2B-K": "어비스 블랙 펄 (투톤K)",
        "A2B-R": "어비스 블랙 펄 (투톤R)",
        "A5G": "아마존 그레이 메탈릭",
        "C5G": "쉬머링 실버 메탈릭",
        "M6T": "메타 블루 펄",
        "PE2": "플루이드 그레이 메탈릭",
        "PM2": "플루이드 메탈",
        "R2P": "얼티메이트 레드 메탈릭",
        "RRR": "인텐스 블루",
        "SAW": "세이지 그린",
        "NGM": "녹턴 그레이 메탈릭",
        "NY9": "화이트 크림",
        "T2G": "트위스터 블루 펄",
        "T4A": "카본 메탈",
        "T4M": "에어로 실버 매트",
        "T9M": "트랜스포머 그레이",
        "VAM": "바이올렛 메탈릭",
        "W6H": "그래비티 골드 매트",
        "W6H-K": "그래비티 골드 매트 (투톤K)",
        "W6H-R": "그래비티 골드 매트 (투톤R)",
        "XB9": "오션 블루",
        "M9U": "미스티 그레이 펄",
        "RTE": "슈팅 스타 그레이 매트",
        "U3P": "블루 핀 마이크로",
        "W3T": "비비드 베이지",
        "Y2T": "아틀라스 화이트",
        // 팰리세이드 특수 조합 (A/xxx, B/xxx 등)
        "A/A2B": "어비스 블랙 펄 (A 루프)",
        "A/CBP": "문라이트 블루 펄 (A 루프)",
        "A/CRP": "가이아 브라운 펄 (A 루프)",
        "A/GMP": "쉬머링 실버 메탈릭 (A 루프)",
        "A/PE2": "플루이드 그레이 메탈릭 (A 루프)",
        "A/R2T": "오로라 그레이 펄 (A 루프)",
        "A/WC9": "크림 화이트 펄 (A 루프)",
        "B/A2B": "어비스 블랙 펄 (B 루프)",
        "B/CBP": "문라이트 블루 펄 (B 루프)",
        "B/CRP": "가이아 브라운 펄 (B 루프)",
        "B/GMP": "쉬머링 실버 메탈릭 (B 루프)",
        "B/PE2": "플루이드 그레이 메탈릭 (B 루프)",
        "B/R2T": "오로라 그레이 펄 (B 루프)",
        "B/WC9": "크림 화이트 펄 (B 루프)",
        "C/A2B": "어비스 블랙 펄 (C 루프)",
        "C/CBP": "문라이트 블루 펄 (C 루프)",
        "C/CRP": "가이아 브라운 펄 (C 루프)",
        "C/GMP": "쉬머링 실버 메탈릭 (C 루프)",
        "C/PE2": "플루이드 그레이 메탈릭 (C 루프)",
        "C/R2T": "오로라 그레이 펄 (C 루프)",
        "C/R8N": "타이가 브라운 펄 (C 루프)",
        "C/WC9": "크림 화이트 펄 (C 루프)",
        // 포터
        "RVB": "클리어 화이트",
        "YAW": "블루",
        "ZV": "에코 그린",
        // 싼타페
        "A2B-4NB": "어비스 블랙 펄(블랙 루프)",
        "PB2": "스톰 블루 펄",
        "RN2": "익스플로러 카키 매트",
        "RS2": "카퍼 브라운 메탈릭",
        "WW2": "티타늄 그레이 매트",
        "WW2-4NB": "티타늄 그레이 매트(블랙 루프)",
        "WWM-4NB": "마룬 브라운 펄(블랙 루프)",
        "YBM": "글레이셔 화이트",
        "ZGE": "사파이어 블루 펄"
    };

    const currentCarCode = modelToCarCode[model];
    const colorCodes = modelToColorCode[model] || [];
    const has360View = currentCarCode && colorCodes.length > 0;

    const getImageComponent = () => {
        if (has360View) {
            return <Car360Viewer carCode={currentCarCode} colorCode={selectedColor} key={`${model}-${selectedColor}-${imageKey}`}/>;
        } else {
            return <img src={carImages[model]} alt={model} className="w-full sm:w-[500px] h-48 sm:h-[300px] object-contain rounded-lg mx-auto mb-6" />;
        }
    };


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

    useEffect(() => {
        setImageKey(k => k + 1);
    }, [model]);

    // 모델 변경 시 색상 초기화
    useEffect(() => {
        if (colorCodes.length > 0) {
            setSelectedColor(colorCodes[0]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model]);

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
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-10">
                <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-blue-100 px-4 sm:px-8 py-6 sm:py-7">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2">
                            <Receipt className="text-blue-500 w-8 h-8" />
                            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-900">견적서</span>
                        </div>
                        <span className="text-sm text-gray-400 font-mono">
                            NO.{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
                        </span>
                    </div>

                    <div className="flex justify-center mb-4">
                        {getImageComponent()}
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
                            {/* 색상 select*/}
                            {colorCodes.length > 0 && (
                                <select
                                    value={selectedColor}
                                    onChange={e => setSelectedColor(e.target.value)}
                                    className="border border-blue-200 rounded-md px-3 py-2 text-sm font-medium min-w-[110px]"
                                >
                                    {colorCodes.map(code => (
                                        <option key={code} value={code}>
                                            {hyundaiColorNames[code] || code}
                                        </option>
                                    ))}
                                </select>
                            )}
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