import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const IMG_COUNT = 60;

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
    const isCarDetail = location.pathname.startsWith("/CarDetail/");

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
                                    {opt}
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