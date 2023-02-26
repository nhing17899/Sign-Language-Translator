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
        <div className="imgToText">
            <div className="ques">
                <div className="quesSentence">
                    Type the correct answer for the sign
                </div>
                <div className="quesImgList">
                    {question.map(ques => <div className="quesImgItem">
                        <img className="quesImg" src={ques} alt={ques} />
                    </div>)}
                </div>
                <div className="quesAnswerText">
                    <input type="text" value={answerInput} onChange={handleInputChange} placeholder='Answer here'/>
                </div>
            </div>
        </div>
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