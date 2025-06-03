import React from "react";
import Header from "../functions/Header";
import { motion } from "framer-motion";

function AnswerView() {
    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <Header />
            <div className="px-4 py-20">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-8">

                    {/* Email Header */}
                    <div className="border-b pb-4 text-sm text-gray-600">
                        <p><strong>From:</strong> John Doe &lt;john@example.com&gt;</p>
                        <p><strong>To:</strong> You &lt;you@example.com&gt;</p>
                        <p><strong>Date:</strong> June 4, 2025</p>
                        <p><strong>Subject:</strong> RE: QUESTION TITLE</p>
                    </div>

                    {/* Answer Body (as if it's your reply) */}
                    <div className="text-gray-800 leading-relaxed">
                        <p>
                            Hello, <br /><br />
                            Thank you for your question. Here is my response:
                        </p>

                        <p className="mt-4">
                            This is where the <strong>answer content</strong> goes. You can elaborate on the
                            explanation or provide detailed information that addresses the original question.
                        </p>

                        <p className="mt-6">Best regards,<br />John</p>
                    </div>

                    {/* Quoted Question Section */}
                    <div className="border-l-4 border-gray-300 pl-4 mt-8 text-gray-600 text-sm italic bg-gray-50 py-4">
                        <p><strong>On June 4, 2025, You wrote:</strong></p>
                        <p className="mt-2">
                            QUESTION TITLE: <br />
                            This is where the question content goes. You can describe the
                            question clearly for the user to understand.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnswerView;