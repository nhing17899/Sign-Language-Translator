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

  useEffect(() => {
    const some = (quesImg) => {
        if (quesImg.split(" ").length > 1) {
            setDailyConvo(true);
            setQuestionDailyConv((questionDailyConv) => [
              ...questionDailyConv,
              quesImg.split(" ")[1],
            ]);
            setDailyConvo(false);
          }
    }
    for (let quesImg of question) {
        some(quesImg);
    }
  }, [question])

  return (
    <div className="imgToText">
      <div className="ques">
        <div className="quesSentence">Type the correct answer for the sign</div>
        <div className="quesImgList">
          {isDailyConv &&
            questionDailyConv.map((ques) => (
              <div className="quesImgItem">
                <img className="quesImg" src={ques} alt={ques} />
              </div>
            ))}

          {!isDailyConv &&
            question.map((ques) => (
              <div className="quesImgItem">
                <img className="quesImg" src={ques} alt={ques} />
              </div>
            ))}
        </div>
        <div className="quesAnswerText">
          <input
            type="text"
            value={answerInput}
            onChange={handleInputChange}
            placeholder="Answer here"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgToText;
