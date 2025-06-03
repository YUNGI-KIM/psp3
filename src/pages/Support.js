import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../functions/Header";
import {
    UserRound,
    Mail,
    Phone,
    Type,
    MessageSquareText,
    LoaderCircle,
} from "lucide-react";

function Support() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        title: "",
        content: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://clos21.kr/api/articles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    title: `[고객지원] ${form.title} / ${form.name} / ${form.phone}`,
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
            console.error("에러:", error);
            alert("서버 오류가 발생했습니다.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
            <Header />
            <div className="max-w-2xl mx-auto px-6 py-2">
                <div className="bg-white shadow-2xl rounded-3xl p-10 space-y-4 border border-gray-200">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">고객지원</h2>
                        <p className="text-gray-500">1:1 상담 신청서를 작성해주세요</p>
                    </div>

                    {[{
                        label: "이름",
                        name: "name",
                        type: "text",
                        icon: <UserRound className="w-5 h-5 text-gray-400" />,
                        placeholder: "이름 입력",
                    }, {
                        label: "이메일",
                        name: "email",
                        type: "email",
                        icon: <Mail className="w-5 h-5 text-gray-400" />,
                        placeholder: "예: example@email.com",
                    }, {
                        label: "휴대 전화",
                        name: "phone",
                        type: "text",
                        icon: <Phone className="w-5 h-5 text-gray-400" />,
                        placeholder: "01012345678",
                    }, {
                        label: "제목",
                        name: "title",
                        type: "text",
                        icon: <Type className="w-5 h-5 text-gray-400" />,
                        placeholder: "문의 제목",
                    }].map(({ label, name, type, icon, placeholder }) => (
                        <div key={name}>
                            <label className="block mb-2 text-gray-700 font-semibold">{label}</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>
                                <input
                                    name={name}
                                    type={type}
                                    value={form[name]}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-black focus:outline-none transition"
                                />
                            </div>
                        </div>
                    ))}

                    <div>
                        <label className="block mb-2 text-gray-700 font-semibold">상담 내용</label>
                        <div className="relative">
              <span className="absolute left-3 top-4">
                <MessageSquareText className="w-5 h-5 text-gray-400" />
              </span>
                            <textarea
                                name="content"
                                rows="5"
                                value={form.content}
                                onChange={handleChange}
                                placeholder="문의하실 내용을 자세히 적어주세요."
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-black focus:outline-none transition resize-none"
                            ></textarea>
                        </div>
                    </div>

                    <div className="pt-4 text-right">
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl transition disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <>
                                    <LoaderCircle className="w-4 h-4 animate-spin" /> 전송 중...
                                </>
                            ) : (
                                <>상담 신청하기</>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;