import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizGame = () => {
  const navigate = useNavigate();

  // Sample quiz questions
  const quizData = [
    {
      question: "What is the Preamble of the Constitution?",
      options: [
        "An introduction to the Constitution's core values",
        "A set of laws",
        "A list of fundamental rights",
        "An amendment",
      ],
      answer: "An introduction to the Constitution's core values",
    },
    {
      question: "Which of these is NOT a part of the Preamble?",
      options: ["Justice", "Liberty", "Inequality", "Fraternity"],
      answer: "Inequality",
    },
    {
      question: "The Preamble secures liberty of thought, expression, belief, faith, and...",
      options: ["Speech", "Worship", "Work", "Assembly"],
      answer: "Worship",
    },
    {
      question: "What is meant by 'Fraternity' in the Preamble?",
      options: [
        "Brotherhood and Unity",
        "Equality of Status",
        "Economic Justice",
        "Political Rights",
      ],
      answer: "Brotherhood and Unity",
    },
    {
      question: "When was the Constitution of India adopted?",
      options: [
        "15th August 1947",
        "26th January 1950",
        "26th November 1949",
        "30th January 1948",
      ],
      answer: "26th November 1949",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    setTimeout(() => {
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption('');
      } else {
        setShowResult(true);
      }
    }, 1000); // Delay for animation
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption('');
    setShowResult(false);
  };

  const handleProceed = () => {
    // Navigate to the next level (e.g., Fundamental Rights)
    navigate('/fundamental-rights-citizen');
  };

  return (
    <div>
      <style>
        {`
          .quiz-container {
            width: 50%;
            margin: auto;
            text-align: center;
            background: linear-gradient(145deg, #f0f0f0, #e6e6e6);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            border-radius: 15px;
            padding: 30px;
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .question {
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 20px;
            animation: slideIn 0.6s ease-in-out;
          }

          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .option {
            display: block;
            background: #fff;
            padding: 12px;
            margin: 10px 0;
            border: 2px solid #007bff;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
          }

          .option:hover {
            background-color: #007bff;
            color: #fff;
            transform: scale(1.05);
          }

          .selected {
            background-color: #007bff;
            color: #fff;
          }

          .result-container {
            margin-top: 20px;
          }

          .result-container h2 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
          }

          .button {
            padding: 10px 20px;
            font-size: 1rem;
            margin-top: 20px;
            cursor: pointer;
            border: none;
            border-radius: 8px;
            background-color: #007bff;
            color: #fff;
            transition: background-color 0.3s;
          }

          .button:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <div className="quiz-container">
        {showResult ? (
          <div className="result-container">
            <h2>Your Score: {score} out of {quizData.length}</h2>
            <button className="button" onClick={handleRestart}>Restart Quiz</button>
            {score >= 4 && (
              <button className="button" onClick={handleProceed}>
                Proceed to Next Level
              </button>
            )}
          </div>
        ) : (
          <>
            <h2 className="question">{quizData[currentQuestion].question}</h2>
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleAnswerOptionClick(option)}
                disabled={selectedOption !== ''}
              >
                {option}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
