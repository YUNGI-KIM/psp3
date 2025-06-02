import React from 'react';
import Header from "../functions/Header";

function AnswerForQ() {
  const questions = [
    {
      name: "user",
      requestDate: "2025/04/12",
      title: "테스트 제목입니다",
      detail:
        "지금 이 문장은 자동으로 엔터가 쳐지는지 테스트를 하기 위해 있는 문장이니 수정을 엄금합니다.",
      status: 1
    },
    { name: "aaaa", requestDate: "2025/05/02", title: "receivec", status: 0 },
    { name: "bbbb", requestDate: "2025/04/30", title: "asdf", status: 0 },
    { name: "cccc", requestDate: "2025/05/01", title: "집에 보내주세요", status: 1 }
  ];


  const question = questions[1];
  const detail = questions[0].detail;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-8 py-10">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Answer Page</h1>


          <div className="space-y-2 mb-8">
            <p className="text-gray-600">
              <span className="font-medium">Request Date:</span> {question.requestDate}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Title:</span> {question.title}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">User Name:</span> {question.name}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Detail:</span> {detail}
            </p>
          </div>


          <form className="space-y-6">
            <div>
              <label htmlFor="answerTitle" className="block text-gray-700 font-medium mb-2">
              제목
              </label>
              <input
                type="text"
                id="answerTitle"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="답변 제목을 입력하세요"
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
