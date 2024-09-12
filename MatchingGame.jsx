import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MatchingGame = () => {
  const navigate = useNavigate();

  // Pairs for the matching game
  const pairs = [
    { id: 1, item1: 'Sovereign', item2: 'Independent' },
    { id: 2, item1: 'Socialist', item2: 'Equality of wealth' },
    { id: 3, item1: 'Secular', item2: 'No state religion' },
    { id: 4, item1: 'Democratic', item2: 'People’s rule' },
    { id: 5, item1: 'Republic', item2: 'Head of State is elected' },
  ];

  // State to track matched pairs and selected items
  const [matched, setMatched] = useState([]);
  const [selected, setSelected] = useState({});
  const [message, setMessage] = useState('');

  // Function to handle item selection
  const handleSelect = (item, side) => {
    const newSelected = { ...selected, [side]: item };

    // Check if both sides are selected
    if (newSelected.left && newSelected.right) {
      const pair = pairs.find(
        (p) =>
          (p.item1 === newSelected.left && p.item2 === newSelected.right) ||
          (p.item1 === newSelected.right && p.item2 === newSelected.left)
      );

      // Check for a match
      if (pair) {
        setMatched((prev) => [...prev, pair.id]);
        setMessage('Matched!');
      } else {
        setMessage('Try again!');
      }

      setSelected({});
    } else {
      setSelected(newSelected);
    }
  };

  // Check if all pairs are matched to proceed to the next level
  const handleComplete = () => {
    if (matched.length >= 4) {
      // If 75% or more matched
      navigate('/fundamental-rights-youth');
    } else {
      setMessage('Complete at least 75% to proceed!');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Match the Preamble Terms</h1>
      <div style={styles.gameContainer}>
        <div style={styles.column}>
          {pairs.map((pair) => (
            <div
              key={pair.id}
              style={{
                ...styles.item,
                ...(matched.includes(pair.id) ? styles.matched : {}),
              }}
              onClick={() => handleSelect(pair.item1, 'left')}
            >
              {pair.item1}
            </div>
          ))}
        </div>
        <div style={styles.column}>
          {pairs.map((pair) => (
            <div
              key={pair.id}
              style={{
                ...styles.item,
                ...(matched.includes(pair.id) ? styles.matched : {}),
              }}
              onClick={() => handleSelect(pair.item2, 'right')}
            >
              {pair.item2}
            </div>
          ))}
        </div>
      </div>

      <p style={styles.message}>{message}</p>
      <button style={styles.completeButton} onClick={handleComplete}>
        Complete Game
      </button>

      {/* Animation keyframes defined here */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(to right, #e96443, #904e95)', // Background gradient
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    animation: 'fadeIn 2s ease', // Using animation here
  },
  gameContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 20px',
  },
  item: {
    padding: '15px 30px',
    marginBottom: '15px',
    backgroundColor: '#f4a261',
    cursor: 'pointer',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  matched: {
    backgroundColor: '#2a9d8f',
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
  },
  message: {
    fontSize: '1.5rem',
    marginTop: '20px',
    textShadow: '1px 1px 6px rgba(0, 0, 0, 0.4)',
  },
  completeButton: {
    padding: '10px 30px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    backgroundColor: '#e76f51',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    animation: 'pulse 2s infinite', // Using animation here
  },
};

export default MatchingGame;
