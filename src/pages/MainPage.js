import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Header from '../functions/Header';
import {useUser} from "../contexts/UserContext";

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


const slidSrc = [{
    srcWebp: "/ImageSrc/sideImage/CBTI.webp", src: "/ImageSrc/sideImage/CBTI.jpg", href: '/startCBTI',
}, {
    srcWebp: "/ImageSrc/sideImage/main.webp", src: "/ImageSrc/sideImage/main.jpg", href: '/',
}, {
    srcWebp: "/ImageSrc/sideImage/main2.webp", src: "/ImageSrc/sideImage/main2.jpg", href: '/',
}, {
    srcWebp: "/ImageSrc/sideImage/main3.webp", src: "/ImageSrc/sideImage/main3.jpg", href: '/',
}];

const brandLogos = [ {alt: "BENZ", src: Benz, href: '/buy/car/Benz'},
    {alt: "TESLA", src: Tesla, href: '/buy/car/Tesla'},
    {alt: "HYUNDAI", src: hyundai, href: '/buy/car/Hyundai'},
    {alt: "KIA", src: kia, href: '/buy/car/Kia'},
    {alt: "CHEVROLET", src: chevrolet, href: '/buy/car/Chevrolet'},
    {alt: "RENAULT", src: Reno, href: '/buy/car/Renault'},
    {alt: "KGM", src: kgm, href: '/buy/car/KGM'},
    {alt: "GENESIS", src: gen, href: '/buy/car/Genesis'},
    {alt: "BMW", src: BMW, href: '/buy/car/BMW'},
    {alt: "AUDI", src: Audi, href: '/buy/car/Audi'},
];

const MainPage = () => {
    const navigate = useNavigate();
    const {user} = useUser();
    const [index, setIndex] = useState(0);
    const [logosPerPage, setLogosPerPage] = useState(5);
    const directionRef = useRef(0);
    useEffect(() => {
        const updateLogoCount = () => {
            const width = window.innerWidth;
            if (width < 400) setLogosPerPage(2); else if (width < 640) setLogosPerPage(3); else if (width < 768) setLogosPerPage(4); else setLogosPerPage(5);
        };
        updateLogoCount();
        window.addEventListener('resize', updateLogoCount);
        return () => window.removeEventListener('resize', updateLogoCount);
    }, []);

    // 이미지 미리 로드 (webp, jpg 모두)
    useEffect(() => {
        slidSrc.forEach(img => {
            [img.src, img.srcWebp].forEach(url => {
                const preload = new window.Image();
                preload.src = url;
            });
        });
    }, []);

    const handleButtonClick = (i) => setIndex(i);


    const SlideToRight = () => {
        directionRef.current = 1;
        setIndex((prev) => (prev + 1) % slidSrc.length);
    };

    const SlideToLeft = () => {
        directionRef.current = -1;
        setIndex((prev) => (prev === 0 ? slidSrc.length - 1 : prev - 1));
    };

    const [current, setCurrent] = useState(2);

    // 5개 카드 보여주기
    const getCards = () => {
        const total = brandLogos.length;
        const idxs = [];
        for (let i = -2; i <= 2; i++) {
            idxs.push((current + i + total) % total);
        }
        return idxs;
    };

    return (<div
        className="flex flex-col w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-100/80 via-white/60 to-blue-200/60">
        <Header key={user ? user.id : "guest"}/>

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
                    <source srcSet={slidSrc[index].srcWebp} type="image/webp"/>
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
                        style={{userSelect: 'none'}}
                    />
                </picture>

                {/* 중앙 텍스트 - 첫번째 슬라이드에서만 표시 */}
                {index === 0 && (<div className="
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
                </div>)}

                {/* 슬라이드 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slidSrc.map((_, i) => (<button key={i} onClick={() => handleButtonClick(i)}
                                                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${i === index ? 'bg-gray-500' : 'bg-gray-800'} hover:bg-gray-400`}/>))}
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
            w-full h-flex items-center justify-between
            px-2 sm:px-6 md:px-12
            pt-6 pb-5
            relative overflow-hidden
            min-h-[8rem]
            backdrop-blur-2xl
        ">

            <section className="w-full flex flex-col items-center py-4 md:py-6 bg-transparent relative select-none">
                <div
                    className="relative z-10 flex flex-row items-center justify-center w-full max-w-[1600px] mx-auto gap-4 md:gap-16">
                    {/* 카드 5개 */}
                    <div className="flex items-center gap-2 md:gap-12 w-full justify-center">
                        {getCards().map((idx, i) => {
                            // 중앙카드만 클릭시 이동, 나머지는 이동만
                            const isCenter = i === 2;
                            return (
                                <button
                                    key={brandLogos[idx].alt}
                                    onClick={() => isCenter ? navigate(brandLogos[idx].href) : setCurrent(idx)}
                                    className={`
                                      flex flex-col items-center justify-center mx-1 py-[5rem]
                                      text-white backdrop-blur-xl
                                      ${isCenter ? 'relative after:content-[\'\'] after:absolute after:inset-0 after:rounded-3xl after:pointer-events-none after:shadow-[0_0_128px_64px_rgba(255,255,255,0.92)]' : ''}
                                      ${
                                        isCenter
                                          ? "w-60 md:w-96 h-24 md:h-32 bg-black/7 backdrop-blur-xl shadow-[0_0_32px_12px_rgba(0,0,0,0.10)] border border-white/30 text-white"
                                          : i === 1 || i === 3
                                            ? "w-44 md:w-72 h-20 md:h-28 bg-black/4 backdrop-blur-md shadow-[0_4px_16px_0_rgba(0,0,0,0.10)] border border-white/10 text-white"
                                            : "w-28 md:w-40 h-16 md:h-20 bg-black/1 backdrop-blur-sm shadow-[0_2px_8px_0_rgba(0,0,0,0.10)] border border-white/5 text-white"
                                      }
                                      rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden
                                    `}
                                >
                                    <img
                                        src={brandLogos[idx].src}
                                        alt={brandLogos[idx].alt}
                                        className={`object-contain transition-all duration-300 drop-shadow
                                        ${isCenter ? "w-32 md:w-44 h-10 md:h-14" : "w-20 md:w-28 h-8 md:h-10"}
                                        group-hover:scale-105`}
                                        draggable={false}
                                    />
                                    <span className={`
                                      font-semibold mt-2
                                      ${isCenter ? "text-lg md:text-xl" : "text-xs md:text-base"} text-black opacity-90
                                    `}>
                                      {brandLogos[idx].alt}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
                {/* 인디케이터 */}
                <div className="flex flex-row gap-2 mt-6 justify-center">
                    {brandLogos.map((_, i) => (<span
                        key={i}
                        className={`
                          inline-block rounded-full mx-[1.5px]
                          ${i === current ? 'w-5 h-2 bg-black/70' : 'w-2.5 h-2 bg-gray-400/20'}
                          transition-all
                        `}
                    />))}
                </div>
            </section>
        </div>
    </div>);
};

export default MainPage;