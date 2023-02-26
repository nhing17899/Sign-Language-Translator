import React from "react";
import { useState, useEffect } from "react";
import "./Test.css";

import axios from 'axios';


const Test = () => {
    const titleTest = "Test : 1";

    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        axios({
          method: 'post',
          url: '/api/v1/quiz/category',
          category: "family"
        })  
        .then(function (res) {
          // handle success
          setQuizzes(res.data);
          console.log(quizzes);
        })
        .catch(function (err) {
          // handle error
          console.log(err);
        })
    }, [quizzes]);

    return (
        <div>
            <div>{titleTest}</div>
        </div>
    );
};

export default Test;