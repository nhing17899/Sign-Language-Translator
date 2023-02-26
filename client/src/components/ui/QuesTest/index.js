import React from "react";
import { useState, useEffect } from "react";
import "./QuesTest.css";

const axios = require("axios").default;

export const ImgToText = (props) => {
    const titleTest = "Topic Test : Animals";

    const { quizType, question, answer } = props; 
    // quizType: "image to text"

    return (
        <li className="imgToText">
            <div className="ques">
                <ul className="quesImgList">
                    {question.map(ques => <li className="quesImgItem">
                            <img className="quesImg" src={ques} alt={ques} />
                        </li>)}
                </ul>
            </div>
        </li>
    );
};