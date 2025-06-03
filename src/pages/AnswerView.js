import React, { useEffect, useState } from "react";
import Header from "../functions/Header";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, User, Calendar, Tag, MessageSquare } from "lucide-react";

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
            <div className="bg-gray-100 min-h-screen font-sans">
                <Header />
                <div className="px-4 py-20 text-center text-gray-600">Loading...</div>
            </div>
        );
    }

    if (notFound || !comment || !article) {
        return (
            <div className="bg-gray-100 min-h-screen font-sans">
                <Header />
                <div className="px-4 py-20 text-center text-red-600">Content not found.</div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <Header />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="px-6 py-16 max-w-4xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="bg-white rounded-lg shadow-lg p-8 space-y-10"
                >
                    {/* Email Header */}
                    <div className="border-b border-gray-200 pb-6 flex flex-col space-y-3 text-gray-700">
                        <div className="flex items-center space-x-2">
                            <User className="w-5 h-5 text-indigo-600" />
                            <span className="font-semibold">From:</span>
                            <span>{article.name} &lt;{article.email}&gt;</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <User className="w-5 h-5 text-green-600" />
                            <span className="font-semibold">To:</span>
                            <span>{comment.name} &lt;{comment.email}&gt;</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5 text-gray-500" />
                            <span className="font-semibold">Date:</span>
                            <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Tag className="w-5 h-5 text-purple-600" />
                            <span className="font-semibold">Subject:</span>
                            <span>RE: {article.title}</span>
                        </div>
                    </div>

                    {/* Answer Body */}
                    <div className="text-gray-800 leading-relaxed space-y-4">
                        <p>Hello,</p>
                        <p>Thank you for your question. Here is my response:</p>
                        <p className="whitespace-pre-wrap">{comment.comment}</p>
                        <p>Best regards,<br />{comment.name}</p>
                    </div>

                    {/* Quoted Question Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="border-l-4 border-gray-300 pl-5 py-4 bg-gray-50 text-gray-600 italic text-sm"
                    >
                        <p className="flex items-center space-x-2 font-semibold mb-2">
                            <MessageSquare className="w-4 h-4" />
                            <span>
                                On {new Date(comment.createdAt).toLocaleDateString()}, {comment.name} wrote:
                            </span>
                        </p>
                        <p className="font-semibold">{article.title}:</p>
                        <p className="whitespace-pre-wrap">{article.content}</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default AnswerView;