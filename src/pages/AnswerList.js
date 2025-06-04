import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserRound, CalendarClock, FileText } from "lucide-react";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function AnswerList() {
    const { user } = useUser();
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.id) {
            fetch("https://clos21.kr/api/articles/comments/user/" + user.id, { credentials: "include" })
                .then(res => res.json())
                .then(data => setAnswers(data))
                .catch(err => console.error(err));
        }
    }, [user]);

    const handleQuestionNavigation = () => {
        navigate("/Question"); // Change '/question' to the actual route where users can ask their questions
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">All Answers</h2>
                    <button
                        onClick={handleQuestionNavigation}
                        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        1대1 질문 하러가기
                    </button>
                </div>

                {/* Answers List */}
                <div className="space-y-6">
                    {answers
                        .slice()
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map((answer, index) => (
                            <motion.div
                                key={answer.id}
                                className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-gray-200 cursor-pointer hover:shadow-lg transition"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                onClick={() => navigate(`/AnswerView/${answer.id}`)}
                            >
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <UserRound className="w-4 h-4 text-blue-500" />
                                        <span>{answer.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CalendarClock className="w-4 h-4 text-gray-400" />
                                        <span>{new Date(answer.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 text-gray-800">
                                    <FileText className="w-5 h-5 text-green-600 mt-1" />
                                    <p className="text-base leading-relaxed">{answer.title}</p>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default AnswerList;