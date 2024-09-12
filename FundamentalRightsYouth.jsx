import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FundamentalRightsYouth = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const navigate = useNavigate();

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleStartGame = () => {
    navigate('/matching-game');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fundamental Rights</h1>
      <p style={styles.instruction}>Click on an article to learn more.</p>
      <div style={styles.articlesContainer}>
        <button style={styles.articleButton} onClick={() => handleArticleClick(1)}>Article 12</button>
        <button style={styles.articleButton} onClick={() => handleArticleClick(2)}>Article 13</button>
        {/* Add more buttons as needed */}
      </div>
      {selectedArticle && (
        <div style={styles.articleDetail}>
          <h2 style={styles.articleTitle}>Article {selectedArticle}</h2>
          <p style={styles.articleText}>
            {/* Add detailed explanation for each article here */}
            This is a detailed explanation of Article {selectedArticle}.
          </p>
        </div>
      )}
      <button
        style={styles.startButton}
        onClick={handleStartGame}
      >
        Start Matching Game
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(to bottom right, #ffffff, #f0f8ff)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#1a1a1a',
  },
  instruction: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '20px',
  },
  articlesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  articleButton: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: '#3498db',
    cursor: 'pointer',
    margin: '5px',
    transition: 'background-color 0.3s ease',
  },
  articleButtonHover: {
    backgroundColor: '#2980b9',
  },
  articleDetail: {
    background: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '10px',
    padding: '20px',
    width: '80%',
    maxWidth: '800px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px',
  },
  articleTitle: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#000',
  },
  articleText: {
    fontSize: '1rem',
    color: '#333',
  },
  startButton: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: '#e76f51',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default FundamentalRightsYouth;
