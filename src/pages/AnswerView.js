import React, { useEffect, useState } from "react";
import Header from "../functions/Header";
import { useParams } from "react-router-dom";

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
                const commentRes = await fetch(`https://clos21.kr/api/comments/${id}`, { credentials: "include" });
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
            <div className="px-4 py-20">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-8">

                    {/* Email Header */}
                    <div className="border-b pb-4 text-sm text-gray-600">
                        <p><strong>From:</strong> {article.name} &lt;{article.email}&gt;</p>
                        <p><strong>To:</strong> {comment.name} &lt;{comment.email}&gt;</p>
                        <p><strong>Date:</strong> {new Date(comment.createdAt).toLocaleDateString()}</p>
                        <p><strong>Subject:</strong> RE: {comment.title}</p>
                    </div>

                    {/* Answer Body (as if it's your reply) */}
                    <div className="text-gray-800 leading-relaxed">
                        <p>
                            Hello, <br /><br />
                            Thank you for your question. Here is my response:
                        </p>

                        <p className="mt-4">
                            {comment.comment}
                        </p>

                        <p className="mt-6">Best regards,<br />{article.name}</p>
                    </div>

                    {/* Quoted Question Section */}
                    <div className="border-l-4 border-gray-300 pl-4 mt-8 text-gray-600 text-sm italic bg-gray-50 py-4">
                        <p><strong>On {new Date(comment.createdAt).toLocaleDateString()}, {comment.name} wrote:</strong></p>
                        <p className="mt-2">
                            {article.title}: <br />
                            {article.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnswerView;