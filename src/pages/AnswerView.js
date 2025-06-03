import React, { useEffect, useState } from "react";
import Header from "../functions/Header";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
    UserRound,
    UserCheck,
    CalendarClock,
    MailOpen,
    FileText,
    MessageSquareQuote,
} from "lucide-react";

function AnswerView() {
    const { id } = useParams();
    const [comment, setComment] = useState(null);
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setNotFound(false);
            try {
                const commentRes = await fetch(`https://clos21.kr/api/articles/comments/${id}`, { credentials: "include" });
                if (!commentRes.ok) {
                    setNotFound(true);
                    setLoading(false);
                    return;
                }
                const commentData = await commentRes.json();
                setComment(commentData);

                const articleRes = await fetch(`https://clos21.kr/api/articles/${commentData.articleId}`, { credentials: "include" });
                if (!articleRes.ok) {
                    setNotFound(true);
                    setLoading(false);
                    return;
                }
                const articleData = await articleRes.json();
                setArticle(articleData);
                setLoading(false);
            } catch (error) {
                setNotFound(true);
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen font-sans">
                <Header />
                <div className="px-4 py-20 text-center text-gray-600">Loading...</div>
            </div>
        );
    }

    if (notFound || !comment || !article) {
        return (
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen font-sans">
                <Header />
                <div className="px-4 py-20 text-center text-red-600">Content not found.</div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen font-sans">
            <Header />
            <div className="px-4 py-20">
                <motion.div
                    className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 space-y-10 border border-gray-200"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* 메일 헤더 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-600 border-b pb-6">
                        <div className="flex items-center gap-2">
                            <UserRound className="w-4 h-4 text-blue-500" />
                            <span>
                                <strong>From:</strong> {comment.name} &lt;{comment.email}&gt;
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <UserCheck className="w-4 h-4 text-green-600" />
                            <span>
                                <strong>To:</strong> {article.name} &lt;{article.email}&gt;
                            </span>
                        </div>
                        <div className="flex items-center gap-2 col-span-full">
                            <CalendarClock className="w-4 h-4 text-yellow-600" />
                            <span>
                                <strong>Date:</strong>{" "}
                                {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : ""}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 col-span-full">
                            <MailOpen className="w-4 h-4 text-purple-600" />
                            <strong>Subject:</strong>
                            <span className="text-blue-700 ml-1">RE: {article.title}</span>
                        </div>
                    </div>

                    {/* 답변 본문 */}
                    <motion.div
                        className="text-gray-800 leading-relaxed text-base space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                            <FileText className="w-4 h-4" />
                            <span>Reply Message</span>
                        </div>

                        <p>Hi there,</p>
                        <p>
                            Thank you for reaching out. Here's the detailed answer to your question:
                        </p>
                        <p className="whitespace-pre-wrap">{comment.comment}</p>
                        <p>Best regards,<br />{comment.name}</p>
                    </motion.div>

                    {/* 질문 인용 */}
                    <motion.div
                        className="bg-gray-50 border-l-4 border-blue-300 pl-6 pr-4 py-4 text-gray-600 text-sm italic rounded-md shadow-inner space-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-2 text-blue-500 font-semibold">
                            <MessageSquareQuote className="w-4 h-4" />
                            <span>Quoted Question</span>
                        </div>
                        <p>
                            <strong>
                                On {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : ""}, {article.name} wrote:
                            </strong>
                        </p>
                        <p className="font-medium text-gray-700">QUESTION TITLE: {article.title}</p>
                        <p className="whitespace-pre-wrap">{article.content}</p>
                    </motion.div>

                    {/* Footer with Reply Icon */}
                    <div className="flex items-center justify-end text-sm text-gray-500 pt-4 border-t mt-6">
                        <span>Replied via AnswerView System</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default AnswerView;