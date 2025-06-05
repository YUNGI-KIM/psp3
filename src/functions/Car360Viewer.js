import React, { useRef, useState, useEffect } from "react";

const IMG_COUNT = 60;

function Car360Viewer({ carCode, colorCode = "PM2" }) {
    const [index, setIndex] = useState(0);
    const isDragging = useRef(false);
    const prevX = useRef(0);

    const getImgSrc = idx => {
        return `https://www.hyundai.com/contents/vr360/${carCode}/exterior/${colorCode}/${String(idx + 1).padStart(3, "0")}.png`;
    };

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
        }, 40);
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