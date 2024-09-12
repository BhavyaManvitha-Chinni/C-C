import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RightToFreedom = () => {
  const [articlesRead, setArticlesRead] = useState(false);
  const navigate = useNavigate();

  // Function to handle the navigation to the game
  const handleProceedToGame = () => {
    navigate('/right-to-freedom-game');
  };

  // Function to mark the articles as read
  const handleArticlesRead = () => {
    setArticlesRead(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Right to Freedom</h1>
      <div style={styles.gridContainer}>
        <div style={styles.articleBox}>
          <h2 style={styles.articleTitle}>Article 19: Freedom of Speech</h2>
          <p style={styles.articleContent}>
            You can express your thoughts and opinions freely, but responsibly.
          </p>
        </div>

        <div style={styles.articleBox}>
          <h2 style={styles.articleTitle}>Article 20: Protection from Conviction</h2>
          <p style={styles.articleContent}>
            You cannot be punished for actions that were not crimes at the time.
          </p>
        </div>

        <div style={styles.articleBox}>
          <h2 style={styles.articleTitle}>Article 21: Right to Life</h2>
          <p style={styles.articleContent}>
            Everyone has the right to live with dignity and personal freedom.
          </p>
        </div>

        <div style={styles.articleBox}>
          <h2 style={styles.articleTitle}>Article 22: Protection from Arrest</h2>
          <p style={styles.articleContent}>
            If arrested, you have rights to a lawyer and must be presented to a judge.
          </p>
        </div>
      </div>

      <button style={styles.readButton} onClick={handleArticlesRead}>
        I have read and understood the articles
      </button>

      {articlesRead && (
        <button style={styles.proceedButton} onClick={handleProceedToGame}>
          Proceed to Game
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#FFEFD5',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#FF4500',
    marginBottom: '10px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Two columns
    gridTemplateRows: '1fr 1fr', // Two rows
    gap: '10px',
    width: '80%',
    height: '50vh', // Fixed height to fit within the screen
  },
  articleBox: {
    backgroundColor: '#FFF8DC',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  articleTitle: {
    fontSize: '1.5rem',
    color: '#CD5C5C',
    marginBottom: '5px',
  },
  articleContent: {
    fontSize: '1rem',
    color: '#2F4F4F',
  },
  readButton: {
    backgroundColor: '#32CD32',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginTop: '15px',
  },
  proceedButton: {
    backgroundColor: '#FF4500',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginTop: '15px',
  },
};

export default RightToFreedom;
