// src/TrueFalseQuiz.js
import React, { useState } from "react";
import './TrueFalseQuiz.css';

function TrueFalseQuiz() {
  const [result, setResult] = useState("");

  const statement = {
    text: "La Juventus est le club le plus titré d'Italie.",
    correctAnswer: true,
  };

  const checkAnswer = (userAnswer) => {
    if (userAnswer === statement.correctAnswer) {
      setResult("Correct ! Bien joué !");
    } else {
      setResult("Incorrect. Essayez encore !");
    }
  };

  return (
    <div>
      <h1>Exercice Vrai/Faux</h1>
      <p>{statement.text}</p>
      <button onClick={() => checkAnswer(true)}>Vrai</button>
      <button onClick={() => checkAnswer(false)}>Faux</button>
      <p>{result}</p>
    </div>
  );
}

export default TrueFalseQuiz;
