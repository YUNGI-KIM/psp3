import React from "react";
import Header from "../functions/Header";
import { motion } from "framer-motion";

function AnswerView() {
    return (
        <div className="bg-gray-100 min-h-screen">

            <Header />
            <div className="px-4 py-20">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Answer Section */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="w-full md:w-1/3 text-3xl font-bold text-blue-800 mb-4 md:mb-0">
                            ANSWER TITLE
                        </h2>
                        <div className="w-full md:w-2/3 text-gray-700 leading-relaxed">
                            <p>
                                This is where the answer content goes. You can elaborate on the
                                explanation or provide detailed information.
                            </p>
                        </div>
                    </motion.div>

                    {/* Question Section */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="w-full md:w-1/3 text-3xl font-bold text-green-800 mb-4 md:mb-0">
                            QUESTION TITLE
                        </h2>
                        <div className="w-full md:w-2/3 text-gray-700 leading-relaxed">
                            <p>
                                This is where the question content goes. You can describe the
                                question clearly for the user to understand.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default AnswerView;