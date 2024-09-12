import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const cardsData = [
  { id: 1, text: "Article 25: Freedom of Conscience", matchId: 5 },
  { id: 2, text: "Article 26: Freedom to Manage Religious Affairs", matchId: 6 },
  { id: 3, text: "Article 27: Freedom from Taxation", matchId: 7 },
  { id: 4, text: "Article 28: Freedom in Religious Education", matchId: 8 },
  { id: 5, text: "Right to believe in any religion or none", matchId: 1 },
  { id: 6, text: "Religious groups can manage their own affairs", matchId: 2 },
  { id: 7, text: "No compulsory religious taxes by the government", matchId: 3 },
  { id: 8, text: "Freedom to attend or not attend religious instructions", matchId: 4 }
];

const RightToFreedomMemoryMatch = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Shuffle cards only once when the component mounts
    const shuffledCards = [...cardsData].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []); // Correct dependency array ensures this runs only once on mount

  const handleCardClick = (id) => {
    if (flippedCards.length < 2 && !flippedCards.includes(id) && !matchedCards.includes(id)) {
      setFlippedCards([...flippedCards, id]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCardId, secondCardId] = flippedCards;
      const firstCard = cards.find(card => card.id === firstCardId);
      const secondCard = cards.find(card => card.id === secondCardId);

      if (firstCard.matchId === secondCard.id) {
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, firstCardId, secondCardId]);
      }

      setTimeout(() => setFlippedCards([]), 1000); // Reset flipped cards after a short delay
    }
  }, [flippedCards, cards]);

  const handleResetGame = () => {
    const shuffledCards = [...cardsData].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  const handleNavigateToNext = () => {
    navigate('/cultural-and-educational-rights'); // Correct absolute route path
  };

  // Debugging logs to check the state
  useEffect(() => {
    console.log('Matched Cards:', matchedCards);
    console.log('Cards Data Length:', cardsData.length);
  }, [matchedCards]);

  // Internal CSS for styling
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f0f8ff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Comic Sans MS, sans-serif'
    },
    title: {
      fontSize: '2.5rem',
      color: '#4b0082',
      marginBottom: '20px'
    },
    instructions: {
      fontSize: '1.2rem',
      marginBottom: '20px',
      color: 'black'
    },
    board: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 150px)',
      gridGap: '20px',
      margin: '20px 0'
    },
    card: {
      width: '150px',
      height: '150px',
      backgroundColor: '#eee',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      color: '#333',
      border: '2px solid #ddd',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    },
    cardBack: {
      backgroundColor: '#4b0082',
      color: '#fff',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      borderRadius: '8px'
    },
    congratulationsMessage: {
      fontSize: '1.5rem',
      color: 'green',
      marginTop: '20px',
      textAlign: 'center'
    },
    resetButton: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1.2rem',
      color: 'black',
      backgroundColor: '#ff6347',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    nextButton: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1.2rem',
      color: 'white',
      backgroundColor: '#4CAF50', // Green color
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Right to Freedom of Religion Memory Match Game</h1>
      <p style={styles.instructions}>Match each article with its correct explanation!</p>
      <div style={styles.board}>
        {cards.map(card => (
          <div
            key={card.id}
            style={styles.card}
            onClick={() => handleCardClick(card.id)}
          >
            {flippedCards.includes(card.id) || matchedCards.includes(card.id) ? (
              <div>{card.text}</div>
            ) : (
              <div style={styles.cardBack}>?</div>
            )}
          </div>
        ))}
      </div>
      {/* Check if all the cards have been matched */}
      {matchedCards.length === cardsData.length && (
        <div style={styles.congratulationsMessage}>
          Congratulations! You've matched all the cards!
          <div style={styles.buttonGroup}>
            <button onClick={handleNavigateToNext} style={styles.nextButton}>Proceed to Cultural and Educational Rights</button>
            <button onClick={handleResetGame} style={styles.resetButton}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightToFreedomMemoryMatch;
