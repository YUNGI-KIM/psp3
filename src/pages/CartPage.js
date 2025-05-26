import React, { useEffect, useState } from 'react';
import Header from "../functions/Header";

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>장바구니</h2>
            {cartItems.length === 0 ? (
                <p>장바구니가 비어 있습니다.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ₩{item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartPage;