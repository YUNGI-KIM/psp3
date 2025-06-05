import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Header from "../functions/Header";
import Car360Viewer from "../functions/Car360Viewer";

const modelToCarCode = {
    HyundaiAvante: "CN22",
    HyundaiGrandeur: "GN08",
    HyundaiIoniq: "CE02",
    HyundaiPalisade: "FX01",
    HyundaiPorter: "M575",
    HyundaiSantafe: "MX05",
    HyundaiSonata: "DN20",
};

const modelToColorCodes = {
    HyundaiAvante: ["A2B", "A5G", "C5G", "M6T", "PE2", "PM2", "R2P", "RRR", "SAW"],
    HyundaiGrandeur: ["A2B", "A2B-K", "A2B-R", "NGM", "NY9", "T2G", "T4A", "T9M", "VAM", "W6H", "W6H-K", "W6H-R", "XB9"],
    HyundaiIoniq: ["A2B", "A2B-4NB", "NY9", "R2P", "T2G", "T9M", "W3T", "W6H", "W6H-4NB", "XB9"],
    HyundaiPalisade: ["A/A2B", "A/CBP", "A/CRP", "A/GMP", "A/PE2", "A/R2T", "A/WC9", "B/A2B", "B/CBP", "B/CRP", "B/GMP", "B/PE2", "B/R2T", "B/WC9", "C/A2B", "C/CBP", "C/CRP", "C/GMP", "C/PE2", "C/R2T", "C/R8N", "C/WC9"],
    HyundaiPorter: ["RVB", "YAW", "ZV"],
    HyundaiSantafe: ["A2B", "A2B-4NB", "PB2", "PE2", "RN2", "RS2", "WW2", "WW2-4NB", "WWM-4NB", "YBM", "ZGE"],
    HyundaiSonata: ["A2B", "NY9", "R2P", "T2G", "T4M", "T9M", "W6H", "XB9"],
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

function VehicleDetail() {
    const {name} = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [selectedInterior, setSelectedInterior] = useState("black");
    const [selectedColor, setSelectedColor] = useState("A2B");
    const [playing, setPlaying] = useState(false);
    const [viewerIndex, setViewerIndex] = useState(0);
    const [error, setError] = useState(null);

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
                setError(err.message);
            });
    }, [name]);

    useEffect(() => {
        const codes = modelToColorCodes[vehicle?.name] || [];
        if (codes.length > 0) setSelectedColor(codes[0]);
    }, [vehicle?.name]);

    const carCode = modelToCarCode[vehicle?.name];
    const colorCodes = modelToColorCodes[vehicle?.name] || [];

    useEffect(() => { setPlaying(false); }, [carCode, selectedColor]);

    if (error) return <div className="text-red-500 text-center mt-20">{error}</div>;
    if (!vehicle) return <div className="text-center mt-20 text-lg">불러오는 중...</div>;

    const interiorImages = vehicle.interiorOptions.reduce((map, opt) => {
        map[opt.optionKey] = opt.interiorImage;
        return map;
    }, {});

    const has360 = carCode && colorCodes.length > 0;

    return (
        <div>
            <Header/>

            {/* 차량 기본 정보 */}
            <div className="flex flex-col md:flex-row items-start justify-between mt-10 px-6 md:px-12 py-2">
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

                {/* 차량 이미지 및 360뷰 */}
                <div className="flex-1 mt-12 md:mt-0 flex flex-col items-center w-full md:max-w-[700px]">
                    {has360 ? (
                        <>
                            <Car360Viewer
                                carCode={carCode}
                                colorCode={selectedColor}
                                colorOptions={colorCodes}
                                playing={playing}
                                setPlaying={setPlaying}
                                index={viewerIndex}
                                setIndex={setViewerIndex}
                                key={`${carCode}-${selectedColor}`}
                            />
                        </>
                    ) : (
                        <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="max-w-full w-full md:max-w-[700px] h-auto"
                        />
                    )}
                </div>
            </div>

            {/* 인테리어 옵션 */}
            <div className="flex flex-col md:flex-row items-start justify-between mt-20 px-6 md:px-12 py-2">
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
                                <img src={opt.colorchip} alt={opt.name} className="w-full rounded shadow"/>
                                <p className="mt-2 text-sm text-gray-600">{opt.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 인테리어 이미지 */}
                <div className="flex-1 mt-12 md:mt-0 flex justify-center items-center px-2 sm:px-6 lg:px-12">
                    <img
                        src={interiorImages[selectedInterior]}
                        alt="선택된 인테리어"
                        className="
                      w-full
                      max-w-xs
                      sm:max-w-md
                      md:max-w-lg
                      lg:max-w-xl
                      xl:max-w-2xl
                      h-auto
                      rounded
                      shadow
                  "
                    />
                </div>
            </div>
        </div>
    );
}

export default VehicleDetail;