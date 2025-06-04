import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../functions/Header";
import AnswerList from "./AnswerList";

function Support() {
    const navigate = useNavigate();


    return (
        <>
            <Header />
            <AnswerList />


        </>
    );
}

export default Support;