
import { useNavigate } from "react-router-dom";
import Header from "../buy/functions/Header";

import Header from "../buy/functions/Header";


function Support() {
    const navigate = useNavigate();


    return (

    <div>
        <div>{Header()}</div>

            {/* 고객지원 본문 */}
            <div className="flex justify-center py-12 px-4">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl space-y-6">
                    <h2 className="text-center text-2xl font-bold text-gray-800">고객지원</h2>
                    <p className="text-center text-gray-600">1:1 상담 신청하기</p>

                    <div className="space-y-4">
                        <div>
                            <label className="block mb-1 text-gray-700">이름</label>
                            <input
                                type="text"
                                placeholder="이름"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">이메일</label>
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">휴대 전화</label>
                            <input
                                type="text"
                                placeholder="휴대 전화, - 생략"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">상담 문의 내용 입력</label>
                            <textarea
                                rows="5"
                                placeholder="문의하기"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                            ></textarea>
                        </div>
                        <div className="text-right pt-2">
                            <button
                                onClick={() => navigate('/')}
                                className="px-6 py-3 bg-black hover:bg-gray-700 text-white rounded-lg text-base"
                            >
                                신청
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;
