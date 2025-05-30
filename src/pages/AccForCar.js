import React, { useEffect, useState } from "react";
import Header from "../functions/Header";
import {useNavigate} from "react-router-dom";


function AccForCar() {
    const navigate = useNavigate(); // 페이지 이동을 위한 React Router 훅

    // "구매" 버튼 클릭 시 구매 페이지로 이동 (product 정보를 전달)
    const handleBuy = (product) => {
        navigate('/purchase', { state: { product } });
    };

    // "장바구니" 버튼 클릭 시 localStorage에 담고 장바구니 페이지로 이동
    const handleAddToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || []; // 기존 장바구니 불러오기
        existingCart.push(product); // 상품 추가
        localStorage.setItem('cart', JSON.stringify(existingCart)); // 저장
        navigate('/cart'); // 장바구니 페이지로 이동
    };
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch("https://clos21.kr/api/accessory-products", {
            method: "GET",
            credentials: "include"
        })
            .then((response) => {
                if (!response.ok) throw new Error("네트워크 응답 오류");
                return response.json();
            })
            .then((data) => {
                setProductData(data);
            })
            .catch((error) => {
                console.error("데이터 불러오기 실패:", error);
            });
    }, []);

    return (
        <>
            {/* 상단 공통 헤더 */}
            <div>{Header()}</div>

            {/* 페이지 컨텐츠 */}
            <div style={{ padding: '40px 80px', backgroundColor: '#fff' }}>
                {/* 제목 */}
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>
                    차량 악세서리 판매
                </h2>

                {/* 상품 카드 리스트 (그리드로 3개씩 정렬) */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '32px',
                    justifyContent: 'center'
                }}>
                    {productData.map(product => (
                        <div
                            key={product.id}
                            style={{
                                borderRadius: '12px',
                                overflow: 'hidden',
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                            // 카드에 호버 효과: 커졌을 때 그림자 강조
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                            }}
                        >
                            {/* 상품 이미지 */}
                            <div style={{ height: '320px', overflow: 'hidden' }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            {/* 상품 설명 및 버튼 영역 (배경 진한 남색) */}
                            <div style={{ padding: '16px', backgroundColor: '#1e293b', color: 'white' }}>
                                {/* 상품명과 카테고리 */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '8px'
                                }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>{product.name}</h3>
                                    <span style={{
                                        fontSize: '12px',
                                        backgroundColor: '#6366F1',
                                        color: 'white',
                                        padding: '4px 10px',
                                        borderRadius: '12px'
                                    }}>
                                        {product.category}
                                    </span>
                                </div>

                                {/* 기능 리스트 */}
                                <ul style={{
                                    paddingLeft: '16px',
                                    fontSize: '14px',
                                    marginBottom: '12px',
                                    color: 'white'
                                }}>
                                    {product.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>

                                {/* 가격 + 장바구니 버튼 */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '12px'
                                }}>
                                    <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>{product.price}원</span>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        style={{
                                            backgroundColor: '#E0E7FF',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px'
                                        }}
                                    >
                                        {/* 장바구니 아이콘 */}
                                        <img
                                            src="image/cart.png"
                                            alt="장바구니"
                                            style={{ width: '20px', height: '20px' }}
                                        />
                                    </button>
                                </div>

                                {/* 구매 버튼 */}
                                <button
                                    onClick={() => handleBuy(product)}
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#4F46E5',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    구매
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AccForCar;