import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const RightToEqualityGame = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const questions = [
    {
      question: "What does 'Equality Before Law' mean?",
      options: [
        "Everyone has to follow different rules.",
        "Everyone is equal in the eyes of the law.",
        "Only adults have to follow rules.",
      ],
      answer: "Everyone is equal in the eyes of the law.",
    },
    {
      question: "Can someone be treated differently because of their religion?",
      options: ["Yes", "No", "Sometimes"],
      answer: "No",
    },
    {
      question: "What does 'No Untouchability' mean?",
      options: [
        "You can't touch anyone.",
        "No one should be treated unfairly because of their background.",
        "Only kings and queens can use this rule.",
      ],
      answer: "No one should be treated unfairly because of their background.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  // Function to navigate to RightToFreedom if score is 75% or more
  const handleNavigateToNextPage = () => {
    if ((score / questions.length) >= 0.75) {
      navigate('/right-to-freedom'); // Navigate to the RightToFreedom page
    } else {
      handlePlayAgain(); // Restart the game if the score is less than 75%
    }
  };

  return (
    <div style={styles.container}>
      {showScore ? (
        <div style={styles.scoreSection}>
          <h2>You scored {score} out of {questions.length}!</h2>
          {score / questions.length >= 0.75 ? (
            <p style={styles.playAgain} onClick={handleNavigateToNextPage}>
              Proceed to Right to Freedom
            </p>
          ) : (
            <p style={styles.playAgain} onClick={handlePlayAgain}>
              Play Again
            </p>
          )}
        </div>
      ) : (
        <div style={styles.questionSection}>
          <h2 style={styles.questionTitle}>{questions[currentQuestion].question}</h2>
          <div style={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} style={styles.optionButton} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: '#F5FFFA',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Comic Sans MS, sans-serif',
  },
  questionSection: {
    width: '80%',
    textAlign: 'center',
  },
  questionTitle: {
    fontSize: '2rem',
    color: '#008080',
    marginBottom: '20px',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: '#FFB6C1',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    margin: '10px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  scoreSection: {
    textAlign: 'center',
    color: 'black',
  },
  playAgain: {
    fontSize: '1.5rem',
    color: '#32CD32',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default RightToEqualityGame;
