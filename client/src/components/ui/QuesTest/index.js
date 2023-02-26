import React from "react";
import { useState, useEffect } from "react";
import "./QuesTest.css";

const ImgToText = (props) => {
    const { quizType, question, answer } = props.quiz;
    const { category } = props.category;

    const [answerInput, setAnswerInput] = useState("");
    const handleInputChange = (event) => {
        setAnswerInput(event.target.value);
    };

    const [questionDailyConv, setQuestionDailyConv] = useState([]);
    const [isDailyConv, setDailyConvo] = useState(false);

    for (let quesImg in question) {
        const quesArr = quesImg.split(" ");
        console.log(quesImg);
        if (quesArr.length > 1) {
            setDailyConvo(true);
            setQuestionDailyConv(questionDailyConv => [
                ...questionDailyConv,
                quesArr[1]
            ]
        )}
    }
    // question.map((quesImg) => {
    //     const quesArr = quesImg.split(" ");
    //     if (quesArr.length > 1) {
    //         setDailyConvo(true);
    //         setQuestionDailyConv(questionDailyConv => [
    //             ...questionDailyConv,
    //             quesArr[1]
    //         ]
    //     )}});


    return (
        <div className="imgToText">
            <div className="ques">
                <div className="quesSentence">
                    Type the correct answer for the sign
                </div>
                <div className="quesImgList">
                    {isDailyConv && questionDailyConv.map(ques => <div className="quesImgItem">
                        <img className="quesImg" src={ques} alt={ques} />
                    </div>)}

                    {!isDailyConv && question.map(ques => <div className="quesImgItem">
                        <img className="quesImg" src={ques} alt={ques} />
                    </div>)}
                </div>
                <div className="quesAnswerText">
                    <input type="text" value={answerInput} onChange={handleInputChange} placeholder='Answer here' />
                </div>
            </div>
        </div>
    );
};

export const TextToImg = (props) => {
    const { quizType, question, answer } = props.quiz;
    const { category } = props.category;

    return (
        <div className="textToImg">
            <div className="ques">
                <div className="quesSentence">
                    Choose the correct answer for the text
                </div>
                <div className="quesImgList">

                </div>
            </div>
        </div>
    );
};

export default ImgToText;