import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const IMG_COUNT = 60;

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

function Car360Viewer({ carCode, colorCode = "PM2", colorOptions, onChangeColor }) {
    const [index, setIndex] = useState(0);
    const isDragging = useRef(false);
    const prevX = useRef(0);

    const prevCarCode = useRef(carCode);
    // 초기화 효과 (carCode가 바뀔 때만 index를 0으로)
    useEffect(() => {
        if (prevCarCode.current !== carCode) {
            setIndex(0);
            prevCarCode.current = carCode;
        }
        // colorCode가 바뀌어도 index는 그대로 유지
    }, [carCode]);

    const getImgSrc = idx => {
        return `https://www.hyundai.com/contents/vr360/${carCode}/exterior/${colorCode}/${String(idx + 1).padStart(3, "0")}.png`;
    };

    // 이미지 프리로드 (옵션이 바뀌어도 새로 프리로드)
    useEffect(() => {
        const imgs = [];
        for (let i = 0; i < IMG_COUNT; i++) {
            const img = new window.Image();
            img.src = getImgSrc(i);
            imgs.push(img);
        }
    }, [carCode, colorCode]);

    const handleDragStart = e => {
        isDragging.current = true;
        prevX.current = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const handleDrag = e => {
        if (!isDragging.current) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const diff = clientX - prevX.current;
        if (Math.abs(diff) > 5) {
            setIndex(i => (i - Math.sign(diff) + IMG_COUNT) % IMG_COUNT);
            prevX.current = clientX;
        }
    };

    const handleDragEnd = () => {
        isDragging.current = false;
    };

    const [playing, setPlaying] = useState(false);
    useEffect(() => {
        if (!playing) return;
        const timer = setInterval(() => {
            setIndex(i => (i + 1) % IMG_COUNT);
        }, 60);
        return () => clearInterval(timer);
    }, [playing]);

    const location = useLocation();
    const isCarDetail = /^\/CarDetail\/[^/]+$/i.test(location.pathname);

    return (
        <div className="select-none w-full max-w-2xl mx-auto">
            <div
                style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden" }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDrag}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDrag}
                onTouchEnd={handleDragEnd}
            >
                <img
                    src={getImgSrc(index)}
                    alt="360"
                    className="w-full h-full object-contain"
                    draggable={false}
                />
            </div>
            {isCarDetail ? (
                <div className="flex flex-row items-center justify-center gap-3 mt-3">
                    {colorOptions && onChangeColor && (
                        <select
                            className="border rounded px-2 py-1"
                            value={colorCode}
                            onChange={e => onChangeColor(e.target.value)}
                        >
                            {colorOptions.map(opt => (
                                <option key={opt} value={opt}>
                                    {hyundaiColorNames[opt] || opt}
                                </option>
                            ))}
                        </select>
                    )}
                    <button
                        className="px-4 py-1 bg-blue-600 text-white rounded"
                        onClick={() => setPlaying(p => !p)}
                    >
                        {playing ? "Pause" : "Play"}
                    </button>
                    <span className="text-gray-500 text-xs">드래그해서 회전</span>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center mt-3 gap-3">
                    <button
                        className="px-4 py-1 bg-blue-600 text-white rounded"
                        onClick={() => setPlaying(p => !p)}
                    >
                        {playing ? "Pause" : "Play"}
                    </button>
                    <span className="text-gray-500 text-xs">드래그해서 회전</span>
                </div>
            )}
        </div>
    );
}

export default Car360Viewer;