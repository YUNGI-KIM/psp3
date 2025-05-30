import React from 'react';
import { useNavigate } from 'react-router-dom';
import AvanteImg from '../Image/Estimate/Hyundai/Avante/Avante.png';
import GrandeurImg from '../Image/Estimate/Hyundai/Grandeur/Grandeur.png';
import SonataImg from '../Image/Estimate/Hyundai/Sonata/Sonata.png';

const PopularModels = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white py-10 px-4 sm:px-8 lg:px-20 mt-20">
            <h2 className="text-3xl font-bold text-center mb-2">Model</h2>
            <p className="text-center text-gray-600 mb-8">최근 한 달 동안 고객님들이 가장 많이 구매하신 모델입니다.</p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* 1위 */}
                <div className="relative">
                    <span className="absolute top-2 left-2 bg-cyan-600 text-white text-sm px-2 py-1 font-bold rounded">1위</span>
                    <img
                        src={AvanteImg}
                        alt="Avante"
                        className="w-[350px] h-auto object-cover cursor-pointer rounded-lg shadow-md"
                        onClick={() => navigate('/hyundai')}
                    />
                    <p className="mt-2 text-center font-semibold">1위. 아반떼 Hybrid</p>
                </div>

                {/* 2위 3위 */}
                <div className="flex flex-col gap-4">
                    <div onClick={() => navigate('/hyundai')} className="cursor-pointer">
                        <img src={GrandeurImg} alt="Grandeur" className="w-[300px] rounded-lg shadow-sm" />
                        <p className="mt-2 text-center font-semibold">2위. 그랜저 Hybrid</p>
                    </div>
                    <div onClick={() => navigate('/hyundai')} className="cursor-pointer">
                        <img src={SonataImg} alt="Sonata" className="w-[300px] rounded-lg shadow-sm" />
                        <p className="mt-2 text-center font-semibold">3위. 소나타 Hybrid</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularModels;
