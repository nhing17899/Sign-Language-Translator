import React from "react";
import { useState, useEffect } from "react";
import "./QuesTest.css";

const ImgToText = (props) => {
    const { quizType, question, answer } = props.quiz;

    const [answerInput, setAnswerInput] = useState("");
    const handleInputChange = (event) => {
        setAnswerInput(event.target.value);
    };

    return (
        <li className="imgToText">
            <div className="ques">
                <div className="quesSentence">
                    Type the correct answer for the sign
                </div>
                <ul className="quesImgList">
                    {question.map(ques => <li className="quesImgItem">
                        <img className="quesImg" src={ques} alt={ques} />
                    </li>)}
                </ul>
                <div className="quesAnswerText">
                    <input type="text" value={answerInput} onChange={handleInputChange} />
                </div>
            </div>
        </li>
    );
};

// const TextToImg = (props) => {
//     const { quizType, question, answer } = props;
//     // quizType: "image to text"

//     return (
//         <li className="textToImg">
//             <div className="ques">
//                 <div className="quesSentence">
//                     Choose the correct answer for the text
//                 </div>
//                 <ul className="quesImgList">
//                     {question.map(ques => <li className="quesImgItem">
//                         <img className="quesImg" src={ques} alt={ques} />
//                     </li>)}
//                 </ul>
//             </div>
//         </li>
//     );
// };

export default ImgToText;