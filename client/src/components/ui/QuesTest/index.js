import React from "react";
import { useState, useEffect } from "react";
import "./QuesTest.css";

const ImgToText = (props) => {
    const { quizType, question, answer } = props.quiz;

    const [answerInput, setAnswerInput] = useState("");
    const handleInputChange = (event) => {
        setAnswerInput(event.target.value);
    };

    const [questionDailyConv, setQuestionDailyConv] = useState([]);
    const [isDailyConv, setDailyConvo] = useState(false);

    for (let quesImg of question) {
        const quesArr = quesImg.split(" ");
        if (quesArr.length > 1) {
            setDailyConvo(true);
            setQuestionDailyConv(questionDailyConv => [
                ...questionDailyConv,
                quesArr[1]
            ])
            setDailyConvo(false);
            
        }
    }

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

export default ImgToText;