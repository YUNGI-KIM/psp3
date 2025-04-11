import React from 'react';
import sonata from '../../Image/Estimate/Hyundai/Sonata/sonataInterior.png';
import avante from '../../Image/Estimate/Hyundai/Sonata/sonataInterior.png';

// 차량 데이터
const carsData = [
    {
        id: 1,
        name: "아반떼",
        image: avante,
        features: [
            "LED 헤드라이트",
            "스마트 크루즈 컨트롤",
            "운전자 주의 경고",
            "8인치 인포테인먼트",
            "무선 충전"
        ],
        price: "2,500만"
    },
    {
        id: 2,
        name: "소나타",
        image: sonata,
        features: [
            "파노라마 선루프",
            "Bose 프리미엄 사운드",
            "10.25인치 내비게이션",
            "앰비언트 라이트",
            "스마트 트렁크",
            "헤드업 디스플레이",
            "주차 거리 경고"
        ],
        price: "3,200만"
    }
];

// 단일 카드 컴포넌트
function PricingCard({ car }) {
    return (
        <div className="flex pt-3">
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg icing-box lg:max-w-none lg:flex">

                    {/* 왼쪽 카드 내용 */}
                    <div className="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12">
                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                            {car.name}
                        </h3>

                        <img alt={`${car.name} Interior`} src={car.image} className="w-full rounded-xl object-cover mt-6" />

                        <div className="mt-8">
                            <div className="flex items-center">
                                <div className="flex-1 border-t-2 border-gray-200"></div>
                                <h4 className="flex-shrink-0 px-4 text-sm font-semibold text-indigo-600 uppercase bg-white dark:bg-gray-800">
                                    설명
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200"></div>
                            </div>

                            <ul className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
                                {car.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.285 6.708l-11.02 11.02-5.657-5.657 1.414-1.415 4.243 4.243 9.606-9.606z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-sm text-gray-700 dark:text-gray-200">
                                            {feature}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 오른쪽 가격 카드 */}
                    <div className="px-6 py-8 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                            가격
                        </p>
                        <div className="flex items-center justify-center mt-4 text-5xl font-extrabold text-gray-900 dark:text-white">
                            <span>{car.price}₩</span>
                        </div>
                        <div className="mt-6">
                            <button type="button" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in-out duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                구매
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 메인 컴포넌트
function PricingCardList() {
    return (
        <div className="space-y-10 py-10">
            {carsData.map((car) => (
                <PricingCard key={car.id} car={car} />
            ))}
        </div>
    );
}

export default PricingCardList;