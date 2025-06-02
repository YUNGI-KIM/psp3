// functions/AccessorySection.js
import React from "react";
import { useNavigate } from "react-router-dom";


const products = [
    {
        id: 1,
        name: "[H Genuine Acc] 에어컨 필터",
        desc: "차량 내부 유입 공기 정화",
        price: "8,000원",
        image: "ImageSrc/AccForCar/Filter.jpg"
    },
    {
        id: 2,
        name: "[H Genuine Acc] 차량용 와이퍼",
        desc: "시야 확보에 필수",
        price: "7,000원",
        image: "ImageSrc/AccForCar/Wiper.jpg"
    },
    {
        id: 3,
        name: "[불스원] 워셔액",
        desc: "시원한 세정력",
        price: "2만원",
        image: "ImageSrc/AccForCar/Washer.jpg"
    },
    {
        id: 4,
        name: "[유록스] 요소수",
        desc: "디젤차 필수 아이템",
        price: "2만원",
        image: "ImageSrc/AccForCar/Urea.jpg"
    },
];

function AccessorySection() {
    const navigate = useNavigate();

    return (
        <div className="w-full py-10 px-4 max-w-screen-xl mx-auto mt-40">
            <h2 className="text-3xl font-bold text-center mb-2">차량용품 Best</h2>
            <p className="text-center text-gray-500 mb-8">지금 고객님들이 가장 많이 찾는 인기 상품이에요</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        onClick={() => navigate('/AccForCar')}
                        className="cursor-pointer border rounded-lg shadow hover:shadow-lg transition duration-300"
                    >
                        <div className="relative">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                {index + 1}
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-sm">{product.name}</h3>
                            <p className="text-gray-500 text-xs mt-1">{product.desc}</p>
                            <p className="mt-2 font-bold">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccessorySection;
