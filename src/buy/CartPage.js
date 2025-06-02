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

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-xl mx-auto py-10 px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">장바구니</h2>
                {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center">장바구니가 비어 있습니다.</p>
                ) : (
                    <ul className="space-y-4">
                        <AnimatePresence>
                            {cartItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    className="flex flex-col items-center bg-white rounded-lg shadow p-4 relative"
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: 50 }}
                                    transition={{ duration: 0.3 }}
                                    layout
                                >
                                    {/* 삭제 버튼 우상단 배치 */}
                                    <svg
                                        onClick={() => remove(item)}
                                        className="cursor-pointer hover:text-red-700 hover:scale-110 absolute top-3 right-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="black"
                                        width="18"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                                    </svg>

                                    {/* 이미지 */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-124 h-60 object-cover rounded-lg mb-4"
                                    />

                                    {/* 상품명 */}
                                    <span className="font-medium text-lg text-center mt-2">{item.name}</span>
                                    {/* 가격 */}
                                    <span className="text-indigo-600 font-bold text-center mt-1">{item.price}</span>
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