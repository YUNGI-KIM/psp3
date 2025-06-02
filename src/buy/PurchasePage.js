import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
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
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = () => {
        const {name, phone, address} = form;
        if (!name || !phone || !address) {
            alert('배송지 정보를 모두 입력해주세요.');
            return;
        }
        alert(`결제 완료! (${form.paymentMethod})`);
        // 결제 후 처리
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
            <Header/>

            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 min-h-screen pb-20">
                <div
                    className="max-w-lg mx-auto overflow-hidden rounded-2xl shadow-xl lg:max-w-none lg:flex bg-white/90 backdrop-blur-lg mt-16">
                    <div className="px-6 py-8 bg-white/90 rounded-2xl lg:flex-shrink-1 lg:p-12">
                        <h3 className="text-2xl font-extrabold leading-8 text-indigo-900 sm:text-3xl sm:leading-9">
                            구매 페이지
                        </h3>
                        <p className="mt-6 text-base leading-6 text-gray-700">
                            구매해줘서 넘 고맙고~
                        </p>

                        {/* 상품 정보 표시 */}
                        <div className="mt-8 mb-8 flex flex-col items-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-36 h-36 object-cover rounded-lg mb-2 border border-gray-200"
                            />
                            <span className="font-semibold text-lg text-gray-800">{product.name}</span>
                            <span className="text-indigo-600 font-bold">{product.price}</span>
                        </div>
                        <div
                            className="px-6 py-8 text-center bg-indigo-900 rounded-2xl flex flex-col justify-center lg:w-60">
                            <div className="flex items-center mt-8 mb-2">
                                <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-700 uppercase">
                                    배송지 주소
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200"></div>
                            </div>
                            {/* 배송지 정보 입력 폼 */}
                            <div className="mt-6 space-y-4">
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

                            {/* 결제수단 선택 */}
                            <div className="flex items-center mt-10 mb-2">
                                <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-700 uppercase">
                                    결제수단
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200">
                                </div>
                                <div className="mt-2">
                                    <select
                                        name="paymentMethod"
                                        value={form.paymentMethod}
                                        onChange={handleChange}
                                        className="w-full p-2 rounded-md border border-indigo-200 text-base bg-gray-50 text-gray-900"
                                    >
                                        <option value="카드결제">카드결제</option>
                                        <option value="카카오페이">카카오페이</option>
                                        <option value="네이버페이">네이버페이</option>
                                    </select>
                                </div>
                            </div>

                            {/* 결제 버튼 및 가격 */}

                            <div
                                className="flex items-center justify-center mt-4 text-4xl font-extrabold leading-none text-white">
              <span>
                {product.price}
              </span>
                            </div>
                            <div className="mt-6">
                                <div className="rounded-md shadow">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="py-2 px-4 bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                    >
                                        결제하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PurchasePage;