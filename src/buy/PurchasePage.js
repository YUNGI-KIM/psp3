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
            <div className="p-10 text-center bg-gray-900 min-h-screen">
                <h2 className="text-2xl font-bold mb-4 text-white">상품 정보를 불러올 수 없습니다.</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-2 px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700"
                >
                    돌아가기
                </button>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen py-8">
                <h2 className="text-2xl font-extrabold text-center text-black mb-10">구매하기</h2>
                <div className="max-w-3xl mx-auto flex flex-col lg:flex-row bg-transparent px-2">
                    {/* 왼쪽: 상품 정보 */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center justify-center w-full lg:w-2/5 p-8">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-80 h-50 object-cover rounded-xl mb-4 border border-gray-200 bg-white"
                        />
                        <span className="font-bold text-lg text-white mb-2 text-center">{product.name}</span>
                        <span className="text-indigo-700 font-extrabold text-2xl text-center">{product.price}원</span>
                    </div>
                    {/* 오른쪽: 배송지/결제 */}
                    <div className="bg-indigo-900 rounded-2xl flex-1 flex flex-col justify-center p-8 min-w-[280px]">
                        <h4 className="text-lg font-bold text-white mb-5">배송지 정보</h4>
                        <div className="space-y-3 mb-8">
                            <input
                                type="text"
                                name="name"
                                placeholder="이름"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-indigo-200 rounded focus:border-indigo-500 focus:outline-none text-gray-900 bg-gray-50"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="연락처"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full p-2 border border-indigo-200 rounded focus:border-indigo-500 focus:outline-none text-gray-900 bg-gray-50"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="주소"
                                value={form.address}
                                onChange={handleChange}
                                className="w-full p-2 border border-indigo-200 rounded focus:border-indigo-500 focus:outline-none text-gray-900 bg-gray-50"
                            />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">결제수단</h4>
                        <select
                            name="paymentMethod"
                            value={form.paymentMethod}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-indigo-200 text-base bg-gray-50 text-gray-900 mb-8"
                        >
                            <option value="카드결제">카드결제</option>
                            <option value="카카오페이">카카오페이</option>
                            <option value="네이버페이">네이버페이</option>
                        </select>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="py-3 px-6 bg-indigo-500 hover:bg-indigo-700 text-white w-full rounded-lg text-lg font-bold shadow-md transition"
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