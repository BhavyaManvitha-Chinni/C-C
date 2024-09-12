import React from "react";
import { useNavigate } from "react-router-dom";

const RightToEquality = () => {
  const navigate = useNavigate();

  // Function to navigate to the game page
  const startGame = () => {
    navigate("/right-to-equality-game");
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Right to Equality</h1>

      {/* Scrollable container for articles */}
      <div style={styles.articlesContainer}>
        <div style={styles.articleBox}>
          <h2 style={styles.articleTitle}>Article 14: Equality Before Law</h2>
          <p style={styles.originalStatement}>
            <strong>Original Statement:</strong> "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India."
          </p>
          <p style={styles.explanation}>
            <strong>Explanation:</strong> Everyone is equal in the eyes of the law! It means no one is special when it comes to following the rules. Whether you're a king or a kid, the same rules apply!
          </p>
        </div>

        <div style={styles.articleBox}>
          <h2 style={styles.articleTitle}>Article 15: No Discrimination</h2>
          <p style={styles.originalStatement}>
            <strong>Original Statement:</strong> "The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them."
          </p>
          <p style={styles.explanation}>
            <strong>Explanation:</strong> Nobody can be treated differently just because of who they are or where they come from! This means boys, girls, all religions, and everyone from any place are treated the same.
          </p>
        </div>

        <div style={styles.articleBox}>
          <h2 style={styles.articleTitle}>Article 16: Equal Opportunities</h2>
          <p style={styles.originalStatement}>
            <strong>Original Statement:</strong> "There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State."
          </p>
          <p style={styles.explanation}>
            <strong>Explanation:</strong> Everyone should have a fair chance to get a job they want. No favoritism—everyone gets a shot!
          </p>
        </div>

        <div style={styles.articleBox}>
          <h2 style={styles.articleTitle}>Article 17: No Untouchability!</h2>
          <p style={styles.originalStatement}>
            <strong>Original Statement:</strong> "Untouchability is abolished and its practice in any form is forbidden."
          </p>
          <p style={styles.explanation}>
            <strong>Explanation:</strong> This means treating someone as an "untouchable" is not allowed. Everyone is equally important and valuable!
          </p>
        </div>
      </div>

      {/* Button to start the game */}
      <button style={styles.startButton} onClick={startGame}>
        Start the Equality Game!
      </button>
    </div>
  );
};

// Internal styles with scrollable container styling
const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fff1b8',
    padding: '20px',
  },
  title: {
    fontSize: '3rem',
    color: '#ff6600',
    marginBottom: '20px',
  },
  articlesContainer: {
    width: '80%',
    maxHeight: '60vh', // Max height for the scrollable area
    overflowY: 'auto', // Enables vertical scroll
    backgroundColor: '#fff8dc',
    padding: '15px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  articleBox: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fffdde',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  articleTitle: {
    fontSize: '1.8rem',
    color: '#ff6347',
    marginBottom: '10px',
  },
  originalStatement: {
    color: '#556b2f',
    fontSize: '1.1rem',
    marginBottom: '5px',
  },
  explanation: {
    color: '#006400',
    fontSize: '1.1rem',
  },
  startButton: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
  startButtonHover: {
    backgroundColor: '#45a049',
  },
};

export default RightToEquality;
