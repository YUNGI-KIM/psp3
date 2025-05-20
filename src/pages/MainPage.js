import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FindCar from '../Image/sideImage/FindCar.png';
import main from '../Image/sideImage/main.jpg';
import main2 from '../Image/sideImage/main2.jpg';
import main3 from '../Image/sideImage/main3.jpg';
import main4 from '../Image/sideImage/main4.jpg';
import hyundai from '../Image/companyLogo/hyundai.svg';
import kia from '../Image/companyLogo/kia.svg';
import chevrolet from '../Image/companyLogo/chevrolet.svg';
import gen from '../Image/companyLogo/gen.svg';
import kgm from '../Image/companyLogo/kgm.svg';
import Reno from '../Image/companyLogo/Renault.svg';
import BMW from '../Image/companyLogo/Bmw.svg';
import Audi from '../Image/companyLogo/Audi.svg';
import Benz from '../Image/companyLogo/Benz.svg';
import Tesla from '../Image/companyLogo/Tesla.svg';
import Header from '../functions/Header';
import { useUser } from "../contexts/UserContext";

const variants = {
    enter: (direction) => ({ x: direction === 1 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction === 1 ? -300 : 300, opacity: 0 })
};

const MainPage = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(0);
    const [logosPerPage, setLogosPerPage] = useState(5);
    const directionRef = useRef(0);

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

    useEffect(() => {
        console.log("MainPage 감지: user 상태 변화", user);
    }, [user]);

    const slidSrc = [
        { src: FindCar, href: '/startCBTI' },
        { src: main, href: '/startCBTI' },
        { src: main2, href: '/startCBTI' },
        { src: main3, href: '/startCBTI' },
        { src: main4, href: '/startCBTI' },
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
        directionRef.current = -1;
        if (prevPage >= 0) {
            setPage(prevPage);
        } else {
            const remainder = ClickButtonSlideLogo.length % logosPerPage;
            const lastFullPageStart = ClickButtonSlideLogo.length - (remainder === 0 ? logosPerPage : remainder);
            setPage(lastFullPageStart);
        }
    };

    const SlideToLogoRight = () => {
        const nextPage = page + logosPerPage;
        directionRef.current = 1;
        if (nextPage < ClickButtonSlideLogo.length) {
            setPage(nextPage);
        } else {
            setPage(0);
        }
    };

    const SlideToRight = () => {
        directionRef.current = 1;
        setIndex((prevIndex) => (prevIndex + 1) % slidSrc.length);
    };

    const SlideToLeft = () => {
        directionRef.current = -1;
        setIndex((prevIndex) => (prevIndex === 0 ? slidSrc.length - 1 : prevIndex - 1));
    };

    return (
        <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
            <Header key={user ? user.id : "guest"} />

            <div className="relative w-full h-[calc(100vh-125px-170px)] overflow-visible">
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                    <svg onClick={SlideToLeft} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>

                <img src={slidSrc[index].src} onClick={() => navigate(slidSrc[index].href)} className="w-full h-full object-cover cursor-pointer" alt={`Slide ${index + 1}`} />

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slidSrc.map((_, i) => (
                        <button key={i} onClick={() => handleButtonClick(i)} className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 hover:bg-gray-400 rounded-full" />
                    ))}
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                    <svg onClick={SlideToRight} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>

            <div className="w-full h-[125px] flex justify-between items-center px-4 mt-4 overflow-visible">
                <svg onClick={SlideToLogoLeft} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

                <AnimatePresence mode="wait" custom={directionRef.current}>
                    <motion.div
                        key={page}
                        custom={directionRef.current}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="flex justify-between items-center flex-grow gap-0 h-full px-4 overflow-hidden"
                        style={{ minWidth: 'calc(100% - 88px)' }}
                    >
                        {ClickButtonSlideLogo.slice(page, page + logosPerPage).map((logo, i) => (
                            <img
                                key={i}
                                alt={logo.alt}
                                src={logo.src}
                                onClick={() => navigate(logo.href)}
                                title={logo.alt}
                                className="h-full w-auto object-contain cursor-pointer transform transition-transform duration-300 hover:scale-105"
                                style={{ maxWidth: `${100 / logosPerPage - 2}%` }}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                <svg onClick={SlideToLogoRight} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    );
};

export default MainPage;
