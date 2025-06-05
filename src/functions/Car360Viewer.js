import React, { useRef, useState } from "react";

const IMG_COUNT = 60; // 이미지 개수
const getImgSrc = idx =>
    `https://www.hyundai.com/contents/vr360/CN22/exterior/PM2/${String(idx + 1).padStart(3, "0")}.png`;
const ImgSrcVr360 = {
    "HyundaiAvante": {
        "carCode": "CN22",
        "colorCodes": [
            "A2B",
            "A5G",
            "C5G",
            "M6T",
            "PE2",
            "PM2",
            "R2P",
            "RRR",
            "SAW"
        ]
    },
    "HyundaiGrandeur": {
        "carCode": "GN08",
        "colorCodes": [
            "A2B",
            "A2B-K",
            "A2B-R",
            "NGM",
            "NY9",
            "T2G",
            "T4A",
            "T9M",
            "VAM",
            "W6H",
            "W6H-K",
            "W6H-R",
            "XB9"
        ]
    },
    "HyundaiIoniq": {
        "carCode": "NE06",
        "colorCodes": [
            "A2B",
            "C5G",
            "M9U",
            "PE2",
            "RTE",
            "SAW",
            "U3P",
            "W3T",
            "Y2T"
        ]
    },
    "HyundaiPalisade": {
        "carCode": "FX01",
        "colorCodes": [
            "A/A2B",
            "A/CBP",
            "A/CRP",
            "A/GMP",
            "A/PE2",
            "A/R2T",
            "A/WC9",
            "B/A2B",
            "B/CBP",
            "B/CRP",
            "B/GMP",
            "B/PE2",
            "B/R2T",
            "B/WC9",
            "C/A2B",
            "C/CBP",
            "C/CRP",
            "C/GMP",
            "C/PE2",
            "C/R2T",
            "C/R8N",
            "C/WC9"
        ]
    },
    "HyundaiPorter": {
        "carCode": "M575",
        "colorCodes": [
            "RVB",
            "YAW",
            "ZV"
        ]
    },
    "HyundaiSantafe": {
        "carCode": "MX05",
        "colorCodes": [
            "A2B",
            "A2B-4NB",
            "PB2",
            "PE2",
            "RN2",
            "RS2",
            "WW2",
            "WW2-4NB",
            "WWM-4NB",
            "YBM",
            "ZGE"
        ]
    },
    "HyundaiSonata": {
        "carCode": "DN20",
        "colorCodes": [
            "A2B",
            "NY9",
            "R2P",
            "T2G",
            "T4M",
            "T9M",
            "W6H",
            "XB9"
        ]
    }
};
function Car360Viewer() {
    const [index, setIndex] = useState(0);
    const isDragging = useRef(false);
    const prevX = useRef(0);

    // 마우스/터치로 드래그 회전
    const handleDragStart = e => {
        isDragging.current = true;
        prevX.current = e.touches ? e.touches[0].clientX : e.clientX;
    };
    const handleDrag = e => {
        if (!isDragging.current) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const diff = clientX - prevX.current;
        if (Math.abs(diff) > 5) { // 한 장 넘길 민감도
            setIndex(i => (i - Math.sign(diff) + IMG_COUNT) % IMG_COUNT);
            prevX.current = clientX;
        }
    };
    const handleDragEnd = () => {
        isDragging.current = false;
    };

    // 재생 기능 (자동 회전)
    const [playing, setPlaying] = useState(false);
    React.useEffect(() => {
        if (!playing) return;
        const timer = setInterval(() => {
            setIndex(i => (i + 1) % IMG_COUNT);
        }, 40); // 속도 조절
        return () => clearInterval(timer);
    }, [playing]);

    return (
        <div className="select-none w-full max-w-xl mx-auto">
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
            <div className="flex justify-center mt-3 gap-3">
                <button
                    className="px-4 py-1 bg-blue-600 text-white rounded"
                    onClick={() => setPlaying(p => !p)}
                >
                    {playing ? "Pause" : "Play"}
                </button>
                <span className="text-gray-500 text-xs">드래그해서 회전</span>
            </div>
        </div>
    );
}

export default Car360Viewer;