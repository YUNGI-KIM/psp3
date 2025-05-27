import React, { useEffect, useState } from 'react';
import Header from "../functions/Header";
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // 가격 문자열에서 숫자만 추출해 정수로 변환하는 함수
  const parsePrice = (price) => {
    return typeof price === 'string'
      ? parseInt(price.replace(/[^0-9]/g, ''), 10)
      : price;
  };

  // 컴포넌트 마운트 시 localStorage에서 장바구니 불러오고
  // 같은 이름의 상품은 수량 합산하여 상태로 저장
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

  // 장바구니 상태를 localStorage에 저장하는 함수
  const updateCartStorage = (items) => {
    // 각 상품의 수량만큼 배열에 펼쳐서 저장
    const flat = items.flatMap(item => Array(item.quantity).fill({ ...item }));
    localStorage.setItem('cart', JSON.stringify(flat));
  };

  // 수량 증가
  const increaseQuantity = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    setCartItems(updated);
    updateCartStorage(updated);
  };

  // 수량 감소 (1 이상만)
  const decreaseQuantity = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCartItems(updated);
      updateCartStorage(updated);
    }
  };

  // 해당 상품 삭제
  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
    updateCartStorage(updated);
  };

  // 장바구니 전체 비우기
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  // 장바구니 총 금액 계산
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + parsePrice(item.price) * item.quantity;
  }, 0);

  // 전체 구매 버튼 클릭 시 구매 페이지로 이동, 총 금액 전달
  const handleBuyAll = () => {
    if (cartItems.length === 0) return;
    navigate('/purchase', {
      state: { product: { name: '장바구니 상품 전체', price: `${totalPrice}원` } }
    });
  };

  return (
    <>
      {/* 헤더 컴포넌트 */}
      <Header />

      {/* 페이지 전체 컨테이너 */}
      <div style={styles.pageContainer}>
        <h2 style={styles.title}>🛒 장바구니</h2>

        {/* 장바구니 비었을 때 메시지 */}
        {cartItems.length === 0 ? (
          <p style={styles.emptyMessage}>장바구니가 비어 있습니다.</p>
        ) : (
          <>
            {/* 상품 목록 그리드 */}
            <div style={styles.gridContainer}>
              {cartItems.map((item, index) => (
                <div key={index} style={styles.card}>
                  {/* 상품 이미지 영역 */}
                  <div style={styles.imageWrapper}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={styles.image}
                    />
                  </div>

                  {/* 상품 정보 및 버튼 영역 */}
                  <div style={styles.cardContent}>
                    <div style={styles.cardHeader}>
                      <h3 style={styles.productName}>{item.name}</h3>
                      <span style={styles.productPrice}>
                        {parsePrice(item.price).toLocaleString()}원
                      </span>
                    </div>

                    {/* 수량 조절과 삭제 버튼 */}
                    <div style={styles.cardFooter}>
                      <div>
                        <button onClick={() => decreaseQuantity(index)} style={styles.btnQty}>−</button>
                        <span style={styles.quantityText}>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(index)} style={styles.btnQty}>＋</button>
                      </div>
                      <button onClick={() => removeItem(index)} style={styles.btnDelete}>🗑 삭제</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 총 금액 및 하단 버튼 영역 */}
            <div style={styles.footer}>
              <p style={styles.totalPrice}>총 금액: {totalPrice.toLocaleString()}원</p>
              <button onClick={handleBuyAll} style={styles.btnPrimary}>전체 구매</button>
              <button onClick={clearCart} style={styles.btnSecondary}>장바구니 비우기</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

const styles = {
  // 페이지 전체 컨테이너 스타일: 패딩과 배경색 지정, 최소 높이 설정
  pageContainer: {
    padding: '40px 80px',           // 상하 40px, 좌우 80px 패딩
    backgroundColor: '#f9fafb',     // 연한 회색 배경
    minHeight: '100vh',             // 화면 높이만큼 최소 높이 보장
  },

  // 제목 스타일: 크고 굵은 텍스트, 아래쪽 여백
  title: {
    fontSize: '32px',               // 폰트 크기 32px
    fontWeight: 'bold',             // 굵은 글씨체
    marginBottom: '32px',           // 제목과 아래 내용과의 간격
  },

  // 장바구니 비었을 때 메시지 스타일: 약간 큰 글씨
  emptyMessage: {
    fontSize: '18px',
  },

  // 상품 카드 목록을 담는 그리드 컨테이너
  gridContainer: {
    display: 'grid',                        // CSS Grid 레이아웃 사용
    gridTemplateColumns: 'repeat(auto-fill, 300px)', // 300px 너비 카드가 가능한 만큼 자동배치
    justifyContent: 'start',                // 그리드 아이템 왼쪽 정렬
    gap: '20px',                           // 카드 사이 간격 20px
    marginBottom: '32px',                  // 그리드 하단 여백
  },

  // 각각의 상품 카드 스타일
  card: {
    width: '300px',                        // 고정 너비 300px
    borderRadius: '12px',                  // 둥근 모서리
    backgroundColor: '#1e293b',            // 어두운 네이비톤 배경
    color: 'white',                        // 흰색 글씨
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)', // 살짝 그림자 효과
    display: 'flex',                      // Flexbox로 내부 배치
    flexDirection: 'column',               // 세로 방향 정렬
    overflow: 'hidden',                    // 내용이 넘치면 숨김 처리
  },

  // 상품 이미지 감싸는 영역 스타일
  imageWrapper: {
    height: '180px',                      // 고정 높이 180px
    overflow: 'hidden',                  // 이미지가 영역 넘치면 숨김 처리
  },

  // 상품 이미지 스타일
  image: {
    width: '100%',                       // 부모 너비 100%
    height: '100%',                      // 부모 높이 100%
    objectFit: 'cover',                  // 이미지 비율 유지하며 꽉 채움
  },

  // 카드 내 텍스트 및 버튼 영역 패딩
  cardContent: {
    padding: '16px',                     // 안쪽 여백 16px
  },

  // 카드 헤더: 상품명과 가격을 한 줄에 배치
  cardHeader: {
    display: 'flex',                    // Flexbox 사용
    justifyContent: 'space-between',    // 좌우 끝에 정렬
    alignItems: 'center',                // 세로 중앙 정렬
    flexWrap: 'wrap',                    // 화면 작아질 때 줄 바꿈 가능
  },

  // 상품명 텍스트 스타일
  productName: {
    fontSize: '16px',
    margin: 0,                          // 기본 마진 제거
  },

  // 가격 텍스트 스타일
  productPrice: {
    fontSize: '14px',
  },

  // 카드 하단 영역: 수량 조절 버튼과 삭제 버튼 배치
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',   // 양 끝에 배치
    alignItems: 'center',               // 세로 중앙 정렬
    marginTop: '16px',                  // 위쪽 여백
    flexWrap: 'wrap',                   // 줄 바꿈 가능
  },

  // 수량 텍스트 스타일
  quantityText: {
    margin: '0 12px',                   // 좌우 여백 12px
    fontWeight: 'bold',                 // 굵은 글씨
  },

  // 수량 조절 버튼 스타일
  btnQty: {
    backgroundColor: '#334155',         // 짙은 파란 회색 배경
    color: 'white',                    // 흰색 텍스트
    border: 'none',                    // 테두리 없음
    borderRadius: '6px',               // 둥근 모서리
    padding: '6px 12px',               // 안쪽 여백
    cursor: 'pointer',                 // 마우스 포인터 커서 변경
    fontWeight: 'bold',                // 굵은 글씨
    fontSize: '16px',
  },

  // 삭제 버튼 스타일 (빨간색)
  btnDelete: {
    backgroundColor: '#dc2626',        // 눈에 띄는 빨간색 배경
    color: 'white',                    // 흰색 텍스트
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },

  // 하단 총액 및 버튼 컨테이너 스타일
  footer: {
    marginTop: '40px',
    textAlign: 'right',               // 오른쪽 정렬
  },

  // 총 금액 텍스트 스타일
  totalPrice: {
    fontSize: '20px',
    fontWeight: 'bold',
  },

  // 주요 액션 버튼 스타일 (전체 구매)
  btnPrimary: {
    backgroundColor: '#4F46E5',       // 보라색 배경
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    marginLeft: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },

  // 부가 액션 버튼 스타일 (장바구니 비우기)
  btnSecondary: {
    backgroundColor: '#cbd5e1',       // 연한 회색 배경
    color: '#1e293b',                 // 진한 글씨색
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    marginLeft: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};


export default CartPage;
