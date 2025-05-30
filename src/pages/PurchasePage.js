import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "../functions/Header";

// 구매 페이지 컴포넌트
const PurchasePage = () => {
  // 라우터를 통해 전달된 상품 정보 가져오기
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  // 입력 폼 상태 초기화
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: '카드결제',
  });

  // 입력 필드 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // 결제 버튼 클릭 시 실행
  const handleSubmit = () => {
    const { name, phone, address } = form;
    if (!name || !phone || !address) {
      alert('배송지 정보를 모두 입력해주세요.');
      return;
    }
    alert(`결제 완료! (${form.paymentMethod})`);
  };

  // 상품 정보가 없을 경우 예외 처리
  if (!product) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>상품 정보를 불러올 수 없습니다.</h2>
        <button onClick={() => navigate(-1)}>돌아가기</button>
      </div>
    );
  }

  // 구매 페이지 렌더링
  return (
    <>
      {/* 상단 헤더 렌더링 */}
      <div>{Header()}</div>

      {/* 페이지 전체 레이아웃 */}
      <div style={{ padding: '40px 80px', backgroundColor: '#fff', minHeight: '100vh' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          구매 페이지
        </h2>

        {/* 상품 정보 + 결제 입력 폼 */}
        <div style={{
          display: 'flex',
          gap: '40px',
          backgroundColor: '#1e293b',
          borderRadius: '16px',
          padding: '32px',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          {/* 왼쪽: 상품 이미지 */}
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '400px', height: 'auto', objectFit: 'contain' }}
          />

          {/* 오른쪽: 상품 상세정보 + 폼 */}
          <div style={{ flex: 1 }}>
            {/* 상품명 + 카테고리 표시 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>{product.name}</h3>
              <span style={{
                fontSize: '14px',
                backgroundColor: '#6366F1',
                color: 'white',
                padding: '6px 14px',
                borderRadius: '12px'
              }}>
                {product.category}
              </span>
            </div>

            {/* 기능 설명 리스트 */}
            <ul style={{ marginTop: '24px', paddingLeft: '20px', fontSize: '16px' }}>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* 가격 표시 */}
            <div style={{
              marginTop: '24px',
              fontSize: '22px',
              fontWeight: 'bold'
            }}>
              총 가격: {product.price}원
            </div>

            {/* 배송지 정보 및 결제 수단 입력 폼 */}
            <div style={{
              backgroundColor: '#ffffff',
              color: '#000',
              borderRadius: '12px',
              padding: '24px',
              marginTop: '40px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ marginBottom: '10px' }}>배송지 정보</h4>

              {/* 이름 입력 필드 */}
              <input
                type="text"
                name="name"
                placeholder="이름"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
              />
              {/* 연락처 입력 필드 */}
              <input
                type="text"
                name="phone"
                placeholder="연락처"
                value={form.phone}
                onChange={handleChange}
                style={inputStyle}
              />
              {/* 주소 입력 필드 */}
              <input
                type="text"
                name="address"
                placeholder="주소"
                value={form.address}
                onChange={handleChange}
                style={inputStyle}
              />

              {/* 결제 수단 선택 */}
              <h4 style={{ marginTop: '24px', marginBottom: '10px' }}>결제 수단</h4>
              <select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
                style={{ ...inputStyle }}
              >
                <option value="카드결제">카드결제</option>
                <option value="카카오페이">카카오페이</option>
                <option value="네이버페이">네이버페이</option>
              </select>

              {/* 결제 버튼 */}
              <button
                onClick={handleSubmit}
                style={{
                  marginTop: '24px',
                  padding: '14px 24px',
                  backgroundColor: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '18px',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                결제하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 공통 input 스타일 정의
const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginBottom: '12px',
  fontSize: '15px',
  color: 'black'
};

export default PurchasePage;