import React, { useEffect, useState } from 'react';
import Header from "../functions/Header";
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

    function handleBuy(item) {
        alert(`${item.name} 구매페이지로 이동!`);
        // 구매페이지로 이동 코드 추가
    }


    return (
        <div className="min-h-screen">
            <Header />
            <div className="max-w-6xl mx-auto py-10 px-4">
                <h2 className="text-3xl font-extrabold mb-10 text-center text-white">장바구니</h2>
                {cartItems.length === 0 ? (
                    <p className="text-gray-400 text-center text-xl">장바구니가 비어 있습니다.</p>
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {cartItems.map((product, idx) => (
                                <motion.li
                                    key={product.name}
                                    className="flex flex-col rounded-lg border overflow-hidden transition-transform hover:scale-105 bg-white dark:bg-gray-800 shadow relative"
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: 50 }}
                                    transition={{ duration: 0.3 }}
                                    layout
                                >
                                    {/* 삭제 버튼 우상단 */}
                                    <svg
                                        onClick={() => remove(product)}
                                        className="cursor-pointer hover:text-red-700 hover:scale-110 absolute top-4 right-4 z-10"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="black"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                                    </svg>
                                    {/* 이미지 줄(하얀 배경) */}
                                    <img src={product.image} alt={product.name} className="w-full h-60 object-cover bg-white" />
                                    {/* 내용 라인(어두운 바탕) */}
                                    <div className="p-6 flex flex-col flex-grow bg-[#1e293b] text-white h-full">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-lg font-bold">{product.name}</h3>
                                        </div>

                                        <button
                                            onClick={() => handleBuy(product)}
                                            className="bg-indigo-600 hover:bg-indigo-700 w-full py-2 rounded-lg font-semibold"
                                        >
                                            {product.buttonText || '구매'}
                                        </button>
                                    </div>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CartPage;