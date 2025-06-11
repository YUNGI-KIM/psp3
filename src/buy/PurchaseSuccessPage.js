import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../functions/Header";
import StepBar from "./StepBar";

const PurchaseSuccessPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white shadow-lg rounded-2xl px-8 py-6 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">잘못된 접근입니다.</h2>
                    <button
                        onClick={() => navigate("/")}
                        className="mt-2 px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition"
                    >
                        홈으로
                    </button>
                </div>
            </div>
        );
    }

    const { products, total, name, address, paymentMethod } = state;

    return (
        <>
            <Header/>
            <StepBar step={3}/>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-14 px-3">
                <div className="w-full max-w-md bg-white/90 rounded-3xl shadow-2xl px-8 py-10 text-center border border-gray-100">
                    <svg className="mx-auto mb-4" width="60" height="60" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="12" fill="#2563eb" fillOpacity="0.1"/>
                        <path stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                              d="M7 13.5l3 3 7-7"/>
                    </svg>
                    <h2 className="text-2xl font-bold text-blue-800 mb-2">주문이 완료되었습니다!</h2>
                    <div className="text-gray-800 text-base mb-5">고객님의 주문이 정상적으로 접수되었습니다.</div>
                    <div className="bg-blue-50 rounded-xl px-4 py-3 text-left mb-4">
                        <div className="font-semibold text-blue-900 mb-1">주문 내역</div>
                        <ul className="text-sm text-gray-700 mb-2">
                            {products.map((p, i) => (
                                <li key={p.name + i}>
                                    {p.name} <span className="text-gray-400">|</span> <span>{p.price}원</span>
                                </li>
                            ))}
                        </ul>
                        <div className="font-bold text-blue-900">총 결제금액: {total.toLocaleString()}원</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                        <div><span className="font-semibold">수령인:</span> {name}</div>
                        <div><span className="font-semibold">배송지:</span> {address}</div>
                        <div><span className="font-semibold">결제수단:</span> {paymentMethod}</div>
                    </div>
                    <button
                        className="w-full mt-6 py-3 bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-900 transition"
                        onClick={() => navigate("/")}
                    >홈으로 가기
                    </button>
                </div>
                <div className="mt-10 text-center text-xs text-gray-400">
                    (C) 2025 Vroom. 고객센터 admin@clos21.kr
                </div>
            </div>
        </>
    );
};

export default PurchaseSuccessPage;