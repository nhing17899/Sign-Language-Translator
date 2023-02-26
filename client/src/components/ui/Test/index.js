/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import ImgToText, { TextToImg } from "../QuesTest/index";
import "./Test.css";

import axios from "axios";

const Test = () => {
  const titleTest = "Test : 1";

  const [quizzes, setQuizzes] = useState([]);
  const [isQuizzesFetched, setIsQuizzesFetched] = useState(false);

  let category = 'daily conversation';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("/api/v1/quiz/category", {
          category: 'daily conversation',
        });
        setQuizzes(response.data.data);
        setIsQuizzesFetched(true);
      } catch (error) {
        console.log(error);
      }
    }

    if (!isQuizzesFetched) {
      fetchData();
    }
  }, [isQuizzesFetched]);

  return (
    <div className="test">
      <div className="test-title">{titleTest}</div>
      <div className="quiz-container">
        {quizzes.map(quiz => (
          (quiz.quizType === 'image to text' && <ImgToText quiz={quiz} />)))}
      </div>
    </div>
  );
};

export default Test;
