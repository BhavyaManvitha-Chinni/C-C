import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const PreambleYouth = () => {
  const [isReadComplete, setIsReadComplete] = useState(false);
  const explanationRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (explanationRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = explanationRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        setIsReadComplete(true);
      }
    }
  };

  useEffect(() => {
    const ref = explanationRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleStartGame = () => {
    navigate('/matching-game');
  };

  return (
    <div style={styles.outerContainer}>
      <h1 style={styles.title}>The Preamble of India</h1>
      <div style={styles.container}>
        <div style={styles.preambleContainer}>
          <p style={styles.preambleText}>
            "We, the people of India, having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic and to secure to all its citizens: Justice, social, economic and political; Liberty of thought, expression, belief, faith and worship; Equality of status and of opportunity; And to promote among them all Fraternity assuring the dignity of the individual and the unity and integrity of the Nation; In our Constituent Assembly this 26th day of November 1949, do hereby adopt, enact and give to ourselves this Constitution."
          </p>
        </div>

        <h2 style={styles.subtitle}>Explanation</h2>
        <div style={styles.explanationContainer} ref={explanationRef}>
          <p style={styles.explanationText}>
            <strong>"We, the people of India"</strong><br />
            Example: Imagine a group of friends coming together to create a set of rules for a community project. This phrase is like all citizens of India agreeing to the principles of the Constitution together.
          </p>
          <p style={styles.explanationText}>
            <strong>"Having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic"</strong><br />
            Example: Think of it as deciding to make your community project open to everyone, where everyone has a say, and resources are shared fairly. India decided to be a country where every citizen has a voice (democratic), where the government is independent and not controlled by external powers (sovereign), promotes social welfare (socialist), and respects all religions equally (secular).
          </p>
          <p style={styles.explanationText}>
            <strong>"To secure to all its citizens: Justice, social, economic and political;"</strong><br />
            Example: Consider a university setting where policies ensure fairness in grading, provide scholarships to underprivileged students, and protect student rights. This is similar to the Constitution’s promise to ensure fairness and equal opportunities in various aspects of life for all citizens.
          </p>
          <p style={styles.explanationText}>
            <strong>"Liberty of thought, expression, belief, faith and worship;"</strong><br />
            Example: Just like your freedom to choose your major or express your opinions in discussions, the Constitution guarantees every citizen the freedom to think, speak, and practice their beliefs without fear of discrimination.
          </p>
          <p style={styles.explanationText}>
            <strong>"Equality of status and of opportunity;"</strong><br />
            Example: Imagine a job fair where all candidates, regardless of their background, have equal access to job opportunities and are judged purely on their skills. The Constitution aims to ensure that everyone has equal chances to succeed and is treated with equal respect.
          </p>
          <p style={styles.explanationText}>
            <strong>"And to promote among them all Fraternity assuring the dignity of the individual and the unity and integrity of the Nation;"</strong><br />
            Example: Think of a sports team where teamwork and respect among players are crucial for success. Similarly, the Constitution encourages people to work together, respect each other’s dignity, and stay united, contributing to a cohesive and strong nation.
          </p>
          <p style={styles.explanationText}>
            <strong>"In our Constituent Assembly this 26th day of November 1949, do hereby adopt, enact and give to ourselves this Constitution."</strong><br />
            Example: This is like a group of students formally approving a charter for their student organization. On November 26, 1949, India’s leaders formally accepted and put into practice these principles, making them the official rules for the country.
          </p>
        </div>

        <button
          style={{
            ...styles.startButton,
            backgroundColor: isReadComplete ? '#e76f51' : '#cccccc',
            cursor: isReadComplete ? 'pointer' : 'not-allowed',
          }}
          onClick={handleStartGame}
          disabled={!isReadComplete}
        >
          Start Matching Game
        </button>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    margin: '0',
    padding: '0',
    background: 'linear-gradient(to bottom right, #ffffff, #f0f8ff)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    overflowY: 'auto', // Allow scrolling for the entire page
  },
  container: {
    padding: '20px',
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    marginTop: '20px',
    color: '#1a1a1a',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  preambleContainer: {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    padding: '20px',
    width: '100%',
    maxWidth: '800px',
    marginBottom: '30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  preambleText: {
    fontSize: '1.2rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#000',
    textShadow: '2px 2px 4px rgba(255, 255, 255, 0.4)',
  },
  explanationContainer: {
    background: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '10px',
    padding: '20px',
    width: '100%',
    maxWidth: '800px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxHeight: '50vh',
    overflowY: 'auto',
    marginBottom: '20px',
  },
  explanationText: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '15px',
  },
  startButton: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
  },
};

export default PreambleYouth;
