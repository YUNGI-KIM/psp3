import React, { useEffect, useState } from 'react';
import Header from "../functions/Header";

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-xl mx-auto py-10 px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">장바구니</h2>
                {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center">장바구니가 비어 있습니다.</p>
                ) : (
                    <ul className="space-y-4">
                        {cartItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-white rounded-lg shadow p-4"
                            >
                                <span className="font-medium">{item.name}</span>
                                <span className="text-indigo-600 font-bold">₩{item.price}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CartPage;