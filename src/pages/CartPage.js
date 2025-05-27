import React, { useEffect, useState } from 'react';
import Header from "../functions/Header";
import { useNavigate } from 'react-router-dom';

function CartPage() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    const parsePrice = (price) => {
        return typeof price === 'string'
            ? parseInt(price.replace(/[^0-9]/g, ''), 10)
            : price;
    };

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const grouped = {};

        savedCart.forEach(item => {
            if (grouped[item.name]) {
                grouped[item.name].quantity += 1;
            } else {
                grouped[item.name] = { ...item, quantity: 1 };
            }
        });

        setCartItems(Object.values(grouped));
    }, []);

    const updateCartStorage = (items) => {
        const flat = items.flatMap(item => Array(item.quantity).fill({ ...item }));
        localStorage.setItem('cart', JSON.stringify(flat));
    };

    const increaseQuantity = (index) => {
        const updated = [...cartItems];
        updated[index].quantity += 1;
        setCartItems(updated);
        updateCartStorage(updated);
    };

    const decreaseQuantity = (index) => {
        const updated = [...cartItems];
        if (updated[index].quantity > 1) {
            updated[index].quantity -= 1;
            setCartItems(updated);
            updateCartStorage(updated);
        }
    };

    const removeItem = (index) => {
        const updated = [...cartItems];
        updated.splice(index, 1);
        setCartItems(updated);
        updateCartStorage(updated);
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    const totalPrice = cartItems.reduce((sum, item) => {
        return sum + parsePrice(item.price) * item.quantity;
    }, 0);

    const handleBuyAll = () => {
        if (cartItems.length === 0) return;
        navigate('/purchase', { state: { product: { name: '장바구니 상품 전체', price: `${totalPrice}원` } } });
    };

    return (
        <>
            <div>{Header()}</div>
            <div style={{
                padding: '40px 5%',
                backgroundColor: '#f9fafb',
                minHeight: '100vh'
            }}>
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '24px',
                    textAlign: 'center'
                }}>🛒 장바구니</h2>

               <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, 300px)',
                        justifyContent: 'start',
                        gap: '20px',
                        marginBottom: '32px'
                    }}>
                        {cartItems.map((item, index) => (
                            <div key={index} style={{
                                width: '300px',
                                borderRadius: '12px',
                                backgroundColor: '#1e293b',
                                color: 'white',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}>
                                <div style={{ height: '180px', overflow: 'hidden' }}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div style={{ padding: '16px' }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexWrap: 'wrap'
                                    }}>
                                        <h3 style={{ fontSize: '16px', margin: 0 }}>{item.name}</h3>
                                        <span style={{ fontSize: '14px' }}>{parsePrice(item.price).toLocaleString()}원</span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: '16px',
                                        flexWrap: 'wrap'
                                    }}>
                                        <div style={{ marginBottom: '8px' }}>
                                            <button onClick={() => decreaseQuantity(index)} style={btnQty}>−</button>
                                            <span style={{ margin: '0 12px', fontWeight: 'bold' }}>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(index)} style={btnQty}>＋</button>
                                        </div>
                                        <button onClick={() => removeItem(index)} style={btnDelete}>🗑 삭제</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                        총 금액: {totalPrice.toLocaleString()}원
                    </p>
                    <div style={{ marginTop: '12px' }}>
                        <button onClick={handleBuyAll} style={btnPrimary}>전체 구매</button>
                        <button onClick={clearCart} style={btnSecondary}>장바구니 비우기</button>
                    </div>
                </div>
            </div>
        </>
    );
}

// 버튼 스타일 수정
const btnPrimary = {
    backgroundColor: '#4F46E5',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    marginLeft: '10px',
    cursor: 'pointer',
    fontWeight: 'bold'
};

const btnSecondary = {
    backgroundColor: '#cbd5e1',
    color: '#1e293b',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    marginLeft: '10px',
    cursor: 'pointer',
    fontWeight: 'bold'
};

const btnQty = {
    backgroundColor: '#334155',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px'
};

const btnDelete = {
    backgroundColor: '#DC2626', // Tailwind의 red-600
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold'
};


export default CartPage;
