import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Header from "../functions/Header";

const StepBar = () => (
    <div className="w-full flex justify-center items-center py-4 bg-white shadow-xl">
        <div className="flex gap-4 text-base font-bold tracking-wide">
            <span className="text-blue-700">장바구니</span>
            <span className="text-gray-400">→</span>
            <span className="text-blue-900 border-b-2 border-blue-700 pb-1">주문/결제</span>
            <span className="text-gray-400">→</span>
            <span className="text-gray-400">완료</span>
        </div>
    </div>
);

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
        agree: false,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = () => {
        const {name, phone, address, agree} = form;
        if (!name || !phone || !address) {
            alert('배송지 정보를 모두 입력해주세요.');
            return;
        }
        if (!agree) {
            alert('구매 약관 동의가 필요합니다.');
            return;
        }
        alert(`결제 완료! (${form.paymentMethod})`);
    };

    function parsePrice(str) {
        if (typeof str === "number") return str;
        if (!str) return 0;
        // 콤마, 공백, '원' 제거
        str = str.toString().replace(/[\s,원]/g, '');
        if (str.endsWith('만')) {
            return parseFloat(str.replace('만', '')) * 10000;
        }
        return parseFloat(str) || 0;
    }

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
    const total = products.reduce((sum, p) => sum + parsePrice(p.price), 0);

    return (
        <>
            <Header/>
            <StepBar/>
            <div
                className="relative min-h-screen py-10 bg-gradient-to-br from-gray-100 via-white to-gray-50 flex flex-col">
                <div
                    className="absolute -z-10 bottom-[-50px] left-[-70px] w-52 h-52 bg-indigo-100 rounded-full blur-2xl opacity-25"/>
                {/* 주문 요약/안내 */}
                <div
                    className="w-full max-w-screen-md md:max-w-[900px] mx-auto mb-10 flex items-center justify-between px-4 md:px-10">
                    <span
                        className="bg-blue-50 text-blue-900 text-base md:text-lg rounded-full px-5 py-2 font-semibold shadow">
                        🛒 총 {products.length}개 상품 · 합계 {total.toLocaleString()}원
                    </span>
                    <span className="text-xs md:text-sm text-gray-400 pl-4">무료배송 · 오늘 주문시 내일 도착</span>
                </div>

                <div
                    className="
                    w-full max-w-screen-md md:max-w-[900px] mx-auto
                    shadow-2xl rounded-3xl bg-white/90
                    px-1 sm:px-2 md:px-6 py-5 sm:py-7 md:py-10
                    flex flex-col md:flex-row gap-7 md:gap-10 lg:gap-14 border border-gray-100 min-h-[540px] transition-all
                ">
                    {/* 상품 리스트 */}
                    <div className="basis-0 flex-1 min-w-0 flex flex-col">
                        <div className="w-full flex justify-between items-center mb-6 px-1">
                            <span className="text-[18px] font-bold text-blue-900">🛒 주문상품</span>
                            <span
                                className="bg-gradient-to-r from-indigo-200 via-blue-100 to-indigo-50 text-blue-900 text-sm font-semibold rounded-full px-4 py-1 shadow">총 {products.length}개 · {total.toLocaleString()}원</span>
                        </div>
                        <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
                            <div className="w-full flex flex-col gap-3 sm:gap-5">
                                {products.map((item, idx) => (
                                    <div key={item.name + idx}
                                         className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3 bg-gray-50/80 rounded-2xl border border-gray-200 shadow-sm w-full">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-gray-100 bg-white"
                                        />
                                        <div className="flex flex-col flex-1 min-w-0">
                                            <span
                                                className="font-semibold text-base sm:text-lg text-gray-800 truncate">{item.name}</span>
                                            <span className="text-gray-500 text-xs sm:text-sm mt-1">수량: 1개</span>
                                            <span
                                                className="text-blue-600 font-bold text-base sm:text-lg mt-1">{item.price}원</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full text-right pr-2 sm:pr-4 mt-2 sm:mt-3">
                                <span
                                    className="text-lg sm:text-xl font-extrabold text-blue-900">합계 {total.toLocaleString()}원</span>
                            </div>
                        </div>
                    </div>

                    {/* 결제/배송 폼 */}
                    <div className="basis-0 flex-1 min-w-0 flex flex-col justify-center gap-6 sm:gap-8">
                        <div
                            className="flex flex-col gap-6 sm:gap-8 px-2 sm:px-8 py-6 sm:py-8 bg-white/95 rounded-2xl shadow-xl border border-gray-100">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">배송지 정보</h3>
                                <div className="flex flex-col gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="이름"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full p-3 sm:p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900 bg-white shadow-md text-base sm:text-lg"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="연락처"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="w-full p-3 sm:p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900 bg-white shadow-md text-base sm:text-lg"
                                    />
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="주소"
                                        value={form.address}
                                        onChange={handleChange}
                                        className="w-full p-3 sm:p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900 bg-white shadow-md text-base sm:text-lg"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">결제수단</h3>
                                <select
                                    name="paymentMethod"
                                    value={form.paymentMethod}
                                    onChange={handleChange}
                                    className="w-full p-3 sm:p-4 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-blue-300 shadow-md text-base sm:text-lg"
                                >
                                    <option value="카드결제">카드결제</option>
                                    <option value="카카오페이">카카오페이</option>
                                    <option value="네이버페이">네이버페이</option>
                                </select>
                            </div>
                            <div className="flex items-center mb-4 mt-2">
                                <input type="checkbox" id="agree" checked={form.agree}
                                       onChange={e => setForm(f => ({...f, agree: e.target.checked}))}
                                       className="w-5 h-5 rounded border border-gray-300 mr-2"/>
                                <label htmlFor="agree" className="text-xs text-gray-600">구매조건 및 개인정보처리방침에 동의합니다</label>
                            </div>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full py-3 sm:py-4 rounded-2xl bg-black text-white text-lg sm:text-xl font-bold shadow-lg hover:bg-gray-800 transition"
                            >
                                결제하기
                            </button>
                        </div>
                    </div>
                </div>
                {/* 하단 안내 */}
                <div className="mt-16 text-center text-xs text-gray-400">
                    (C) 2025 Vroom. 고객센터 admin@clos21.kr
                </div>
            </div>
        </>
    );
};

export default PurchasePage;