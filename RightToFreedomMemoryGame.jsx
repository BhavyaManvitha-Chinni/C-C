import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RightToFreedomEmojiGame = () => {
  const [draggedRight, setDraggedRight] = useState(null);
  const [matchedRights, setMatchedRights] = useState([]);
  const navigate = useNavigate();

  const rights = [
    { id: 1, name: 'Freedom of Speech', icon: '🗣️' },
    { id: 2, name: 'Protection from Arrest', icon: '🚔' },
    { id: 3, name: 'Freedom of Movement', icon: '🚶‍♂️' },
    { id: 4, name: 'Right to Assemble', icon: '👥' },
  ];

  const descriptions = [
    { id: 1, text: 'The right to speak your mind freely.' },
    { id: 2, text: 'Protection against unlawful detention.' },
    { id: 3, text: 'The freedom to move anywhere within the country.' },
    { id: 4, text: 'The right to gather peacefully in groups.' },
  ];

  // Handle dragging start
  const handleDragStart = (right) => {
    setDraggedRight(right);
  };

  // Handle drop event
  const handleDrop = (description) => {
    if (draggedRight && draggedRight.id === description.id) {
      setMatchedRights((prev) => [...prev, draggedRight.id]);
      setDraggedRight(null);
    }
  };

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Navigate to the next game after completion
  const handleCompletion = () => {
    navigate('/right-to-exploitation');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Right to Freedom Game</h1>
      <div style={styles.rightsContainer}>
        {rights.map((right) => (
          <div
            key={right.id}
            style={{
              ...styles.rightBox,
              opacity: matchedRights.includes(right.id) ? 0.5 : 1,
            }}
            draggable={!matchedRights.includes(right.id)}
            onDragStart={() => handleDragStart(right)}
          >
            {right.icon}
            <p style={styles.rightName}>{right.name}</p>
          </div>
        ))}
      </div>
      <div style={styles.descriptionsContainer}>
        {descriptions.map((description) => (
          <div
            key={description.id}
            style={styles.descriptionBox}
            onDrop={() => handleDrop(description)}
            onDragOver={handleDragOver}
          >
            <p style={styles.descriptionText}>{description.text}</p>
            {matchedRights.includes(description.id) && (
              <span style={styles.matchedIcon}>
                {rights.find((right) => right.id === description.id).icon}
              </span>
            )}
          </div>
        ))}
      </div>
      {matchedRights.length === rights.length && (
        <div style={styles.congratulationsBox}>
          <h2 style={styles.congratulationsText}>Congratulations! You've matched all rights correctly!</h2>
          <button style={styles.nextButton} onClick={handleCompletion}>
            Next: Right to Exploitation
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    color: '#008080',
    marginBottom: '20px',
  },
  rightsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '30px',
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    cursor: 'grab',
    backgroundColor: '#e6e6fa',
    width: '120px',
    height: '120px',
  },
  rightName: {
    marginTop: '10px',
    fontSize: '1rem',
  },
  descriptionsContainer: {
    display: 'grid', // Changed from flex to grid
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
    gridGap: '20px', // Gap between the boxes
    marginBottom: '30px',
  },
  descriptionBox: {
    width: '300px', // Adjusted width for consistency in a grid
    minHeight: '60px', // Adjusted height for better display
    border: '2px dashed #aaa',
    borderRadius: '10px',
    padding: '10px',
    backgroundColor: '#fafafa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionText: {
    fontSize: '1.2rem',
    color: '#555',
  },
  matchedIcon: {
    fontSize: '1.5rem',
  },
  congratulationsBox: {
    marginTop: '20px',
    backgroundColor: '#32CD32',
    padding: '15px',
    borderRadius: '10px',
  },
  congratulationsText: {
    color: '#fff',
    fontSize: '1.5rem',
  },
  nextButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#008080',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default RightToFreedomEmojiGame;
