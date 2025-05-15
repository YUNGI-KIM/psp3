import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../functions/Header";

function Support() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        content: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("https://clos21.kr/api/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    title: `[고객지원] ${form.name} / ${form.phone}`,
                    content: `이메일: ${form.email}\n\n${form.content}`,
                }),
            });

            if (response.ok) {
                alert("문의가 정상적으로 접수되었습니다.");
                navigate("/");
            } else {
                alert("문의 접수에 실패했습니다.");
            }
        } catch (error) {
            console.error("에러 발생:", error);
            alert("서버 오류가 발생했습니다.");
        }
    };

    return (
        <div>
            <div>{Header()}</div>
            <div className="flex justify-center py-12 px-4">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl space-y-6">
                    <h2 className="text-center text-2xl font-bold text-gray-800">고객지원</h2>
                    <p className="text-center text-gray-600">1:1 상담 신청하기</p>

                    <div className="space-y-4">
                        <div>
                            <label className="block mb-1 text-gray-700">이름</label>
                            <input
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="이름"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">이메일</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="E-mail"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">휴대 전화</label>
                            <input
                                name="phone"
                                type="text"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="휴대 전화, - 생략"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">상담 문의 내용 입력</label>
                            <textarea
                                name="content"
                                rows="5"
                                value={form.content}
                                onChange={handleChange}
                                placeholder="문의하기"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                            ></textarea>
                        </div>
                        <div className="text-right pt-2">
                            <button
                                onClick={handleSubmit}
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