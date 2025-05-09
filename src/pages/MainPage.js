import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FindCar from '../Image/sideImage/FindCar.png';
import CBTIGO from '../Image/sideImage/CBTIGO.png';
import test3 from '../Image/sideImage/test3.png';
import hyundai from '../Image/companyLogo/hyundai.png';
import kia from '../Image/companyLogo/kia.svg';
import chevrolet from '../Image/companyLogo/chevrolet.svg';
import gen from '../Image/companyLogo/gen.png';
import kgm from '../Image/companyLogo/kgm.svg';
import Reno from '../Image/companyLogo/Renault.png';
import BMW from '../Image/companyLogo/BMW.SVG';
import Audi from '../Image/companyLogo/Audi.png';
import Benz from '../Image/companyLogo/Benz.png';
import Header from '../buy/functions/Header';
import { useUser } from "../contexts/UserContext";

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

const MainPage = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(0);
    const directionRef = useRef(0);
    const logosPerPage = 5;

    useEffect(() => {
        console.log("MainPage 감지: user 상태 변화", user);
    }, [user]);

    const slidSrc = [
        { src: FindCar, href: '/startCBTI' },
        { src: CBTIGO, href: '/startCBTI' },
        { src: test3, href: '/startCBTI' },
    ];

    const handleButtonClick = (i) => setIndex(i);

    const ClickButtonSlideLogo = [
        { alt: "hyundai", src: hyundai, href: '/hyundai' },
        { alt: "kia", src: kia, href: '/kia' },
        { alt: "chevrolet", src: chevrolet, href: '/Chevo' },
        { alt: "Reno", src: Reno, href: '/Reno' },
        { alt: "kgm", src: kgm, href: '/kgm' },
        { alt: "gen", src: gen, href: '/Gen' },
        { alt: "BMW", src: BMW, href: '/BMW' },
        { alt: "Audi", src: Audi, href: '/Audi' },
        { alt: "Benz", src: Benz, href: '/Benz' },
    ];

    const SlideToLeft = () => {
        if (page > 0) {
            directionRef.current = -1;
            setPage((prev) => prev - 1);
        }
    };

    const SlideToRight = () => {
        if (page + logosPerPage < ClickButtonSlideLogo.length) {
            directionRef.current = 1;
            setPage((prev) => prev + 1);
        }
    };

    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header key={user ? user.id : "guest"} />

            <div className="relative w-full h-[55vh] sm:h-[60vh]">
                <img
                    src={slidSrc[index].src}
                    onClick={() => navigate(slidSrc[index].href)}
                    className="w-full h-full object-cover cursor-pointer"
                    alt={`Slide ${index + 1}`}
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slidSrc.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleButtonClick(i)}
                            className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 hover:bg-gray-400 rounded-full"
                        />
                    ))}
                </div>
            </div>

            <div className="w-full h-[150px] flex justify-between items-center px-2 mt-4">
                <svg onClick={SlideToLeft} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-10 h-10 cursor-pointer hover:bg-yellow-100">
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
                        className="flex justify-between items-center flex-grow gap-4 h-full"
                    >
                        {ClickButtonSlideLogo.slice(page, page + logosPerPage).map((logo, i) => (
                            <img
                                key={i}
                                alt={logo.alt}
                                src={logo.src}
                                onClick={() => navigate(logo.href)}
                                className="w-full max-w-[19%] h-full object-contain cursor-pointer hover:bg-yellow-100 rounded-lg"
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                <svg onClick={SlideToRight} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-10 h-10 cursor-pointer hover:bg-yellow-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    );
};

export default MainPage;