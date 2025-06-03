import React from "react";
import Header from "../functions/Header";
import { motion } from "framer-motion";
import {
    UserRound,
    CalendarClock,
    FileText,
} from "lucide-react";

const dummyAnswers = [
    {
        id: 1,
        author: "Jane Doe",
        date: "June 4, 2025",
        content: "This is the first answer. It provides helpful information.",
    },
    {
        id: 2,
        author: "Alex Smith",
        date: "June 5, 2025",
        content: "Here's another perspective on the question with more detail.",
    },
];

function AnswerList() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">All Answers</h2>

                <div className="space-y-6">
                    {dummyAnswers.map((answer, index) => (
                        <motion.div
                            key={answer.id}
                            className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <UserRound className="w-4 h-4 text-blue-500" />
                                    <span>{answer.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarClock className="w-4 h-4 text-gray-400" />
                                    <span>{answer.date}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 text-gray-800">
                                <FileText className="w-5 h-5 text-green-600 mt-1" />
                                <p className="text-base leading-relaxed">{answer.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AnswerList;