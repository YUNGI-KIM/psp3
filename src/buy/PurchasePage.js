import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "../functions/Header";

const PurchasePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: '카드결제',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, phone, address } = form;
    if (!name || !phone || !address) {
      alert('배송지 정보를 모두 입력해주세요.');
      return;
    }
    alert(`결제 완료! (${form.paymentMethod})`);
  };

  if (!product) {
    return (
        <div className="p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">상품 정보를 불러올 수 없습니다.</h2>
          <button
              onClick={() => navigate(-1)}
              className="mt-2 px-5 py-2 bg-blue-500 text-white rounded-lg"
          >
            돌아가기
          </button>
        </div>
    );
  }

  return (
      <>
        {/* 헤더 */}
        <div>{Header()}</div>

        {/* 전체 레이아웃 */}
        <div className="min-h-screen bg-white py-10 px-4 sm:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">구매 페이지</h2>

          {/* 상품 + 폼 */}
          <div className="flex flex-col md:flex-row gap-10 bg-slate-800 rounded-2xl p-8 text-white shadow-lg max-w-5xl mx-auto">
            {/* 상품 이미지 */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-[400px] h-auto object-contain rounded-xl bg-white p-2"
            />

            {/* 상세 + 폼 */}
            <div className="flex-1">
              {/* 상품명 + 카테고리 */}
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <span className="text-xs bg-indigo-500 text-white px-3 py-1 rounded-full">
                {product.category}
              </span>
              </div>
              {/* 기능 리스트 */}
              <ul className="mt-6 pl-5 list-disc text-base">
                {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
              </ul>
              {/* 가격 */}
              <div className="mt-6 text-lg font-bold">
                총 가격: {product.price}원
              </div>

              {/* 폼 */}
              <div className="bg-white text-black rounded-xl p-6 mt-10 shadow">
                <h4 className="mb-2 font-bold">배송지 정보</h4>
                <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md border border-gray-300 mb-3 text-base"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="연락처"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md border border-gray-300 mb-3 text-base"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="주소"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md border border-gray-300 mb-3 text-base"
                />

                <h4 className="mt-6 mb-2 font-bold">결제 수단</h4>
                <select
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md border border-gray-300 mb-3 text-base"
                >
                  <option value="카드결제">카드결제</option>
                  <option value="카카오페이">카카오페이</option>
                  <option value="네이버페이">네이버페이</option>
                </select>

                <button
                    onClick={handleSubmit}
                    className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-lg text-lg font-bold hover:bg-indigo-700 transition"
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

export default PurchasePage;