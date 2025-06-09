import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "../functions/Header";

const PurchasePage = () => {
    const location = useLocation();
    let products = location.state?.product || [];
    if (!Array.isArray(products)) products = [products];
    const navigate = useNavigate();

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

    if (!products.length) {
        return (
            <div className="p-10 text-center bg-gray-50 min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">상품 정보를 불러올 수 없습니다.</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-2 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                    돌아가기
                </button>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen py-10 bg-gradient-to-br from-gray-100 via-white to-gray-50">
                <div className="max-w-3xl mx-auto shadow-2xl rounded-3xl bg-white/90 px-6 py-10 flex flex-col lg:flex-row gap-12 border border-gray-100">
                    {/* 상품 리스트 */}
                    <div className="w-full lg:w-2/5 flex flex-col items-center gap-6">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">주문상품</h2>
                        <div className="w-full flex flex-col gap-5">
                            {products.map((item, idx) => (
                                <div key={item.name + idx} className="flex items-center gap-4 px-4 py-3 bg-gray-50/80 rounded-2xl border border-gray-200 shadow-sm">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-xl border border-gray-100 bg-white"
                                    />
                                    <div className="flex flex-col flex-1 min-w-0">
                                        <span className="font-semibold text-lg text-gray-800 truncate">{item.name}</span>
                                        <span className="text-gray-500 text-sm mt-1">수량: 1개</span>
                                        <span className="text-blue-600 font-bold text-lg mt-1">{item.price}원</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 결제/배송 폼 */}
                    <div className="flex-1 flex flex-col justify-center gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">배송지 정보</h3>
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="이름"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900 bg-white shadow"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="연락처"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900 bg-white shadow"
                                />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="주소"
                                    value={form.address}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900 bg-white shadow"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">결제수단</h3>
                            <select
                                name="paymentMethod"
                                value={form.paymentMethod}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-blue-300 shadow"
                            >
                                <option value="카드결제">카드결제</option>
                                <option value="카카오페이">카카오페이</option>
                                <option value="네이버페이">네이버페이</option>
                            </select>
                        </div>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full py-4 rounded-2xl bg-black text-white text-lg font-bold shadow-lg hover:bg-gray-800 transition"
                        >
                            결제하기
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PurchasePage;