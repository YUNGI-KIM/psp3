import React, { useEffect, useState } from 'react';
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

const MainPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [index, setIndex] = useState(0);

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

  return (
      <div className="flex flex-col w-full">
        <Header key={user ? user.id : "guest"} />

        <div className="relative w-full">
          <img
              src={slidSrc[index].src}
              onClick={() => navigate(slidSrc[index].href)}
              className="w-full h-auto max-h-[400px] object-cover cursor-pointer"
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

        <div className="w-full overflow-x-auto flex px-4 py-6 space-x-4 scrollbar-hide">
          {ClickButtonSlideLogo.map((logo, i) => (
              <img
                  key={i}
                  alt={logo.alt}
                  src={logo.src}
                  onClick={() => navigate(logo.href)}
                  className="min-w-[80px] h-16 md:h-20 object-contain cursor-pointer hover:bg-yellow-100 rounded-lg"
              />
          ))}
        </div>
      </div>
  );
};

export default MainPage;
