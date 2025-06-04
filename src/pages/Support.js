import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../functions/Header";
import AnswerList from "./AnswerList";

function Support() {
    const navigate = useNavigate();

    // Handle navigation when the button is clicked
    const handleQuestionNavigation = () => {
        navigate("/Question"); // Change '/question' to the actual route where users can ask their questions
    };

    return (
        <>
            <Header />
            <AnswerList />

            {/* Button for navigating to the 1:1 question page */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={handleQuestionNavigation}
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    1대1 질문 하러가기
                </button>
            </div>
        </>
    );
}

export default Support;