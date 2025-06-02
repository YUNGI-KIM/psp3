import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from '../functions/Header';
import { useUser } from "../contexts/UserContext";

// 브랜드 로고 import (예시 경로, 필요에 따라 수정)
import hyundai from '../ImageSrc/companyLogo/hyundai.svg';
import kia from '../ImageSrc/companyLogo/kia.svg';
import chevrolet from '../ImageSrc/companyLogo/chevrolet.svg';
import gen from '../ImageSrc/companyLogo/gen.svg';
import kgm from '../ImageSrc/companyLogo/kgm.svg';
import Reno from '../ImageSrc/companyLogo/Renault.svg';
import BMW from '../ImageSrc/companyLogo/Bmw.svg';
import Audi from '../ImageSrc/companyLogo/Audi.svg';
import Benz from '../ImageSrc/companyLogo/Benz.svg';
import Tesla from '../ImageSrc/companyLogo/Tesla.svg';
<<<<<<< HEAD
import Header from '../functions/Header';
import { useUser } from "../contexts/UserContext";
import PopularModels from '../functions/PopularModels';
import AccessorySection from "../functions/AccessorySection";
=======
>>>>>>> origin/feature_YUNGI-KIM

const variants = {
    enter: (direction) => ({
        x: direction === 1 ? 300 : -300,
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        x: direction === 1 ? -300 : 300,
        opacity: 0
    })
};

const slidSrc = [
    {
        srcWebp: "/ImageSrc/sideImage/CBTI.webp",
        src: "/ImageSrc/sideImage/CBTI.jpg",
        href: '/startCBTI',
    },
    {
        srcWebp: "/ImageSrc/sideImage/main.webp",
        src: "/ImageSrc/sideImage/main.jpg",
        href: '/',
    },
    {
        srcWebp: "/ImageSrc/sideImage/main2.webp",
        src: "/ImageSrc/sideImage/main2.jpg",
        href: '/',
    },
    {
        srcWebp: "/ImageSrc/sideImage/main3.webp",
        src: "/ImageSrc/sideImage/main3.jpg",
        href: '/',
    }
];

const brandLogos = [
    { alt: "HYUNDAI", src: hyundai, href: '/buy/hyundai' },
    { alt: "KIA", src: kia, href: '/buy/kia' },
    { alt: "CHEVROLET", src: chevrolet, href: '/buy/Chevo' },
    { alt: "RENAULT", src: Reno, href: '/buy/Reno' },
    { alt: "KGM", src: kgm, href: '/buy/kgm' },
    { alt: "GENESIS", src: gen, href: '/buy/Gen' },
    { alt: "BMW", src: BMW, href: '/buy/BMW' },
    { alt: "AUDI", src: Audi, href: '/buy/Audi' },
    { alt: "BENZ", src: Benz, href: '/buy/Benz' },
    { alt: "TESLA", src: Tesla, href: '/buy/Tesla' },
];

const MainPage = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(0);
    const [logosPerPage, setLogosPerPage] = useState(5);
    const directionRef = useRef(0);
    const [selectedBrand, setSelectedBrand] = useState(null);

    useEffect(() => {
        const updateLogoCount = () => {
            const width = window.innerWidth;
            if (width < 400) setLogosPerPage(2);
            else if (width < 640) setLogosPerPage(3);
            else if (width < 768) setLogosPerPage(4);
            else setLogosPerPage(5);
        };
        updateLogoCount();
        window.addEventListener('resize', updateLogoCount);
        return () => window.removeEventListener('resize', updateLogoCount);
    }, []);

    // 이미지 미리 로드 (webp, jpg 모두)
    useEffect(() => {
<<<<<<< HEAD
        console.log("MainPage 감지: user 상태 변화", user);
    }, [user]);

    const slidSrc = [
        { src: FindCar, href: '/startCBTI' },
        { src: main, href: '/startCBTI'},
        { src: main2, href: '/startCBTI'},
        { src: main3, href: '/startCBTI'},
        { src: main4, href: '/startCBTI'},
    ];

    const handleButtonClick = (i) => setIndex(i);

    const ClickButtonSlideLogo = [
        { alt: "HYUNDAI", src: hyundai, href: '/hyundai' },
        { alt: "KIA", src: kia, href: '/kia' },
        { alt: "CHEVROLET", src: chevrolet, href: '/Chevo' },
        { alt: "RENAULT", src: Reno, href: '/Reno' },
        { alt: "KGM", src: kgm, href: '/kgm' },
        { alt: "GENESIS", src: gen, href: '/Gen' },
        { alt: "BMW", src: BMW, href: '/BMW' },
        { alt: "AUDI", src: Audi, href: '/Audi' },
        { alt: "BENZ", src: Benz, href: '/Benz' },
        { alt: "TESLA", src: Tesla, href: '/Tesla' },
    ];

    const SlideToLogoLeft = () => {
        const prevPage = page - logosPerPage;
        if (prevPage >= 0) {
            directionRef.current = -1;
            setPage(prevPage);
        } else {
            directionRef.current = -1;
            const remainder = ClickButtonSlideLogo.length % logosPerPage;
            const lastFullPageStart = ClickButtonSlideLogo.length - (remainder === 0 ? logosPerPage : remainder);
=======
        slidSrc.forEach(img => {
            [img.src, img.srcWebp].forEach(url => {
                const preload = new window.Image();
                preload.src = url;
            });
        });
    }, []);

    const handleButtonClick = (i) => setIndex(i);

    const SlideToLogoLeft = () => {
        const prevPage = page - logosPerPage;
        directionRef.current = -1;
        if (prevPage >= 0) setPage(prevPage);
        else {
            const remainder = brandLogos.length % logosPerPage;
            const lastFullPageStart = brandLogos.length - (remainder === 0 ? logosPerPage : remainder);
>>>>>>> origin/feature_YUNGI-KIM
            setPage(lastFullPageStart);
        }
    };

    const SlideToLogoRight = () => {
        const nextPage = page + logosPerPage;
<<<<<<< HEAD
        if (nextPage < ClickButtonSlideLogo.length) {
            directionRef.current = 1;
            setPage(nextPage);
        } else {
            directionRef.current = 1;
            setPage(0);
        }
=======
        directionRef.current = 1;
        if (nextPage < brandLogos.length) setPage(nextPage);
        else setPage(0);
>>>>>>> origin/feature_YUNGI-KIM
    };

    const SlideToRight = () => {
        directionRef.current = 1;
        setIndex((prev) => (prev + 1) % slidSrc.length);
    };

    const SlideToLeft = () => {
        directionRef.current = -1;
<<<<<<< HEAD
        setIndex((prevIndex) =>
            prevIndex === 0 ? slidSrc.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex flex-col w-full min-h-screen overflow-hidden">
            <Header key={user ? user.id : "guest"}/>
            <div className="relative w-full h-[calc(100vh-125px-170px)]">
                <div className="absolute left-1/100 top-5/10 transform -translate-x-1/2 flex space-x-2">
                    <svg
                        onClick={SlideToLeft}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        className="w-10 h-10 cursor-pointer hover:scale-110 ease-in-out"
                        style={{flexShrink: 0}}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>
                </div>
                <img
                    src={slidSrc[index].src}
                    onClick={() => navigate(slidSrc[index].href)}
                    className="w-full h-full object-cover cursor-pointer"
                    alt={`Slide ${index + 1}`}
                />
                <div className="absolute bottom-4 left-1/2 transform  -translate-x-1/2 flex space-x-2">
                    {slidSrc.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleButtonClick(i)}
                            className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 hover:bg-gray-400 rounded-full"
                        />
                    ))}
                </div>
                <div className="absolute left-995/1000 transform top-5/10 -translate-x-1/2 flex space-x-2">
                    <svg
                        onClick={SlideToRight}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        className="w-10 h-10 cursor-pointer hover:scale-110 ease-in-out"
                        style={{flexShrink: 0}}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3 4.5 7.5 7.5-7.5 7.5"/>
                    </svg>
                </div>
            </div>

            <div className="w-full h-[125px] flex justify-between items-center px-2 mt-4"
                style={{
                    minWidth: '400px',
                    maxWidth: '100%',
                    gap: '16px',
                }}>
                <svg
                    onClick={SlideToLogoLeft}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="4"
                    stroke="currentColor"
                    className="w-10 h-10 cursor-pointer hover:scale-110 ease-in-out"
                    style={{ flexShrink: 0, position: 'relative', right: '8px'}}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
=======
        setIndex((prev) => (prev === 0 ? slidSrc.length - 1 : prev - 1));
    };

    return (
        <div className="flex flex-col w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#f6fbff] via-[#eaf1ff] to-[#f8fbff]">
            <Header key={user ? user.id : "guest"} />

            {/* 이미지 메인 슬라이드 */}
            <div className="
                w-full relative
                pt-[14rem] xs:pt-[10rem] sm:pt-[14.1rem] md:pt-[14rem] lg:pt-0
                transition-all duration-500
            ">
                <div className="
                    relative w-full
                    aspect-[16/9]
                    max-h-[calc(100vh-18rem)]
                    min-h-[12rem]
                    overflow-hidden
                ">
                    {/* 좌우 화살표 */}
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                        <svg onClick={SlideToLeft} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="4" stroke="currentColor"
                             className="w-10 h-10 cursor-pointer hover:text-yellow-200 hover:scale-110 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                        </svg>
                    </div>

                    {/* 메인 슬라이드 이미지(webp 우선, 접근성 최적화) */}
                    <picture>
                        <source srcSet={slidSrc[index].srcWebp} type="image/webp" />
                        <img
                            src={slidSrc[index].src}
                            onClick={() => slidSrc[index].href && navigate(slidSrc[index].href)}
                            tabIndex={0}
                            role="button"
                            aria-label="슬라이드 이동"
                            onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') slidSrc[index].href && navigate(slidSrc[index].href);
                            }}
                            className="
                                w-full h-full object-cover cursor-pointer transition-transform duration-300
                                min-h-[12rem] max-h-[calc(100vh-18rem)]
                            "
                            alt={`Slide ${index + 1}`}
                            draggable={false}
                            style={{ userSelect: 'none' }}
                        />
                    </picture>

                    {/* 중앙 텍스트 - 첫번째 슬라이드에서만 표시 */}
                    {index === 0 && (
                        <div className="
                            absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                            flex flex-col items-center justify-center w-full px-4
                            pointer-events-none select-none
                        ">
                            <span
                                className="block text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-[0_2px_18px_rgba(0,0,0,1.0)] mb-2 whitespace-pre-line text-center"
                            >
                                차에도 MBTI가?
                            </span>
                            <span
                                className="block text-white text-2xl md:text-3xl lg:text-4xl font-extrabold drop-shadow-[0_2px_18px_rgba(0,0,0,1.0)] tracking-tight text-center"
                            >
                                CBTI 검사하러가기
                            </span>
                        </div>
                    )}

                    {/* 슬라이드 인디케이터 */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slidSrc.map((_, i) => (
                            <button key={i} onClick={() => handleButtonClick(i)}
                                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${i === index ? 'bg-gray-500' : 'bg-gray-800'} hover:bg-gray-400`} />
                        ))}
                    </div>
                    {/* 우측 화살표 */}
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                        <svg onClick={SlideToRight} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="4" stroke="currentColor"
                             className="w-10 h-10 cursor-pointer hover:text-yellow-200 hover:scale-110 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* 브랜드 카드 슬라이드 (카드 섹션) */}
            <div className="
                w-full flex items-center justify-between
                px-2 sm:px-6 md:px-12
                pt-4 pb-8
                relative overflow-hidden
                mt-12 min-h-[8rem]
            ">
                {/* 왼쪽 화살표 */}
                <button
                    onClick={SlideToLogoLeft}
                    className="p-2 bg-white/60 backdrop-blur rounded-full shadow-md hover:bg-blue-50 transition z-20"
                    aria-label="이전"
                >
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                              d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
>>>>>>> origin/feature_YUNGI-KIM

                {/* 슬라이드 카드들 */}
                <AnimatePresence mode="wait" custom={directionRef.current}>
                    <motion.div
                        key={page}
                        custom={directionRef.current}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
<<<<<<< HEAD
                        className="flex justify-between items-center flex-grow gap-0 h-full px-16 overflow-hidden"
                        style={{
                            minWidth: 'calc(100% - 88px)',
                            boxSizing: 'border-box',
                        }}
=======
                        className="flex flex-1 items-stretch justify-between gap-2 sm:gap-5 md:gap-8"
                        style={{ overflow: 'hidden' }}
>>>>>>> origin/feature_YUNGI-KIM
                    >
                        {brandLogos.slice(page, page + logosPerPage).map((logo, i) => (
                            <button
                                type="button"
                                key={i}
<<<<<<< HEAD
                                alt={logo.alt}
                                src={logo.src}
                                onClick={() => navigate(logo.href)}
                                title={logo.alt}
                                className="h-full w-auto object-contain cursor-pointer transform transition-transform duration-300 hover:scale-105 ease-in-out"
                                style={{maxWidth: `${100 / logosPerPage - 2}%`}}
                            />
=======
                                className={`
                                    group relative flex flex-col items-center justify-center
                                    bg-gradient-to-br from-white/60 via-white/40 to-blue-100/30
                                    backdrop-blur-xl border-2
                                    ${selectedBrand === logo.alt ? 'border-blue-400 ring-2 ring-blue-200 scale-105' : 'border-blue-100/50'}
                                    shadow-[0_8px_32px_0_rgba(120,150,255,0.10)]
                                    rounded-2xl transition-all duration-500 px-2 sm:px-4 py-4
                                    hover:scale-105 hover:shadow-2xl hover:border-blue-300 hover:ring-2 hover:ring-blue-200
                                    flex-1 min-w-0
                                    focus:outline-none focus:ring-4 focus:ring-blue-100
                                `}
                                style={{
                                    minWidth: 0,
                                    flex: 1,
                                    maxWidth: `${100 / logosPerPage}%`,
                                }}
                                onClick={() => {
                                    navigate(logo.href);
                                    setSelectedBrand(logo.alt);
                                }}
                                aria-label={logo.alt + " 브랜드 바로가기"}
                            >
                                <div className="relative flex items-center justify-center w-full h-16 sm:h-20 md:h-24">
                                    <img
                                        alt={logo.alt}
                                        src={logo.src}
                                        title={logo.alt}
                                        className={`
                                            object-contain transition-transform duration-500 group-hover:scale-110
                                            drop-shadow-[0_4px_24px_rgba(77,110,255,0.13)]
                                            ${logo.alt === 'RENAULT' ? 'h-[42px] max-h-[42px]' : 'h-[54px] max-h-[54px]'}
                                        `}
                                        style={{ width: '62%', minWidth: 40, maxWidth: 100, margin: '0 auto' }}
                                    />
                                    <div
                                        className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[60%] h-2  rounded-full blur-md opacity-60 group-hover:opacity-80 transition-all duration-500"
                                        style={{
                                            background: logo.alt === "KIA" ? "#444" :
                                                logo.alt === "HYUNDAI" ? "#1c2a47" :
                                                    logo.alt === "CHEVROLET" ? "#cfbb6b" :
                                                        logo.alt === "KGM" ? "#252a3a" :
                                                            logo.alt === "RENAULT" ? "#f5c100" :
                                                                logo.alt === "BMW" ? "#8cc4ec" :
                                                                    logo.alt === "AUDI" ? "#bbb" :
                                                                        logo.alt === "BENZ" ? "#3d4957" :
                                                                            logo.alt === "TESLA" ? "#e6222b" :
                                                                                "#90a0b8",
                                        }}
                                    />
                                </div>
                                <span
                                    className="mt-2 text-sm font-bold text-black tracking-wider drop-shadow-sm">{logo.alt}</span>
                            </button>
>>>>>>> origin/feature_YUNGI-KIM
                        ))}
                    </motion.div>
                </AnimatePresence>

<<<<<<< HEAD
                <svg
                    onClick={SlideToLogoRight}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="4"
                    stroke="currentColor"
                    className="w-10 h-10 cursor-pointer hover:scale-110 ease-in-out"
                    style={{flexShrink: 0, position: 'relative', right: '8px'}}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3 4.5 7.5 7.5-7.5 7.5"/>
                </svg>
=======
                {/* 오른쪽 화살표 */}
                <button
                    onClick={SlideToLogoRight}
                    className="p-2 bg-white/60 backdrop-blur rounded-full shadow-md hover:bg-blue-50 transition z-20"
                    aria-label="다음"
                >
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>

                {/* 배경 블러 데코 */}
                <div
                    className="absolute left-[-3%] top-[50%] w-52 h-52 bg-blue-50/40 rounded-full blur-3xl opacity-50 -z-10"></div>
                <div
                    className="absolute right-[-3%] bottom-[5%] w-36 h-36 bg-[#c8dafe]/60 rounded-full blur-2xl opacity-40 -z-10"></div>
>>>>>>> origin/feature_YUNGI-KIM
            </div>

            {/* 🔽 인기 차종 섹션 */}
            <PopularModels />
            <AccessorySection />
        </div>
    );
};

export default MainPage;