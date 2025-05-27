import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 hook
import Header from "../functions/Header";

function CartPage() {
    const [cartItems, setCartItems] = useState([]); // 장바구니 상태 저장
    const navigate = useNavigate(); // 페이지 이동 함수

    // 컴포넌트가 마운트되었을 때 localStorage에서 장바구니 불러오기
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    // 장바구니 비우기 함수
    const handleClearCart = () => {
        localStorage.removeItem('cart'); // localStorage 초기화
        setCartItems([]); // 상태도 초기화
    };

    // 전체 구매 버튼 클릭 시, 구매 페이지로 이동하며 cartItems 전달
    const handleBuyAll = () => {
        if (cartItems.length > 0) {
            navigate('/purchase', { state: { cartItems } });
        }
    };

    return (
        <>
            {/* 상단 헤더 표시 */}
            <div>{Header()}</div>

            <div style={{ padding: '30px', maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ marginBottom: '20px' }}>🛒 장바구니</h2>

                {/* 장바구니가 비었을 때 메시지 출력 */}
                {cartItems.length === 0 ? (
                    <p>장바구니가 비어 있습니다.</p>
                ) : (
                    <>
                        {/* 장바구니 상품 목록을 카드 형태로 표시 */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                            {cartItems.map((item, index) => (
                                <div key={index} style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '10px',
                                    padding: '15px',
                                    width: '250px',
                                    boxShadow: '2px 2px 10px rgba(0,0,0,0.05)',
                                    backgroundColor: '#fff',
                                }}>
                                    {/* 상품 이미지 */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                            borderRadius: '8px'
                                        }}
                                    />
                                    {/* 상품 이름 */}
                                    <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{item.name}</h3>
                                    {/* 상품 가격 */}
                                    <p style={{ color: '#555' }}>₩{item.price}</p>
                                </div>
                            ))}
                        </div>

                        {/* 버튼 영역: 장바구니 비우기 + 전체 구매하기 */}
                        <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                            {/* 장바구니 비우기 버튼 */}
                            <button
                                onClick={handleClearCart}
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#f44336', // 빨간색
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontSize: '16px'
                                }}
                            >
                                장바구니 비우기
                            </button>

                            {/* 전체 구매하기 버튼 */}
                            <button
                                onClick={handleBuyAll}
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#4CAF50', // 초록색
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontSize: '16px'
                                }}
                            >
                                전체 구매하기
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default CartPage;