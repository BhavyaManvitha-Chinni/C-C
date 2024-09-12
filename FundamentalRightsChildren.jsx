import React from 'react';
import { useNavigate } from 'react-router-dom';

const FundamentalRightsChildren = () => {
  const navigate = useNavigate();

  // Function to navigate to RightToEquality
  const handleStartClick = () => {
    navigate('/right-to-equality');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fundamental Rights for Children</h1>
      <div style={styles.categoriesContainer}>
        {/* Disabled buttons */}
        <button style={styles.disabledButton} disabled>Right to Equality</button>
        <button style={styles.disabledButton} disabled>Right to Freedom</button>
        <button style={styles.disabledButton} disabled>Right against Exploitation</button>
        <button style={styles.disabledButton} disabled>Right to Freedom of Religion</button>
        <button style={styles.disabledButton} disabled>Cultural and Educational Rights</button>
        <button style={styles.disabledButton} disabled>Right to Constitutional Remedies</button>
      </div>
      {/* "Let's Start" button */}
      <button style={styles.startButton} onClick={handleStartClick}>Let's Start</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(to bottom right, #f0f8ff, #e0e7ff)',
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
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  disabledButton: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: '#3498db',
    cursor: 'not-allowed', // Indicate that the button is disabled
    margin: '10px',
    opacity: '0.6', // Visual cue that the button is disabled
  },
  startButton: {
    fontSize: '1.5rem',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    backgroundColor: '#e67e22', // Different color for the "Let's Start" button
    cursor: 'pointer',
    marginTop: '30px',
    transition: 'background-color 0.3s ease',
  },
};

export default FundamentalRightsChildren;
