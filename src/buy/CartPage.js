import React, { useEffect, useState } from 'react';
import Header from "../functions/Header";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";




function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    function remove(item) {
        const newCart = cartItems.filter(i => i.name !== item.name);
        setCartItems(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }
    const navigate = useNavigate();
    const handleToBuy = () => {
        navigate('/purchase', { state: { cart: cartItems } });

    };

    return (

        <div className="min-h-screen">
            <Header />
            <div className="max-w-6xl mx-auto py-10 px-4">
                <h2 className="text-2xl font-extrabold mb-8 text-center text-black">장바구니</h2>
                {cartItems.length === 0 ? (
                    <p className="text-gray-400 text-center text-base">장바구니가 비어 있습니다.</p>
                ) : (
                    <>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <AnimatePresence>
                                {cartItems.map((product) => (
                                    <motion.li
                                        key={product.name}
                                        className="flex flex-col border-black rounded-lg border overflow-hidden transition-transform hover:scale-105 bg-white shadow relative"
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, x: 50 }}
                                        transition={{ duration: 0.3 }}
                                        layout
                                    >
                                        {/* 삭제 버튼 우상단 */}
                                        <svg
                                            onClick={() => remove(product)}
                                            className="cursor-pointer hover:text-red-700 hover:scale-110 absolute top-3 right-3 z-10"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="black"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 384 512"
                                        >
                                            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                                        </svg>
                                        {/* 이미지 줄(하얀 배경) */}
                                        <div className="w-full h-40 bg-white flex items-center justify-center">
                                            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                                        </div>
                                        {/* 내용 라인(어두운 바탕) */}
                                        <div className="p-4 flex flex-col flex-1 bg-[#1e293b] text-white min-h-[90px]">
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="text-base font-bold">{product.name}</h3>
                                                <h3 className="text-base font-bold">{product.price}</h3>
                                            </div>
                                        </div>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                        <button onClick={()=>{handleToBuy()}}
                            className="bg-indigo-600 hover:bg-indigo-700 w-full py-2 rounded-lg font-semibold text-white text-base shadow">
                            전체 상품 구매하기
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default CartPage;