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
        <div className="min-h-screen">
            <Header />
            <div className="max-w-6xl mx-auto py-10 px-4">
                <h2 className="text-3xl font-extrabold mb-10 text-center text-white">장바구니</h2>
                {cartItems.length === 0 ? (
                    <p className="text-gray-400 text-center text-xl">장바구니가 비어 있습니다.</p>
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {cartItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    className="flex bg-gray-800 flex-col items-center rounded-2xl shadow-xl p-8 min-h-[480px] relative"
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: 50 }}
                                    transition={{ duration: 0.3 }}
                                    layout
                                >
                                    {/* 삭제 버튼 */}
                                    <svg
                                        onClick={() => remove(item)}
                                        className="cursor-pointer hover:text-red-700 hover:scale-110 absolute top-5 right-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="black"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                                    </svg>
                                    {/* 이미지 */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-60 h-60 bg-gray-800 object-cover rounded-xl mb-6 shadow"
                                    />
                                    {/* 상품명 */}
                                    <span className="font-bold text-2xl text-center mt-2">{item.name}</span>
                                    {/* 가격 */}
                                    <span className="text-indigo-700 font-extrabold text-2xl text-center mt-4">{item.price}</span>
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