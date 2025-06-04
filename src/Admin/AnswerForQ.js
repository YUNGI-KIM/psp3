import React, { useEffect, useState } from 'react';
import Header from "../functions/Header";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function AnswerForQ() {
  const { key } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answerTitle, setAnswerTitle] = useState('');
  const [answerContent, setAnswerContent] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (key) {
      fetch(`https://clos21.kr/api/articles/${key}`, { credentials: "include" })
        .then(res => res.json())
        .then(data => {
          setArticle(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [key]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = `${answerTitle}\n${answerContent}`;
    try {
      const res = await fetch(`https://clos21.kr/api/articles/${key}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: answerTitle,
          comment: answerContent
        }),
        credentials: "include",
      });
      if (res.ok) {
        setAnswerTitle('');
        setAnswerContent('');
        await fetch(`https://clos21.kr/api/articles/${key}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            title: article.title,
            content: article.content,
            status: 1
          }),
        });
        navigate('/adminMain');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 sm:px-8 py-10">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 sm:px-8 py-10">
          <p>Article not found.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-8 py-10">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Answer Page</h1>

          <div className="space-y-2 mb-8">
            <p className="text-gray-600">
              <span className="font-medium">Request Date:</span> {article.createdAt}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Title:</span> {article.title}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">User Name:</span> {article.name}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Detail:</span> {article.content}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="answerTitle" className="block text-gray-700 font-medium mb-2">
                제목
              </label>
              <input
                type="text"
                id="answerTitle"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="답변 제목을 입력하세요"
                value={answerTitle}
                onChange={(e) => setAnswerTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
                내용
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="답변 내용을 입력하세요"
                value={answerContent}
                onChange={(e) => setAnswerContent(e.target.value)}
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AnswerForQ;
